# 🎨 Parallax Effects Guide

This guide shows you how to add parallax effects to any element in your React application using the `react-just-parallax` library.

## 🚀 Quick Start

### 1. Basic Usage

```tsx
import { ParallaxElement } from "@/components/ParallaxElement";

// Simple scroll parallax
<ParallaxElement config={{ type: 'scroll', strength: 0.1 }}>
  <div className="your-element">Content here</div>
</ParallaxElement>

// Simple mouse parallax
<ParallaxElement config={{ type: 'mouse', strength: 0.1 }}>
  <div className="your-element">Content here</div>
</ParallaxElement>
```

### 2. Pre-configured Components

```tsx
import { ScrollParallaxElement, MouseParallaxElement, CombinedParallaxElement } from "@/components/ParallaxElement";

// Scroll parallax (shorthand)
<ScrollParallaxElement strength={0.1}>
  <div>Scroll me!</div>
</ScrollParallaxElement>

// Mouse parallax (shorthand)
<MouseParallaxElement strength={0.1}>
  <div>Move your mouse over me!</div>
</MouseParallaxElement>

// Combined parallax (shorthand)
<CombinedParallaxElement strength={0.1}>
  <div>Both scroll and mouse effects!</div>
</CombinedParallaxElement>
```

## ⚙️ Configuration Options

### ParallaxConfig Interface

```tsx
interface ParallaxConfig {
  type: "scroll" | "mouse" | "both";
  strength?: number; // Default: 0.1
  lerpEase?: number; // Default: 0.06
  isAbsolutelyPositioned?: boolean; // Default: false
  zIndex?: number | null; // Default: null
  shouldPause?: boolean; // Default: true
  enableOnTouchDevice?: boolean; // Default: true
  isHorizontal?: boolean; // Default: false (scroll only)
  scrollContainerRef?: React.MutableRefObject<HTMLElement | null>;
  parallaxContainerRef?: React.MutableRefObject<HTMLElement | null>;
  shouldResetPosition?: boolean; // Default: false (mouse only)
}
```

### Parameter Explanations

- **`type`**: The type of parallax effect

  - `'scroll'`: Element moves based on scroll position
  - `'mouse'`: Element moves based on mouse position
  - `'both'`: Combines both scroll and mouse effects

- **`strength`**: How much the element moves (0.1 = 10% of scroll/mouse movement)

  - `0.1` = Subtle movement
  - `0.5` = Strong movement
  - `-0.1` = Reverse movement

- **`lerpEase`**: How smooth the animation is (0.01 = very smooth, 0.1 = snappy)

- **`isAbsolutelyPositioned`**: Set to `true` if your element uses `position: absolute`

- **`shouldPause`**: Pauses animation when element is out of view (better performance)

- **`enableOnTouchDevice`**: Enables/disables effect on mobile devices

- **`isHorizontal`**: For scroll parallax, makes it move horizontally instead of vertically

## 🎯 Common Use Cases

### 1. Background Elements

```tsx
// Subtle background movement
<MouseParallaxElement strength={0.05} className="absolute inset-0">
  <div className="w-full h-full bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
</MouseParallaxElement>
```

### 2. Text Effects

```tsx
// Large text with scroll parallax
<ScrollParallaxElement strength={-0.2}>
  <h1 className="text-8xl font-black">Your Title</h1>
</ScrollParallaxElement>
```

### 3. Card Animations

```tsx
// Cards that move as you scroll
<ScrollParallaxElement strength={0.15}>
  <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8">
    <h3>Card Title</h3>
    <p>Card content...</p>
  </div>
</ScrollParallaxElement>
```

### 4. Floating Elements

```tsx
// Small decorative elements
<MouseParallaxElement strength={0.2} className="absolute top-1/4 left-1/4">
  <div className="w-4 h-4 bg-blue-500 rounded-full opacity-60"></div>
</MouseParallaxElement>
```

### 5. Complex Configurations

```tsx
// Custom configuration for specific needs
<ParallaxElement
  config={{
    type: "scroll",
    strength: 0.3,
    lerpEase: 0.08,
    isHorizontal: true,
    shouldPause: false,
  }}
  className="your-custom-class"
  style={{ customStyle: "value" }}
>
  <div>Custom parallax element</div>
</ParallaxElement>
```

## 🎨 Styling Tips

### 1. Use CSS Transforms for Additional Effects

```tsx
<ScrollParallaxElement strength={0.1}>
  <div
    className="transform transition-all duration-300 hover:scale-105"
    style={{
      transform: `rotate(${scrollY * 0.1}deg)`,
    }}
  >
    Rotating element
  </div>
</ScrollParallaxElement>
```

### 2. Combine with CSS Animations

```tsx
<MouseParallaxElement strength={0.1}>
  <div className="animate-pulse bg-gradient-to-r from-blue-500 to-purple-500">
    Animated background
  </div>
</MouseParallaxElement>
```

### 3. Use Backdrop Blur for Glass Effects

```tsx
<ScrollParallaxElement strength={0.1}>
  <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8">
    Glass morphism effect
  </div>
</ScrollParallaxElement>
```

## 🚀 Performance Tips

1. **Use `shouldPause={true}`** for better performance
2. **Limit the number of parallax elements** on mobile
3. **Use `enableOnTouchDevice={false}`** for heavy effects on mobile
4. **Combine similar elements** into single parallax containers when possible

## 🎯 Examples

See `ParallaxExamples.tsx` for comprehensive examples of all parallax types and configurations.

## 🔧 Troubleshooting

### Element not moving?

- Check if `strength` is not 0
- Verify the element has content
- Make sure the parent container has `overflow: hidden` if needed

### Performance issues?

- Reduce the number of parallax elements
- Use `shouldPause={true}`
- Lower the `strength` values

### Mobile issues?

- Set `enableOnTouchDevice={false}` for heavy effects
- Use smaller `strength` values on mobile
