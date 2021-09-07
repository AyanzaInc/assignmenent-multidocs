import { DirectiveBinding } from "vue/types/options";
import { VNode } from "vue/types/umd";

interface HTMLElementClickOutside extends HTMLElement {
  clickOutsideEvent: (event: Event) => void;
}

export const bind = function (
  el: HTMLElement,
  binding: DirectiveBinding,
  vnode: VNode
): void {
  const element = el as unknown as HTMLElementClickOutside;
  element.clickOutsideEvent = function (event: Event) {
    if (!(el == event.target || el.contains(event.target as Node))) {
      const context = vnode.context as unknown as Record<string, unknown>;
      const expression = binding.expression as string;
      const expressionFn = context[expression] as unknown as (
        event: Event
      ) => void;
      expressionFn(event);
    }
  };
  document.body.addEventListener("click", element.clickOutsideEvent);
};

export const unbind = function (el: HTMLElement): void {
  const element = el as unknown as HTMLElementClickOutside;
  document.body.removeEventListener("click", element.clickOutsideEvent);
};
