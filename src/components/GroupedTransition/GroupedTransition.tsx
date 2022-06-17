import {
  CollapseProps,
  Fade,
  FadeProps,
  Grow,
  GrowProps,
  Slide,
  SlideProps,
  Zoom,
  ZoomProps
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

const transitionOverrideProps: TransitionProps = {
  mountOnEnter: true,
  unmountOnExit: true
};

type GroupedTransitionVariant = 'zoom' | 'slide' | 'grow' | 'fade' | 'collapse';

export interface GroupedTransitionProps {
  checked?: boolean;
  maxDelay?: number;
  delay?: number;
  variant?: GroupedTransitionVariant;
  fadeProps?: Partial<FadeProps>;
  slideProps?: Partial<SlideProps>;
  growProps?: Partial<GrowProps>;
  zoomProps?: Partial<ZoomProps>;
  collapseProps?: Partial<CollapseProps>;
  children: JSX.Element | JSX.Element[];
}

export const GroupedTransition: React.FC<GroupedTransitionProps> = ({
  checked = true,
  maxDelay = 3000,
  delay = 300,
  children,
  variant = 'grow',
  slideProps = {},
  growProps = {},
  zoomProps = {},
  collapseProps = {},
  fadeProps = {}
}): JSX.Element => {
  if (!children) {
    return <></>;
  }
  if (!(children instanceof Array)) {
    children = [children];
  }
  return (
    <>
      {children.map((child, index) => {
        switch (variant) {
          case 'collapse':
          case 'grow':
            return (
              <Grow
                key={index}
                in={checked}
                {...growProps}
                {...transitionOverrideProps}
                timeout={{ enter: Math.min(index * delay, maxDelay) }}
              >
                {child}
              </Grow>
            );
          case 'zoom':
            return (
              <Zoom
                key={index}
                in={checked}
                {...zoomProps}
                {...transitionOverrideProps}
                timeout={{ enter: Math.min(index * delay, maxDelay) }}
              >
                {child}
              </Zoom>
            );
          case 'fade':
            return (
              <Fade
                key={index}
                in={checked}
                {...fadeProps}
                {...transitionOverrideProps}
                timeout={{ enter: Math.min(index * delay, maxDelay) }}
              >
                {child}
              </Fade>
            );
          case 'slide':
            return (
              <Slide
                direction="up"
                {...slideProps}
                key={index}
                in={checked}
                {...transitionOverrideProps}
                timeout={{ enter: Math.min(index * delay, maxDelay) }}
              >
                {child}
              </Slide>
            );
        }
      })}
    </>
  );
};
