import { useEffect, useRef, type CSSProperties } from 'react'
import { Mesh, Program, Renderer, Triangle } from 'ogl'
import './GradientBlinds.css'

type ColorTuple = [number, number, number]

type Uniform<T> = {
  value: T
}

type GradientBlindsUniforms = {
  iResolution: Uniform<[number, number, number]>
  iMouse: Uniform<[number, number]>
  iTime: Uniform<number>
  uAngle: Uniform<number>
  uNoise: Uniform<number>
  uBlindCount: Uniform<number>
  uSpotlightRadius: Uniform<number>
  uSpotlightSoftness: Uniform<number>
  uSpotlightOpacity: Uniform<number>
  uMirror: Uniform<number>
  uDistort: Uniform<number>
  uShineFlip: Uniform<number>
  uColor0: Uniform<ColorTuple>
  uColor1: Uniform<ColorTuple>
  uColor2: Uniform<ColorTuple>
  uColor3: Uniform<ColorTuple>
  uColor4: Uniform<ColorTuple>
  uColor5: Uniform<ColorTuple>
  uColor6: Uniform<ColorTuple>
  uColor7: Uniform<ColorTuple>
  uColorCount: Uniform<number>
}

export type GradientBlindsProps = {
  className?: string
  dpr?: number
  paused?: boolean
  gradientColors?: string[]
  angle?: number
  noise?: number
  blindCount?: number
  blindMinWidth?: number
  mouseDampening?: number
  mirrorGradient?: boolean
  spotlightRadius?: number
  spotlightSoftness?: number
  spotlightOpacity?: number
  distortAmount?: number
  shineDirection?: 'left' | 'right'
  mixBlendMode?: CSSProperties['mixBlendMode']
}

const MAX_COLORS = 8

const vertex = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const fragment = `
#ifdef GL_ES
precision mediump float;
#endif

uniform vec3 iResolution;
uniform vec2 iMouse;
uniform float iTime;
uniform float uAngle;
uniform float uNoise;
uniform float uBlindCount;
uniform float uSpotlightRadius;
uniform float uSpotlightSoftness;
uniform float uSpotlightOpacity;
uniform float uMirror;
uniform float uDistort;
uniform float uShineFlip;
uniform vec3 uColor0;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;
uniform vec3 uColor5;
uniform vec3 uColor6;
uniform vec3 uColor7;
uniform int uColorCount;

varying vec2 vUv;

float rand(vec2 co) {
  return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

vec2 rotate2D(vec2 p, float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c, -s, s, c) * p;
}

vec3 getGradientColor(float t) {
  float tt = clamp(t, 0.0, 1.0);
  int count = uColorCount;
  if (count < 2) count = 2;
  float scaled = tt * float(count - 1);
  float seg = floor(scaled);
  float f = fract(scaled);

  if (seg < 1.0) return mix(uColor0, uColor1, f);
  if (seg < 2.0 && count > 2) return mix(uColor1, uColor2, f);
  if (seg < 3.0 && count > 3) return mix(uColor2, uColor3, f);
  if (seg < 4.0 && count > 4) return mix(uColor3, uColor4, f);
  if (seg < 5.0 && count > 5) return mix(uColor4, uColor5, f);
  if (seg < 6.0 && count > 6) return mix(uColor5, uColor6, f);
  if (seg < 7.0 && count > 7) return mix(uColor6, uColor7, f);
  if (count > 7) return uColor7;
  if (count > 6) return uColor6;
  if (count > 5) return uColor5;
  if (count > 4) return uColor4;
  if (count > 3) return uColor3;
  if (count > 2) return uColor2;
  return uColor1;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv0 = fragCoord.xy / iResolution.xy;

  float aspect = iResolution.x / iResolution.y;
  vec2 p = uv0 * 2.0 - 1.0;
  p.x *= aspect;
  vec2 pr = rotate2D(p, uAngle);
  pr.x /= aspect;
  vec2 uv = pr * 0.5 + 0.5;

  vec2 uvMod = uv;
  if (uDistort > 0.0) {
    float a = uvMod.y * 6.0;
    float b = uvMod.x * 6.0;
    float w = 0.01 * uDistort;
    uvMod.x += sin(a) * w;
    uvMod.y += cos(b) * w;
  }

  float t = uvMod.x;
  if (uMirror > 0.5) {
    t = 1.0 - abs(1.0 - 2.0 * fract(t));
  }

  vec3 base = getGradientColor(t);
  vec2 offset = vec2(iMouse.x / iResolution.x, iMouse.y / iResolution.y);
  float d = length(uv0 - offset);
  float r = max(uSpotlightRadius, 1e-4);
  float dn = d / r;
  float spot = (1.0 - 2.0 * pow(dn, uSpotlightSoftness)) * uSpotlightOpacity;
  vec3 cir = vec3(spot);
  float stripe = fract(uvMod.x * max(uBlindCount, 1.0));
  if (uShineFlip > 0.5) stripe = 1.0 - stripe;
  vec3 ran = vec3(stripe);

  vec3 col = cir + base - ran;
  col += (rand(gl_FragCoord.xy + iTime) - 0.5) * uNoise;

  fragColor = vec4(col, 1.0);
}

void main() {
  vec4 color;
  mainImage(color, vUv * iResolution.xy);
  gl_FragColor = color;
}
`

