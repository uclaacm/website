import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { Children, cloneElement, ReactElement } from 'react';

interface ActiveLinkProps extends LinkProps {
  activeClassName: string;
  children: ReactElement; // Ensures only a single child is passed and is a React element
}

const ActiveLink = ({ children, activeClassName, ...props }:ActiveLinkProps) => {
  const { asPath } = useRouter();
  const child = Children.only(children) as ReactElement<{ className?: string }>;
  const childClassName = (child.props as { className?: string }).className || '';

  // if path equals href append activeClassName to childClassName otherwise return childClassName
  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    //clones child with className if className exists
    (<Link {...props} legacyBehavior>
      {cloneElement(child, {
        className: className || undefined,
      })}
    </Link>)
  );
};

export default ActiveLink;
