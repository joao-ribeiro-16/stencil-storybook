/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface XpandEvaluation {
    }
}
declare global {
    interface HTMLXpandEvaluationElement extends Components.XpandEvaluation, HTMLStencilElement {
    }
    var HTMLXpandEvaluationElement: {
        prototype: HTMLXpandEvaluationElement;
        new (): HTMLXpandEvaluationElement;
    };
    interface HTMLElementTagNameMap {
        "xpand-evaluation": HTMLXpandEvaluationElement;
    }
}
declare namespace LocalJSX {
    interface XpandEvaluation {
    }
    interface IntrinsicElements {
        "xpand-evaluation": XpandEvaluation;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "xpand-evaluation": LocalJSX.XpandEvaluation & JSXBase.HTMLAttributes<HTMLXpandEvaluationElement>;
        }
    }
}