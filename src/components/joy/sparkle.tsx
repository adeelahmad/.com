import React from 'react'; //eslint-disable-line
import { styled, keyframes } from '@/styles/stitches.config';

const QUERY = `(prefers-reduced-motion: no-preference)`;
const isRenderingOnServer = typeof window === `undefined`;
const getInitialState = () => {
  // For our initial server render, we won`t know if the user
  // prefers reduced motion, but it doesn`t matter. This value
  // will be overwritten on the client, before any animations
  // occur.
  return isRenderingOnServer ? true : !window.matchMedia(QUERY).matches;
};
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] =
    React.useState(getInitialState);
  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);
    const listener = (event: any) => {
      setPrefersReducedMotion(!event.matches);
    };
    mediaQueryList.addEventListener(`change`, listener);
    return () => {
      mediaQueryList.removeEventListener(`change`, listener);
    };
  }, []);
  return prefersReducedMotion;
}

// Utility helper for random number generation
const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;
const useRandomInterval = (callback: any, minDelay: any, maxDelay: any) => {
  const timeoutId = React.useRef(null) as any;
  const savedCallback = React.useRef(callback);
  React.useEffect(() => {
    savedCallback.current = callback;
  });
  React.useEffect(() => {
    const isEnabled =
      typeof minDelay === `number` && typeof maxDelay === `number`;
    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay);
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current();
          handleTick();
        }, nextTickAt);
      };
      handleTick();
    }
    return () => window.clearTimeout(timeoutId.current);
  }, [minDelay, maxDelay]);
  const cancel = React.useCallback(function () {
    window.clearTimeout(timeoutId.current);
  }, []);
  return cancel;
};

const range = (start: number, end: number, step = 1) => {
  const output = [];
  if (typeof end === `undefined`) {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

const generateSparkle = () => {
  const sparkle = {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color: `hsla(${Math.random() * (215 - 10) + 10}, 78%, 52%, .75)`,
    size: random(4, 16),
    style: {
      top: random(0, 100) + `%`,
      left: random(0, 100) + `%`,
      zIndex: random(0, 50),
    },
  };
  return sparkle;
};

const comeInOut = keyframes({
  '0%': { transform: `scale(0)` },
  '50%': { transform: `scale(1)` },
  '100%': { transform: `scale(0)` },
});

const spin = keyframes({
  '0%': { transform: `rotate(0deg)` },
  '100%': { transform: `rotate(180deg)` },
});

const Wrapper = styled(`span`, {
  display: `inline-block`,
  position: `relative`,
  width: `fit-content`,
});
const SparkleWrapper = styled(`span`, {
  position: `absolute`,
  display: `block`,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${comeInOut} 1000ms forwards`,
  },
});
const SparkleSvg = styled(`svg`, {
  display: `block`,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${spin} 1000ms linear`,
  },
});
const ChildWrapper = styled(`span`, { position: `relative`, zIndex: 1 });

const Sparkle = ({ color, props, size, style }: any) => {
  const path = `M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z`;
  return (
    <SparkleWrapper style={style}>
      <SparkleSvg width={size} height={size} viewBox="0 0 68 68" fill="none">
        <path d={path} {...props} fill={color} />
      </SparkleSvg>
    </SparkleWrapper>
  );
};

const Sparkles = ({ children }: any, { ...delegated }) => {
  const [sparkles, setSparkles] = React.useState(() => {
    return range(0, 6).map(() => generateSparkle());
  });
  const prefersReducedMotion = usePrefersReducedMotion();
  useRandomInterval(
    () => {
      const sparkle = generateSparkle();
      const now = Date.now();
      const nextSparkles = sparkles.filter((sp) => {
        const delta = now - sp.createdAt;
        return delta < 750;
      });
      nextSparkles.push(sparkle);
      setSparkles(nextSparkles);
    },
    prefersReducedMotion ? null : 50,
    prefersReducedMotion ? null : 450,
  );
  return (
    <Wrapper {...delegated} id="sparkle">
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <ChildWrapper>{children}</ChildWrapper>
    </Wrapper>
  );
};

export default Sparkles;
