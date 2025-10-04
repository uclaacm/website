import Link from 'next/link';
import { useRouter } from 'next/router';
import { Children, cloneElement } from 'react';

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';

  // if path equals href append activeClassName to childClassName otherwise return childClassName
  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  // check if it's an external link
  if (props.href.startsWith('http')) {
    return (
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {cloneElement(child, {
          className: className || null,
        })}
      </a>
    );
  }

  return (
    //clones child with className if className exists
    (<Link {...props} legacyBehavior>
      {cloneElement(child, {
        className: className || null,
      })}
    </Link>)
  );
};

export default ActiveLink;
