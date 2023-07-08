(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode("body[data-v-d35b63ed]{width:100%;height:100vh;display:flex;align-items:center;justify-content:center;font-family:sans-serif}.tx-default-2[data-v-d35b63ed]{color:var(--primaryColor1);font-weight:600}.wrapper-steppy[data-v-d35b63ed]{padding:60px}.steppy[data-v-d35b63ed]{display:flex;align-items:center;justify-content:space-between;width:auto;position:relative;z-index:0;margin-bottom:5px}.steppy-progress[data-v-d35b63ed]{position:absolute;background-color:#c5c5c5;height:2px;z-index:-1;left:0;right:0;margin:0 auto}.steppy-progress-bar[data-v-d35b63ed]{position:absolute;left:0;height:100%;width:0;background-color:var(--primaryColor1);transition:all .5s ease}.steppy-item[data-v-d35b63ed]{display:flex;flex-direction:column;align-items:center;color:#c5c5c5;transition:all .5s ease}.steppy-item-counter[data-v-d35b63ed]{height:68px;width:68px;display:grid;place-items:center;background-color:var(--primaryColor2);border-radius:100%;border:2px solid #c5c5c5;position:relative}.steppy-item-counter .icon-success[data-v-d35b63ed]{position:absolute;opacity:0;transform:scale(0);width:24px;transition:all .5s ease}.steppy-item-counter .number[data-v-d35b63ed]{font-size:22px;transition:all .5s ease}.steppy-item-title[data-v-d35b63ed]{position:absolute;text-align:center;font-size:14px;bottom:-43px}.steppy-item.success .steppy-item-counter[data-v-d35b63ed]{border-color:var(--primaryColor1);font-weight:600}.steppy-item.success .steppy-item-counter .icon-success[data-v-d35b63ed]{opacity:1;transform:scale(1)}.steppy-item.success .steppy-item-counter .number[data-v-d35b63ed]{opacity:0;transform:scale(0)}.steppy-item.success .steppy-item-title[data-v-d35b63ed]{color:var(--primaryColor1)}.steppy-item.current .steppy-item-counter[data-v-d35b63ed]{border-color:var(--primaryColor1);background-color:var(--primaryColor1);color:#fff;font-weight:600}.steppy-item.current .steppy-item-title[data-v-d35b63ed]{color:#818181}.steppy-pane[data-v-d35b63ed]{color:#333;text-align:center;background-color:#fff;border-radius:15px;padding:25px;margin:60px 0 20px}.controls[data-v-d35b63ed]{display:flex}.btn[data-v-d35b63ed]{display:flex;justify-content:center;align-items:center;padding:6px 16px;text-align:center;vertical-align:middle;cursor:pointer;line-height:1.5;transition:all .15s;border-radius:4px;width:fit-content;font-size:.75rem;color:#333;background-color:#f0f0f0;border:1px solid #f0f0f0}.btn[data-v-d35b63ed]:disabled{opacity:.5;pointer-events:none}.btn--default-2[data-v-d35b63ed]{background-color:var(--primaryColor1);border-color:var(--primaryColor1);color:#fff;margin-left:auto}.loader[data-v-d35b63ed]{width:20px;height:20px;border:2px solid #fff;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation-d35b63ed 1s linear infinite}.steppy-item-counter[data-v-d35b63ed]{height:40px;width:40px;border:none}.steppy-item-counter .number[data-v-d35b63ed]{font-size:1rem}.controls[data-v-d35b63ed]{display:flex;flex-direction:column-reverse;gap:2rem}.controls .btn[data-v-d35b63ed]{align-self:center}.btn--default-2[data-v-d35b63ed]{margin:auto;text-align:center;background:#f1c446;border-radius:4px;border:none;height:40px;width:40%;font-size:1rem;color:#000407;font-weight:700}@media (max-width: 600px){.steppy-item-title[data-v-d35b63ed]{display:none}.steppy-pane[data-v-d35b63ed]{margin:10px 0}}@keyframes rotation-d35b63ed{0%{transform:rotate(0)}to{transform:rotate(360deg)}}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { openBlock as e, createElementBlock as s, normalizeStyle as y, createElementVNode as o, reactive as h, computed as _, unref as f, Fragment as m, renderList as b, normalizeClass as v, createBlock as C, toDisplayString as r, renderSlot as V, createCommentVNode as k } from "vue";
const x = /* @__PURE__ */ o("path", { d: "M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" }, null, -1), M = [
  x
], z = {
  __name: "CheckMark",
  props: {
    color: {
      type: String,
      default: "black"
    }
  },
  setup(n) {
    return (a, t) => (e(), s("svg", {
      viewBox: "0 0 24 24",
      style: y({ fill: n.color })
    }, M, 4));
  }
};
const B = (n, a) => {
  const t = n.__vccOpts || n;
  for (const [p, u] of a)
    t[p] = u;
  return t;
}, T = { class: "steppy" }, N = { class: "steppy-progress" }, $ = { class: "steppy-item-counter" }, w = ["src"], D = { class: "number" }, E = { class: "steppy-item-title" }, F = {
  key: 0,
  class: "steppy-pane"
}, A = { class: "controls" }, I = ["disabled"], L = ["disabled"], O = {
  key: 0,
  class: "loader"
}, P = { key: 1 }, Y = {
  __name: "Vue3MultiStepper",
  props: {
    step: {
      type: Number,
      default: 1
    },
    tabs: {
      type: Array,
      default: h([
        {
          title: "Company",
          iconSuccess: null,
          isValid: !0
        },
        {
          title: "Company Additional Info",
          iconSuccess: null,
          isValid: !0
        },
        {
          title: "Employees",
          iconSuccess: null,
          isValid: !0
        },
        {
          title: "Your Details",
          iconSuccess: null,
          isValid: !0
        },
        {
          title: "Verification",
          iconSuccess: null,
          isValid: !0
        }
      ])
    },
    finalize: {
      type: Function,
      default: function() {
        return {};
      }
    },
    backText: {
      type: String,
      default: "Back"
    },
    nextText: {
      type: String,
      default: "Next"
    },
    doneText: {
      type: String,
      default: "Done"
    },
    loading: {
      type: Boolean,
      default: !1
    },
    primaryColor1: {
      type: String,
      default: "orange"
    },
    primaryColor2: {
      type: String,
      default: "#fff"
    },
    validateStep: {
      type: Function,
      default: () => !0
    }
  },
  emits: ["update:step"],
  setup(n, { emit: a }) {
    const t = n, p = _(() => ({
      "--primaryColor1": t.primaryColor1,
      "--primaryColor2": t.primaryColor2
    })), u = () => {
      const c = t.step;
      if (t.validateStep(c)) {
        const l = c + 1;
        a("update:step", l);
      }
    }, S = () => {
      const c = t.step - 1;
      a("update:step", c);
    }, g = _(() => 100 / (t.tabs.length - 1) * (t.step - 1) + "%");
    return (c, d) => (e(), s("div", {
      class: "wrapper-steppy",
      style: y(f(p))
    }, [
      o("div", T, [
        o("div", N, [
          o("div", {
            class: "steppy-progress-bar",
            style: y("width:" + f(g))
          }, null, 4)
        ]),
        (e(!0), s(m, null, b(t.tabs, (l, i) => (e(), s("div", {
          class: v(["steppy-item", {
            current: t.step === i + 1,
            success: t.step > i + 1
          }]),
          key: i
        }, [
          o("div", $, [
            l.iconSuccess ? (e(), s("img", {
              key: 0,
              class: "icon-success",
              src: l.iconSuccess,
              alt: "Check Mark"
            }, null, 8, w)) : (e(), C(z, {
              key: 1,
              class: "icon-success",
              color: n.primaryColor1,
              alt: "Check Mark"
            }, null, 8, ["color"])),
            o("span", D, r(i + 1), 1)
          ]),
          o("span", E, r(l.title), 1)
        ], 2))), 128))
      ]),
      (e(!0), s(m, null, b(t.tabs.length, (l) => (e(), s("div", {
        class: "steppy-content",
        key: l
      }, [
        t.step === l ? (e(), s("div", F, [
          V(c.$slots, l, {}, void 0, !0)
        ])) : k("", !0)
      ]))), 128)),
      o("div", A, [
        t.step !== 1 ? (e(), s("button", {
          key: 0,
          class: "btn",
          onClick: S
        }, r(t.backText), 1)) : k("", !0),
        t.step !== t.tabs.length ? (e(), s("button", {
          key: 1,
          class: "btn btn--default-2",
          onClick: u,
          disabled: !t.tabs[t.step - 1].isValid
        }, r(t.nextText), 9, I)) : (e(), s("button", {
          key: 2,
          class: "btn btn--default-2",
          onClick: d[0] || (d[0] = (...l) => n.finalize && n.finalize(...l)),
          disabled: !t.tabs[t.step - 1].isValid || n.loading
        }, [
          n.loading ? (e(), s("span", O)) : (e(), s("span", P, r(t.doneText), 1))
        ], 8, L))
      ])
    ], 4));
  }
}, q = /* @__PURE__ */ B(Y, [["__scopeId", "data-v-d35b63ed"]]);
export {
  q as Vue3MultiStepper
};