const hexToRgb = (hex: string): ColorTuple => {
  const color = hex.replace('#', '').padEnd(6, '0')
  const red = parseInt(color.slice(0, 2), 16) / 255
  const green = parseInt(color.slice(2, 4), 16) / 255
  const blue = parseInt(color.slice(4, 6), 16) / 255

  return [red, green, blue]
}

const prepareStops = (stops?: string[]) => {
  const colors = (stops?.length ? stops : ['#67e8f9', '#bef264']).slice(0, MAX_COLORS)

  if (colors.length === 1) {
    colors.push(colors[0])
  }

  while (colors.length < MAX_COLORS) {
    colors.push(colors[colors.length - 1])
  }

  return {
    colors: colors.map(hexToRgb) as ColorTuple[],
    count: Math.max(2, Math.min(MAX_COLORS, stops?.length ?? 2)),
  }
}

export function GradientBlinds({
  className = '',
  dpr,
  paused = false,
  gradientColors,
  angle = 0,
  noise = 0.14,
  blindCount = 16,
  blindMinWidth = 60,
  mouseDampening = 0.15,
  mirrorGradient = false,
  spotlightRadius = 0.5,
  spotlightSoftness = 1,
  spotlightOpacity = 1,
  distortAmount = 0,
  shineDirection = 'left',
  mixBlendMode = 'lighten',
}: GradientBlindsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const programRef = useRef<Program | null>(null)
  const meshRef = useRef<Mesh<Triangle, Program> | null>(null)
  const geometryRef = useRef<Triangle | null>(null)
  const mouseTargetRef = useRef<[number, number]>([0, 0])
  const lastTimeRef = useRef(0)
  const firstResizeRef = useRef(true)

  useEffect(() => {
    const container = containerRef.current

    if (!container) {
      return undefined
    }

    firstResizeRef.current = true
    lastTimeRef.current = 0

    const renderer = new Renderer({
      dpr: dpr ?? window.devicePixelRatio ?? 1,
      alpha: true,
      antialias: true,
    })
    const gl = renderer.gl
    const canvas = gl.canvas

    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.display = 'block'
    container.appendChild(canvas)

    const { colors, count } = prepareStops(gradientColors)
    const uniforms: GradientBlindsUniforms = {
      iResolution: { value: [gl.drawingBufferWidth, gl.drawingBufferHeight, 1] },
      iMouse: { value: [0, 0] },
      iTime: { value: 0 },
      uAngle: { value: (angle * Math.PI) / 180 },
      uNoise: { value: noise },
      uBlindCount: { value: Math.max(1, blindCount) },
      uSpotlightRadius: { value: spotlightRadius },
      uSpotlightSoftness: { value: spotlightSoftness },
      uSpotlightOpacity: { value: spotlightOpacity },
      uMirror: { value: mirrorGradient ? 1 : 0 },
      uDistort: { value: distortAmount },
      uShineFlip: { value: shineDirection === 'right' ? 1 : 0 },
      uColor0: { value: colors[0] },
      uColor1: { value: colors[1] },
      uColor2: { value: colors[2] },
      uColor3: { value: colors[3] },
      uColor4: { value: colors[4] },
      uColor5: { value: colors[5] },
      uColor6: { value: colors[6] },
      uColor7: { value: colors[7] },
      uColorCount: { value: count },
    }

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms,
    })
    const geometry = new Triangle(gl)
    const mesh = new Mesh(gl, { geometry, program })

    programRef.current = program
    geometryRef.current = geometry
    meshRef.current = mesh

    const resize = () => {
      const rect = container.getBoundingClientRect()

      if (rect.width <= 0 || rect.height <= 0) {
        return
      }

      renderer.setSize(rect.width, rect.height)
      uniforms.iResolution.value = [gl.drawingBufferWidth, gl.drawingBufferHeight, 1]

      if (blindMinWidth > 0) {
        const maxByMinWidth = Math.max(1, Math.floor(rect.width / blindMinWidth))
        const effectiveBlindCount = Math.min(blindCount, maxByMinWidth)
        uniforms.uBlindCount.value = Math.max(1, effectiveBlindCount)
      } else {
        uniforms.uBlindCount.value = Math.max(1, blindCount)
      }

      if (firstResizeRef.current) {
        firstResizeRef.current = false
        const centerX = gl.drawingBufferWidth / 2
        const centerY = gl.drawingBufferHeight / 2
        uniforms.iMouse.value = [centerX, centerY]
        mouseTargetRef.current = [centerX, centerY]
      }
    }

    resize()

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)

    const onPointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      const scale = renderer.dpr || 1
      const x = (event.clientX - rect.left) * scale
      const y = (rect.height - (event.clientY - rect.top)) * scale

      mouseTargetRef.current = [x, y]

      if (mouseDampening <= 0) {
        uniforms.iMouse.value = [x, y]
      }
    }

    window.addEventListener('pointermove', onPointerMove)

    const loop = (time: number) => {
      rafRef.current = requestAnimationFrame(loop)
      uniforms.iTime.value = time * 0.001

      if (mouseDampening > 0) {
        if (!lastTimeRef.current) {
          lastTimeRef.current = time
        }

        const deltaTime = (time - lastTimeRef.current) / 1000
        lastTimeRef.current = time
        const tau = Math.max(1e-4, mouseDampening)
        const factor = Math.min(1, 1 - Math.exp(-deltaTime / tau))
        const target = mouseTargetRef.current
        const current = uniforms.iMouse.value

        current[0] += (target[0] - current[0]) * factor
        current[1] += (target[1] - current[1]) * factor
      } else {
        lastTimeRef.current = time
      }

      if (!paused && meshRef.current) {
        renderer.render({ scene: meshRef.current })
      }
    }

    rafRef.current = requestAnimationFrame(loop)

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      window.removeEventListener('pointermove', onPointerMove)
      resizeObserver.disconnect()

      if (canvas.parentElement === container) {
        container.removeChild(canvas)
      }

      program.remove()
      geometry.remove()
      programRef.current = null
      geometryRef.current = null
      meshRef.current = null
    }
  }, [
    angle,
    blindCount,
    blindMinWidth,
    distortAmount,
    dpr,
    gradientColors,
    mirrorGradient,
    mouseDampening,
    noise,
    paused,
    shineDirection,
    spotlightOpacity,
    spotlightRadius,
    spotlightSoftness,
  ])

  return (
    <div
      ref={containerRef}
      className={['gradient-blinds-container', className].filter(Boolean).join(' ')}
      style={{ mixBlendMode }}
    />
  )
}

