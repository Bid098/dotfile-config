var rt=Object.defineProperty;var it=(we,be,ye)=>be in we?rt(we,be,{enumerable:!0,configurable:!0,writable:!0,value:ye}):we[be]=ye;var pe=(we,be,ye)=>(it(we,typeof be!="symbol"?be+"":be,ye),ye),ot=(we,be,ye)=>{if(!be.has(we))throw TypeError("Cannot "+ye)};var _e=(we,be,ye)=>{if(be.has(we))throw TypeError("Cannot add the same private member more than once");be instanceof WeakSet?be.add(we):be.set(we,ye)};var Re=(we,be,ye)=>(ot(we,be,"access private method"),ye);(()=>{var we={7592:Q=>{(function(Ie,xe){Q.exports=xe()})(self,()=>(()=>{var Ie={319:(v,t,e)=>{"use strict";e.d(t,{Z:()=>d});var l=e(7537),c=e.n(l),A=e(3645),a=e.n(A)()(c());a.push([v.id,"button.mynah-button{border:none;min-width:var(--mynah-sizing-8);height:var(--mynah-sizing-8);border-radius:var(--mynah-button-radius);background-color:var(--mynah-color-button);color:var(--mynah-color-button-reverse);box-shadow:var(--mynah-shadow-button);cursor:pointer;transition:var(--mynah-very-short-transition);display:inline-flex;justify-content:center;align-items:center;outline:none;overflow:hidden;position:relative;transform:translate3d(0, 0, 0) scale(1.00001);padding-left:var(--mynah-sizing-3);padding-right:var(--mynah-sizing-3);gap:var(--mynah-sizing-2);filter:brightness(0.9);opacity:.85;line-height:var(--mynah-line-height)}button.mynah-button.mynah-bottom-block-close-button{position:absolute;align-self:flex-end;transform:translate3d(var(--mynah-sizing-2), calc(-100% - var(--mynah-sizing-6)), 0px);background-color:var(--mynah-card-bg);color:var(--mynah-color-text-default)}button.mynah-button[disabled=disabled]{opacity:.25 !important;pointer-events:none}button.mynah-button.mynah-button-secondary{background-color:transparent;color:inherit;box-shadow:none;opacity:.75;height:var(--mynah-sizing-6);padding-left:var(--mynah-sizing-1);padding-right:var(--mynah-sizing-1);border-radius:0}button.mynah-button.mynah-button-secondary:focus-visible,button.mynah-button.mynah-button-secondary:hover{opacity:1}button.mynah-button.mynah-button-secondary:active{box-shadow:none}button.mynah-button:focus-visible,button.mynah-button:hover{filter:brightness(1);opacity:1}button.mynah-button:active{filter:brightness(0.9);opacity:.85}button.mynah-button.mynah-icon-button{width:var(--mynah-sizing-10);height:var(--mynah-sizing-10);border-radius:0}button.mynah-button>span{white-space:nowrap;font-size:var(--mynah-font-size-medium);max-width:35vw;transition:var(--mynah-very-long-transition);overflow:hidden;box-sizing:border-box;overflow:hidden;text-overflow:ellipsis}","",{version:3,sources:["webpack://./src/styles/components/_button.scss"],names:[],mappings:"AAAA,oBACI,WAAA,CACA,+BAAA,CACA,4BAAA,CACA,wCAAA,CACA,0CAAA,CACA,uCAAA,CACA,qCAAA,CACA,cAAA,CACA,6CAAA,CACA,mBAAA,CACA,sBAAA,CACA,kBAAA,CACA,YAAA,CACA,eAAA,CACA,iBAAA,CACA,6CAAA,CACA,kCAAA,CACA,mCAAA,CACA,yBAAA,CACA,sBAAA,CACA,WAAA,CACA,oCAAA,CACA,oDACI,iBAAA,CACA,mBAAA,CACA,sFAAA,CACA,qCAAA,CACA,qCAAA,CAEJ,uCACI,sBAAA,CACA,mBAAA,CAEJ,2CACI,4BAAA,CACA,aAAA,CACA,eAAA,CACA,WAAA,CACA,4BAAA,CACA,kCAAA,CACA,mCAAA,CACA,eAAA,CACA,0GAEI,SAAA,CAEJ,kDACI,eAAA,CAGR,4DAEI,oBAAA,CACA,SAAA,CAEJ,2BACI,sBAAA,CACA,WAAA,CAEJ,sCACI,4BAAA,CACA,6BAAA,CACA,eAAA,CAEJ,yBACI,kBAAA,CACA,uCAAA,CACA,cAAA,CACA,4CAAA,CACA,eAAA,CACA,qBAAA,CACA,eAAA,CACA,sBAAA",sourcesContent:[`button.mynah-button {
    border: none;
    min-width: var(--mynah-sizing-8);
    height: var(--mynah-sizing-8);
    border-radius: var(--mynah-button-radius);
    background-color: var(--mynah-color-button);
    color: var(--mynah-color-button-reverse);
    box-shadow: var(--mynah-shadow-button);
    cursor: pointer;
    transition: var(--mynah-very-short-transition);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline: none;
    overflow: hidden;
    position: relative;
    transform: translate3d(0, 0, 0) scale(1.00001);
    padding-left: var(--mynah-sizing-3);
    padding-right: var(--mynah-sizing-3);
    gap: var(--mynah-sizing-2);
    filter: brightness(0.9);
    opacity: 0.85;
    line-height: var(--mynah-line-height);
    &.mynah-bottom-block-close-button {
        position: absolute;
        align-self: flex-end;
        transform: translate3d(var(--mynah-sizing-2), calc(-100% - var(--mynah-sizing-6)), 0px);
        background-color: var(--mynah-card-bg);
        color: var(--mynah-color-text-default);
    }
    &[disabled='disabled'] {
        opacity: 0.25 !important;
        pointer-events: none;
    }
    &.mynah-button-secondary {
        background-color: transparent;
        color: inherit;
        box-shadow: none;
        opacity: 0.75;
        height: var(--mynah-sizing-6);
        padding-left: var(--mynah-sizing-1);
        padding-right: var(--mynah-sizing-1);
        border-radius: 0;
        &:focus-visible,
        &:hover {
            opacity: 1;
        }
        &:active {
            box-shadow: none;
        }
    }
    &:focus-visible,
    &:hover {
        filter: brightness(1);
        opacity: 1;
    }
    &:active {
        filter: brightness(0.9);
        opacity: 0.85;
    }
    &.mynah-icon-button {
        width: var(--mynah-sizing-10);
        height: var(--mynah-sizing-10);
        border-radius: 0;
    }
    > span {
        white-space: nowrap;
        font-size: var(--mynah-font-size-medium);
        max-width: 35vw;
        transition: var(--mynah-very-long-transition);
        overflow: hidden;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
`],sourceRoot:""}]),a.locals={};const d=a},9367:(v,t,e)=>{"use strict";e.d(t,{Z:()=>d});var l=e(7537),c=e.n(l),A=e(3645),a=e.n(A)()(c());a.push([v.id,".mynah-collapsible-content-wrapper{display:block;box-sizing:border-box;width:100%;overflow:hidden;position:relative}.mynah-collapsible-content-wrapper>.mynah-collapsible-content-checkbox{display:none}.mynah-collapsible-content-wrapper>.mynah-collapsible-content-checkbox+.mynah-collapsible-content-label{box-sizing:border-box;display:flex;flex-flow:column nowrap;overflow:hidden;align-items:flex-start;justify-content:stretch;padding:var(--mynah-sizing-2);gap:var(--mynah-sizing-2)}.mynah-collapsible-content-wrapper>.mynah-collapsible-content-checkbox+.mynah-collapsible-content-label>.mynah-collapsible-content-label-title-wrapper{gap:var(--mynah-sizing-2);display:flex;flex-flow:row nowrap;box-sizing:border-box;width:100%;overflow:hidden;justify-content:flex-start;align-items:flex-start;pointer-events:all;cursor:pointer;user-select:none}.mynah-collapsible-content-wrapper>.mynah-collapsible-content-checkbox+.mynah-collapsible-content-label>.mynah-collapsible-content-label-title-wrapper>.mynah-collapsible-content-label-title-text{flex:1;overflow:hidden}.mynah-collapsible-content-wrapper>.mynah-collapsible-content-checkbox+.mynah-collapsible-content-label>.mynah-collapsible-content-label-content-wrapper{overflow:hidden;box-sizing:border-box;width:100%}.mynah-collapsible-content-wrapper>.mynah-collapsible-content-checkbox:checked+.mynah-collapsible-content-label>.mynah-collapsible-content-label-content-wrapper{display:none}","",{version:3,sources:["webpack://./src/styles/components/_collapsible-content.scss"],names:[],mappings:"AAAA,mCACI,aAAA,CACA,qBAAA,CACA,UAAA,CACA,eAAA,CACA,iBAAA,CACA,uEACI,YAAA,CACA,wGACI,qBAAA,CACA,YAAA,CACA,uBAAA,CACA,eAAA,CACA,sBAAA,CACA,uBAAA,CACA,6BAAA,CACA,yBAAA,CACA,uJACI,yBAAA,CACA,YAAA,CACA,oBAAA,CACA,qBAAA,CACA,UAAA,CACA,eAAA,CACA,0BAAA,CACA,sBAAA,CACA,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,mMACI,MAAA,CACA,eAAA,CAGR,yJACI,eAAA,CACA,qBAAA,CACA,UAAA,CAKJ,iKACI,YAAA",sourcesContent:[`.mynah-collapsible-content-wrapper {
    display: block;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
    position: relative;
    > .mynah-collapsible-content-checkbox {
        display: none;
        & + .mynah-collapsible-content-label {
            box-sizing: border-box;
            display: flex;
            flex-flow: column nowrap;
            overflow: hidden;
            align-items: flex-start;
            justify-content: stretch;
            padding: var(--mynah-sizing-2);
            gap: var(--mynah-sizing-2);
            > .mynah-collapsible-content-label-title-wrapper {
                gap: var(--mynah-sizing-2);
                display: flex;
                flex-flow: row nowrap;
                box-sizing: border-box;
                width: 100%;
                overflow: hidden;
                justify-content: flex-start;
                align-items: flex-start;
                pointer-events: all;
                cursor: pointer;
                user-select: none;
                > .mynah-collapsible-content-label-title-text {
                    flex: 1;
                    overflow: hidden;
                }
            }
            > .mynah-collapsible-content-label-content-wrapper {
                overflow: hidden;
                box-sizing: border-box;
                width: 100%;
            }
        }

        &:checked + .mynah-collapsible-content-label {
            > .mynah-collapsible-content-label-content-wrapper {
                display: none;
            }
        }
    }
}
`],sourceRoot:""}]),a.locals={};const d=a},4747:(v,t,e)=>{"use strict";e.d(t,{Z:()=>d});var l=e(7537),c=e.n(l),A=e(3645),a=e.n(A)()(c());a.push([v.id,'#mynah-feedback-form-wrapper{display:flex;flex-flow:column nowrap;position:absolute;bottom:0;left:var(--mynah-sizing-2);right:var(--mynah-sizing-2);width:auto;box-sizing:border-box;z-index:9999999;opacity:0;transform:translate3d(0, 5vh, 0);transition:var(--mynah-bottom-panel-transition);overflow:visible}#mynah-feedback-form-wrapper:before{transition:all 400ms cubic-bezier(0.25, 0, 0, 1);content:"";position:absolute;right:calc(-1*var(--mynah-sizing-2));bottom:0;left:0;width:100vw;height:100vh;background-color:#000;opacity:0;pointer-events:none;transform:translate3d(0, 0, 0) scale(2);transform-origin:center center;z-index:-1}#mynah-feedback-form-wrapper>.mynah-bottom-block-close-button{transform:translate3d(calc(-1 * var(--mynah-sizing-1)), calc(-100% - var(--mynah-sizing-3)), 0px)}#mynah-feedback-form-wrapper+#mynah-wrapper{transition:var(--mynah-bottom-panel-transition)}#mynah-feedback-form-wrapper:not(.mynah-feedback-form-show),#mynah-feedback-form-wrapper:not(.mynah-feedback-form-show) *{pointer-events:none !important}#mynah-feedback-form-wrapper.mynah-feedback-form-show{opacity:1;transform:translate3d(0, 0, 0)}#mynah-feedback-form-wrapper.mynah-feedback-form-show:before{opacity:.15}#mynah-feedback-form-wrapper.mynah-feedback-form-show+#mynah-wrapper{transform:translate3d(0, 0px, 0) scale(0.95);transform-origin:top center;opacity:.25}#mynah-feedback-form-wrapper.mynah-feedback-form-show+#mynah-wrapper,#mynah-feedback-form-wrapper.mynah-feedback-form-show+#mynah-wrapper *{pointer-events:none !important}.mynah-feedback-form{pointer-events:all;box-sizing:border-box;transition:var(--mynah-short-transition-rev);transform:translate3d(0, 0, 0);display:flex;flex-flow:column;gap:var(--mynah-sizing-4);align-items:stretch;transform-origin:right bottom;z-index:10;position:relative;border:var(--mynah-button-border-width) solid var(--mynah-color-border-default);border-top-right-radius:var(--mynah-card-radius);border-top-left-radius:var(--mynah-card-radius);border-bottom:none;box-shadow:0px -25px 20px -25px rgba(0,0,0,.15);background-color:var(--mynah-color-bg);padding:var(--mynah-sizing-4);min-height:20vh}.mynah-feedback-form>.mynah-card-body{flex:initial}.mynah-feedback-form>.mynah-feedback-form-header{display:flex;box-sizing:border-box;align-items:center}.mynah-feedback-form>.mynah-feedback-form-header>h4{flex:1;margin:0}.mynah-feedback-form>.mynah-feedback-form-comment{background-color:transparent;padding:var(--mynah-sizing-3);border:var(--mynah-border-width) solid var(--mynah-color-border-default);resize:none;width:100%;height:100px;max-height:25vh;border-radius:var(--mynah-input-radius);font-size:var(--mynah-font-size-small);outline:none;color:var(--mynah-color-text-input);background-color:var(--mynah-card-bg);box-sizing:border-box;font-family:inherit}.mynah-feedback-form>.mynah-feedback-form-select-wrapper{position:relative;display:flex;box-sizing:border-box;padding:var(--mynah-sizing-3);justify-content:flex-end;align-items:center}.mynah-feedback-form>.mynah-feedback-form-select-wrapper>.mynah-feedback-form-select{position:absolute;width:100%;left:0;color:var(--mynah-color-text-default);border-radius:var(--mynah-input-radius);padding:var(--mynah-sizing-3);border:var(--mynah-border-width) solid var(--mynah-color-border-default);background-color:var(--mynah-card-bg);-webkit-appearance:none;appearance:none;text-indent:1px;text-overflow:clip;outline:none}.mynah-feedback-form>.mynah-feedback-form-select-wrapper>.mynah-feedback-form-select-handle{color:var(--mynah-color-text-weak);pointer-events:none}.mynah-feedback-form>.mynah-feedback-form-buttons-container{display:flex;justify-content:flex-end;align-items:center;gap:var(--mynah-sizing-1);box-sizing:border-box}',"",{version:3,sources:["webpack://./src/styles/components/_feedback-form.scss"],names:[],mappings:"AAAA,6BACI,YAAA,CACA,uBAAA,CACA,iBAAA,CACA,QAAA,CACA,0BAAA,CACA,2BAAA,CACA,UAAA,CACA,qBAAA,CACA,eAAA,CACA,SAAA,CACA,gCAAA,CACA,+CAAA,CACA,gBAAA,CACA,oCACI,gDAAA,CACA,UAAA,CACA,iBAAA,CACA,oCAAA,CACA,QAAA,CACA,MAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CACA,SAAA,CACA,mBAAA,CACA,uCAAA,CACA,8BAAA,CACA,UAAA,CAEJ,8DACI,iGAAA,CAEJ,4CACI,+CAAA,CAGA,0HAEI,8BAAA,CAGR,sDACI,SAAA,CACA,8BAAA,CACA,6DACI,WAAA,CAEJ,qEACI,4CAAA,CACA,2BAAA,CACA,WAAA,CACA,4IAEI,8BAAA,CAMhB,qBACI,kBAAA,CACA,qBAAA,CACA,4CAAA,CACA,8BAAA,CACA,YAAA,CACA,gBAAA,CACA,yBAAA,CACA,mBAAA,CACA,6BAAA,CACA,UAAA,CACA,iBAAA,CACA,+EAAA,CACA,gDAAA,CACA,+CAAA,CACA,kBAAA,CACA,+CAAA,CACA,sCAAA,CACA,6BAAA,CACA,eAAA,CACA,sCACI,YAAA,CAEJ,iDACI,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,oDACI,MAAA,CACA,QAAA,CAIR,kDACI,4BAAA,CACA,6BAAA,CACA,wEAAA,CACA,WAAA,CACA,UAAA,CACA,YAAA,CACA,eAAA,CACA,uCAAA,CACA,sCAAA,CACA,YAAA,CACA,mCAAA,CACA,qCAAA,CACA,qBAAA,CACA,mBAAA,CAGJ,yDACI,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,6BAAA,CACA,wBAAA,CACA,kBAAA,CACA,qFACI,iBAAA,CACA,UAAA,CACA,MAAA,CACA,qCAAA,CACA,uCAAA,CACA,6BAAA,CACA,wEAAA,CACA,qCAAA,CACA,uBAAA,CACA,eAAA,CACA,eAAA,CACA,kBAAA,CACA,YAAA,CAEJ,4FACI,kCAAA,CACA,mBAAA,CAIR,4DACI,YAAA,CACA,wBAAA,CACA,kBAAA,CACA,yBAAA,CACA,qBAAA",sourcesContent:[`#mynah-feedback-form-wrapper {
    display: flex;
    flex-flow: column nowrap;
    position: absolute;
    bottom: 0;
    left: var(--mynah-sizing-2);
    right: var(--mynah-sizing-2);
    width: auto;
    box-sizing: border-box;
    z-index: 9999999;
    opacity: 0;
    transform: translate3d(0, 5vh, 0);
    transition: var(--mynah-bottom-panel-transition);
    overflow: visible;
    &:before {
        transition: all 400ms cubic-bezier(0.25, 0, 0, 1);
        content: "";
        position: absolute;
        right: calc(-1 * var(--mynah-sizing-2));
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: black;
        opacity: 0;
        pointer-events: none;
        transform: translate3d(0, 0, 0) scale(2);
        transform-origin: center center;
        z-index: -1;
    }
    > .mynah-bottom-block-close-button {
        transform: translate3d(calc(-1 * var(--mynah-sizing-1)), calc(-100% - var(--mynah-sizing-3)), 0px);
    }
    & + #mynah-wrapper {
        transition: var(--mynah-bottom-panel-transition);
    }
    &:not(.mynah-feedback-form-show) {
        &,
        & * {
            pointer-events: none !important;
        }
    }
    &.mynah-feedback-form-show {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        &:before {
            opacity: 0.15;
        }
        & + #mynah-wrapper {
            transform: translate3d(0, 0px, 0) scale(0.95);
            transform-origin: top center;
            opacity: 0.25;
            &,
            & * {
                pointer-events: none !important;
            }
        }
    }
}

.mynah-feedback-form {
    pointer-events: all;
    box-sizing: border-box;
    transition: var(--mynah-short-transition-rev);
    transform: translate3d(0, 0, 0);
    display: flex;
    flex-flow: column;
    gap: var(--mynah-sizing-4);
    align-items: stretch;
    transform-origin: right bottom;
    z-index: 10;
    position: relative;
    border: var(--mynah-button-border-width) solid var(--mynah-color-border-default);
    border-top-right-radius: var(--mynah-card-radius);
    border-top-left-radius: var(--mynah-card-radius);
    border-bottom: none;
    box-shadow: 0px -25px 20px -25px rgba(0, 0, 0, 0.15);
    background-color: var(--mynah-color-bg);
    padding: var(--mynah-sizing-4);
    min-height: 20vh;
    > .mynah-card-body {
        flex: initial;
    }
    > .mynah-feedback-form-header {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        > h4 {
            flex: 1;
            margin: 0;
        }
    }

    > .mynah-feedback-form-comment {
        background-color: transparent;
        padding: var(--mynah-sizing-3);
        border: var(--mynah-border-width) solid var(--mynah-color-border-default);
        resize: none;
        width: 100%;
        height: 100px;
        max-height: 25vh;
        border-radius: var(--mynah-input-radius);
        font-size: var(--mynah-font-size-small);
        outline: none;
        color: var(--mynah-color-text-input);
        background-color: var(--mynah-card-bg);
        box-sizing: border-box;
        font-family: inherit;
    }

    > .mynah-feedback-form-select-wrapper {
        position: relative;
        display: flex;
        box-sizing: border-box;
        padding: var(--mynah-sizing-3);
        justify-content: flex-end;
        align-items: center;
        > .mynah-feedback-form-select {
            position: absolute;
            width: 100%;
            left: 0;
            color: var(--mynah-color-text-default);
            border-radius: var(--mynah-input-radius);
            padding: var(--mynah-sizing-3);
            border: var(--mynah-border-width) solid var(--mynah-color-border-default);
            background-color: var(--mynah-card-bg);
            -webkit-appearance: none;
            appearance: none;
            text-indent: 1px;
            text-overflow: clip;
            outline: none;
        }
        > .mynah-feedback-form-select-handle {
            color: var(--mynah-color-text-weak);
            pointer-events: none;
        }
    }

    > .mynah-feedback-form-buttons-container {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: var(--mynah-sizing-1);
        box-sizing: border-box;
    }
}
`],sourceRoot:""}]),a.locals={};const d=a},9741:(v,t,e)=>{"use strict";e.d(t,{Z:()=>d});var l=e(7537),c=e.n(l),A=e(3645),a=e.n(A)()(c());a.push([v.id,'.mynah-form-input-wrapper{position:relative;display:flex;box-sizing:border-box;gap:var(--mynah-sizing-2);flex-flow:column nowrap}.mynah-form-input-wrapper[disabled] .mynah-form-input{opacity:.5 !important}.mynah-form-input-wrapper[disabled],.mynah-form-input-wrapper[disabled] *{pointer-events:none !important}.mynah-form-input-wrapper>.mynah-form-input-label>.mynah-ui-form-item-mandatory-title{display:inline-flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;gap:var(--mynah-sizing-1)}.mynah-form-input-wrapper>.mynah-form-input-label>.mynah-ui-form-item-mandatory-title>.mynah-ui-icon{color:var(--mynah-color-status-warning);opacity:.75;font-size:75%}.mynah-form-input-wrapper .mynah-form-input-container{position:relative;display:flex;box-sizing:border-box;justify-content:flex-end;align-items:center}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input{width:100%;left:0;color:var(--mynah-color-text-default);border-radius:var(--mynah-input-radius);-webkit-appearance:none;appearance:none;text-indent:1px;text-overflow:clip;outline:none}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input::placeholder{color:var(--mynah-color-text-weak);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input option.empty-option{font-style:italic;opacity:.5}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input:not(.no-border){padding:var(--mynah-sizing-3);border:var(--mynah-border-width) solid var(--mynah-color-border-default);background-color:var(--mynah-card-bg)}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper{display:inline-flex;flex-flow:row nowrap;justify-content:center;align-items:center}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper:not(:last-child){margin-right:var(--mynah-sizing-4)}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper>.mynah-form-input-radio-label{display:inline-flex;flex-flow:row nowrap;justify-content:center;align-items:center;position:relative;gap:var(--mynah-sizing-1);cursor:pointer}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper>.mynah-form-input-radio-label>input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper>.mynah-form-input-radio-label>input:checked+.mynah-form-input-radio-check{border-color:var(--mynah-color-button)}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper>.mynah-form-input-radio-label>input:checked+.mynah-form-input-radio-check>.mynah-ui-icon{transform:scale(0.75);color:var(--mynah-card-bg);opacity:1}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper>.mynah-form-input-radio-label>input:checked+.mynah-form-input-radio-check::after{transform:scale(1);background-color:var(--mynah-color-button);opacity:1}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper>.mynah-form-input-radio-label>.mynah-form-input-radio-check{position:relative;transition:var(--mynah-bottom-panel-transition);width:var(--mynah-sizing-6);height:var(--mynah-sizing-6);border-radius:var(--mynah-sizing-3);overflow:hidden;box-sizing:border-box;border:var(--mynah-border-width) solid var(--mynah-color-border-default);display:inline-flex;flex-flow:row nowrap;justify-content:center;align-items:center}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper>.mynah-form-input-radio-label>.mynah-form-input-radio-check>.mynah-ui-icon{position:relative;transition:inherit;transform:scale(0);transform-origin:center center;color:var(--mynah-color-button);z-index:10}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper>.mynah-form-input-radio-label>.mynah-form-input-radio-check::after{content:"";transition:inherit;position:absolute;top:calc(0*var(--mynah-border-width));right:calc(0*var(--mynah-border-width));bottom:calc(0*var(--mynah-border-width));left:calc(0*var(--mynah-border-width));background-color:var(--mynah-color-border-default);transform:scale(0.5);transform-origin:center center;opacity:0;border-radius:inherit;z-index:5}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-feedback-form-stars-container{transition:var(--mynah-short-transition-rev);transform-origin:right bottom;display:inline-flex;flex-flow:row nowrap}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-feedback-form-stars-container>.mynah-feedback-form-star{cursor:pointer;padding-right:var(--mynah-sizing-1);color:var(--mynah-color-button);font-size:1.5rem;transition:var(--mynah-very-short-transition)}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-feedback-form-stars-container>.mynah-feedback-form-star>.mynah-ui-icon{transition:var(--mynah-very-short-transition);opacity:.4;transform:translate3d(0, 0, 0) scale(0.6)}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-feedback-form-stars-container[selected-star]:not(:hover)>:not(.mynah-feedback-form-star.selected~.mynah-feedback-form-star)>.mynah-ui-icon,.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-feedback-form-stars-container:hover>:not(.mynah-feedback-form-star:hover~.mynah-feedback-form-star)>.mynah-ui-icon{opacity:1;transform:translate3d(0, 0, 0) scale(1)}.mynah-form-input-wrapper .mynah-form-input-container>textarea.mynah-form-input{font-family:var(--mynah-font-family);resize:none;font-size:var(--mynah-font-size-medium);color:var(--mynah-color-text-input);outline:none}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-select-handle{position:absolute;color:var(--mynah-color-text-weak);pointer-events:none;transform:translateX(-100%)}.mynah-chat-item-form-items-container{display:flex;flex-flow:column nowrap;gap:var(--mynah-sizing-5);overflow:hidden;padding-bottom:var(--mynah-sizing-1)}.mynah-chat-item-buttons-container{display:flex;flex-flow:row-reverse wrap;gap:var(--mynah-sizing-2);overflow:hidden;padding-top:var(--mynah-sizing-1);padding-bottom:var(--mynah-sizing-1);justify-content:flex-end;align-items:center}',"",{version:3,sources:["webpack://./src/styles/components/_form-input.scss"],names:[],mappings:"AAAA,0BACI,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,yBAAA,CACA,uBAAA,CAEI,sDACI,qBAAA,CAEJ,0EAEI,8BAAA,CAIJ,sFACI,mBAAA,CACA,oBAAA,CACA,0BAAA,CACA,kBAAA,CACA,yBAAA,CACA,qGACI,uCAAA,CACA,WAAA,CACA,aAAA,CAIZ,sDACI,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,wBAAA,CACA,kBAAA,CACA,wEACI,UAAA,CACA,MAAA,CACA,qCAAA,CACA,uCAAA,CAgBA,uBAAA,CACA,eAAA,CACA,eAAA,CACA,kBAAA,CACA,YAAA,CAnBA,qFACI,kCAAA,CACA,sBAAA,CACA,kBAAA,CACA,eAAA,CAEJ,4FACI,iBAAA,CACA,UAAA,CAEJ,wFACI,6BAAA,CACA,wEAAA,CACA,qCAAA,CAOJ,wGACI,mBAAA,CACA,oBAAA,CACA,sBAAA,CACA,kBAAA,CACA,yHACI,kCAAA,CAEJ,sIACI,mBAAA,CACA,oBAAA,CACA,sBAAA,CACA,kBAAA,CACA,iBAAA,CACA,yBAAA,CACA,cAAA,CACA,4IACI,iBAAA,CACA,SAAA,CACA,cAAA,CACA,QAAA,CACA,OAAA,CACA,kLACI,sCAAA,CACA,iMACI,qBAAA,CACA,0BAAA,CACA,SAAA,CAEJ,yLACI,kBAAA,CACA,0CAAA,CACA,SAAA,CAIZ,oKACI,iBAAA,CACA,+CAAA,CACA,2BAAA,CACA,4BAAA,CACA,mCAAA,CACA,eAAA,CACA,qBAAA,CACA,wEAAA,CACA,mBAAA,CACA,oBAAA,CACA,sBAAA,CACA,kBAAA,CACA,mLACI,iBAAA,CACA,kBAAA,CACA,kBAAA,CACA,8BAAA,CACA,+BAAA,CACA,UAAA,CAEJ,2KAEI,UAAA,CACA,kBAAA,CACA,iBAAA,CACA,qCAJY,CAKZ,uCALY,CAMZ,wCANY,CAOZ,sCAPY,CAQZ,kDAAA,CACA,oBAAA,CACA,8BAAA,CACA,SAAA,CACA,qBAAA,CACA,SAAA,CAMhB,6GACI,4CAAA,CACA,6BAAA,CACA,mBAAA,CACA,oBAAA,CACA,uIACI,cAAA,CACA,mCAAA,CACA,+BAAA,CACA,gBAAA,CACA,6CAAA,CACA,sJACI,6CAAA,CACA,UAAA,CACA,yCAAA,CAKJ,4ZACI,SAAA,CACA,uCAAA,CAKhB,gFACI,oCAAA,CACA,WAAA,CACA,uCAAA,CACA,mCAAA,CACA,YAAA,CAEJ,2EACI,iBAAA,CACA,kCAAA,CACA,mBAAA,CACA,2BAAA,CAKZ,sCACI,YAAA,CACA,uBAAA,CACA,yBAAA,CACA,eAAA,CACA,oCAAA,CAEJ,mCACI,YAAA,CACA,0BAAA,CACA,yBAAA,CACA,eAAA,CACA,iCAAA,CACA,oCAAA,CACA,wBAAA,CACA,kBAAA",sourcesContent:[`.mynah-form-input-wrapper {
    position: relative;
    display: flex;
    box-sizing: border-box;
    gap: var(--mynah-sizing-2);
    flex-flow: column nowrap;
    &[disabled] {
        .mynah-form-input {
            opacity: 0.5 !important;
        }
        &,
        & * {
            pointer-events: none !important;
        }
    }
    > .mynah-form-input-label {
        > .mynah-ui-form-item-mandatory-title {
            display: inline-flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            gap: var(--mynah-sizing-1);
            > .mynah-ui-icon {
                color: var(--mynah-color-status-warning);
                opacity: 0.75;
                font-size: 75%;
            }
        }
    }
    .mynah-form-input-container {
        position: relative;
        display: flex;
        box-sizing: border-box;
        justify-content: flex-end;
        align-items: center;
        > .mynah-form-input {
            width: 100%;
            left: 0;
            color: var(--mynah-color-text-default);
            border-radius: var(--mynah-input-radius);
            &::placeholder {
                color: var(--mynah-color-text-weak);
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
            option.empty-option {
                font-style: italic;
                opacity: 0.5;
            }
            &:not(.no-border) {
                padding: var(--mynah-sizing-3);
                border: var(--mynah-border-width) solid var(--mynah-color-border-default);
                background-color: var(--mynah-card-bg);
            }
            -webkit-appearance: none;
            appearance: none;
            text-indent: 1px;
            text-overflow: clip;
            outline: none;
            > .mynah-form-input-radio-wrapper {
                display: inline-flex;
                flex-flow: row nowrap;
                justify-content: center;
                align-items: center;
                &:not(:last-child) {
                    margin-right: var(--mynah-sizing-4);
                }
                > .mynah-form-input-radio-label {
                    display: inline-flex;
                    flex-flow: row nowrap;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    gap: var(--mynah-sizing-1);
                    cursor: pointer;
                    > input {
                        position: absolute;
                        opacity: 0;
                        cursor: pointer;
                        height: 0;
                        width: 0;
                        &:checked + .mynah-form-input-radio-check {
                            border-color: var(--mynah-color-button);
                            > .mynah-ui-icon {
                                transform: scale(0.75);
                                color: var(--mynah-card-bg);
                                opacity: 1;
                            }
                            &::after {
                                transform: scale(1);
                                background-color: var(--mynah-color-button);
                                opacity: 1;
                            }
                        }
                    }
                    > .mynah-form-input-radio-check {
                        position: relative;
                        transition: var(--mynah-bottom-panel-transition);
                        width: var(--mynah-sizing-6);
                        height: var(--mynah-sizing-6);
                        border-radius: var(--mynah-sizing-3);
                        overflow: hidden;
                        box-sizing: border-box;
                        border: var(--mynah-border-width) solid var(--mynah-color-border-default);
                        display: inline-flex;
                        flex-flow: row nowrap;
                        justify-content: center;
                        align-items: center;
                        > .mynah-ui-icon {
                            position: relative;
                            transition: inherit;
                            transform: scale(0);
                            transform-origin: center center;
                            color: var(--mynah-color-button);
                            z-index: 10;
                        }
                        &::after {
                            $edgeSpace: calc(0 * var(--mynah-border-width));
                            content: "";
                            transition: inherit;
                            position: absolute;
                            top: $edgeSpace;
                            right: $edgeSpace;
                            bottom: $edgeSpace;
                            left: $edgeSpace;
                            background-color: var(--mynah-color-border-default);
                            transform: scale(0.5);
                            transform-origin: center center;
                            opacity: 0;
                            border-radius: inherit;
                            z-index: 5;
                        }
                    }
                }
            }

            > .mynah-feedback-form-stars-container {
                transition: var(--mynah-short-transition-rev);
                transform-origin: right bottom;
                display: inline-flex;
                flex-flow: row nowrap;
                > .mynah-feedback-form-star {
                    cursor: pointer;
                    padding-right: var(--mynah-sizing-1);
                    color: var(--mynah-color-button);
                    font-size: 1.5rem;
                    transition: var(--mynah-very-short-transition);
                    > .mynah-ui-icon {
                        transition: var(--mynah-very-short-transition);
                        opacity: 0.4;
                        transform: translate3d(0, 0, 0) scale(0.6);
                    }
                }
                &[selected-star]:not(:hover) > :not(.mynah-feedback-form-star.selected ~ .mynah-feedback-form-star),
                &:hover > :not(.mynah-feedback-form-star:hover ~ .mynah-feedback-form-star) {
                    > .mynah-ui-icon {
                        opacity: 1;
                        transform: translate3d(0, 0, 0) scale(1);
                    }
                }
            }
        }
        > textarea.mynah-form-input {
            font-family: var(--mynah-font-family);
            resize: none;
            font-size: var(--mynah-font-size-medium);
            color: var(--mynah-color-text-input);
            outline: none;
        }
        > .mynah-select-handle {
            position: absolute;
            color: var(--mynah-color-text-weak);
            pointer-events: none;
            transform: translateX(-100%);
        }
    }
}

.mynah-chat-item-form-items-container {
    display: flex;
    flex-flow: column nowrap;
    gap: var(--mynah-sizing-5);
    overflow: hidden;
    padding-bottom: var(--mynah-sizing-1);
}
.mynah-chat-item-buttons-container {
    display: flex;
    flex-flow: row-reverse wrap;
    gap: var(--mynah-sizing-2);
    overflow: hidden;
    padding-top: var(--mynah-sizing-1);
    padding-bottom: var(--mynah-sizing-1);
    justify-content: flex-end;
    align-items: center;
}
`],sourceRoot:""}]),a.locals={};const d=a},8634:(v,t,e)=>{"use strict";e.d(t,{Z:()=>d});var l=e(7537),c=e.n(l),A=e(3645),a=e.n(A)()(c());a.push([v.id,".mynah-ui-icon{font-style:normal;font-weight:normal;display:inline-flex;width:1em;height:1em;font-variant:normal;text-transform:none;-webkit-mask:center/100% no-repeat;mask:center/100% no-repeat;color:inherit;background-color:currentColor}.mynah-ui-icon>span{display:none}","",{version:3,sources:["webpack://./src/styles/components/_icon.scss"],names:[],mappings:"AAAA,eACI,iBAAA,CACA,kBAAA,CACA,mBAAA,CACA,SAAA,CACA,UAAA,CACA,mBAAA,CACA,mBAAA,CACA,kCAAA,CACA,0BAAA,CACA,aAAA,CACA,6BAAA,CAEA,oBACI,YAAA",sourcesContent:[`.mynah-ui-icon {
    font-style: normal;
    font-weight: normal;
    display: inline-flex;
    width: 1em;
    height: 1em;
    font-variant: normal;
    text-transform: none;
    -webkit-mask: center/100% no-repeat;
    mask: center/100% no-repeat;
    color: inherit;
    background-color: currentColor;

    > span {
        display: none;
    }
}
`],sourceRoot:""}]),a.locals={};const d=a},1360:(v,t,e)=>{"use strict";e.d(t,{Z:()=>d});var l=e(7537),c=e.n(l),A=e(3645),a=e.n(A)()(c());a.push([v.id,'.mynah-nav-tabs-wrapper{border-top:var(--mynah-button-border-width) solid var(--mynah-color-border-default);background-color:var(--mynah-color-bg);display:flex;align-items:center;overflow:hidden;z-index:100;min-height:var(--mynah-sizing-10);max-height:var(--mynah-sizing-10);position:relative}.mynah-nav-tabs-wrapper:after{content:"";position:absolute;left:0;right:0;bottom:0;width:auto;height:var(--mynah-button-border-width);background-color:var(--mynah-color-border-default)}.mynah-nav-tabs-wrapper>.mynah-toggle-container{height:100%;background:none;box-sizing:border-box}.mynah-nav-tabs-wrapper>.mynah-toggle-container>span{white-space:nowrap}.mynah-nav-tabs-wrapper:empty{display:none}.mynah-nav-tabs-wrapper.mynah-nav-tabs-loading,.mynah-nav-tabs-wrapper.mynah-nav-tabs-loading *{pointer-events:none}.mynah-nav-tabs-bar-buttons-wrapper{border-left:var(--mynah-button-border-width) solid var(--mynah-color-border-default);display:inline-flex;align-items:center;overflow:hidden;z-index:100;min-height:var(--mynah-sizing-10);max-height:var(--mynah-sizing-10);position:relative;flex-shrink:0;flex-grow:1;justify-content:flex-end}.mynah-nav-tabs-bar-buttons-wrapper:empty{display:none}.mynah-nav-tabs-bar-buttons-wrapper-overlay{display:inline-flex;flex-flow:column nowrap;align-items:flex-start;justify-content:flex-start;gap:var(--mynah-sizing-1);overflow:hidden;position:relative;pointer-events:all;padding:var(--mynah-sizing-4);border-radius:inherit}.mynah-nav-tabs-bar-buttons-wrapper-overlay button{pointer-events:all}.mynah-nav-tabs-bar-buttons-wrapper-overlay button>.mynah-button-label{padding:0}.mynah-nav-tabs-bar-buttons-wrapper-overlay button>i+.mynah-button-label{padding-left:var(--mynah-sizing-1)}.mynah-nav-tabs-max-reached-overlay{min-width:max(20vw,100px);max-width:90vw}.mynah-overlay>.mynah-overlay-container .mynah-card.mynah-nav-tabs-close-confirmation-overlay>.mynah-nav-tabs-close-confirmation-buttons-wrapper{display:inline-flex;flex-flow:row nowrap;max-width:max-content;gap:var(--mynah-sizing-3)}.mynah-overlay>.mynah-overlay-container .mynah-card.mynah-nav-tabs-close-confirmation-overlay>.mynah-nav-tabs-close-confirmation-buttons-wrapper>.mynah-button{pointer-events:all !important}.mynah-overlay>.mynah-overlay-container .mynah-card.mynah-nav-tabs-close-confirmation-overlay>.mynah-nav-tabs-close-confirmation-buttons-wrapper>.mynah-button.mynah-nav-tabs-close-confirmation-close-button{border:var(--mynah-border-width) solid var(--mynah-color-border-default);color:var(--mynah-color-text-default);background-color:transparent}.mynah-overlay>.mynah-overlay-container .mynah-card.mynah-nav-tabs-close-confirmation-overlay>.mynah-nav-tabs-close-confirmation-buttons-wrapper>.mynah-button.mynah-nav-tabs-close-confirmation-close-button:hover{border-color:var(--mynah-color-text-default)}',"",{version:3,sources:["webpack://./src/styles/components/_nav-tabs.scss","webpack://./src/styles/components/_nav-tabs-buttons-wrapper.scss"],names:[],mappings:"AAAA,wBACE,mFAAA,CACA,sCAAA,CACA,YAAA,CACA,kBAAA,CACA,eAAA,CACA,WAAA,CACA,iCAAA,CACA,iCAAA,CACA,iBAAA,CACA,8BACE,UAAA,CACA,iBAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,UAAA,CACA,uCAAA,CACA,kDAAA,CAGF,gDACE,WAAA,CACA,eAAA,CACA,qBAAA,CACA,qDACE,kBAAA,CAGJ,8BACE,YAAA,CAGF,gGAEE,mBAAA,CCnCJ,oCACE,oFAAA,CACA,mBAAA,CACA,kBAAA,CACA,eAAA,CACA,WAAA,CACA,iCAAA,CACA,iCAAA,CACA,iBAAA,CACA,aAAA,CACA,WAAA,CACA,wBAAA,CACA,0CACE,YAAA,CAGJ,4CACE,mBAAA,CACA,uBAAA,CACA,sBAAA,CACA,0BAAA,CACA,yBAAA,CACA,eAAA,CACA,iBAAA,CACA,kBAAA,CACA,6BAAA,CACA,qBAAA,CACA,mDACE,kBAAA,CACA,uEACE,SAAA,CAGA,yEACE,kCAAA,CDOR,oCACE,yBAAA,CACA,cAAA,CAIA,iJACE,mBAAA,CACA,oBAAA,CACA,qBAAA,CACA,yBAAA,CACA,+JACE,6BAAA,CACA,8MACE,wEAAA,CACA,qCAAA,CACA,4BAAA,CACA,oNACE,4CAAA",sourcesContent:[`.mynah-nav-tabs-wrapper {
  border-top: var(--mynah-button-border-width) solid var(--mynah-color-border-default);
  background-color: var(--mynah-color-bg);
  display: flex;
  align-items: center;
  overflow: hidden;
  z-index: 100;
  min-height: var(--mynah-sizing-10);
  max-height: var(--mynah-sizing-10);
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: var(--mynah-button-border-width);
    background-color: var(--mynah-color-border-default);
  }

  > .mynah-toggle-container {
    height: 100%;
    background: none;
    box-sizing: border-box;
    > span {
      white-space: nowrap;
    }
  }
  &:empty {
    display: none;
  }

  &.mynah-nav-tabs-loading,
  &.mynah-nav-tabs-loading * {
    pointer-events: none;
  }
}

@import 'nav-tabs-buttons-wrapper';

.mynah-nav-tabs-max-reached-overlay {
  min-width: max(20vw, 100px);
  max-width: 90vw;
}

.mynah-overlay > .mynah-overlay-container .mynah-card.mynah-nav-tabs-close-confirmation-overlay {
  > .mynah-nav-tabs-close-confirmation-buttons-wrapper {
    display: inline-flex;
    flex-flow: row nowrap;
    max-width: max-content;
    gap: var(--mynah-sizing-3);
    > .mynah-button {
      pointer-events: all !important;
      &.mynah-nav-tabs-close-confirmation-close-button {
        border: var(--mynah-border-width) solid var(--mynah-color-border-default);
        color: var(--mynah-color-text-default);
        background-color: transparent;
        &:hover {
          border-color: var(--mynah-color-text-default);
        }
      }
    }
  }
}
`,`.mynah-nav-tabs-bar-buttons-wrapper {
  border-left: var(--mynah-button-border-width) solid var(--mynah-color-border-default);
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  z-index: 100;
  min-height: var(--mynah-sizing-10);
  max-height: var(--mynah-sizing-10);
  position: relative;
  flex-shrink: 0;
  flex-grow: 1;
  justify-content: flex-end;
  &:empty {
    display: none;
  }
}
.mynah-nav-tabs-bar-buttons-wrapper-overlay {
  display: inline-flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--mynah-sizing-1);
  overflow: hidden;
  position: relative;
  pointer-events: all;
  padding: var(--mynah-sizing-4);
  border-radius: inherit;
  button {
    pointer-events: all;
    > .mynah-button-label {
      padding: 0;
    }
    > i {
      & + .mynah-button-label {
        padding-left: var(--mynah-sizing-1);
      }
    }
  }
}
`],sourceRoot:""}]),a.locals={};const d=a},3722:(v,t,e)=>{"use strict";e.d(t,{Z:()=>d});var l=e(7537),c=e.n(l),A=e(3645),a=e.n(A)()(c());a.push([v.id,".mynah-no-tabs-wrapper{display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;gap:var(--mynah-sizing-6);flex:1}.mynah-no-tabs-wrapper.hidden{display:none}.mynah-no-tabs-wrapper:not(.hidden)+.mynah-ui-tab-contents-wrapper{display:none}.mynah-no-tabs-wrapper>.mynah-no-tabs-icon-wrapper>.mynah-ui-icon{font-size:calc(2*var(--mynah-sizing-18));color:var(--mynah-color-text-weak);opacity:.15}.mynah-no-tabs-wrapper>.mynah-no-tabs-info{color:var(--mynah-color-text-weak);font-size:var(--mynah-font-size-large);opacity:.75;text-align:center}.mynah-no-tabs-wrapper>.mynah-no-tabs-info>*{margin:1rem}.mynah-no-tabs-wrapper>.mynah-no-tabs-buttons-wrapper>.mynah-button{padding:var(--mynah-sizing-2) var(--mynah-sizing-3);max-height:initial;max-width:initial;height:auto;width:auto}","",{version:3,sources:["webpack://./src/styles/components/_no-tabs.scss"],names:[],mappings:"AAAA,uBACE,YAAA,CACA,uBAAA,CACA,sBAAA,CACA,kBAAA,CACA,yBAAA,CACA,MAAA,CACA,8BACE,YAAA,CAEF,mEACE,YAAA,CAGA,kEACE,wCAAA,CACA,kCAAA,CACA,WAAA,CAGJ,2CAIE,kCAAA,CACA,sCAAA,CACA,WAAA,CACA,iBAAA,CANA,6CACE,WAAA,CAQF,oEACE,mDAAA,CACA,kBAAA,CACA,iBAAA,CACA,WAAA,CACA,UAAA",sourcesContent:[`.mynah-no-tabs-wrapper {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: var(--mynah-sizing-6);
  flex: 1;
  &.hidden {
    display: none;
  }
  &:not(.hidden) + .mynah-ui-tab-contents-wrapper {
    display: none;
  }
  > .mynah-no-tabs-icon-wrapper {
    > .mynah-ui-icon {
      font-size: calc(2 * var(--mynah-sizing-18));
      color: var(--mynah-color-text-weak);
      opacity: 0.15;
    }
  }
  > .mynah-no-tabs-info {
    > * {
      margin: 1rem;
    }
    color: var(--mynah-color-text-weak);
    font-size: var(--mynah-font-size-large);
    opacity: 0.75;
    text-align: center;
  }
  > .mynah-no-tabs-buttons-wrapper {
    > .mynah-button {
      padding: var(--mynah-sizing-2) var(--mynah-sizing-3);
      max-height: initial;
      max-width: initial;
      height: auto;
      width: auto;
    }
  }
}`],sourceRoot:""}]),a.locals={};const d=a},2155:(v,t,e)=>{"use strict";e.d(t,{Z:()=>d});var l=e(7537),c=e.n(l),A=e(3645),a=e.n(A)()(c());a.push([v.id,".mynah-notification{display:inline-flex;flex-flow:row nowrap;align-items:flex-start;justify-content:flex-start;gap:var(--mynah-sizing-3);padding:var(--mynah-sizing-5);overflow:hidden;position:relative}.mynah-notification.mynah-notification-clickable{pointer-events:all;cursor:pointer}.mynah-notification>.mynah-ui-icon{font-size:var(--mynah-sizing-6)}.mynah-notification>.mynah-ui-icon-ok-circled{color:var(--mynah-color-status-success)}.mynah-notification>.mynah-ui-icon-info{color:var(--mynah-color-status-info)}.mynah-notification>.mynah-ui-icon-warning{color:var(--mynah-color-status-warning)}.mynah-notification>.mynah-ui-icon-error{color:var(--mynah-color-status-error)}.mynah-notification>.mynah-notification-container{flex:1;max-width:50vw;min-width:200px;display:inline-flex;flex-flow:column nowrap;align-items:flex-start;justify-content:flex-start;gap:var(--mynah-sizing-3);overflow:hidden;position:relative}.mynah-notification>.mynah-notification-container>.mynah-notification-title{margin:0}.mynah-notification>.mynah-notification-container>.mynah-notification-title:empty{display:none}.mynah-notification>.mynah-notification-container>.mynah-notification-content{font-size:var(--mynah-font-size-small);display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:flex-start;gap:var(--mynah-sizing-2)}.mynah-notification>.mynah-notification-container>.mynah-notification-content>.mynah-button{align-self:stretch;background-color:var(--mynah-color-alternate);color:var(--mynah-color-alternate-reverse)}","",{version:3,sources:["webpack://./src/styles/components/_notification.scss"],names:[],mappings:"AAAA,oBACI,mBAAA,CACA,oBAAA,CACA,sBAAA,CACA,0BAAA,CACA,yBAAA,CACA,6BAAA,CACA,eAAA,CACA,iBAAA,CACA,iDACI,kBAAA,CACA,cAAA,CAEJ,mCACI,+BAAA,CAEI,8CACI,uCAAA,CAGA,wCACI,oCAAA,CADJ,2CACI,uCAAA,CADJ,yCACI,qCAAA,CAKhB,kDACI,MAAA,CACA,cAAA,CACA,eAAA,CACA,mBAAA,CACA,uBAAA,CACA,sBAAA,CACA,0BAAA,CACA,yBAAA,CACA,eAAA,CACA,iBAAA,CACA,4EACI,QAAA,CACA,kFACI,YAAA,CAGR,8EACI,sCAAA,CACA,YAAA,CACA,uBAAA,CACA,0BAAA,CACA,sBAAA,CACA,yBAAA,CACA,4FACI,kBAAA,CACA,6CAAA,CACA,0CAAA",sourcesContent:[`.mynah-notification {
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--mynah-sizing-3);
    padding: var(--mynah-sizing-5);
    overflow: hidden;
    position: relative;
    &.mynah-notification-clickable {
        pointer-events: all;
        cursor: pointer;
    }
    > .mynah-ui-icon {
        font-size: var(--mynah-sizing-6);
        &- {
            &ok-circled {
                color: var(--mynah-color-status-success);
            }
            @each $status in info warning error {
                &#{$status} {
                    color: var(--mynah-color-status-#{$status});
                }
            }
        }
    }
    > .mynah-notification-container {
        flex: 1;
        max-width: 50vw;
        min-width: 200px;
        display: inline-flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        justify-content: flex-start;
        gap: var(--mynah-sizing-3);
        overflow: hidden;
        position: relative;
        > .mynah-notification-title {
            margin: 0;
            &:empty {
                display: none;
            }
        }
        > .mynah-notification-content {
            font-size: var(--mynah-font-size-small);
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: flex-start;
            gap: var(--mynah-sizing-2);
            > .mynah-button {
                align-self: stretch;
                background-color: var(--mynah-color-alternate);
                color: var(--mynah-color-alternate-reverse);
            }
        }
    }
}
`],sourceRoot:""}]),a.locals={};const d=a},5247:(v,t,e)=>{"use strict";e.d(t,{Z:()=>d});var l=e(7537),c=e.n(l),A=e(3645),a=e.n(A)()(c());a.push([v.id,'.mynah-overlay{position:fixed;left:0;top:0;width:100%;height:100%;overflow:hidden;box-sizing:border-box;pointer-events:none;z-index:1000000}.mynah-overlay.mynah-overlay-dim-outside:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background-color:var(--mynah-color-bg);transition:var(--mynah-short-transition-rev-opacity);opacity:.45}.mynah-overlay>.mynah-overlay-container{--overlayLeftPos: calc(-1 * var(--mynah-sizing-1));--overlayTopPos: 0;--overlayInnerHorizontalOrigin: left;--overlayInnerVerticalOrigin: top;position:absolute;display:block;overflow:visible;border-radius:var(--mynah-card-radius);max-width:calc(100vw - var(--mynah-sizing-8)) !important;width:max-content;height:max-content;max-height:calc(100vh - var(--mynah-sizing-8)) !important;transform:translate3d(var(--overlayLeftPos), var(--overlayTopPos), 0)}.mynah-overlay>.mynah-overlay-container .mynah-card,.mynah-overlay>.mynah-overlay-container .mynah-card *{pointer-events:none !important}.mynah-overlay>.mynah-overlay-container .mynah-card .mynah-syntax-highlighter-copy-buttons,.mynah-overlay>.mynah-overlay-container .mynah-card * .mynah-syntax-highlighter-copy-buttons{display:none}.mynah-overlay>.mynah-overlay-container .mynah-card .mynah-syntax-highlighter-copy-buttons~*:last-child,.mynah-overlay>.mynah-overlay-container .mynah-card * .mynah-syntax-highlighter-copy-buttons~*:last-child{margin-bottom:0 !important}.mynah-overlay>.mynah-overlay-container.background:before{content:"";background-color:transparent;transition:var(--mynah-short-transition-rev);position:absolute;top:0;left:0;right:0;bottom:0;width:auto;height:auto;pointer-events:none;box-sizing:border-box;opacity:0;border:var(--mynah-button-border-width) solid var(--mynah-color-border-default);z-index:100;box-shadow:var(--mynah-shadow-overlay);transform-origin:left bottom;border-radius:inherit}.mynah-overlay>.mynah-overlay-container.background:after{content:"";position:absolute;width:var(--mynah-sizing-8);height:var(--mynah-sizing-8);left:0;top:0;opacity:0;border:var(--mynah-sizing-4);background-color:var(--mynah-card-bg);border-radius:inherit;transition:var(--mynah-short-transition-rev);transition-delay:20ms}.mynah-overlay>.mynah-overlay-container.horizontal-direction-to-left,.mynah-overlay>.mynah-overlay-container.horizontal-direction-from-end-to-left{--overlayLeftPos: -100%;--overlayInnerHorizontalOrigin: right}.mynah-overlay>.mynah-overlay-container.horizontal-direction-to-left:before,.mynah-overlay>.mynah-overlay-container.horizontal-direction-from-end-to-left:before{transform-origin:right center}.mynah-overlay>.mynah-overlay-container.horizontal-direction-to-left:after,.mynah-overlay>.mynah-overlay-container.horizontal-direction-from-end-to-left:after{left:calc(100% - var(--mynah-sizing-4))}.mynah-overlay>.mynah-overlay-container.horizontal-direction-at-center{--overlayInnerHorizontalOrigin: center;--overlayLeftPos: -50%}.mynah-overlay>.mynah-overlay-container.horizontal-direction-at-center:after{left:calc(50% - var(--mynah-sizing-4))}.mynah-overlay>.mynah-overlay-container.vertical-direction-to-top,.mynah-overlay>.mynah-overlay-container.vertical-direction-from-end-to-top{--overlayTopPos: -100%;--overlayInnerVerticalOrigin: bottom}.mynah-overlay>.mynah-overlay-container.vertical-direction-to-top:after,.mynah-overlay>.mynah-overlay-container.vertical-direction-from-end-to-top:after{top:calc(100% - var(--mynah-sizing-4))}.mynah-overlay>.mynah-overlay-container.vertical-direction-at-center{--overlayInnerVerticalOrigin: center;--overlayTopPos: -50%}.mynah-overlay>.mynah-overlay-container.vertical-direction-at-center:after{top:calc(50% - var(--mynah-sizing-4))}.mynah-overlay>.mynah-overlay-container>.mynah-overlay-inner-container{display:inline-block;overflow:hidden;z-index:10;position:relative;transform:translate3d(0, 0, 0) scale(0.85);transform-origin:var(--overlayInnerHorizontalOrigin) var(--overlayInnerVerticalOrigin);transition:var(--mynah-short-transition-rev);width:100%}.mynah-overlay>.mynah-overlay-container:before{transform:translate3d(0, 0, 0) scale(0.85);transition:var(--mynah-short-transition-rev)}.mynah-overlay>.mynah-overlay-container>.mynah-overlay-inner-container,.mynah-overlay>.mynah-overlay-container:before{opacity:0;transition-delay:0ms}.mynah-overlay:not(.mynah-overlay-open),.mynah-overlay:not(.mynah-overlay-open) *{pointer-events:none !important}.mynah-overlay.mynah-overlay-open>.mynah-overlay-container>.mynah-overlay-inner-container{transform:translate3d(0, 0, 0) scale(1)}.mynah-overlay.mynah-overlay-open>.mynah-overlay-container:before{transform:translate3d(0, 0, 0) scale(1);transition-delay:50ms;opacity:1}.mynah-overlay.mynah-overlay-open>.mynah-overlay-container>.mynah-overlay-inner-container{transition-delay:20ms}.mynah-overlay.mynah-overlay-open>.mynah-overlay-container>.mynah-overlay-inner-container{opacity:1}.mynah-overlay.mynah-overlay-open>.mynah-overlay-container:after{transition-delay:0ms;left:0;top:0;width:100%;height:100%;opacity:1}.mynah-overlay.mynah-overlay-open.mynah-overlay-close-on-outside-click{pointer-events:all}',"",{version:3,sources:["webpack://./src/styles/components/_overlay.scss"],names:[],mappings:"AAAA,eACI,cAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CACA,qBAAA,CACA,mBAAA,CACA,eAAA,CAEI,gDACI,UAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,sCAAA,CACA,oDAAA,CACA,WAAA,CAGR,wCACI,kDAAA,CACA,kBAAA,CACA,oCAAA,CACA,iCAAA,CACA,iBAAA,CACA,aAAA,CACA,gBAAA,CACA,sCAAA,CACA,wDAAA,CACA,iBAAA,CACA,kBAAA,CACA,yDAAA,CA6GA,qEAAA,CA3GA,0GAEI,8BAAA,CACA,wLACI,YAAA,CACA,kNACI,0BAAA,CAMR,0DACI,UAAA,CACA,4BAAA,CACA,4CAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,UAAA,CACA,WAAA,CACA,mBAAA,CACA,qBAAA,CACA,SAAA,CACA,+EAAA,CACA,WAAA,CACA,sCAAA,CACA,4BAAA,CACA,qBAAA,CAGJ,yDACI,UAAA,CACA,iBAAA,CACA,2BAAA,CACA,4BAAA,CACA,MAAA,CACA,KAAA,CACA,SAAA,CACA,4BAAA,CACA,qCAAA,CACA,qBAAA,CACA,4CAAA,CACA,qBAAA,CAKJ,mJAEI,uBAAA,CACA,qCAAA,CACA,iKACI,6BAAA,CAEJ,+JACI,uCAAA,CAGR,uEACI,sCAAA,CACA,sBAAA,CACA,6EACI,sCAAA,CAKR,6IAEI,sBAAA,CACA,oCAAA,CACA,yJACI,sCAAA,CAGR,qEACI,oCAAA,CACA,qBAAA,CACA,2EACI,qCAAA,CAKZ,uEACI,oBAAA,CACA,eAAA,CACA,UAAA,CACA,iBAAA,CACA,0CAAA,CACA,sFAAA,CACA,4CAAA,CACA,UAAA,CAEJ,+CACI,0CAAA,CACA,4CAAA,CAEJ,sHAEI,SAAA,CACA,oBAAA,CAMJ,kFAEI,8BAAA,CAMA,0FACI,uCAAA,CAEJ,kEACI,uCAAA,CACA,qBAAA,CACA,SAAA,CAEJ,0FACI,qBAAA,CAEJ,0FACI,SAAA,CAEJ,iEACI,oBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,SAAA,CAGR,uEACI,kBAAA",sourcesContent:[`.mynah-overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 1000000;
    &.mynah-overlay-dim-outside {
        &:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: var(--mynah-color-bg);
            transition: var(--mynah-short-transition-rev-opacity);
            opacity: 0.45;
        }
    }
    > .mynah-overlay-container {
        --overlayLeftPos: calc(-1 * var(--mynah-sizing-1));
        --overlayTopPos: 0;
        --overlayInnerHorizontalOrigin: left;
        --overlayInnerVerticalOrigin: top;
        position: absolute;
        display: block;
        overflow: visible;
        border-radius: var(--mynah-card-radius);
        max-width: calc(100vw - var(--mynah-sizing-8))!important;
        width: max-content;
        height: max-content;
        max-height: calc(100vh - var(--mynah-sizing-8))!important;

        .mynah-card,
        .mynah-card * {
            pointer-events: none !important;
            .mynah-syntax-highlighter-copy-buttons {
                display: none;
                & ~ *:last-child {
                    margin-bottom: 0 !important;
                }
            }
        }

        &.background {
            &:before {
                content: "";
                background-color: transparent;
                transition: var(--mynah-short-transition-rev);
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: auto;
                height: auto;
                pointer-events: none;
                box-sizing: border-box;
                opacity: 0;
                border: var(--mynah-button-border-width) solid var(--mynah-color-border-default);
                z-index: 100;
                box-shadow: var(--mynah-shadow-overlay);
                transform-origin: left bottom;
                border-radius: inherit;
            }

            &:after {
                content: "";
                position: absolute;
                width: var(--mynah-sizing-8);
                height: var(--mynah-sizing-8);
                left: 0;
                top: 0;
                opacity: 0;
                border: var(--mynah-sizing-4);
                background-color: var(--mynah-card-bg);
                border-radius: inherit;
                transition: var(--mynah-short-transition-rev);
                transition-delay: 20ms;
            }
        }

        &.horizontal-direction {
            &-to-left,
            &-from-end-to-left {
                --overlayLeftPos: -100%;
                --overlayInnerHorizontalOrigin: right;
                &:before{
                    transform-origin: right center;
                }
                &:after {
                    left: calc(100% - var(--mynah-sizing-4));
                }
            }
            &-at-center {
                --overlayInnerHorizontalOrigin: center;
                --overlayLeftPos: -50%;
                &:after {
                    left: calc(50% - var(--mynah-sizing-4));
                }
            }
        }
        &.vertical-direction {
            &-to-top,
            &-from-end-to-top {
                --overlayTopPos: -100%;
                --overlayInnerVerticalOrigin: bottom;
                &:after {
                    top: calc(100% - var(--mynah-sizing-4));
                }
            }
            &-at-center {
                --overlayInnerVerticalOrigin: center;
                --overlayTopPos: -50%;
                &:after {
                    top: calc(50% - var(--mynah-sizing-4));
                }
            }
        }

        > .mynah-overlay-inner-container {
            display: inline-block;
            overflow: hidden;
            z-index: 10;
            position: relative;
            transform: translate3d(0, 0, 0) scale(0.85);
            transform-origin: var(--overlayInnerHorizontalOrigin) var(--overlayInnerVerticalOrigin);
            transition: var(--mynah-short-transition-rev);
            width: 100%;
        }
        &:before {
            transform: translate3d(0, 0, 0) scale(0.85);
            transition: var(--mynah-short-transition-rev);
        }
        > .mynah-overlay-inner-container,
        &:before {
            opacity: 0;
            transition-delay: 0ms;
        }

        transform: translate3d(var(--overlayLeftPos), var(--overlayTopPos), 0);
    }
    &:not(.mynah-overlay-open) {
        &,
        & * {
            pointer-events: none !important;
        }
    }

    &.mynah-overlay-open {
        > .mynah-overlay-container {
            > .mynah-overlay-inner-container {
                transform: translate3d(0, 0, 0) scale(1);
            }
            &:before {
                transform: translate3d(0, 0, 0) scale(1);
                transition-delay: 50ms;
                opacity: 1;
            }
            > .mynah-overlay-inner-container {
                transition-delay: 20ms;
            }
            > .mynah-overlay-inner-container {
                opacity: 1;
            }
            &:after {
                transition-delay: 0ms;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                opacity: 1;
            }
        }
        &.mynah-overlay-close-on-outside-click {
            pointer-events: all;
        }
    }
}
`],sourceRoot:""}]),a.locals={};const d=a},8398:(v,t,e)=>{"use strict";e.d(t,{Z:()=>d});var l=e(7537),c=e.n(l),A=e(3645),a=e.n(A)()(c());a.push([v.id,':root{--mynah-font-family: var(--vscode-font-family), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Amazon Ember", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;font-size:var(--vscode-font-size, 13px);font-family:var(--mynah-font-family, "system-ui");--mynah-max-width: 2560px;--mynah-sizing-base: 0.25rem;--mynah-sizing-half: calc(var(--mynah-sizing-base) / 2);--mynah-sizing-1: calc(var(--mynah-sizing-base) * 1);--mynah-sizing-2: calc(var(--mynah-sizing-base) * 2);--mynah-sizing-3: calc(var(--mynah-sizing-base) * 3);--mynah-sizing-4: calc(var(--mynah-sizing-base) * 4);--mynah-sizing-5: calc(var(--mynah-sizing-base) * 5);--mynah-sizing-6: calc(var(--mynah-sizing-base) * 6);--mynah-sizing-7: calc(var(--mynah-sizing-base) * 7);--mynah-sizing-8: calc(var(--mynah-sizing-base) * 8);--mynah-sizing-9: calc(var(--mynah-sizing-base) * 9);--mynah-sizing-10: calc(var(--mynah-sizing-base) * 10);--mynah-sizing-11: calc(var(--mynah-sizing-base) * 11);--mynah-sizing-12: calc(var(--mynah-sizing-base) * 12);--mynah-sizing-13: calc(var(--mynah-sizing-base) * 13);--mynah-sizing-14: calc(var(--mynah-sizing-base) * 14);--mynah-sizing-15: calc(var(--mynah-sizing-base) * 15);--mynah-sizing-16: calc(var(--mynah-sizing-base) * 16);--mynah-sizing-17: calc(var(--mynah-sizing-base) * 17);--mynah-sizing-18: calc(var(--mynah-sizing-base) * 18);--mynah-chat-wrapper-spacing: var(--mynah-sizing-4);--mynah-button-border-width: 1px;--mynah-border-width: 1px;--mynah-color-text-default: var(--vscode-foreground);--mynah-color-text-alternate: var(--mynah-color-button-reverse);--mynah-color-text-strong: var(--vscode-input-foreground);--mynah-color-text-weak: var(--vscode-disabledForeground);--mynah-color-text-link: var(--vscode-textLink-foreground);--mynah-color-text-input: var(--vscode-input-foreground);--mynah-color-bg: var(--vscode-sideBar-background);--mynah-color-tab-active: var(--vscode-tab-activeBackground, var(--vscode-editor-background, var(--mynah-card-bg)));--mynah-color-light: rgba(0, 0, 0, 0.05);--mynah-color-border-default: var(--vscode-panel-border, var(--vscode-tab-border, rgba(0, 0, 0, 0.1)));--mynah-color-highlight: rgba(255, 179, 0, 0.25);--mynah-color-highlight-text: #886411;--mynah-color-toggle: var(--vscode-sideBar-background);--mynah-color-toggle-reverse: rgba(0, 0, 0, 0.5);--mynah-color-syntax-bg: var(--vscode-terminal-dropBackground);--mynah-color-syntax-variable: var(--vscode-debugTokenExpression-name);--mynah-color-syntax-function: var(--vscode-gitDecoration-modifiedResourceForeground);--mynah-color-syntax-operator: var(--vscode-debugTokenExpression-name);--mynah-color-syntax-attr-value: var(--vscode-debugIcon-stepBackForeground);--mynah-color-syntax-attr: var(--vscode-debugTokenExpression-string);--mynah-color-syntax-property: var(--vscode-terminal-ansiCyan);--mynah-color-syntax-comment: var(--vscode-debugConsole-sourceForeground);--mynah-color-syntax-code: var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit));--mynah-syntax-code-font-family: var(--vscode-editor-font-family);--mynah-syntax-code-font-size: var(--vscode-editor-font-size, var(--mynah-font-size-medium));--mynah-color-status-info: #0971d3;--mynah-color-status-success: #037f03;--mynah-color-status-warning: #b2911c;--mynah-color-status-error: #d91515;--mynah-color-button: var(--vscode-button-background);--mynah-color-button-reverse: var(--vscode-button-foreground);--mynah-color-alternate: var(--vscode-button-secondaryBackground);--mynah-color-alternate-reverse: var(--vscode-button-secondaryForeground);--mynah-card-bg: var(--vscode-editor-background);--mynah-card-bg-alternate: var(--mynah-color-button);--mynah-shadow-button: none;--mynah-shadow-card: none;--mynah-shadow-overlay: 0 0px 15px -5px rgba(0, 0, 0, 0.4);--mynah-font-size-xxsmall: 0.75rem;--mynah-font-size-xsmall: 0.85rem;--mynah-font-size-small: 0.95rem;--mynah-font-size-medium: 1rem;--mynah-font-size-large: 1.125rem;--mynah-line-height: 1.5rem;--mynah-syntax-code-line-height: 1.5rem;--mynah-card-radius: var(--mynah-sizing-2);--mynah-input-radius: var(--mynah-sizing-1);--mynah-card-radius-corner: 0;--mynah-button-radius: var(--mynah-sizing-1);--mynah-bottom-panel-transition: all 850ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-short-transition: all 600ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-long-transition: all 1650ms cubic-bezier(0.25, 1, 0, 1);--mynah-short-transition: all 550ms cubic-bezier(0.85, 0.15, 0, 1);--mynah-short-rev-transition: all 580ms cubic-bezier(0.35, 1, 0, 1);--mynah-short-transition-rev-opacity: opacity 750ms cubic-bezier(0.35, 1, 0, 1);--mynah-text-flow-transition: all 800ms cubic-bezier(0.35, 1.2, 0, 1), transform 800ms cubic-bezier(0.2, 1.05, 0, 1)}pre.diff-highlight>code .token.deleted:not(.prefix),pre>code.diff-highlight .token.deleted:not(.prefix){background-color:rgba(255,0,0,.1);color:inherit;display:block}pre.diff-highlight>code .token.inserted:not(.prefix),pre>code.diff-highlight .token.inserted:not(.prefix){background-color:rgba(0,255,128,.1);color:inherit;display:block}.mynah-syntax-highlighter{display:flex;flex-flow:column nowrap;box-sizing:border-box;overflow:hidden;background-color:var(--mynah-card-bg);max-width:100%;border:var(--mynah-border-width) solid var(--mynah-color-border-default);position:relative;border-radius:var(--mynah-input-radius);line-height:normal;color:var(--mynah-color-text-default)}.mynah-syntax-highlighter+*:not(:empty){margin-top:var(--mynah-sizing-2)}.mynah-syntax-highlighter:before,.mynah-syntax-highlighter>.line-numbers-rows:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background-color:var(--mynah-color-syntax-bg);opacity:.2;pointer-events:none;user-select:none}.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons{display:flex;align-items:center;justify-content:flex-end;padding:var(--mynah-sizing-half);padding-left:var(--mynah-sizing-3);order:256000;box-sizing:border-box;margin:0;margin-block:0 !important;position:relative;border-top:1px solid var(--mynah-color-border-default)}.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background-color:var(--mynah-color-border-default);opacity:.25}.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons>.mynah-syntax-highlighter-language{flex:1;font-size:var(--mynah-font-size-xsmall);display:inline-block;opacity:.65;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons .mynah-button{min-width:var(--mynah-sizing-6);height:calc(var(--mynah-sizing-6) + var(--mynah-sizing-half))}.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons .mynah-button *{font-size:var(--mynah-font-size-xsmall);color:var(--mynah-color-text-strong)}.mynah-syntax-highlighter.mynah-inline-code{display:inline-flex;max-width:100%;line-height:normal;padding:0 !important;margin:0;margin-block-start:0;margin-block-end:0;overflow:visible;border:none;color:var(--mynah-color-syntax-attr);margin-left:2px;margin-right:2px;padding-bottom:1px !important;margin-bottom:-1px;background-color:transparent !important}.mynah-syntax-highlighter.mynah-inline-code>pre{padding:0}.mynah-syntax-highlighter.mynah-inline-code:after{content:"";position:absolute;box-sizing:border-box;top:-1px;height:calc(100% + 2px);left:-4px;width:calc(100% + 8px);border-radius:var(--mynah-input-radius);border:var(--mynah-border-width) solid var(--mynah-color-border-default);background-color:var(--mynah-card-bg);z-index:-1}.mynah-syntax-highlighter.mynah-inline-code:before{top:-1px;height:calc(100% + 2px);left:-4px;width:calc(100% + 8px);border-radius:var(--mynah-input-radius);box-sizing:border-box}.mynah-syntax-highlighter>pre{padding:var(--mynah-sizing-2);margin:0;overflow-x:auto;overflow-y:hidden;position:relative}.mynah-syntax-highlighter>pre *,.mynah-syntax-highlighter>pre{font-size:var(--mynah-syntax-code-font-size) !important;font-family:var(--mynah-syntax-code-font-family) !important}.mynah-syntax-highlighter>pre code{color:var(--mynah-color-syntax-code);filter:brightness(0.95);white-space:pre;background-color:inherit}.mynah-syntax-highlighter>pre>code,.mynah-syntax-highlighter>pre{text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;tab-size:4;hyphens:none}.mynah-syntax-highlighter>pre>code::selection,.mynah-syntax-highlighter>pre::selection{text-shadow:none;background:#b3d4fc}.mynah-syntax-highlighter>pre .token.comment{color:var(--mynah-color-syntax-comment)}.mynah-syntax-highlighter>pre .token.prolog{color:var(--mynah-color-syntax-comment)}.mynah-syntax-highlighter>pre .token.doctype{color:var(--mynah-color-syntax-comment)}.mynah-syntax-highlighter>pre .token.cdata{color:var(--mynah-color-syntax-comment)}.mynah-syntax-highlighter>pre .token.punctuation{color:currentColor}.mynah-syntax-highlighter>pre .token.namespace{opacity:0.7}.mynah-syntax-highlighter>pre .token.property{color:var(--mynah-color-syntax-property)}.mynah-syntax-highlighter>pre .token.tag{color:var(--mynah-color-syntax-property)}.mynah-syntax-highlighter>pre .token.boolean{color:var(--mynah-color-syntax-property)}.mynah-syntax-highlighter>pre .token.number{color:var(--mynah-color-syntax-property)}.mynah-syntax-highlighter>pre .token.constant{color:var(--mynah-color-syntax-property)}.mynah-syntax-highlighter>pre .token.symbol{color:var(--mynah-color-syntax-property)}.mynah-syntax-highlighter>pre .token.inserted{color:var(--mynah-color-syntax-property)}.mynah-syntax-highlighter>pre .token.selector{color:var(--mynah-color-syntax-attr)}.mynah-syntax-highlighter>pre .token.attr-name{color:var(--mynah-color-syntax-attr)}.mynah-syntax-highlighter>pre .token.string{color:var(--mynah-color-syntax-attr)}.mynah-syntax-highlighter>pre .token.char{color:var(--mynah-color-syntax-attr)}.mynah-syntax-highlighter>pre .token.builtin{color:var(--mynah-color-syntax-attr)}.mynah-syntax-highlighter>pre .token.deleted{color:var(--mynah-color-syntax-attr)}.mynah-syntax-highlighter>pre .token.operator{color:var(--mynah-color-syntax-operator)}.mynah-syntax-highlighter>pre .token.entity{color:var(--mynah-color-syntax-operator)}.mynah-syntax-highlighter>pre .token.url{color:var(--mynah-color-syntax-operator)}.mynah-syntax-highlighter>pre .token.atrule{color:var(--mynah-color-syntax-attr-value)}.mynah-syntax-highlighter>pre .token.attr-value{color:var(--mynah-color-syntax-attr-value)}.mynah-syntax-highlighter>pre .token.class-name{color:var(--mynah-color-syntax-attr-value)}.mynah-syntax-highlighter>pre .token.keyword{color:var(--mynah-color-syntax-attr-value)}.mynah-syntax-highlighter>pre .token.function{color:var(--mynah-color-syntax-function);font-weight:500}.mynah-syntax-highlighter>pre .token.regex{color:var(--mynah-color-syntax-variable);font-weight:500}.mynah-syntax-highlighter>pre .token.important{color:var(--mynah-color-syntax-variable);font-weight:500}.mynah-syntax-highlighter>pre .token.variable{color:var(--mynah-color-syntax-variable);font-weight:500}.mynah-syntax-highlighter>pre .token.important{font-weight:bold}.mynah-syntax-highlighter>pre .token.bold{font-weight:bold}.mynah-syntax-highlighter>pre .token.italic{font-style:italic}.mynah-syntax-highlighter>pre .token.entity{cursor:help}.mynah-syntax-highlighter>pre.line-numbers{position:relative;padding-left:3.8em;counter-reset:linenumber;position:relative}.mynah-syntax-highlighter>.line-numbers-rows{position:absolute;background-color:inherit;top:var(--mynah-sizing-2);font-size:100%;left:0;width:var(--mynah-sizing-12);overflow:hidden;text-overflow:clip;letter-spacing:-1px;border-right:1px solid var(--mynah-color-border-default)}.mynah-syntax-highlighter>.line-numbers-rows>span,.mynah-syntax-highlighter>.line-numbers-rows{pointer-events:none;user-select:none}.mynah-syntax-highlighter>.line-numbers-rows>span{display:block;color:var(--mynah-color-border-default);padding-right:.8em;text-align:right}.mynah-ui-syntax-highlighter-highlight-tooltip{max-width:80vw;min-width:10vw;max-height:80vh;background-color:var(--mynah-card-bg);border-radius:var(--mynah-card-radius);border:var(--mynah-border-width) solid var(--mynah-color-border-default);padding:var(--mynah-sizing-5)}.mynah-ui-syntax-highlighter-highlight-tooltip .mynah-card-body>p:first-child:last-of-type,.mynah-ui-syntax-highlighter-highlight-tooltip .mynah-card-body>p p:first-child{margin:0}',"",{version:3,sources:["webpack://./src/styles/_variables.scss","webpack://./src/styles/_mixins.scss","webpack://./src/styles/components/_syntax-highlighter.scss"],names:[],mappings:"AA6JA,MACI,sMAAA,CAEA,uCAAA,CACA,iDAAA,CACA,yBAAA,CACA,4BAAA,CACA,uDAAA,CAMI,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAGJ,mDAAA,CACA,gCAAA,CACA,yBAAA,CAGI,oDAAA,CAAA,+DAAA,CAAA,yDAAA,CAAA,yDAAA,CAAA,0DAAA,CAAA,wDAAA,CAGJ,kDAAA,CACA,mHAAA,CACA,wCAAA,CAEA,sGAAA,CAEA,gDAAA,CACA,qCAAA,CAEA,sDAAA,CACA,gDAAA,CAGI,8DAAA,CAAA,sEAAA,CAAA,qFAAA,CAAA,sEAAA,CAAA,2EAAA,CAAA,oEAAA,CAAA,8DAAA,CAAA,yEAAA,CAAA,oGAAA,CAGJ,iEAAA,CACA,4FAAA,CAII,kCAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,mCAAA,CAGJ,qDAAA,CACA,6DAAA,CAEA,iEAAA,CACA,yEAAA,CAEA,gDAAA,CACA,oDAAA,CAEA,2BAAA,CACA,yBAAA,CACA,0DAAA,CAGI,kCAAA,CAAA,iCAAA,CAAA,gCAAA,CAAA,8BAAA,CAAA,iCAAA,CAGJ,2BAAA,CACA,uCAAA,CAEA,0CAAA,CACA,2CAAA,CACA,6BAAA,CACA,4CAAA,CCrKA,sEAAA,CAAA,oEAAA,CAAA,oEAAA,CAAA,kEAAA,CAAA,mEAAA,CD2KA,+EAAA,CACA,oHAAA,CEzOJ,wGAEI,iCAAA,CACA,aAAA,CACA,aAAA,CAEJ,0GAEI,mCAAA,CACA,aAAA,CACA,aAAA,CAGJ,0BACI,YAAA,CACA,uBAAA,CACA,qBAAA,CACA,eAAA,CACA,qCAAA,CACA,cAAA,CAIA,wEAAA,CACA,iBAAA,CACA,uCAAA,CACA,kBAAA,CACA,qCAAA,CAPA,wCACI,gCAAA,CAOJ,qFAEI,UAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,6CAAA,CACA,UAAA,CACA,mBAAA,CACA,gBAAA,CAEJ,iEACI,YAAA,CACA,kBAAA,CACA,wBAAA,CACA,gCAAA,CACA,kCAAA,CACA,YAAA,CACA,qBAAA,CACA,QAAA,CACA,yBAAA,CACA,iBAAA,CACA,sDAAA,CACA,wEACI,UAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,kDAAA,CACA,WAAA,CAEJ,oGACI,MAAA,CACA,uCAAA,CACA,oBAAA,CACA,WAAA,CACA,eAAA,CACA,sBAAA,CACA,kBAAA,CAEJ,+EACI,+BAAA,CACA,6DAAA,CACA,iFACI,uCAAA,CACA,oCAAA,CAIZ,4CACI,mBAAA,CACA,cAAA,CACA,kBAAA,CACA,oBAAA,CACA,QAAA,CACA,oBAAA,CACA,kBAAA,CACA,gBAAA,CACA,WAAA,CACA,oCAAA,CACA,eAAA,CACA,gBAAA,CACA,6BAAA,CACA,kBAAA,CACA,uCAAA,CACA,gDACI,SAAA,CAEJ,kDACI,UAAA,CACA,iBAAA,CACA,qBAAA,CACA,QAAA,CACA,uBAAA,CACA,SAAA,CACA,sBAAA,CACA,uCAAA,CACA,wEAAA,CACA,qCAAA,CACA,UAAA,CAEJ,mDACI,QAAA,CACA,uBAAA,CACA,SAAA,CACA,sBAAA,CACA,uCAAA,CACA,qBAAA,CAGR,8BACI,6BAAA,CACA,QAAA,CACA,eAAA,CACA,iBAAA,CACA,iBAAA,CAEA,8DAEI,uDAAA,CACA,2DAAA,CAEJ,mCACI,oCAAA,CACA,uBAAA,CACA,eAAA,CACA,wBAAA,CAGJ,iEAEI,eAAA,CACA,eAAA,CACA,mBAAA,CACA,iBAAA,CACA,gBAAA,CACA,UAAA,CACA,YAAA,CAEJ,uFAEI,gBAAA,CACA,kBAAA,CAUI,6CAEQ,uCAAA,CAFR,4CAEQ,uCAAA,CAFR,6CAEQ,uCAAA,CAFR,2CAEQ,uCAAA,CAFR,iDAEQ,kBAAA,CAFR,+CAEQ,WAAA,CAFR,8CAEQ,wCAAA,CAFR,yCAEQ,wCAAA,CAFR,6CAEQ,wCAAA,CAFR,4CAEQ,wCAAA,CAFR,8CAEQ,wCAAA,CAFR,4CAEQ,wCAAA,CAFR,8CAEQ,wCAAA,CAFR,8CAEQ,oCAAA,CAFR,+CAEQ,oCAAA,CAFR,4CAEQ,oCAAA,CAFR,0CAEQ,oCAAA,CAFR,6CAEQ,oCAAA,CAFR,6CAEQ,oCAAA,CAFR,8CAEQ,wCAAA,CAFR,4CAEQ,wCAAA,CAFR,yCAEQ,wCAAA,CAFR,4CAEQ,0CAAA,CAFR,gDAEQ,0CAAA,CAFR,gDAEQ,0CAAA,CAFR,6CAEQ,0CAAA,CAFR,8CAEQ,wCAAA,CAAA,eAAA,CAFR,2CAEQ,wCAAA,CAAA,eAAA,CAFR,+CAEQ,wCAAA,CAAA,eAAA,CAFR,8CAEQ,wCAAA,CAAA,eAAA,CAFR,+CAEQ,gBAAA,CAFR,0CAEQ,gBAAA,CAFR,4CAEQ,iBAAA,CAFR,4CAEQ,WAAA,CAMhB,2CACI,iBAAA,CACA,kBAAA,CACA,wBAAA,CACA,iBAAA,CAGR,6CACI,iBAAA,CACA,wBAAA,CAMA,yBAAA,CACA,cAAA,CACA,MAAA,CACA,4BAAA,CACA,eAAA,CACA,kBAAA,CACA,mBAAA,CACA,wDAAA,CAZA,+FAEI,mBAAA,CACA,gBAAA,CAWJ,kDACI,aAAA,CACA,uCAAA,CACA,kBAAA,CACA,gBAAA,CAKZ,+CACI,cAAA,CACA,cAAA,CACA,eAAA,CACA,qCAAA,CACA,sCAAA,CACA,wEAAA,CACA,6BAAA,CAEI,2KAEI,QAAA",sourcesContent:[`@import './mixins';
/**
 * Flatten a map or list into a string
 * @param {any} $value - The value to flatten
 * @returns {string} The flattened value
 */
@function flatten($value) {
    @if type-of($value) == 'map' {
        $result: "";
        @each $key, $val in $value {
            $flattened-val: flatten($val);
            $result: "#{$result}#{$key}: #{$flattened-val}; ";
        }
        @return $result;
    } @else if type-of($value) == 'list' {
        $result: "";
        @each $item in $value {
            $flattened-item: flatten($item);
            $result: "#{$result}#{$flattened-item}, ";
        }
        @return $result;
    } @else {
        @return $value;
    }
}

/**
 * Export a map as CSS variables
 * @param {map} $map - The map to export
 * @param {string} $name - The name of the export
 */
@mixin export-map($map, $name) {
    :export {
        #{$name}: "#{flatten($map)}";
    }
}

/**
 * Color variables
 */
$mynah-color-text: (
    'default': var(--vscode-foreground),
    'alternate': var(--mynah-color-button-reverse),
    'strong': var(--vscode-input-foreground),
    'weak': var(--vscode-disabledForeground),
    'link': var(--vscode-textLink-foreground),
    'input': var(--vscode-input-foreground)
);

/**
 * Statuses
 */
$mynah-statuses: ("success", "error", "warning", "info");

/**
 * Status variables
 */
$mynah-status-colors: (
    'info': #0971d3,
    'success': #037f03,
    'warning': #b2911c,
    'error': #d91515
);

/**
 * Font variables
 */
$mynah-font-sizes: (
    'xxsmall': 0.75rem,
    'xsmall': 0.85rem,
    'small': 0.95rem,
    'medium': 1rem,
    'large': 1.125rem
);

/**
 * Padding sizes
 */
$mynah-padding-sizes: (
  'none': 0,
  'small': 1,
  'medium': 3,
  'large': 5,
);

/**
 * Transition variables
 */
$mynah-transitions: (
    'bottom-panel': (850, cubic-bezier(0.25, 1, 0, 1)),
    'very-short': (600, cubic-bezier(0.25, 1, 0, 1)),
    'very-long': (1650, cubic-bezier(0.25, 1, 0, 1)),
    'short': (550, cubic-bezier(0.85, 0.15, 0, 1)),
    'short-rev': (580, cubic-bezier(0.35, 1, 0, 1))
);

/**
 * Syntax highlighting variables
 */
 $mynah-syntax-colors: (
    'bg': var(--vscode-terminal-dropBackground),
    'variable': var(--vscode-debugTokenExpression-name),
    'function': var(--vscode-gitDecoration-modifiedResourceForeground),
    'operator': var(--vscode-debugTokenExpression-name),
    'attr-value': var(--vscode-debugIcon-stepBackForeground),
    'attr': var(--vscode-debugTokenExpression-string),
    'property': var(--vscode-terminal-ansiCyan),
    'comment': var(--vscode-debugConsole-sourceForeground),
    'code': var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit))
);

/**
 * Token styles
 */
 $mynah-token-styles: (
    'comments': (color: var(--mynah-color-syntax-comment)),
    'punctuation': (color: currentColor),
    'namespace': (opacity: 0.7),
    'properties': (color: var(--mynah-color-syntax-property)),
    'attributes': (color: var(--mynah-color-syntax-attr)),
    'operators': (color: var(--mynah-color-syntax-operator)),
    'attr-values': (color: var(--mynah-color-syntax-attr-value)),
    'functions': (color: var(--mynah-color-syntax-function), font-weight: 500),
    'variables': (color: var(--mynah-color-syntax-variable), font-weight: 500),
    'bold': (font-weight: bold),
    'italic': (font-style: italic),
    'entity': (cursor: help)
);

/**
 * Syntax token styles
 */
$mynah-syntax-token-styles: (
    'comments': (comment, prolog, doctype, cdata),
    'punctuation': (punctuation),
    'namespace': (namespace),
    'properties': (property, tag, boolean, number, constant, symbol, inserted),
    'attributes': (selector, attr-name, string, char, builtin, deleted),
    'operators': (operator, entity, url),
    'attr-values': (atrule, attr-value, class-name, keyword),
    'functions': (function),
    'variables': (regex, important, variable),
    'bold': (important, bold),
    'italic': (italic),
    'entity': (entity)
);

@include export-map($mynah-color-text, 'mynah-color-text');
@include export-map($mynah-statuses, 'mynah-statuses');
@include export-map($mynah-syntax-colors, 'mynah-syntax-colors');
@include export-map($mynah-status-colors, 'mynah-status-colors');
@include export-map($mynah-font-sizes, 'mynah-font-sizes');
@include export-map($mynah-padding-sizes, 'mynah-padding-sizes');
@include export-map($mynah-transitions, 'mynah-transitions');
@include export-map($mynah-syntax-token-styles, 'mynah-syntax-token-styles');


:root {
    --mynah-font-family: var(--vscode-font-family), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Amazon Ember", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: var(--vscode-font-size, 13px);
    font-family: var(--mynah-font-family, "system-ui");
    --mynah-max-width: 2560px;
    --mynah-sizing-base: 0.25rem;
    --mynah-sizing-half: calc(var(--mynah-sizing-base) / 2);

    /**
     * Sizing variables
     */
    @for $i from 1 through 18 {
        --mynah-sizing-#{$i}: calc(var(--mynah-sizing-base) * #{$i});
    }

    --mynah-chat-wrapper-spacing: var(--mynah-sizing-4);
    --mynah-button-border-width: 1px;
    --mynah-border-width: 1px;

    @each $name, $value in $mynah-color-text {
        --mynah-color-text-#{$name}: #{$value};
    }

    --mynah-color-bg: var(--vscode-sideBar-background);
    --mynah-color-tab-active: var(--vscode-tab-activeBackground, var(--vscode-editor-background, var(--mynah-card-bg)));
    --mynah-color-light: rgba(0, 0, 0, 0.05);

    --mynah-color-border-default: var(--vscode-panel-border, var(--vscode-tab-border, rgba(0, 0, 0, 0.1)));

    --mynah-color-highlight: rgba(255, 179, 0, 0.25);
    --mynah-color-highlight-text: #886411;

    --mynah-color-toggle: var(--vscode-sideBar-background);
    --mynah-color-toggle-reverse: rgba(0, 0, 0, 0.5);

    @each $name, $value in $mynah-syntax-colors {
        --mynah-color-syntax-#{$name}: #{$value};
    }

    --mynah-syntax-code-font-family: var(--vscode-editor-font-family);
    --mynah-syntax-code-font-size: var(--vscode-editor-font-size, var(--mynah-font-size-medium));


    @each $name, $value in $mynah-status-colors {
        --mynah-color-status-#{$name}: #{$value};
    }

    --mynah-color-button: var(--vscode-button-background);
    --mynah-color-button-reverse: var(--vscode-button-foreground);

    --mynah-color-alternate: var(--vscode-button-secondaryBackground);
    --mynah-color-alternate-reverse: var(--vscode-button-secondaryForeground);

    --mynah-card-bg: var(--vscode-editor-background);
    --mynah-card-bg-alternate: var(--mynah-color-button);

    --mynah-shadow-button: none; //0 10px 20px -15px rgba(0, 0, 0, 0.25);
    --mynah-shadow-card: none; //0 10px 20px -15px rgba(0, 0, 0, 0.25);
    --mynah-shadow-overlay: 0 0px 15px -5px rgba(0, 0, 0, 0.4);

    @each $name, $value in $mynah-font-sizes {
        --mynah-font-size-#{$name}: #{$value};
    }

    --mynah-line-height: 1.5rem;
    --mynah-syntax-code-line-height: 1.5rem;

    --mynah-card-radius: var(--mynah-sizing-2);
    --mynah-input-radius: var(--mynah-sizing-1);
    --mynah-card-radius-corner: 0;
    --mynah-button-radius: var(--mynah-sizing-1);

    @each $name, $values in $mynah-transitions {
        @include mynah-transition($name, nth($values, 1), nth($values, 2));
    }

    --mynah-short-transition-rev-opacity: opacity 750ms cubic-bezier(0.35, 1, 0, 1);
    --mynah-text-flow-transition: all 800ms cubic-bezier(0.35, 1.2, 0, 1), transform 800ms cubic-bezier(0.2, 1.05, 0, 1);
}
`,`@mixin list-fader-bottom($height: var(--mynah-sizing-6)) {
    position: relative;
    $listFader: linear-gradient(
        to bottom,
        black 30%,
        black calc(100% - $height),
        transparent 100%
    );
    -webkit-mask-image: $listFader;
    -webkit-mask-size: 100% 100%;
    mask-image: $listFader;
    mask-size: 100% 100%;
}

/**
 * @param {string} $size - The size of the font.
 * @param {string} $weight - The weight of the font.
 * @param {string} $family - The family of the font.
 */
@mixin mynah-font($size, $weight: normal, $family: var(--mynah-font-family)) {
    font-size: $size;
    font-weight: $weight;
    font-family: $family;
}

/**
 * @param {string} $text-color - The color of the text.
 * @param {string} $bg-color - The background color.
 */
@mixin mynah-color($text-color, $bg-color) {
    color: $text-color;
    background-color: $bg-color;
}

/**
 * @param {string} $margin - The margin of the element.
 * @param {string} $padding - The padding of the element.
 */
@mixin mynah-spacing($margin: 0, $padding: 0) {
    margin: $margin;
    padding: $padding;
}

/**
 * @param {string} $radius - The radius of the border.
 */
@mixin mynah-border-radius($radius) {
    border-radius: $radius;
}

/**
 * @param {string} $shadow - The shadow of the element.
 */
 @mixin mynah-box-shadow($shadow) {
    box-shadow: $shadow;
}

/**
 * @param {string} $name - The name of the transition.
 * @param {number} $duration - The duration of the transition in milliseconds.
 * @param {string} $timing-function - The timing function of the transition.
 */
@mixin mynah-transition($name, $duration, $timing-function) {
    --mynah-#{$name}-transition: all #{$duration}ms #{$timing-function};
}
`,`@import '../variables';
@import '../mixins';
pre.diff-highlight > code .token.deleted:not(.prefix),
pre > code.diff-highlight .token.deleted:not(.prefix) {
    background-color: rgba(255, 0, 0, 0.1);
    color: inherit;
    display: block;
}
pre.diff-highlight > code .token.inserted:not(.prefix),
pre > code.diff-highlight .token.inserted:not(.prefix) {
    background-color: rgba(0, 255, 128, 0.1);
    color: inherit;
    display: block;
}

.mynah-syntax-highlighter {
    display: flex;
    flex-flow: column nowrap;
    box-sizing: border-box;
    overflow: hidden;
    background-color: var(--mynah-card-bg);
    max-width: 100%;
    & + *:not(:empty) {
        margin-top: var(--mynah-sizing-2);
    }
    border: var(--mynah-border-width) solid var(--mynah-color-border-default);
    position: relative;
    border-radius: var(--mynah-input-radius);
    line-height: normal;
    color: var(--mynah-color-text-default);
    &:before,
    & > .line-numbers-rows:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: var(--mynah-color-syntax-bg);
        opacity: 0.2;
        pointer-events: none;
        user-select: none;
    }
    > .mynah-syntax-highlighter-copy-buttons {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: var(--mynah-sizing-half);
        padding-left: var(--mynah-sizing-3);
        order: 256000;
        box-sizing: border-box;
        margin: 0;
        margin-block: 0 !important;
        position: relative;
        border-top: 1px solid var(--mynah-color-border-default);
        &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: var(--mynah-color-border-default);
            opacity: 0.25;
        }
        > .mynah-syntax-highlighter-language {
            flex: 1;
            font-size: var(--mynah-font-size-xsmall);
            display: inline-block;
            opacity: 0.65;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .mynah-button {
            min-width: var(--mynah-sizing-6);
            height: calc(var(--mynah-sizing-6) + var(--mynah-sizing-half));
            * {
                font-size: var(--mynah-font-size-xsmall);
                color: var(--mynah-color-text-strong);
            }
        }
    }
    &.mynah-inline-code {
        display: inline-flex;
        max-width: 100%;
        line-height: normal;
        padding: 0 !important;
        margin: 0;
        margin-block-start: 0;
        margin-block-end: 0;
        overflow: visible;
        border: none;
        color: var(--mynah-color-syntax-attr);
        margin-left: 2px;
        margin-right: 2px;
        padding-bottom: 1px !important;
        margin-bottom: -1px;
        background-color: transparent !important;
        > pre {
            padding: 0;
        }
        &:after {
            content: '';
            position: absolute;
            box-sizing: border-box;
            top: -1px;
            height: calc(100% + 2px);
            left: -4px;
            width: calc(100% + 8px);
            border-radius: var(--mynah-input-radius);
            border: var(--mynah-border-width) solid var(--mynah-color-border-default);
            background-color: var(--mynah-card-bg);
            z-index: -1;
        }
        &:before {
            top: -1px;
            height: calc(100% + 2px);
            left: -4px;
            width: calc(100% + 8px);
            border-radius: var(--mynah-input-radius);
            box-sizing: border-box;
        }
    }
    > pre {
        padding: var(--mynah-sizing-2);
        margin: 0;
        overflow-x: auto;
        overflow-y: hidden;
        position: relative;

        *,
        & {
            font-size: var(--mynah-syntax-code-font-size) !important;
            font-family: var(--mynah-syntax-code-font-family) !important;
        }
        code {
            color: var(--mynah-color-syntax-code);
            filter: brightness(0.95);
            white-space: pre;
            background-color: inherit;
        }

        > code,
        & {
            text-align: left;
            white-space: pre;
            word-spacing: normal;
            word-break: normal;
            word-wrap: normal;
            tab-size: 4;
            hyphens: none;
        }
        > code::selection,
        &::selection {
            text-shadow: none;
            background: #b3d4fc;
        }

        /**
        * Loop through each style category and its corresponding tokens in $mynah-syntax-token-styles.
        * For each token, apply the styles defined in $mynah-token-styles based on the style category.
        * This replaces individual style definitions for each token class and makes the SCSS more maintainable.
        */
        @each $style, $tokens in $mynah-syntax-token-styles {
            @each $token in $tokens {
                .token.#{$token} {
                    @each $property, $value in map-get($mynah-token-styles, $style) {
                        #{$property}: #{$value};
                    }
                }
            }
        }

        &.line-numbers {
            position: relative;
            padding-left: 3.8em;
            counter-reset: linenumber;
            position: relative;
        }
    }
    > .line-numbers-rows {
        position: absolute;
        background-color: inherit;
        > span,
        & {
            pointer-events: none;
            user-select: none;
        }
        top: var(--mynah-sizing-2);
        font-size: 100%;
        left: 0;
        width: var(--mynah-sizing-12);
        overflow: hidden;
        text-overflow: clip;
        letter-spacing: -1px;
        border-right: 1px solid var(--mynah-color-border-default);

        > span {
            display: block;
            color: var(--mynah-color-border-default);
            padding-right: 0.8em;
            text-align: right;
        }
    }
}

.mynah-ui-syntax-highlighter-highlight-tooltip {
    max-width: 80vw;
    min-width: 10vw;
    max-height: 80vh;
    background-color: var(--mynah-card-bg);
    border-radius: var(--mynah-card-radius);
    border: var(--mynah-border-width) solid var(--mynah-color-border-default);
    padding: var(--mynah-sizing-5);
    .mynah-card-body {
        > p:first-child:last-of-type,
        > p p:first-child {
            margin: 0;
        }
    }
}
`],sourceRoot:""}]),a.locals={"mynah-color-text":'"default: var(--vscode-foreground); alternate: var(--mynah-color-button-reverse); strong: var(--vscode-input-foreground); weak: var(--vscode-disabledForeground); link: var(--vscode-textLink-foreground); input: var(--vscode-input-foreground); "',"mynah-statuses":'"success, error, warning, info, "',"mynah-syntax-colors":'"bg: var(--vscode-terminal-dropBackground); variable: var(--vscode-debugTokenExpression-name); function: var(--vscode-gitDecoration-modifiedResourceForeground); operator: var(--vscode-debugTokenExpression-name); attr-value: var(--vscode-debugIcon-stepBackForeground); attr: var(--vscode-debugTokenExpression-string); property: var(--vscode-terminal-ansiCyan); comment: var(--vscode-debugConsole-sourceForeground); code: var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit)); "',"mynah-status-colors":'"info: #0971d3; success: #037f03; warning: #b2911c; error: #d91515; "',"mynah-font-sizes":'"xxsmall: 0.75rem; xsmall: 0.85rem; small: 0.95rem; medium: 1rem; large: 1.125rem; "',"mynah-padding-sizes":'"none: 0; small: 1; medium: 3; large: 5; "',"mynah-transitions":'"bottom-panel: 850, cubic-bezier(0.25, 1, 0, 1), ; very-short: 600, cubic-bezier(0.25, 1, 0, 1), ; very-long: 1650, cubic-bezier(0.25, 1, 0, 1), ; short: 550, cubic-bezier(0.85, 0.15, 0, 1), ; short-rev: 580, cubic-bezier(0.35, 1, 0, 1), ; "',"mynah-syntax-token-styles":'"comments: comment, prolog, doctype, cdata, ; punctuation: punctuation; namespace: namespace; properties: property, tag, boolean, number, constant, symbol, inserted, ; attributes: selector, attr-name, string, char, builtin, deleted, ; operators: operator, entity, url, ; attr-values: atrule, attr-value, class-name, keyword, ; functions: function; variables: regex, important, variable, ; bold: important, bold, ; italic: italic; entity: entity; "'};const d=a},5338:(v,t,e)=>{"use strict";e.d(t,{Z:()=>d});var l=e(7537),c=e.n(l),A=e(3645),a=e.n(A)()(c());a.push([v.id,'.mynah-toggle-container{flex-flow:row nowrap;max-width:100%;overflow:hidden;align-items:center;position:relative;background:var(--mynah-color-toggle);color:var(--mynah-color-toggle-reverse);justify-content:flex-start;overflow-y:hidden;overflow-x:auto;display:flex}.mynah-toggle-container>span{overflow:hidden;height:100%;min-width:var(--mynah-sizing-8);max-width:calc(3*var(--mynah-sizing-15));flex-shrink:0}.mynah-toggle-container>span>.mynah-toggle-option{display:none}.mynah-toggle-container>span>.mynah-toggle-option:not(:first-child)+.mynah-toggle-option-label{margin-left:calc(-1*var(--mynah-sizing-1))}.mynah-toggle-container>span>.mynah-toggle-option:not(:checked)+.mynah-toggle-option-label.indication:after{content:"";position:absolute;top:50%;margin-top:calc(-1*var(--mynah-sizing-half));left:var(--mynah-sizing-2);height:var(--mynah-sizing-1);width:var(--mynah-sizing-1);background-color:var(--mynah-color-status-success);border-radius:var(--mynah-sizing-1);border:1px solid var(--mynah-color-text-weak);opacity:.75}.mynah-toggle-container>span>.mynah-toggle-option+.mynah-toggle-option-label{cursor:pointer;pointer-events:all;position:relative;z-index:100;padding:0 var(--mynah-sizing-3) 0 var(--mynah-sizing-5);height:100%;box-sizing:border-box;display:inline-flex;overflow:hidden;justify-content:stretch;align-items:center;color:var(--mynah-color-text-weak);border-right:1px solid var(--mynah-color-border-default);border-top:1px solid transparent;background-color:var(--mynah-color-bg);opacity:.75;max-width:100%}.mynah-toggle-container>span>.mynah-toggle-option+.mynah-toggle-option-label,.mynah-toggle-container>span>.mynah-toggle-option+.mynah-toggle-option-label *{user-select:none}.mynah-toggle-container>span>.mynah-toggle-option+.mynah-toggle-option-label>span{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:100%;display:block}.mynah-toggle-container>span>.mynah-toggle-option+.mynah-toggle-option-label>.mynah-toggle-close-button{margin-left:var(--mynah-sizing-3);font-size:var(--mynah-font-size-xsmall);min-width:1em}.mynah-toggle-container>span>.mynah-toggle-option:checked+.mynah-toggle-option-label{border-top-color:var(--mynah-color-button);color:var(--mynah-color-text-default);opacity:1;background-color:var(--mynah-color-tab-active)}.mynah-toggle-container>span>.mynah-toggle-option[disabled=disabled]{pointer-events:none !important}.mynah-toggle-container>span>.mynah-toggle-option[disabled=disabled]+.mynah-toggle-option-label{pointer-events:none !important;opacity:.25}.mynah-toggle-container.mynah-toggle-direction-vertical{flex-flow:column nowrap;gap:var(--mynah-sizing-3)}.mynah-toggle-disabled-tooltip-container{max-width:30vw;display:inline-block;padding:var(--mynah-sizing-3);font-size:80%;opacity:.85}',"",{version:3,sources:["webpack://./src/styles/components/_toggle.scss"],names:[],mappings:"AAAA,wBACI,oBAAA,CACA,cAAA,CACA,eAAA,CACA,kBAAA,CACA,iBAAA,CACA,oCAAA,CACA,uCAAA,CACA,0BAAA,CACA,iBAAA,CACA,eAAA,CACA,YAAA,CACA,6BACI,eAAA,CACA,WAAA,CACA,+BAAA,CACA,wCAAA,CACA,aAAA,CACA,kDACI,YAAA,CACA,+FACI,0CAAA,CAGA,4GACI,UAAA,CACA,iBAAA,CACA,OAAA,CACA,4CAAA,CACA,0BAAA,CACA,4BAAA,CACA,2BAAA,CACA,kDAAA,CACA,mCAAA,CACA,6CAAA,CACA,WAAA,CAGR,6EACI,cAAA,CACA,kBAAA,CACA,iBAAA,CACA,WAAA,CACA,uDAAA,CACA,WAAA,CACA,qBAAA,CACA,mBAAA,CACA,eAAA,CACA,uBAAA,CACA,kBAAA,CACA,kCAAA,CACA,wDAAA,CACA,gCAAA,CACA,sCAAA,CACA,WAAA,CACA,cAAA,CACA,4JAEI,gBAAA,CAEJ,kFACI,sBAAA,CACA,eAAA,CACA,kBAAA,CACA,cAAA,CACA,aAAA,CAEJ,wGACI,iCAAA,CACA,uCAAA,CACA,aAAA,CAGR,qFACI,0CAAA,CACA,qCAAA,CACA,SAAA,CACA,8CAAA,CAEJ,qEACI,8BAAA,CACA,gGACI,8BAAA,CACA,WAAA,CAMhB,wDACI,uBAAA,CACA,yBAAA,CAIR,yCACI,cAAA,CACA,oBAAA,CACA,6BAAA,CACA,aAAA,CACA,WAAA",sourcesContent:[`.mynah-toggle-container {
    flex-flow: row nowrap;
    max-width: 100%;
    overflow: hidden;
    align-items: center;
    position: relative;
    background: var(--mynah-color-toggle);
    color: var(--mynah-color-toggle-reverse);
    justify-content: flex-start;
    overflow-y: hidden;
    overflow-x: auto;
    display: flex;
    > span {
        overflow: hidden;
        height: 100%;
        min-width: var(--mynah-sizing-8);
        max-width: calc(3 * var(--mynah-sizing-15));
        flex-shrink: 0;
        > .mynah-toggle-option {
            display: none;
            &:not(:first-child) + .mynah-toggle-option-label {
                margin-left: calc(-1 * var(--mynah-sizing-1));
            }
            &:not(:checked) + .mynah-toggle-option-label {
                &.indication:after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    margin-top: calc(-1 * var(--mynah-sizing-half));
                    left: var(--mynah-sizing-2);
                    height: var(--mynah-sizing-1);
                    width: var(--mynah-sizing-1);
                    background-color: var(--mynah-color-status-success);
                    border-radius: var(--mynah-sizing-1);
                    border: 1px solid var(--mynah-color-text-weak);
                    opacity: 0.75;
                }
            }
            & + .mynah-toggle-option-label {
                cursor: pointer;
                pointer-events: all;
                position: relative;
                z-index: 100;
                padding: 0 var(--mynah-sizing-3) 0 var(--mynah-sizing-5);
                height: 100%;
                box-sizing: border-box;
                display: inline-flex;
                overflow: hidden;
                justify-content: stretch;
                align-items: center;
                color: var(--mynah-color-text-weak);
                border-right: 1px solid var(--mynah-color-border-default);
                border-top: 1px solid transparent;
                background-color: var(--mynah-color-bg);
                opacity: 0.75;
                max-width: 100%;
                &,
                & * {
                    user-select: none;
                }
                > span {
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    max-width: 100%;
                    display: block;
                }
                > .mynah-toggle-close-button {
                    margin-left: var(--mynah-sizing-3);
                    font-size: var(--mynah-font-size-xsmall);
                    min-width: 1em;
                }
            }
            &:checked + .mynah-toggle-option-label {
                border-top-color: var(--mynah-color-button);
                color: var(--mynah-color-text-default);
                opacity: 1;
                background-color: var(--mynah-color-tab-active);
            }
            &[disabled="disabled"] {
                pointer-events: none !important;
                & + .mynah-toggle-option-label {
                    pointer-events: none !important;
                    opacity: 0.25;
                }
            }
        }
    }

    &.mynah-toggle-direction-vertical {
        flex-flow: column nowrap;
        gap: var(--mynah-sizing-3);
    }
}

.mynah-toggle-disabled-tooltip-container {
    max-width: 30vw;
    display: inline-block;
    padding: var(--mynah-sizing-3);
    font-size: 80%;
    opacity: 0.85;
}
`],sourceRoot:""}]),a.locals={};const d=a},3407:(v,t,e)=>{"use strict";e.d(t,{Z:()=>d});var l=e(7537),c=e.n(l),A=e(3645),a=e.n(A)()(c());a.push([v.id,':root{--mynah-font-family: var(--vscode-font-family), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Amazon Ember", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;font-size:var(--vscode-font-size, 13px);font-family:var(--mynah-font-family, "system-ui");--mynah-max-width: 2560px;--mynah-sizing-base: 0.25rem;--mynah-sizing-half: calc(var(--mynah-sizing-base) / 2);--mynah-sizing-1: calc(var(--mynah-sizing-base) * 1);--mynah-sizing-2: calc(var(--mynah-sizing-base) * 2);--mynah-sizing-3: calc(var(--mynah-sizing-base) * 3);--mynah-sizing-4: calc(var(--mynah-sizing-base) * 4);--mynah-sizing-5: calc(var(--mynah-sizing-base) * 5);--mynah-sizing-6: calc(var(--mynah-sizing-base) * 6);--mynah-sizing-7: calc(var(--mynah-sizing-base) * 7);--mynah-sizing-8: calc(var(--mynah-sizing-base) * 8);--mynah-sizing-9: calc(var(--mynah-sizing-base) * 9);--mynah-sizing-10: calc(var(--mynah-sizing-base) * 10);--mynah-sizing-11: calc(var(--mynah-sizing-base) * 11);--mynah-sizing-12: calc(var(--mynah-sizing-base) * 12);--mynah-sizing-13: calc(var(--mynah-sizing-base) * 13);--mynah-sizing-14: calc(var(--mynah-sizing-base) * 14);--mynah-sizing-15: calc(var(--mynah-sizing-base) * 15);--mynah-sizing-16: calc(var(--mynah-sizing-base) * 16);--mynah-sizing-17: calc(var(--mynah-sizing-base) * 17);--mynah-sizing-18: calc(var(--mynah-sizing-base) * 18);--mynah-chat-wrapper-spacing: var(--mynah-sizing-4);--mynah-button-border-width: 1px;--mynah-border-width: 1px;--mynah-color-text-default: var(--vscode-foreground);--mynah-color-text-alternate: var(--mynah-color-button-reverse);--mynah-color-text-strong: var(--vscode-input-foreground);--mynah-color-text-weak: var(--vscode-disabledForeground);--mynah-color-text-link: var(--vscode-textLink-foreground);--mynah-color-text-input: var(--vscode-input-foreground);--mynah-color-bg: var(--vscode-sideBar-background);--mynah-color-tab-active: var(--vscode-tab-activeBackground, var(--vscode-editor-background, var(--mynah-card-bg)));--mynah-color-light: rgba(0, 0, 0, 0.05);--mynah-color-border-default: var(--vscode-panel-border, var(--vscode-tab-border, rgba(0, 0, 0, 0.1)));--mynah-color-highlight: rgba(255, 179, 0, 0.25);--mynah-color-highlight-text: #886411;--mynah-color-toggle: var(--vscode-sideBar-background);--mynah-color-toggle-reverse: rgba(0, 0, 0, 0.5);--mynah-color-syntax-bg: var(--vscode-terminal-dropBackground);--mynah-color-syntax-variable: var(--vscode-debugTokenExpression-name);--mynah-color-syntax-function: var(--vscode-gitDecoration-modifiedResourceForeground);--mynah-color-syntax-operator: var(--vscode-debugTokenExpression-name);--mynah-color-syntax-attr-value: var(--vscode-debugIcon-stepBackForeground);--mynah-color-syntax-attr: var(--vscode-debugTokenExpression-string);--mynah-color-syntax-property: var(--vscode-terminal-ansiCyan);--mynah-color-syntax-comment: var(--vscode-debugConsole-sourceForeground);--mynah-color-syntax-code: var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit));--mynah-syntax-code-font-family: var(--vscode-editor-font-family);--mynah-syntax-code-font-size: var(--vscode-editor-font-size, var(--mynah-font-size-medium));--mynah-color-status-info: #0971d3;--mynah-color-status-success: #037f03;--mynah-color-status-warning: #b2911c;--mynah-color-status-error: #d91515;--mynah-color-button: var(--vscode-button-background);--mynah-color-button-reverse: var(--vscode-button-foreground);--mynah-color-alternate: var(--vscode-button-secondaryBackground);--mynah-color-alternate-reverse: var(--vscode-button-secondaryForeground);--mynah-card-bg: var(--vscode-editor-background);--mynah-card-bg-alternate: var(--mynah-color-button);--mynah-shadow-button: none;--mynah-shadow-card: none;--mynah-shadow-overlay: 0 0px 15px -5px rgba(0, 0, 0, 0.4);--mynah-font-size-xxsmall: 0.75rem;--mynah-font-size-xsmall: 0.85rem;--mynah-font-size-small: 0.95rem;--mynah-font-size-medium: 1rem;--mynah-font-size-large: 1.125rem;--mynah-line-height: 1.5rem;--mynah-syntax-code-line-height: 1.5rem;--mynah-card-radius: var(--mynah-sizing-2);--mynah-input-radius: var(--mynah-sizing-1);--mynah-card-radius-corner: 0;--mynah-button-radius: var(--mynah-sizing-1);--mynah-bottom-panel-transition: all 850ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-short-transition: all 600ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-long-transition: all 1650ms cubic-bezier(0.25, 1, 0, 1);--mynah-short-transition: all 550ms cubic-bezier(0.85, 0.15, 0, 1);--mynah-short-rev-transition: all 580ms cubic-bezier(0.35, 1, 0, 1);--mynah-short-transition-rev-opacity: opacity 750ms cubic-bezier(0.35, 1, 0, 1);--mynah-text-flow-transition: all 800ms cubic-bezier(0.35, 1.2, 0, 1), transform 800ms cubic-bezier(0.2, 1.05, 0, 1)}.mynah-card{text-decoration:none;outline:none;position:relative;transition:var(--mynah-short-transition-rev);box-sizing:border-box;display:flex;flex-flow:column nowrap;gap:var(--mynah-sizing-3);transform:translate3d(0, 0, 0);flex:auto 0 0;width:100%;overflow:hidden;border-radius:var(--mynah-card-radius);box-shadow:var(--mynah-shadow-card)}.mynah-card>.mynah-card-inner-order-0{order:0}.mynah-card>.mynah-card-inner-order-10{order:10}.mynah-card>.mynah-card-inner-order-20{order:20}.mynah-card>.mynah-card-inner-order-30{order:30}.mynah-card>.mynah-card-inner-order-40{order:40}.mynah-card>.mynah-card-inner-order-50{order:50}.mynah-card>.mynah-card-inner-order-60{order:60}.mynah-card>.mynah-card-inner-order-70{order:70}.mynah-card>.mynah-card-inner-order-80{order:80}.mynah-card>.mynah-card-inner-order-90{order:90}.mynah-card>.mynah-card-inner-order-100{order:100}.mynah-card.hide-if-empty:empty{display:none}.mynah-card .mynah-ui-clickable-item{cursor:pointer}.mynah-card.padding-none{padding:var(--mynah-sizing-0);border-radius:0}.mynah-card.padding-small{padding:var(--mynah-sizing-1)}.mynah-card.padding-medium{padding:var(--mynah-sizing-3)}.mynah-card.padding-large{padding:var(--mynah-sizing-5)}.mynah-card.background{background-color:var(--mynah-card-bg)}.mynah-card.border{border:var(--mynah-border-width) solid var(--mynah-color-border-default)}.mynah-card>*{z-index:10;position:relative}.mynah-card>.mynah-source-link-header{display:flex;justify-content:space-between;align-items:center;opacity:1;gap:var(--mynah-sizing-2);transition:var(--mynah-very-short-transition)}.mynah-card>.mynah-source-link-header>.mynah-source-thumbnail{font-style:normal;font-weight:normal;display:none;width:var(--mynah-sizing-8);height:var(--mynah-sizing-8);font-variant:normal;text-transform:none;border:var(--mynah-border-width) solid var(--mynah-color-border-default);border-radius:100%;background-size:85%;background-clip:content-box;background-position:center center;background-repeat:no-repeat;align-self:flex-start;box-sizing:border-box;background-color:var(--mynah-card-bg);position:relative;overflow:hidden}.mynah-card>.mynah-source-link-header>.mynah-source-thumbnail:after{content:"";pointer-events:none;box-sizing:border-box;position:absolute;top:0;left:0;right:0;bottom:0;width:auto;height:auto;border:2px solid var(--mynah-card-bg);border-radius:100%}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper{flex:1 1 0;display:flex;flex-flow:column nowrap;align-items:flex-start;gap:var(--mynah-sizing-half);max-width:100%;overflow:hidden;cursor:pointer}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper:hover>.mynah-source-link-title>.mynah-source-link-expand-icon{opacity:.75;align-self:baseline}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-title{font-size:var(--mynah-font-size-medium);font-weight:500;color:var(--mynah-color-text-strong);width:100%;display:inline-flex;flex-flow:row nowrap;align-items:center;justify-content:flex-start;gap:var(--mynah-sizing-2);white-space:normal;text-overflow:ellipsis;text-decoration:none;outline:none;overflow:hidden}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-title>.mynah-source-link-expand-icon{transition:var(--mynah-short-transition-rev);opacity:0;color:var(--mynah-color-text-weak);font-size:var(--mynah-font-size-xsmall);display:inline;padding:var(--mynah-sizing-1)}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url{font-size:var(--mynah-font-size-xsmall);font-weight:300;color:var(--mynah-color-text-link);white-space:nowrap;text-overflow:ellipsis;text-decoration:none;outline:none;overflow:hidden;max-width:100%;position:relative;padding-bottom:var(--mynah-sizing-1);display:inline-block;transition:var(--mynah-short-transition-rev)}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url:after{content:"";position:relative;display:block;bottom:0;left:0;width:100%;height:1px;border-radius:var(--mynah-sizing-half);background-color:currentColor;transform:translate3d(-30%, 0, 0);transition:var(--mynah-short-transition-rev);opacity:0}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url:hover:after{transform:translate3d(0, 0, 0);opacity:1}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url>span:not(:last-child):after{content:">";margin:0 var(--mynah-sizing-1)}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url>span:nth-child(3)~span:not(:last-child){display:none}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url>span:last-child{font-weight:bold}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url>span:nth-child(3):not(:last-child):after{content:"> ... >"}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block{display:flex;flex-flow:row wrap;align-items:center;justify-content:flex-start;gap:var(--mynah-sizing-1);margin-bottom:var(--mynah-sizing-half)}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block:empty{display:none}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item{display:inline-flex;flex-flow:row nowrap;align-items:center;justify-content:flex-start;gap:var(--mynah-sizing-1);padding:calc(var(--mynah-sizing-half)*3);border:var(--mynah-border-width) solid var(--mynah-color-border-default);border-radius:var(--mynah-button-radius);opacity:.75}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item>.mynah-icon{opacity:.5;font-size:var(--mynah-font-size-medium);color:var(--mynah-color-text-weak)}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item>.mynah-title-meta-block-item-text{font-size:var(--mynah-font-size-xxsmall);color:var(--mynah-color-text-weak)}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item>.mynah-title-meta-block-item-text::first-letter{text-transform:capitalize}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item.approved-answer{border-color:green;position:relative}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item.approved-answer:before{content:"";border-radius:var(--mynah-button-radius);position:absolute;top:0;left:0;right:0;bottom:0;background-color:green;opacity:.04}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item.approved-answer>.mynah-icon{opacity:1;color:green;border-radius:var(--mynah-button-radius);width:var(--mynah-sizing-3);height:var(--mynah-sizing-3)}.mynah-card>.mynah-card-votes-wrapper{align-items:center;gap:var(--mynah-sizing-2);display:flex;align-items:center;justify-content:flex-end;border-top:1px solid var(--mynah-color-border-default);padding-top:var(--mynah-sizing-3);font-size:var(--mynah-font-size-small)}.mynah-card>.mynah-card-votes-wrapper>span.mynah-feedback-thanks{overflow:hidden}.mynah-card>.mynah-card-votes-wrapper>.mynah-button>span{padding:0;font-size:var(--mynah-font-size-small);color:var(--mynah-color-text-link)}.mynah-card>.mynah-card-votes-wrapper>.mynah-vote-text{color:var(--mynah-color-text-weak);font-size:var(--mynah-font-size-small)}.mynah-card>.mynah-card-votes-wrapper>.mynah-card-vote{position:relative;overflow:visible;display:inline-flex;align-items:center;box-sizing:border-box;gap:var(--mynah-sizing-1)}.mynah-card>.mynah-card-votes-wrapper>.mynah-card-vote>.mynah-vote-radio{display:none}.mynah-card>.mynah-card-votes-wrapper>.mynah-card-vote>.mynah-vote-label{z-index:10;cursor:pointer;font-size:var(--mynah-font-size-small);transition:var(--mynah-very-short-transition);width:var(--mynah-sizing-5);height:var(--mynah-sizing-5);display:inline-flex;justify-content:center;align-items:center;color:var(--mynah-color-text-weak);opacity:.5;padding:var(--mynah-sizing-1);border:var(--mynah-border-width) solid transparent;border-radius:var(--mynah-button-radius)}.mynah-card>.mynah-card-votes-wrapper>.mynah-card-vote>.mynah-vote-label:hover{opacity:1;border-color:currentColor}.mynah-card>.mynah-card-votes-wrapper>.mynah-card-vote>.mynah-vote-label>*{pointer-events:none}.mynah-card>.mynah-card-votes-wrapper>.mynah-card-vote>.mynah-vote-label>i{height:calc(var(--mynah-sizing-6) + var(--mynah-sizing-half))}.mynah-card>.mynah-card-votes-wrapper>.mynah-card-vote>.mynah-vote-up-radio:checked~.mynah-vote-up{color:var(--mynah-color-text-default);opacity:1}.mynah-card>.mynah-card-votes-wrapper>.mynah-card-vote>.mynah-vote-down-radio:checked~.mynah-vote-down{color:var(--mynah-color-text-default);opacity:1}.mynah-card-body{flex-shrink:0;overflow:hidden;position:relative;display:block;line-height:var(--mynah-line-height);font-size:var(--mynah-font-size-medium)}.mynah-card-body:empty{display:none}.mynah-card-body img{max-width:100%;vertical-align:middle;object-fit:cover}.mynah-card-body a{pointer-events:bounding-box;color:var(--mynah-color-text-link)}.mynah-card-body span[start][end]{display:none}.mynah-card-body>p:first-child,.mynah-card-body>p:first-child h1:first-child,.mynah-card-body>p:first-child h2:first-child,.mynah-card-body>p:first-child h3:first-child,.mynah-card-body>p:first-child h4:first-child,.mynah-card-body>p:first-child h5:first-child,.mynah-card-body>p:first-child h6:first-child{margin-top:0}.mynah-card-body>p:first-child:last-of-type,.mynah-card-body>p p:first-child{margin:0}.mynah-card-body>p,.mynah-card-body h1,.mynah-card-body h2,.mynah-card-body h3,.mynah-card-body h4,.mynah-card-body h5,.mynah-card-body h6,.mynah-card-body>div>p,.mynah-card-body>div h1,.mynah-card-body>div h2,.mynah-card-body>div h3,.mynah-card-body>div h4,.mynah-card-body>div h5,.mynah-card-body>div h6{margin-block-start:.75em;margin-block-end:.75em;padding-bottom:1px !important;user-select:text}.mynah-card-body>p:first-child,.mynah-card-body h1:first-child,.mynah-card-body h2:first-child,.mynah-card-body h3:first-child,.mynah-card-body h4:first-child,.mynah-card-body h5:first-child,.mynah-card-body h6:first-child,.mynah-card-body>div>p:first-child,.mynah-card-body>div h1:first-child,.mynah-card-body>div h2:first-child,.mynah-card-body>div h3:first-child,.mynah-card-body>div h4:first-child,.mynah-card-body>div h5:first-child,.mynah-card-body>div h6:first-child{margin-block-start:.1em}.mynah-card-body>p:empty,.mynah-card-body h1:empty,.mynah-card-body h2:empty,.mynah-card-body h3:empty,.mynah-card-body h4:empty,.mynah-card-body h5:empty,.mynah-card-body h6:empty,.mynah-card-body>div>p:empty,.mynah-card-body>div h1:empty,.mynah-card-body>div h2:empty,.mynah-card-body>div h3:empty,.mynah-card-body>div h4:empty,.mynah-card-body>div h5:empty,.mynah-card-body>div h6:empty{display:none}.mynah-card-body table,.mynah-card-body hr,.mynah-card-body video,.mynah-card-body audio,.mynah-card-body iframe,.mynah-card-body object,.mynah-card-body embed,.mynah-card-body blockquote,.mynah-card-body>div table,.mynah-card-body>div hr,.mynah-card-body>div video,.mynah-card-body>div audio,.mynah-card-body>div iframe,.mynah-card-body>div object,.mynah-card-body>div embed,.mynah-card-body>div blockquote{max-width:100%;width:100%;box-sizing:border-box;border:none;font-size:inherit}.mynah-card-body table,.mynah-card-body>div table{table-layout:fixed}.mynah-card-body video,.mynah-card-body>div video{background-color:var(--mynah-color-bg)}.mynah-card-body video,.mynah-card-body audio,.mynah-card-body iframe,.mynah-card-body object,.mynah-card-body embed,.mynah-card-body img,.mynah-card-body blockquote,.mynah-card-body>div video,.mynah-card-body>div audio,.mynah-card-body>div iframe,.mynah-card-body>div object,.mynah-card-body>div embed,.mynah-card-body>div img,.mynah-card-body>div blockquote{border-radius:var(--mynah-input-radius)}.mynah-card-body video[aspect-ratio],.mynah-card-body audio[aspect-ratio],.mynah-card-body iframe[aspect-ratio],.mynah-card-body object[aspect-ratio],.mynah-card-body embed[aspect-ratio],.mynah-card-body img[aspect-ratio],.mynah-card-body blockquote[aspect-ratio],.mynah-card-body>div video[aspect-ratio],.mynah-card-body>div audio[aspect-ratio],.mynah-card-body>div iframe[aspect-ratio],.mynah-card-body>div object[aspect-ratio],.mynah-card-body>div embed[aspect-ratio],.mynah-card-body>div img[aspect-ratio],.mynah-card-body>div blockquote[aspect-ratio]{max-width:100%;min-width:100%;width:100%;box-sizing:border-box}.mynah-card-body video[aspect-ratio="16:9"],.mynah-card-body audio[aspect-ratio="16:9"],.mynah-card-body iframe[aspect-ratio="16:9"],.mynah-card-body object[aspect-ratio="16:9"],.mynah-card-body embed[aspect-ratio="16:9"],.mynah-card-body img[aspect-ratio="16:9"],.mynah-card-body blockquote[aspect-ratio="16:9"],.mynah-card-body>div video[aspect-ratio="16:9"],.mynah-card-body>div audio[aspect-ratio="16:9"],.mynah-card-body>div iframe[aspect-ratio="16:9"],.mynah-card-body>div object[aspect-ratio="16:9"],.mynah-card-body>div embed[aspect-ratio="16:9"],.mynah-card-body>div img[aspect-ratio="16:9"],.mynah-card-body>div blockquote[aspect-ratio="16:9"]{aspect-ratio:16/9}.mynah-card-body video[aspect-ratio="9:16"],.mynah-card-body audio[aspect-ratio="9:16"],.mynah-card-body iframe[aspect-ratio="9:16"],.mynah-card-body object[aspect-ratio="9:16"],.mynah-card-body embed[aspect-ratio="9:16"],.mynah-card-body img[aspect-ratio="9:16"],.mynah-card-body blockquote[aspect-ratio="9:16"],.mynah-card-body>div video[aspect-ratio="9:16"],.mynah-card-body>div audio[aspect-ratio="9:16"],.mynah-card-body>div iframe[aspect-ratio="9:16"],.mynah-card-body>div object[aspect-ratio="9:16"],.mynah-card-body>div embed[aspect-ratio="9:16"],.mynah-card-body>div img[aspect-ratio="9:16"],.mynah-card-body>div blockquote[aspect-ratio="9:16"]{aspect-ratio:9/16}.mynah-card-body video[aspect-ratio="21:9"],.mynah-card-body audio[aspect-ratio="21:9"],.mynah-card-body iframe[aspect-ratio="21:9"],.mynah-card-body object[aspect-ratio="21:9"],.mynah-card-body embed[aspect-ratio="21:9"],.mynah-card-body img[aspect-ratio="21:9"],.mynah-card-body blockquote[aspect-ratio="21:9"],.mynah-card-body>div video[aspect-ratio="21:9"],.mynah-card-body>div audio[aspect-ratio="21:9"],.mynah-card-body>div iframe[aspect-ratio="21:9"],.mynah-card-body>div object[aspect-ratio="21:9"],.mynah-card-body>div embed[aspect-ratio="21:9"],.mynah-card-body>div img[aspect-ratio="21:9"],.mynah-card-body>div blockquote[aspect-ratio="21:9"]{aspect-ratio:21/9}.mynah-card-body video[aspect-ratio="9:21"],.mynah-card-body audio[aspect-ratio="9:21"],.mynah-card-body iframe[aspect-ratio="9:21"],.mynah-card-body object[aspect-ratio="9:21"],.mynah-card-body embed[aspect-ratio="9:21"],.mynah-card-body img[aspect-ratio="9:21"],.mynah-card-body blockquote[aspect-ratio="9:21"],.mynah-card-body>div video[aspect-ratio="9:21"],.mynah-card-body>div audio[aspect-ratio="9:21"],.mynah-card-body>div iframe[aspect-ratio="9:21"],.mynah-card-body>div object[aspect-ratio="9:21"],.mynah-card-body>div embed[aspect-ratio="9:21"],.mynah-card-body>div img[aspect-ratio="9:21"],.mynah-card-body>div blockquote[aspect-ratio="9:21"]{aspect-ratio:9/21}.mynah-card-body video[aspect-ratio="4:3"],.mynah-card-body audio[aspect-ratio="4:3"],.mynah-card-body iframe[aspect-ratio="4:3"],.mynah-card-body object[aspect-ratio="4:3"],.mynah-card-body embed[aspect-ratio="4:3"],.mynah-card-body img[aspect-ratio="4:3"],.mynah-card-body blockquote[aspect-ratio="4:3"],.mynah-card-body>div video[aspect-ratio="4:3"],.mynah-card-body>div audio[aspect-ratio="4:3"],.mynah-card-body>div iframe[aspect-ratio="4:3"],.mynah-card-body>div object[aspect-ratio="4:3"],.mynah-card-body>div embed[aspect-ratio="4:3"],.mynah-card-body>div img[aspect-ratio="4:3"],.mynah-card-body>div blockquote[aspect-ratio="4:3"]{aspect-ratio:4/3}.mynah-card-body video[aspect-ratio="3:4"],.mynah-card-body audio[aspect-ratio="3:4"],.mynah-card-body iframe[aspect-ratio="3:4"],.mynah-card-body object[aspect-ratio="3:4"],.mynah-card-body embed[aspect-ratio="3:4"],.mynah-card-body img[aspect-ratio="3:4"],.mynah-card-body blockquote[aspect-ratio="3:4"],.mynah-card-body>div video[aspect-ratio="3:4"],.mynah-card-body>div audio[aspect-ratio="3:4"],.mynah-card-body>div iframe[aspect-ratio="3:4"],.mynah-card-body>div object[aspect-ratio="3:4"],.mynah-card-body>div embed[aspect-ratio="3:4"],.mynah-card-body>div img[aspect-ratio="3:4"],.mynah-card-body>div blockquote[aspect-ratio="3:4"]{aspect-ratio:3/4}.mynah-card-body video[aspect-ratio="3:2"],.mynah-card-body audio[aspect-ratio="3:2"],.mynah-card-body iframe[aspect-ratio="3:2"],.mynah-card-body object[aspect-ratio="3:2"],.mynah-card-body embed[aspect-ratio="3:2"],.mynah-card-body img[aspect-ratio="3:2"],.mynah-card-body blockquote[aspect-ratio="3:2"],.mynah-card-body>div video[aspect-ratio="3:2"],.mynah-card-body>div audio[aspect-ratio="3:2"],.mynah-card-body>div iframe[aspect-ratio="3:2"],.mynah-card-body>div object[aspect-ratio="3:2"],.mynah-card-body>div embed[aspect-ratio="3:2"],.mynah-card-body>div img[aspect-ratio="3:2"],.mynah-card-body>div blockquote[aspect-ratio="3:2"]{aspect-ratio:3/2}.mynah-card-body video[aspect-ratio="2:3"],.mynah-card-body audio[aspect-ratio="2:3"],.mynah-card-body iframe[aspect-ratio="2:3"],.mynah-card-body object[aspect-ratio="2:3"],.mynah-card-body embed[aspect-ratio="2:3"],.mynah-card-body img[aspect-ratio="2:3"],.mynah-card-body blockquote[aspect-ratio="2:3"],.mynah-card-body>div video[aspect-ratio="2:3"],.mynah-card-body>div audio[aspect-ratio="2:3"],.mynah-card-body>div iframe[aspect-ratio="2:3"],.mynah-card-body>div object[aspect-ratio="2:3"],.mynah-card-body>div embed[aspect-ratio="2:3"],.mynah-card-body>div img[aspect-ratio="2:3"],.mynah-card-body>div blockquote[aspect-ratio="2:3"]{aspect-ratio:3/2}.mynah-card-body video[aspect-ratio="1:1"],.mynah-card-body audio[aspect-ratio="1:1"],.mynah-card-body iframe[aspect-ratio="1:1"],.mynah-card-body object[aspect-ratio="1:1"],.mynah-card-body embed[aspect-ratio="1:1"],.mynah-card-body img[aspect-ratio="1:1"],.mynah-card-body blockquote[aspect-ratio="1:1"],.mynah-card-body>div video[aspect-ratio="1:1"],.mynah-card-body>div audio[aspect-ratio="1:1"],.mynah-card-body>div iframe[aspect-ratio="1:1"],.mynah-card-body>div object[aspect-ratio="1:1"],.mynah-card-body>div embed[aspect-ratio="1:1"],.mynah-card-body>div img[aspect-ratio="1:1"],.mynah-card-body>div blockquote[aspect-ratio="1:1"]{aspect-ratio:1/1}.mynah-card-body hr,.mynah-card-body>div hr{display:block;box-sizing:border-box;height:var(--mynah-border-width);margin-top:var(--mynah-sizing-2);margin-bottom:var(--mynah-sizing-2);background-color:var(--mynah-color-border-default);border:none}.mynah-card-body blockquote,.mynah-card-body>div blockquote{border:var(--mynah-border-width) solid var(--mynah-color-border-default);margin:0;padding:var(--mynah-sizing-2);box-sizing:border-box}.mynah-card-body>blockquote>p:last-of-type,.mynah-card-body>div>blockquote>p:last-of-type{margin-block-end:0}.mynah-card-body>blockquote>p:first-of-type,.mynah-card-body>div>blockquote>p:first-of-type{margin-block-start:0}.mynah-card-body>p:last-of-type,.mynah-card-body>div>p:last-of-type{margin-block-end:0}.mynah-card-body mark[reference-tracker],.mynah-card-body>div mark[reference-tracker]{background-color:var(--mynah-color-highlight);color:inherit;cursor:help}.mynah-card-body .amzn-mynah-search-result-highlight,.mynah-card-body>div .amzn-mynah-search-result-highlight{background-color:var(--mynah-color-highlight);color:var(--mynah-color-highlight-text)}.mynah-card-body .amzn-mynah-search-result-ellipsis,.mynah-card-body>div .amzn-mynah-search-result-ellipsis{display:inline-block;position:relative;padding-left:var(--mynah-sizing-2);margin-top:var(--mynah-sizing-1);margin-bottom:var(--mynah-sizing-1);font-size:calc(1em + var(--mynah-sizing-1)) !important;user-select:none;cursor:default;height:var(--mynah-sizing-7)}.mynah-card-body .amzn-mynah-search-result-ellipsis:before,.mynah-card-body>div .amzn-mynah-search-result-ellipsis:before{pointer-events:none;content:"";width:calc(1em + var(--mynah-sizing-2));height:calc(1em + var(--mynah-sizing-2));position:absolute;left:0;top:0;background-color:currentColor;opacity:.1;border-radius:var(--mynah-sizing-1)}',"",{version:3,sources:["webpack://./src/styles/_variables.scss","webpack://./src/styles/_mixins.scss","webpack://./src/styles/components/card/_card.scss","webpack://./src/styles/components/_source-link-header.scss","webpack://./src/styles/components/_votes-wrapper.scss","webpack://./src/styles/components/card/_card-body.scss"],names:[],mappings:"AA6JA,MACI,sMAAA,CAEA,uCAAA,CACA,iDAAA,CACA,yBAAA,CACA,4BAAA,CACA,uDAAA,CAMI,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAGJ,mDAAA,CACA,gCAAA,CACA,yBAAA,CAGI,oDAAA,CAAA,+DAAA,CAAA,yDAAA,CAAA,yDAAA,CAAA,0DAAA,CAAA,wDAAA,CAGJ,kDAAA,CACA,mHAAA,CACA,wCAAA,CAEA,sGAAA,CAEA,gDAAA,CACA,qCAAA,CAEA,sDAAA,CACA,gDAAA,CAGI,8DAAA,CAAA,sEAAA,CAAA,qFAAA,CAAA,sEAAA,CAAA,2EAAA,CAAA,oEAAA,CAAA,8DAAA,CAAA,yEAAA,CAAA,oGAAA,CAGJ,iEAAA,CACA,4FAAA,CAII,kCAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,mCAAA,CAGJ,qDAAA,CACA,6DAAA,CAEA,iEAAA,CACA,yEAAA,CAEA,gDAAA,CACA,oDAAA,CAEA,2BAAA,CACA,yBAAA,CACA,0DAAA,CAGI,kCAAA,CAAA,iCAAA,CAAA,gCAAA,CAAA,8BAAA,CAAA,iCAAA,CAGJ,2BAAA,CACA,uCAAA,CAEA,0CAAA,CACA,2CAAA,CACA,6BAAA,CACA,4CAAA,CCrKA,sEAAA,CAAA,oEAAA,CAAA,oEAAA,CAAA,kEAAA,CAAA,mEAAA,CD2KA,+EAAA,CACA,oHAAA,CEzOJ,YACI,oBAAA,CACA,YAAA,CACA,iBAAA,CACA,4CAAA,CACA,qBAAA,CACA,YAAA,CACA,uBAAA,CACA,yBAAA,CACA,8BAAA,CACA,aAAA,CACA,UAAA,CACA,eAAA,CACA,sCAAA,CACA,mCAAA,CAGI,sCACI,OAAA,CADJ,uCACI,QAAA,CADJ,uCACI,QAAA,CADJ,uCACI,QAAA,CADJ,uCACI,QAAA,CADJ,uCACI,QAAA,CADJ,uCACI,QAAA,CADJ,uCACI,QAAA,CADJ,uCACI,QAAA,CADJ,uCACI,QAAA,CADJ,wCACI,SAAA,CAIR,gCACI,YAAA,CAGJ,qCACI,cAAA,CAKI,yBACA,6BAAA,CAEI,eAAA,CAHJ,0BACA,6BAAA,CADA,2BACA,6BAAA,CADA,0BACA,6BAAA,CAOR,uBACI,qCAAA,CAEJ,mBACI,wEAAA,CAGJ,cACI,UAAA,CACA,iBAAA,CCnDR,sCACI,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,SAAA,CACA,yBAAA,CACA,6CAAA,CACA,8DACI,iBAAA,CACA,kBAAA,CACA,YAAA,CACA,2BAAA,CACA,4BAAA,CACA,mBAAA,CACA,mBAAA,CACA,wEAAA,CACA,kBAAA,CACA,mBAAA,CACA,2BAAA,CACA,iCAAA,CACA,2BAAA,CACA,qBAAA,CACA,qBAAA,CACA,qCAAA,CACA,iBAAA,CACA,eAAA,CACA,oEACI,UAAA,CACA,mBAAA,CACA,qBAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,UAAA,CACA,WAAA,CACA,qCAAA,CACA,kBAAA,CAGR,uEACI,UAAA,CACA,YAAA,CACA,uBAAA,CACA,sBAAA,CACA,4BAAA,CACA,cAAA,CACA,eAAA,CACA,cAAA,CACA,qIACI,WAAA,CACA,mBAAA,CAEJ,gGACI,uCAAA,CACA,eAAA,CACA,oCAAA,CACA,UAAA,CACA,mBAAA,CACA,oBAAA,CACA,kBAAA,CACA,0BAAA,CACA,yBAAA,CACA,kBAAA,CACA,sBAAA,CACA,oBAAA,CACA,YAAA,CACA,eAAA,CACA,+HACI,4CAAA,CACA,SAAA,CACA,kCAAA,CACA,uCAAA,CACA,cAAA,CACA,6BAAA,CAGR,8FACI,uCAAA,CACA,eAAA,CACA,kCAAA,CACA,kBAAA,CACA,sBAAA,CACA,oBAAA,CACA,YAAA,CACA,eAAA,CACA,cAAA,CACA,iBAAA,CACA,oCAAA,CACA,oBAAA,CACA,4CAAA,CACA,oGACI,UAAA,CACA,iBAAA,CACA,aAAA,CACA,QAAA,CACA,MAAA,CACA,UAAA,CACA,UAAA,CACA,sCAAA,CACA,6BAAA,CACA,iCAAA,CACA,4CAAA,CACA,SAAA,CAGA,0GACI,8BAAA,CACA,SAAA,CAKA,0HACI,WAAA,CACA,8BAAA,CAGR,sIACI,YAAA,CAEJ,8GACI,gBAAA,CAEJ,uIACI,iBAAA,CAIZ,+FACI,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,0BAAA,CACA,yBAAA,CACA,sCAAA,CACA,qGACI,YAAA,CAEJ,4HACI,mBAAA,CACA,oBAAA,CACA,kBAAA,CACA,0BAAA,CACA,yBAAA,CACA,wCAAA,CACA,wEAAA,CACA,wCAAA,CACA,WAAA,CACA,wIACI,UAAA,CACA,uCAAA,CACA,kCAAA,CAEJ,8JACI,wCAAA,CACA,kCAAA,CACA,4KACI,yBAAA,CAGR,4IACI,kBAAA,CACA,iBAAA,CACA,mJACI,UAAA,CACA,wCAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,sBAAA,CACA,WAAA,CAEJ,wJACI,SAAA,CACA,WAAA,CACA,wCAAA,CACA,2BAAA,CACA,4BAAA,CCrLxB,sCACI,kBAAA,CACA,yBAAA,CACA,YAAA,CACA,kBAAA,CACA,wBAAA,CACA,sDAAA,CACA,iCAAA,CACA,sCAAA,CACA,iEACI,eAAA,CAEJ,yDACI,SAAA,CACA,sCAAA,CACA,kCAAA,CAEJ,uDACI,kCAAA,CACA,sCAAA,CAEJ,uDACI,iBAAA,CACA,gBAAA,CACA,mBAAA,CACA,kBAAA,CACA,qBAAA,CACA,yBAAA,CACA,yEACI,YAAA,CAEJ,yEACI,UAAA,CACA,cAAA,CACA,sCAAA,CACA,6CAAA,CACA,2BAAA,CACA,4BAAA,CACA,mBAAA,CACA,sBAAA,CACA,kBAAA,CACA,kCAAA,CACA,UAAA,CACA,6BAAA,CACA,kDAAA,CACA,wCAAA,CACA,+EACI,SAAA,CACA,yBAAA,CAEJ,2EACI,mBAAA,CAEJ,2EACI,6DAAA,CAIJ,mGACI,qCAAA,CACA,SAAA,CAIJ,uGACI,qCAAA,CACA,SAAA,CClEhB,iBACE,aAAA,CACA,eAAA,CACA,iBAAA,CACA,aAAA,CACA,oCAAA,CACA,uCAAA,CAEA,uBACE,YAAA,CAGF,qBACE,cAAA,CACA,qBAAA,CACA,gBAAA,CAGF,mBACE,2BAAA,CACA,kCAAA,CAGF,kCACE,YAAA,CAIA,mTAOE,YAAA,CAIJ,6EAEE,QAAA,CAKA,kTAOE,wBAAA,CACA,sBAAA,CACA,6BAAA,CAMA,gBAAA,CAJA,0dACE,uBAAA,CAKF,sYACE,YAAA,CAKJ,wZAQE,cAAA,CACA,UAAA,CACA,qBAAA,CACA,WAAA,CACA,iBAAA,CAEF,kDACE,kBAAA,CAIF,kDACE,sCAAA,CAEF,wWAOE,uCAAA,CAEA,4iBACE,cAAA,CACA,cAAA,CACA,UAAA,CACA,qBAAA,CAEF,8oBACE,iBAAA,CAEF,8oBACE,iBAAA,CAEF,8oBACE,iBAAA,CAEF,8oBACE,iBAAA,CAEF,goBACE,gBAAA,CAEF,goBACE,gBAAA,CAEF,goBACE,gBAAA,CAEF,goBACE,gBAAA,CAEF,goBACE,gBAAA,CAIJ,4CACE,aAAA,CACA,qBAAA,CACA,gCAAA,CACA,gCAAA,CACA,mCAAA,CACA,kDAAA,CACA,WAAA,CAEF,4DACE,wEAAA,CACA,QAAA,CACA,6BAAA,CACA,qBAAA,CAGF,0FACE,kBAAA,CAEF,4FACE,oBAAA,CAEF,oEACE,kBAAA,CAGF,sFACE,6CAAA,CACA,aAAA,CACA,WAAA,CAGF,8GACE,6CAAA,CACA,uCAAA,CAGF,4GACE,oBAAA,CACA,iBAAA,CACA,kCAAA,CACA,gCAAA,CACA,mCAAA,CACA,sDAAA,CACA,gBAAA,CACA,cAAA,CACA,4BAAA,CAEA,0HACE,mBAAA,CACA,UAAA,CACA,uCAAA,CACA,wCAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,6BAAA,CACA,UAAA,CACA,mCAAA",sourcesContent:[`@import './mixins';
/**
 * Flatten a map or list into a string
 * @param {any} $value - The value to flatten
 * @returns {string} The flattened value
 */
@function flatten($value) {
    @if type-of($value) == 'map' {
        $result: "";
        @each $key, $val in $value {
            $flattened-val: flatten($val);
            $result: "#{$result}#{$key}: #{$flattened-val}; ";
        }
        @return $result;
    } @else if type-of($value) == 'list' {
        $result: "";
        @each $item in $value {
            $flattened-item: flatten($item);
            $result: "#{$result}#{$flattened-item}, ";
        }
        @return $result;
    } @else {
        @return $value;
    }
}

/**
 * Export a map as CSS variables
 * @param {map} $map - The map to export
 * @param {string} $name - The name of the export
 */
@mixin export-map($map, $name) {
    :export {
        #{$name}: "#{flatten($map)}";
    }
}

/**
 * Color variables
 */
$mynah-color-text: (
    'default': var(--vscode-foreground),
    'alternate': var(--mynah-color-button-reverse),
    'strong': var(--vscode-input-foreground),
    'weak': var(--vscode-disabledForeground),
    'link': var(--vscode-textLink-foreground),
    'input': var(--vscode-input-foreground)
);

/**
 * Statuses
 */
$mynah-statuses: ("success", "error", "warning", "info");

/**
 * Status variables
 */
$mynah-status-colors: (
    'info': #0971d3,
    'success': #037f03,
    'warning': #b2911c,
    'error': #d91515
);

/**
 * Font variables
 */
$mynah-font-sizes: (
    'xxsmall': 0.75rem,
    'xsmall': 0.85rem,
    'small': 0.95rem,
    'medium': 1rem,
    'large': 1.125rem
);

/**
 * Padding sizes
 */
$mynah-padding-sizes: (
  'none': 0,
  'small': 1,
  'medium': 3,
  'large': 5,
);

/**
 * Transition variables
 */
$mynah-transitions: (
    'bottom-panel': (850, cubic-bezier(0.25, 1, 0, 1)),
    'very-short': (600, cubic-bezier(0.25, 1, 0, 1)),
    'very-long': (1650, cubic-bezier(0.25, 1, 0, 1)),
    'short': (550, cubic-bezier(0.85, 0.15, 0, 1)),
    'short-rev': (580, cubic-bezier(0.35, 1, 0, 1))
);

/**
 * Syntax highlighting variables
 */
 $mynah-syntax-colors: (
    'bg': var(--vscode-terminal-dropBackground),
    'variable': var(--vscode-debugTokenExpression-name),
    'function': var(--vscode-gitDecoration-modifiedResourceForeground),
    'operator': var(--vscode-debugTokenExpression-name),
    'attr-value': var(--vscode-debugIcon-stepBackForeground),
    'attr': var(--vscode-debugTokenExpression-string),
    'property': var(--vscode-terminal-ansiCyan),
    'comment': var(--vscode-debugConsole-sourceForeground),
    'code': var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit))
);

/**
 * Token styles
 */
 $mynah-token-styles: (
    'comments': (color: var(--mynah-color-syntax-comment)),
    'punctuation': (color: currentColor),
    'namespace': (opacity: 0.7),
    'properties': (color: var(--mynah-color-syntax-property)),
    'attributes': (color: var(--mynah-color-syntax-attr)),
    'operators': (color: var(--mynah-color-syntax-operator)),
    'attr-values': (color: var(--mynah-color-syntax-attr-value)),
    'functions': (color: var(--mynah-color-syntax-function), font-weight: 500),
    'variables': (color: var(--mynah-color-syntax-variable), font-weight: 500),
    'bold': (font-weight: bold),
    'italic': (font-style: italic),
    'entity': (cursor: help)
);

/**
 * Syntax token styles
 */
$mynah-syntax-token-styles: (
    'comments': (comment, prolog, doctype, cdata),
    'punctuation': (punctuation),
    'namespace': (namespace),
    'properties': (property, tag, boolean, number, constant, symbol, inserted),
    'attributes': (selector, attr-name, string, char, builtin, deleted),
    'operators': (operator, entity, url),
    'attr-values': (atrule, attr-value, class-name, keyword),
    'functions': (function),
    'variables': (regex, important, variable),
    'bold': (important, bold),
    'italic': (italic),
    'entity': (entity)
);

@include export-map($mynah-color-text, 'mynah-color-text');
@include export-map($mynah-statuses, 'mynah-statuses');
@include export-map($mynah-syntax-colors, 'mynah-syntax-colors');
@include export-map($mynah-status-colors, 'mynah-status-colors');
@include export-map($mynah-font-sizes, 'mynah-font-sizes');
@include export-map($mynah-padding-sizes, 'mynah-padding-sizes');
@include export-map($mynah-transitions, 'mynah-transitions');
@include export-map($mynah-syntax-token-styles, 'mynah-syntax-token-styles');


:root {
    --mynah-font-family: var(--vscode-font-family), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Amazon Ember", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: var(--vscode-font-size, 13px);
    font-family: var(--mynah-font-family, "system-ui");
    --mynah-max-width: 2560px;
    --mynah-sizing-base: 0.25rem;
    --mynah-sizing-half: calc(var(--mynah-sizing-base) / 2);

    /**
     * Sizing variables
     */
    @for $i from 1 through 18 {
        --mynah-sizing-#{$i}: calc(var(--mynah-sizing-base) * #{$i});
    }

    --mynah-chat-wrapper-spacing: var(--mynah-sizing-4);
    --mynah-button-border-width: 1px;
    --mynah-border-width: 1px;

    @each $name, $value in $mynah-color-text {
        --mynah-color-text-#{$name}: #{$value};
    }

    --mynah-color-bg: var(--vscode-sideBar-background);
    --mynah-color-tab-active: var(--vscode-tab-activeBackground, var(--vscode-editor-background, var(--mynah-card-bg)));
    --mynah-color-light: rgba(0, 0, 0, 0.05);

    --mynah-color-border-default: var(--vscode-panel-border, var(--vscode-tab-border, rgba(0, 0, 0, 0.1)));

    --mynah-color-highlight: rgba(255, 179, 0, 0.25);
    --mynah-color-highlight-text: #886411;

    --mynah-color-toggle: var(--vscode-sideBar-background);
    --mynah-color-toggle-reverse: rgba(0, 0, 0, 0.5);

    @each $name, $value in $mynah-syntax-colors {
        --mynah-color-syntax-#{$name}: #{$value};
    }

    --mynah-syntax-code-font-family: var(--vscode-editor-font-family);
    --mynah-syntax-code-font-size: var(--vscode-editor-font-size, var(--mynah-font-size-medium));


    @each $name, $value in $mynah-status-colors {
        --mynah-color-status-#{$name}: #{$value};
    }

    --mynah-color-button: var(--vscode-button-background);
    --mynah-color-button-reverse: var(--vscode-button-foreground);

    --mynah-color-alternate: var(--vscode-button-secondaryBackground);
    --mynah-color-alternate-reverse: var(--vscode-button-secondaryForeground);

    --mynah-card-bg: var(--vscode-editor-background);
    --mynah-card-bg-alternate: var(--mynah-color-button);

    --mynah-shadow-button: none; //0 10px 20px -15px rgba(0, 0, 0, 0.25);
    --mynah-shadow-card: none; //0 10px 20px -15px rgba(0, 0, 0, 0.25);
    --mynah-shadow-overlay: 0 0px 15px -5px rgba(0, 0, 0, 0.4);

    @each $name, $value in $mynah-font-sizes {
        --mynah-font-size-#{$name}: #{$value};
    }

    --mynah-line-height: 1.5rem;
    --mynah-syntax-code-line-height: 1.5rem;

    --mynah-card-radius: var(--mynah-sizing-2);
    --mynah-input-radius: var(--mynah-sizing-1);
    --mynah-card-radius-corner: 0;
    --mynah-button-radius: var(--mynah-sizing-1);

    @each $name, $values in $mynah-transitions {
        @include mynah-transition($name, nth($values, 1), nth($values, 2));
    }

    --mynah-short-transition-rev-opacity: opacity 750ms cubic-bezier(0.35, 1, 0, 1);
    --mynah-text-flow-transition: all 800ms cubic-bezier(0.35, 1.2, 0, 1), transform 800ms cubic-bezier(0.2, 1.05, 0, 1);
}
`,`@mixin list-fader-bottom($height: var(--mynah-sizing-6)) {
    position: relative;
    $listFader: linear-gradient(
        to bottom,
        black 30%,
        black calc(100% - $height),
        transparent 100%
    );
    -webkit-mask-image: $listFader;
    -webkit-mask-size: 100% 100%;
    mask-image: $listFader;
    mask-size: 100% 100%;
}

/**
 * @param {string} $size - The size of the font.
 * @param {string} $weight - The weight of the font.
 * @param {string} $family - The family of the font.
 */
@mixin mynah-font($size, $weight: normal, $family: var(--mynah-font-family)) {
    font-size: $size;
    font-weight: $weight;
    font-family: $family;
}

/**
 * @param {string} $text-color - The color of the text.
 * @param {string} $bg-color - The background color.
 */
@mixin mynah-color($text-color, $bg-color) {
    color: $text-color;
    background-color: $bg-color;
}

/**
 * @param {string} $margin - The margin of the element.
 * @param {string} $padding - The padding of the element.
 */
@mixin mynah-spacing($margin: 0, $padding: 0) {
    margin: $margin;
    padding: $padding;
}

/**
 * @param {string} $radius - The radius of the border.
 */
@mixin mynah-border-radius($radius) {
    border-radius: $radius;
}

/**
 * @param {string} $shadow - The shadow of the element.
 */
 @mixin mynah-box-shadow($shadow) {
    box-shadow: $shadow;
}

/**
 * @param {string} $name - The name of the transition.
 * @param {number} $duration - The duration of the transition in milliseconds.
 * @param {string} $timing-function - The timing function of the transition.
 */
@mixin mynah-transition($name, $duration, $timing-function) {
    --mynah-#{$name}-transition: all #{$duration}ms #{$timing-function};
}
`,`@import '../../variables';

.mynah-card {
    text-decoration: none;
    outline: none;
    position: relative;
    transition: var(--mynah-short-transition-rev);
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    gap: var(--mynah-sizing-3);
    transform: translate3d(0, 0, 0);
    flex: auto 0 0;
    width: 100%;
    overflow: hidden;
    border-radius: var(--mynah-card-radius);
    box-shadow: var(--mynah-shadow-card);

    @for $i from 0 through 10 {
        > .mynah-card-inner-order-#{$i * 10} {
            order: $i * 10;
        }
    }

    &.hide-if-empty:empty {
        display: none;
    }

    .mynah-ui-clickable-item {
        cursor: pointer;
    }

    &.padding {
        @each $size, $padding in $mynah-padding-sizes {
            &-#{$size} {
            padding: var(--mynah-sizing-#{$padding});
            @if $size == 'none' {
                border-radius: 0;
            }
            }
        }
    }
    &.background {
        background-color: var(--mynah-card-bg);
    }
    &.border {
        border: var(--mynah-border-width) solid var(--mynah-color-border-default);
    }

    > * {
        z-index: 10;
        position: relative;
    }

    @import '../source-link-header';
    @import '../votes-wrapper';
}

@import 'card-body';
`,`> .mynah-source-link-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 1;
    gap: var(--mynah-sizing-2);
    transition: var(--mynah-very-short-transition);
    > .mynah-source-thumbnail {
        font-style: normal;
        font-weight: normal;
        display: none;
        width: var(--mynah-sizing-8);
        height: var(--mynah-sizing-8);
        font-variant: normal;
        text-transform: none;
        border: var(--mynah-border-width) solid var(--mynah-color-border-default);
        border-radius: 100%;
        background-size: 85%;
        background-clip: content-box;
        background-position: center center;
        background-repeat: no-repeat;
        align-self: flex-start;
        box-sizing: border-box;
        background-color: var(--mynah-card-bg);
        position: relative;
        overflow: hidden;
        &:after {
            content: "";
            pointer-events: none;
            box-sizing: border-box;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: auto;
            height: auto;
            border: 2px solid var(--mynah-card-bg);
            border-radius: 100%;
        }
    }
    > .mynah-source-link-title-wrapper {
        flex: 1 1 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        gap: var(--mynah-sizing-half);
        max-width: 100%;
        overflow: hidden;
        cursor: pointer;
        &:hover > .mynah-source-link-title > .mynah-source-link-expand-icon {
            opacity: 0.75;
            align-self: baseline;
        }
        > .mynah-source-link-title {
            font-size: var(--mynah-font-size-medium);
            font-weight: 500;
            color: var(--mynah-color-text-strong);
            width: 100%;
            display: inline-flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: flex-start;
            gap: var(--mynah-sizing-2);
            white-space: normal;
            text-overflow: ellipsis;
            text-decoration: none;
            outline: none;
            overflow: hidden;
            > .mynah-source-link-expand-icon {
                transition: var(--mynah-short-transition-rev);
                opacity: 0;
                color: var(--mynah-color-text-weak);
                font-size: var(--mynah-font-size-xsmall);
                display: inline;
                padding: var(--mynah-sizing-1);
            }
        }
        > .mynah-source-link-url {
            font-size: var(--mynah-font-size-xsmall);
            font-weight: 300;
            color: var(--mynah-color-text-link);
            white-space: nowrap;
            text-overflow: ellipsis;
            text-decoration: none;
            outline: none;
            overflow: hidden;
            max-width: 100%;
            position: relative;
            padding-bottom: var(--mynah-sizing-1);
            display: inline-block;
            transition: var(--mynah-short-transition-rev);
            &:after {
                content: "";
                position: relative;
                display: block;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 1px;
                border-radius: var(--mynah-sizing-half);
                background-color: currentColor;
                transform: translate3d(-30%, 0, 0);
                transition: var(--mynah-short-transition-rev);
                opacity: 0;
            }
            &:hover {
                &:after {
                    transform: translate3d(0, 0, 0);
                    opacity: 1;
                }
            }
            > span {
                &:not(:last-child) {
                    &:after {
                        content: ">";
                        margin: 0 var(--mynah-sizing-1);
                    }
                }
                &:nth-child(3) ~ span:not(:last-child) {
                    display: none;
                }
                &:last-child {
                    font-weight: bold;
                }
                &:nth-child(3):not(:last-child):after {
                    content: "> ... >";
                }
            }
        }
        > .mynah-title-meta-block {
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: flex-start;
            gap: var(--mynah-sizing-1);
            margin-bottom: var(--mynah-sizing-half);
            &:empty {
                display: none;
            }
            > .mynah-title-meta-block-item {
                display: inline-flex;
                flex-flow: row nowrap;
                align-items: center;
                justify-content: flex-start;
                gap: var(--mynah-sizing-1);
                padding: calc(var(--mynah-sizing-half) * 3);
                border: var(--mynah-border-width) solid var(--mynah-color-border-default);
                border-radius: var(--mynah-button-radius);
                opacity: 0.75;
                > .mynah-icon {
                    opacity: 0.5;
                    font-size: var(--mynah-font-size-medium);
                    color: var(--mynah-color-text-weak);
                }
                > .mynah-title-meta-block-item-text {
                    font-size: var(--mynah-font-size-xxsmall);
                    color: var(--mynah-color-text-weak);
                    &::first-letter {
                        text-transform: capitalize;
                    }
                }
                &.approved-answer {
                    border-color: green;
                    position: relative;
                    &:before {
                        content: "";
                        border-radius: var(--mynah-button-radius);
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-color: green;
                        opacity: 0.04;
                    }
                    > .mynah-icon {
                        opacity: 1;
                        color: green;
                        border-radius: var(--mynah-button-radius);
                        width: var(--mynah-sizing-3);
                        height: var(--mynah-sizing-3);
                    }
                }
            }
        }
    }
}
`,`> .mynah-card-votes-wrapper {
    align-items: center;
    gap: var(--mynah-sizing-2);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid var(--mynah-color-border-default);
    padding-top: var(--mynah-sizing-3);
    font-size: var(--mynah-font-size-small);
    > span.mynah-feedback-thanks {
        overflow: hidden;
    }
    > .mynah-button > span {
        padding: 0;
        font-size: var(--mynah-font-size-small);
        color: var(--mynah-color-text-link);
    }
    > .mynah-vote-text {
        color: var(--mynah-color-text-weak);
        font-size: var(--mynah-font-size-small);
    }
    > .mynah-card-vote {
        position: relative;
        overflow: visible;
        display: inline-flex;
        align-items: center;
        box-sizing: border-box;
        gap: var(--mynah-sizing-1);
        > .mynah-vote-radio {
            display: none;
        }
        > .mynah-vote-label {
            z-index: 10;
            cursor: pointer;
            font-size: var(--mynah-font-size-small);
            transition: var(--mynah-very-short-transition);
            width: var(--mynah-sizing-5);
            height: var(--mynah-sizing-5);
            display: inline-flex;
            justify-content: center;
            align-items: center;
            color: var(--mynah-color-text-weak);
            opacity: 0.5;
            padding: var(--mynah-sizing-1);
            border: var(--mynah-border-width) solid transparent;
            border-radius: var(--mynah-button-radius);
            &:hover{
                opacity: 1;
                border-color: currentColor;
            }
            > * {
                pointer-events: none;
            }
            > i {
                height: calc(var(--mynah-sizing-6) + var(--mynah-sizing-half));
            }
        }
        > .mynah-vote-up-radio:checked {
            & ~ .mynah-vote-up {
                color: var(--mynah-color-text-default);
                opacity: 1;
            }
        }
        > .mynah-vote-down-radio:checked {
            & ~ .mynah-vote-down {
                color: var(--mynah-color-text-default);
                opacity: 1;
            }
        }
    }
}
`,`.mynah-card-body {
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  display: block;
  line-height: var(--mynah-line-height);
  font-size: var(--mynah-font-size-medium);

  &:empty {
    display: none;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
    object-fit: cover;
  }

  a {
    pointer-events: bounding-box;
    color: var(--mynah-color-text-link);
  }

  span[start][end] {
    display: none;
  }

  > p:first-child {
    &,
    & h1:first-child,
    & h2:first-child,
    & h3:first-child,
    & h4:first-child,
    & h5:first-child,
    & h6:first-child {
      margin-top: 0;
    }
  }

  > p:first-child:last-of-type,
  > p p:first-child {
    margin: 0;
  }

  &,
  & > div {
    > p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-block-start: 0.75em;
      margin-block-end: 0.75em;
      padding-bottom: 1px !important;

      &:first-child {
        margin-block-start: 0.1em;
      }

      user-select: text;

      &:empty {
        display: none;
      }
    }

    // FULL WIDTH ITEMS
    table,
    hr,
    video,
    audio,
    iframe,
    object,
    embed,
    blockquote {
      max-width: 100%;
      width: 100%;
      box-sizing: border-box;
      border: none;
      font-size: inherit;
    }
    table {
      table-layout: fixed;
    }

    // BLOCKS
    video {
      background-color: var(--mynah-color-bg);
    }
    video,
    audio,
    iframe,
    object,
    embed,
    img,
    blockquote {
      border-radius: var(--mynah-input-radius);

      &[aspect-ratio] {
        max-width: 100%;
        min-width: 100%;
        width: 100%;
        box-sizing: border-box;
      }
      &[aspect-ratio='16:9'] {
        aspect-ratio: 16 / 9;
      }
      &[aspect-ratio='9:16'] {
        aspect-ratio: 9 / 16;
      }
      &[aspect-ratio='21:9'] {
        aspect-ratio: 21 / 9;
      }
      &[aspect-ratio='9:21'] {
        aspect-ratio: 9 / 21;
      }
      &[aspect-ratio='4:3'] {
        aspect-ratio: 4 / 3;
      }
      &[aspect-ratio='3:4'] {
        aspect-ratio: 3 / 4;
      }
      &[aspect-ratio='3:2'] {
        aspect-ratio: 3 / 2;
      }
      &[aspect-ratio='2:3'] {
        aspect-ratio: 3 / 2;
      }
      &[aspect-ratio='1:1'] {
        aspect-ratio: 1 / 1;
      }
    }

    hr {
      display: block;
      box-sizing: border-box;
      height: var(--mynah-border-width);
      margin-top: var(--mynah-sizing-2);
      margin-bottom: var(--mynah-sizing-2);
      background-color: var(--mynah-color-border-default);
      border: none;
    }
    blockquote {
      border: var(--mynah-border-width) solid var(--mynah-color-border-default);
      margin: 0;
      padding: var(--mynah-sizing-2);
      box-sizing: border-box;
    }

    > blockquote > p:last-of-type{
      margin-block-end: 0;
    }
    > blockquote > p:first-of-type{
      margin-block-start: 0;
    }
    > p:last-of-type {
      margin-block-end: 0;
    }

    mark[reference-tracker] {
      background-color: var(--mynah-color-highlight);
      color: inherit;
      cursor: help;
    }

    .amzn-mynah-search-result-highlight {
      background-color: var(--mynah-color-highlight);
      color: var(--mynah-color-highlight-text);
    }

    .amzn-mynah-search-result-ellipsis {
      display: inline-block;
      position: relative;
      padding-left: var(--mynah-sizing-2);
      margin-top: var(--mynah-sizing-1);
      margin-bottom: var(--mynah-sizing-1);
      font-size: calc(1em + var(--mynah-sizing-1)) !important;
      user-select: none;
      cursor: default;
      height: var(--mynah-sizing-7);

      &:before {
        pointer-events: none;
        content: '';
        width: calc(1em + var(--mynah-sizing-2));
        height: calc(1em + var(--mynah-sizing-2));
        position: absolute;
        left: 0;
        top: 0;
        background-color: currentColor;
        opacity: 0.1;
        border-radius: var(--mynah-sizing-1);
      }
    }
  }
}
`],sourceRoot:""}]),a.locals={"mynah-color-text":'"default: var(--vscode-foreground); alternate: var(--mynah-color-button-reverse); strong: var(--vscode-input-foreground); weak: var(--vscode-disabledForeground); link: var(--vscode-textLink-foreground); input: var(--vscode-input-foreground); "',"mynah-statuses":'"success, error, warning, info, "',"mynah-syntax-colors":'"bg: var(--vscode-terminal-dropBackground); variable: var(--vscode-debugTokenExpression-name); function: var(--vscode-gitDecoration-modifiedResourceForeground); operator: var(--vscode-debugTokenExpression-name); attr-value: var(--vscode-debugIcon-stepBackForeground); attr: var(--vscode-debugTokenExpression-string); property: var(--vscode-terminal-ansiCyan); comment: var(--vscode-debugConsole-sourceForeground); code: var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit)); "',"mynah-status-colors":'"info: #0971d3; success: #037f03; warning: #b2911c; error: #d91515; "',"mynah-font-sizes":'"xxsmall: 0.75rem; xsmall: 0.85rem; small: 0.95rem; medium: 1rem; large: 1.125rem; "',"mynah-padding-sizes":'"none: 0; small: 1; medium: 3; large: 5; "',"mynah-transitions":'"bottom-panel: 850, cubic-bezier(0.25, 1, 0, 1), ; very-short: 600, cubic-bezier(0.25, 1, 0, 1), ; very-long: 1650, cubic-bezier(0.25, 1, 0, 1), ; short: 550, cubic-bezier(0.85, 0.15, 0, 1), ; short-rev: 580, cubic-bezier(0.35, 1, 0, 1), ; "',"mynah-syntax-token-styles":'"comments: comment, prolog, doctype, cdata, ; punctuation: punctuation; namespace: namespace; properties: property, tag, boolean, number, constant, symbol, inserted, ; attributes: selector, attr-name, string, char, builtin, deleted, ; operators: operator, entity, url, ; attr-values: atrule, attr-value, class-name, keyword, ; functions: function; variables: regex, important, variable, ; bold: important, bold, ; italic: italic; entity: entity; "'};const d=a},2203:(v,t,e)=>{"use strict";e.d(t,{Z:()=>d});var l=e(7537),c=e.n(l),A=e(3645),a=e.n(A)()(c());a.push([v.id,'.mynah-chat-prompt-overlay-buttons-container{display:inline-flex;flex-flow:column nowrap;gap:var(--mynah-sizing-2);justify-content:flex-start;align-items:flex-start}.mynah-chat-wrapper{transition:var(--mynah-bottom-panel-transition);position:absolute;top:0;right:0;bottom:0;left:0;width:auto;height:auto;flex-flow:column nowrap;overflow:hidden;justify-content:space-around;align-items:stretch;display:none}.mynah-chat-wrapper>div[class^=mynah-chat]{width:100%;max-width:100%;box-sizing:border-box;padding-left:var(--mynah-sizing-4);padding-right:var(--mynah-sizing-4)}.mynah-chat-wrapper:after{transition:var(--mynah-very-short-transition);content:"";position:absolute;top:0;right:0;bottom:0;left:0;width:auto;height:auto;background-color:#000;z-index:1000;opacity:0;pointer-events:none;transform:translate3d(0, 0, 0) scale(2);transform-origin:center center}.mynah-chat-wrapper>.mynah-chat-items-container{position:relative;display:flex;flex:1 1 0%;overflow-x:hidden;overflow-y:auto;flex-flow:column-reverse nowrap;align-items:flex-start;padding:var(--mynah-chat-wrapper-spacing);gap:var(--mynah-chat-wrapper-spacing)}.mynah-chat-wrapper.loading>.mynah-chat-items-container{padding-bottom:var(--mynah-sizing-14)}.mynah-chat-wrapper.loading>.mynah-chat-items-container>.mynah-chat-item-card.mynah-chat-item-answer-stream:first-child>.mynah-card{min-width:100px;min-height:var(--mynah-sizing-14)}.mynah-chat-wrapper.loading>.mynah-chat-items-container>.mynah-chat-item-card.mynah-chat-item-answer-stream:first-child>.mynah-card>.mynah-card-votes-wrapper{display:none}.mynah-chat-wrapper.loading>.mynah-chat-items-container>.mynah-chat-item-card.mynah-chat-item-answer-stream:first-child.mynah-chat-item-empty .mynah-chat-items-spinner{display:inline-flex}.mynah-chat-wrapper.loading>.mynah-chat-items-container>.mynah-chat-item-card.mynah-chat-item-answer-stream:first-child.mynah-chat-item-empty .mynah-chat-items-spinner>span{flex:0 0 auto}.mynah-chat-wrapper.loading>.mynah-chat-items-container>.mynah-chat-item-card.mynah-chat-item-answer-stream:first-child:not(.mynah-chat-item-empty):before{content:"";pointer-events:none;position:absolute;overflow:hidden;border-bottom-right-radius:var(--mynah-card-radius);border-bottom-left-radius:var(--mynah-card-radius-corner);bottom:0;left:0;right:0;width:auto;height:100%;box-sizing:border-box;z-index:10;background-image:linear-gradient(90deg, var(--mynah-color-button) 0%, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0) 50%, var(--mynah-color-button) 100%);background-position:0% bottom;background-size:200% var(--mynah-sizing-1);background-repeat:repeat-x;animation:horizontal-roll 1250ms linear infinite both}.mynah-chat-wrapper.loading>.mynah-chat-overflowing-intermediate-block{display:flex;flex-flow:column nowrap;max-height:0;overflow:visible;justify-content:flex-end}.mynah-chat-wrapper.loading>.mynah-chat-overflowing-intermediate-block:not(.hidden)>.mynah-chat-stop-chat-response-button{display:inline-flex}.mynah-chat-wrapper>.mynah-chat-overflowing-intermediate-block{display:flex;flex-flow:column nowrap;max-height:0;overflow:visible;justify-content:flex-end;align-items:center;border-bottom:1px solid var(--mynah-color-border-default)}.mynah-chat-wrapper>.mynah-chat-overflowing-intermediate-block.hidden>*{display:none !important}.mynah-chat-wrapper>.mynah-chat-overflowing-intermediate-block>.mynah-chat-stop-chat-response-button{margin-bottom:var(--mynah-sizing-2);display:none;min-height:var(--mynah-sizing-8)}.mynah-chat-wrapper>.mynah-chat-overflowing-intermediate-block>.mynah-chat-stop-chat-response-button:active{box-shadow:none;filter:none}.mynah-chat-wrapper>.mynah-chat-overflowing-intermediate-block>.mynah-chat-stop-chat-response-button *{font-size:var(--mynah-font-size-xsmall)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper{display:block;padding:var(--mynah-sizing-4)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt{display:flex;flex-flow:column nowrap;overflow:hidden;box-sizing:border-box;border:var(--mynah-border-width) solid var(--mynah-color-border-default);background-color:var(--mynah-card-bg);border-radius:var(--mynah-card-radius);padding:var(--mynah-sizing-4)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper{display:flex;flex-flow:row nowrap;overflow:hidden;box-sizing:border-box;gap:var(--mynah-sizing-2);align-items:flex-start;position:relative;color:var(--mynah-color-text-weak)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-command-wrapper{align-self:flex-start;display:inline-flex;align-items:center;position:relative;gap:var(--mynah-sizing-1);box-sizing:border-box}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-command-wrapper.hidden{display:none}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-command-wrapper>.mynah-chat-prompt-input-command-text{user-select:none;cursor:pointer;font-family:var(--mynah-font-family);font-size:var(--mynah-font-size-large);color:var(--mynah-color-text-input);font-weight:bold;white-space:nowrap;max-width:calc(10*var(--mynah-font-size-large));overflow:hidden;text-overflow:ellipsis}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper{display:block;width:100%;position:relative;align-self:center}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper>.mynah-chat-prompt-input{font-family:var(--mynah-font-family);border:none;resize:none;background-color:rgba(0,0,0,0);font-size:var(--mynah-font-size-large);color:rgba(0,0,0,0);caret-color:var(--mynah-color-text-input);outline:none;width:100%;max-height:20vh;min-height:1.5rem}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper>.mynah-chat-prompt-input:placeholder-shown{text-overflow:ellipsis}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper>.mynah-chat-prompt-input::placeholder{color:var(--mynah-color-text-weak);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper>.mynah-chat-prompt-input:not(.mynah-chat-prompt-input-sizer){position:absolute;height:auto;width:auto;top:0;right:0;bottom:0;left:0;padding:0;z-index:100}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper>.mynah-chat-prompt-input-sizer{display:block;width:100%;opacity:1;pointer-events:none;overflow:hidden;white-space:pre-wrap;word-break:break-word;color:var(--mynah-color-text-input);position:relative;z-index:50}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper>.mynah-chat-prompt-input-sizer>span.context{position:relative;color:var(--mynah-color-button-reverse);border-radius:calc(var(--mynah-input-radius)/2);display:inline-block}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper>.mynah-chat-prompt-input-sizer>span.context:before{content:"";position:absolute;left:-1px;right:-1px;width:auto;height:100%;background-color:var(--mynah-color-button);border-radius:inherit;z-index:-1}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper>.mynah-chat-prompt-input-sizer>span.placeholder{position:relative;color:var(--mynah-color-text-weak)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper~.mynah-chat-prompt-button{background-color:transparent;width:auto;min-width:0;height:auto;padding-top:1px}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper~.mynah-chat-prompt-button i{font-size:calc(2*var(--mynah-font-size-xsmall));color:var(--mynah-color-button);height:var(--mynah-sizing-6);padding-left:0}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper.no-text~.mynah-chat-prompt-button:not([disabled]),.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper~.mynah-chat-prompt-button[disabled]{pointer-events:none;opacity:.25}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper.no-text~.mynah-chat-prompt-button:not([disabled]) i,.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper~.mynah-chat-prompt-button[disabled] i{color:var(--mynah-color-text-weak)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper:empty{display:none}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item{position:relative;display:inline-block;max-width:250px;cursor:pointer}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%;border-radius:var(--mynah-card-radius);opacity:0;transition:var(--mynah-short-transition-rev);z-index:8000;background-color:var(--mynah-color-alternate)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item>.mynah-chat-attachment-delete-icon{color:var(--mynah-color-alternate-reverse);opacity:0;transition:var(--mynah-short-transition-rev);position:absolute;left:50%;top:50%;width:30px;height:30px;margin-left:-15px;margin-top:-15px;z-index:9000}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item>.mynah-chat-attachment-delete-icon>i{width:30px;height:30px}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item:hover:after{opacity:.75}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item:hover>.mynah-chat-attachment-delete-icon{opacity:1}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item>.mynah-card{pointer-events:none !important}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item>.mynah-card *{pointer-events:none !important}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item>.mynah-card>.mynah-card-body{display:none}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper.input-has-focus>.mynah-chat-prompt{border:var(--mynah-border-width) solid var(--mynah-color-button)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt-chars-indicator{width:100%;font-size:var(--mynah-font-size-xsmall);padding-top:var(--mynah-sizing-2);opacity:.5;display:flex;align-items:center;justify-content:flex-end;font-style:italic}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper+.mynah-chat-prompt-input-info{padding-top:0;margin-top:calc(-1*var(--mynah-sizing-2))}.mynah-chat-wrapper>.mynah-chat-prompt-input-sticky-card:not(:empty){padding-top:var(--mynah-sizing-4)}.mynah-chat-wrapper>.mynah-chat-prompt-input-sticky-card>.mynah-chat-item-card{max-width:100%;width:100%}.mynah-chat-wrapper>.mynah-chat-prompt-input-sticky-card>.mynah-chat-item-card>.mynah-card{border-bottom-left-radius:var(--mynah-card-radius) !important}.mynah-chat-wrapper>.mynah-chat-prompt-input-info{display:flex;flex-flow:row nowrap;box-sizing:border-box;overflow:hidden;padding:var(--mynah-sizing-4)}.mynah-chat-wrapper>.mynah-chat-prompt-input-info,.mynah-chat-wrapper>.mynah-chat-prompt-input-info *{font-size:var(--mynah-font-size-xsmall)}.mynah-chat-wrapper>.mynah-chat-prompt-input-info:empty{display:none}.mynah-chat-wrapper>.mynah-chat-prompt-input-info>*{margin:0;margin-block-start:0;margin-block-end:0;margin-top:0;margin-bottom:0}.mynah-chat-items-container :export,.mynah-chat-prompt-input-sticky-card :export{mynah-color-text:"default: var(--vscode-foreground); alternate: var(--mynah-color-button-reverse); strong: var(--vscode-input-foreground); weak: var(--vscode-disabledForeground); link: var(--vscode-textLink-foreground); input: var(--vscode-input-foreground); "}.mynah-chat-items-container :export,.mynah-chat-prompt-input-sticky-card :export{mynah-statuses:"success, error, warning, info, "}.mynah-chat-items-container :export,.mynah-chat-prompt-input-sticky-card :export{mynah-syntax-colors:"bg: var(--vscode-terminal-dropBackground); variable: var(--vscode-debugTokenExpression-name); function: var(--vscode-gitDecoration-modifiedResourceForeground); operator: var(--vscode-debugTokenExpression-name); attr-value: var(--vscode-debugIcon-stepBackForeground); attr: var(--vscode-debugTokenExpression-string); property: var(--vscode-terminal-ansiCyan); comment: var(--vscode-debugConsole-sourceForeground); code: var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit)); "}.mynah-chat-items-container :export,.mynah-chat-prompt-input-sticky-card :export{mynah-status-colors:"info: #0971d3; success: #037f03; warning: #b2911c; error: #d91515; "}.mynah-chat-items-container :export,.mynah-chat-prompt-input-sticky-card :export{mynah-font-sizes:"xxsmall: 0.75rem; xsmall: 0.85rem; small: 0.95rem; medium: 1rem; large: 1.125rem; "}.mynah-chat-items-container :export,.mynah-chat-prompt-input-sticky-card :export{mynah-padding-sizes:"none: 0; small: 1; medium: 3; large: 5; "}.mynah-chat-items-container :export,.mynah-chat-prompt-input-sticky-card :export{mynah-transitions:"bottom-panel: 850, cubic-bezier(0.25, 1, 0, 1), ; very-short: 600, cubic-bezier(0.25, 1, 0, 1), ; very-long: 1650, cubic-bezier(0.25, 1, 0, 1), ; short: 550, cubic-bezier(0.85, 0.15, 0, 1), ; short-rev: 580, cubic-bezier(0.35, 1, 0, 1), ; "}.mynah-chat-items-container :export,.mynah-chat-prompt-input-sticky-card :export{mynah-syntax-token-styles:"comments: comment, prolog, doctype, cdata, ; punctuation: punctuation; namespace: namespace; properties: property, tag, boolean, number, constant, symbol, inserted, ; attributes: selector, attr-name, string, char, builtin, deleted, ; operators: operator, entity, url, ; attr-values: atrule, attr-value, class-name, keyword, ; functions: function; variables: regex, important, variable, ; bold: important, bold, ; italic: italic; entity: entity; "}.mynah-chat-items-container :root,.mynah-chat-prompt-input-sticky-card :root{--mynah-font-family: var(--vscode-font-family), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Amazon Ember", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;font-size:var(--vscode-font-size, 13px);font-family:var(--mynah-font-family, "system-ui");--mynah-max-width: 2560px;--mynah-sizing-base: 0.25rem;--mynah-sizing-half: calc(var(--mynah-sizing-base) / 2);--mynah-sizing-1: calc(var(--mynah-sizing-base) * 1);--mynah-sizing-2: calc(var(--mynah-sizing-base) * 2);--mynah-sizing-3: calc(var(--mynah-sizing-base) * 3);--mynah-sizing-4: calc(var(--mynah-sizing-base) * 4);--mynah-sizing-5: calc(var(--mynah-sizing-base) * 5);--mynah-sizing-6: calc(var(--mynah-sizing-base) * 6);--mynah-sizing-7: calc(var(--mynah-sizing-base) * 7);--mynah-sizing-8: calc(var(--mynah-sizing-base) * 8);--mynah-sizing-9: calc(var(--mynah-sizing-base) * 9);--mynah-sizing-10: calc(var(--mynah-sizing-base) * 10);--mynah-sizing-11: calc(var(--mynah-sizing-base) * 11);--mynah-sizing-12: calc(var(--mynah-sizing-base) * 12);--mynah-sizing-13: calc(var(--mynah-sizing-base) * 13);--mynah-sizing-14: calc(var(--mynah-sizing-base) * 14);--mynah-sizing-15: calc(var(--mynah-sizing-base) * 15);--mynah-sizing-16: calc(var(--mynah-sizing-base) * 16);--mynah-sizing-17: calc(var(--mynah-sizing-base) * 17);--mynah-sizing-18: calc(var(--mynah-sizing-base) * 18);--mynah-chat-wrapper-spacing: var(--mynah-sizing-4);--mynah-button-border-width: 1px;--mynah-border-width: 1px;--mynah-color-text-default: var(--vscode-foreground);--mynah-color-text-alternate: var(--mynah-color-button-reverse);--mynah-color-text-strong: var(--vscode-input-foreground);--mynah-color-text-weak: var(--vscode-disabledForeground);--mynah-color-text-link: var(--vscode-textLink-foreground);--mynah-color-text-input: var(--vscode-input-foreground);--mynah-color-bg: var(--vscode-sideBar-background);--mynah-color-tab-active: var(--vscode-tab-activeBackground, var(--vscode-editor-background, var(--mynah-card-bg)));--mynah-color-light: rgba(0, 0, 0, 0.05);--mynah-color-border-default: var(--vscode-panel-border, var(--vscode-tab-border, rgba(0, 0, 0, 0.1)));--mynah-color-highlight: rgba(255, 179, 0, 0.25);--mynah-color-highlight-text: #886411;--mynah-color-toggle: var(--vscode-sideBar-background);--mynah-color-toggle-reverse: rgba(0, 0, 0, 0.5);--mynah-color-syntax-bg: var(--vscode-terminal-dropBackground);--mynah-color-syntax-variable: var(--vscode-debugTokenExpression-name);--mynah-color-syntax-function: var(--vscode-gitDecoration-modifiedResourceForeground);--mynah-color-syntax-operator: var(--vscode-debugTokenExpression-name);--mynah-color-syntax-attr-value: var(--vscode-debugIcon-stepBackForeground);--mynah-color-syntax-attr: var(--vscode-debugTokenExpression-string);--mynah-color-syntax-property: var(--vscode-terminal-ansiCyan);--mynah-color-syntax-comment: var(--vscode-debugConsole-sourceForeground);--mynah-color-syntax-code: var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit));--mynah-syntax-code-font-family: var(--vscode-editor-font-family);--mynah-syntax-code-font-size: var(--vscode-editor-font-size, var(--mynah-font-size-medium));--mynah-color-status-info: #0971d3;--mynah-color-status-success: #037f03;--mynah-color-status-warning: #b2911c;--mynah-color-status-error: #d91515;--mynah-color-button: var(--vscode-button-background);--mynah-color-button-reverse: var(--vscode-button-foreground);--mynah-color-alternate: var(--vscode-button-secondaryBackground);--mynah-color-alternate-reverse: var(--vscode-button-secondaryForeground);--mynah-card-bg: var(--vscode-editor-background);--mynah-card-bg-alternate: var(--mynah-color-button);--mynah-shadow-button: none;--mynah-shadow-card: none;--mynah-shadow-overlay: 0 0px 15px -5px rgba(0, 0, 0, 0.4);--mynah-font-size-xxsmall: 0.75rem;--mynah-font-size-xsmall: 0.85rem;--mynah-font-size-small: 0.95rem;--mynah-font-size-medium: 1rem;--mynah-font-size-large: 1.125rem;--mynah-line-height: 1.5rem;--mynah-syntax-code-line-height: 1.5rem;--mynah-card-radius: var(--mynah-sizing-2);--mynah-input-radius: var(--mynah-sizing-1);--mynah-card-radius-corner: 0;--mynah-button-radius: var(--mynah-sizing-1);--mynah-bottom-panel-transition: all 850ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-short-transition: all 600ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-long-transition: all 1650ms cubic-bezier(0.25, 1, 0, 1);--mynah-short-transition: all 550ms cubic-bezier(0.85, 0.15, 0, 1);--mynah-short-rev-transition: all 580ms cubic-bezier(0.35, 1, 0, 1);--mynah-short-transition-rev-opacity: opacity 750ms cubic-bezier(0.35, 1, 0, 1);--mynah-text-flow-transition: all 800ms cubic-bezier(0.35, 1.2, 0, 1), transform 800ms cubic-bezier(0.2, 1.05, 0, 1)}.mynah-chat-items-container .mynah-chat-item-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card{display:inline-flex;flex-flow:column nowrap;position:relative;max-width:90%;transition:var(--mynah-text-flow-transition);transform:translate3d(0, min(50%, 25vh), 0) scale(0.95, 1.25);opacity:0;transform-origin:center bottom;gap:var(--mynah-sizing-4)}.mynah-chat-items-container .mynah-chat-item-card-status-success>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card-status-success>.mynah-card{border-color:var(--mynah-color-status-success)}.mynah-chat-items-container .mynah-chat-item-card-status-success>.mynah-card>.mynah-chat-item-card-icon,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card-status-success>.mynah-card>.mynah-chat-item-card-icon{color:var(--mynah-color-status-success)}.mynah-chat-items-container .mynah-chat-item-card-status-error>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card-status-error>.mynah-card{border-color:var(--mynah-color-status-error)}.mynah-chat-items-container .mynah-chat-item-card-status-error>.mynah-card>.mynah-chat-item-card-icon,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card-status-error>.mynah-card>.mynah-chat-item-card-icon{color:var(--mynah-color-status-error)}.mynah-chat-items-container .mynah-chat-item-card-status-warning>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card-status-warning>.mynah-card{border-color:var(--mynah-color-status-warning)}.mynah-chat-items-container .mynah-chat-item-card-status-warning>.mynah-card>.mynah-chat-item-card-icon,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card-status-warning>.mynah-card>.mynah-chat-item-card-icon{color:var(--mynah-color-status-warning)}.mynah-chat-items-container .mynah-chat-item-card-status-info>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card-status-info>.mynah-card{border-color:var(--mynah-color-status-info)}.mynah-chat-items-container .mynah-chat-item-card-status-info>.mynah-card>.mynah-chat-item-card-icon,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card-status-info>.mynah-card>.mynah-chat-item-card-icon{color:var(--mynah-color-status-info)}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-card-has-icon>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-card-has-icon>.mynah-card{padding-left:var(--mynah-sizing-10)}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-card-has-icon>.mynah-card>.mynah-chat-item-card-icon,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-card-has-icon>.mynah-card>.mynah-chat-item-card-icon{position:absolute;left:var(--mynah-sizing-4)}.mynah-chat-items-container .mynah-chat-item-card.reveal,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.reveal{opacity:1;transform:translate3d(0, 0, 0) scale(1, 1)}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-no-content,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-no-content{display:none !important}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer-stream.typewriter-animating:before,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer-stream.typewriter-animating:before{content:"";pointer-events:none;position:absolute;overflow:hidden;border-bottom-right-radius:var(--mynah-card-radius);border-bottom-left-radius:var(--mynah-card-radius-corner);bottom:0;left:0;right:0;width:auto;height:100%;box-sizing:border-box;z-index:10;background-image:linear-gradient(90deg, var(--mynah-color-button) 0%, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0) 50%, var(--mynah-color-button) 100%);background-position:0% bottom;background-size:200% var(--mynah-sizing-1);background-repeat:repeat-x;animation:horizontal-roll 1250ms linear infinite both}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card{max-width:100%;width:100%;padding:var(--mynah-sizing-3) 0 var(--mynah-sizing-3) 0;border-top:1px solid var(--mynah-color-border-default);margin-top:var(--mynah-sizing-3);padding-bottom:0}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-title,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-title{font-size:var(--mynah-font-size-large)}.mynah-chat-items-container .mynah-chat-item-card>span.invisible,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>span.invisible{display:none}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-code-result,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-code-result{min-width:70%}.mynah-chat-items-container .mynah-chat-item-card>.mynah-chat-item-card-icon-wrapper,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-chat-item-card-icon-wrapper{background-color:var(--mynah-color-alternate);color:var(--mynah-color-alternate-reverse);padding:var(--mynah-sizing-2);border-radius:100%}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner{overflow:visible;z-index:10000;gap:var(--mynah-sizing-2);justify-content:flex-start;align-items:center;transition:var(--mynah-very-short-transition);display:flex}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner>span,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner>span{position:relative;display:inline-block;width:var(--mynah-sizing-5);height:var(--mynah-sizing-5);border:var(--mynah-sizing-half) solid rgba(0,0,0,0);border-radius:50%;border-top-color:var(--mynah-color-button);animation:spinner-spin 1s ease-in-out infinite;transform-origin:center center;overflow:visible}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner>span:before,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner>span:before{position:absolute;content:"";top:calc(-1*var(--mynah-sizing-half));left:calc(-1*var(--mynah-sizing-half));right:calc(-1*var(--mynah-sizing-half));bottom:calc(-1*var(--mynah-sizing-half));width:auto;height:auto;aspect-ratio:1;border:var(--mynah-sizing-half) solid var(--mynah-color-button);border-radius:50%;opacity:.15;box-sizing:border-box}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner>div,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner>div{opacity:1}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body{padding-left:0}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>div>.mynah-syntax-highlighter,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body>div>.mynah-syntax-highlighter{filter:contrast(1.15) brightness(0.85)}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>div h1:first-child,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body>div h1:first-child{margin-top:0}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>div h2:first-child,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body>div h2:first-child{margin-top:0}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>div h3:first-child,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body>div h3:first-child{margin-top:0}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>div h4:first-child,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body>div h4:first-child{margin-top:0}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>.mynah-chat-item-card-related-content,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body>.mynah-chat-item-card-related-content{margin-top:var(--mynah-sizing-3);padding-top:var(--mynah-sizing-4);border-top:var(--mynah-button-border-width) solid var(--mynah-color-border-default)}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-title,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-title{color:var(--mynah-color-text-weak);font-size:var(--mynah-font-size-xsmall);margin:0}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>.mynah-chat-item-card-related-content .mynah-source-link-title,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body>.mynah-chat-item-card-related-content .mynah-source-link-title{font-size:var(--mynah-font-size-small);font-weight:400}.mynah-chat-items-container .mynah-chat-item-card>.mynah-chat-item-followup-question,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-chat-item-followup-question{display:inline-flex;flex-flow:column nowrap;position:relative;gap:var(--mynah-sizing-2)}.mynah-chat-items-container .mynah-chat-item-card>.mynah-chat-item-followup-question>.mynah-chat-item-followup-question-text,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-chat-item-followup-question>.mynah-chat-item-followup-question-text{color:var(--mynah-color-text-weak);font-size:var(--mynah-font-size-xsmall);font-style:italic}.mynah-chat-items-container .mynah-chat-item-card>.mynah-chat-item-followup-question>.mynah-chat-item-followup-question-options-wrapper,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-chat-item-followup-question>.mynah-chat-item-followup-question-options-wrapper{display:inline-flex;flex-flow:row wrap;max-width:100%;gap:var(--mynah-sizing-2)}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-followup-question-option,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-followup-question-option{padding:var(--mynah-sizing-1) var(--mynah-sizing-2);color:var(--mynah-color-text-default);border:var(--mynah-border-width) solid currentColor;border-radius:var(--mynah-button-radius);cursor:pointer;font-size:var(--mynah-font-size-xsmall);max-width:100%;overflow:hidden;display:inline-flex;gap:var(--mynah-sizing-2);align-items:center;user-select:none;line-height:var(--mynah-line-height)}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-followup-question-option>span,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-followup-question-option>span{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-followup-question-option *,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-followup-question-option *{pointer-events:none}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-followup-question-option-disabled,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-followup-question-option-disabled{opacity:.25 !important;cursor:default !important}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-followup-question-option:not(:hover),.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-followup-question-option:not(:hover){opacity:.75}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-followup-question-option-status-success,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-followup-question-option-status-success{color:var(--mynah-color-status-success)}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-followup-question-option-status-error,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-followup-question-option-status-error{color:var(--mynah-color-status-error)}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-followup-question-option-status-warning,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-followup-question-option-status-warning{color:var(--mynah-color-status-warning)}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-followup-question-option-status-info,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-followup-question-option-status-info{color:var(--mynah-color-status-info)}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content{display:flex;flex-flow:column nowrap;gap:var(--mynah-sizing-2);overflow:hidden;position:relative}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item{max-width:100%}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card{padding:0;border-radius:0;box-shadow:none}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item .amzn-mynah-search-result-highlight,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item .amzn-mynah-search-result-highlight{background-color:inherit;color:inherit}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content:not(.expanded)>.mynah-chat-item-card-related-content-item:not(:nth-of-type(1)),.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content:not(.expanded)>.mynah-chat-item-card-related-content-item:not(:nth-of-type(1)){display:none}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content:not(.expanded)>.mynah-chat-item-card-related-content-item:nth-of-type(1),.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content:not(.expanded)>.mynah-chat-item-card-related-content-item:nth-of-type(1){margin-bottom:calc(-1*var(--mynah-sizing-4));pointer-events:none;position:relative;-webkit-mask-image:linear-gradient(to bottom, black 30%, black calc(100% - var(--mynah-sizing-12)), transparent 100%);-webkit-mask-size:100% 100%;mask-image:linear-gradient(to bottom, black 30%, black calc(100% - var(--mynah-sizing-12)), transparent 100%);mask-size:100% 100%;mask-image:linear-gradient(to top, transparent var(--mynah-sizing-1), black 70%);-webkit-mask-image:linear-gradient(to top, transparent var(--mynah-sizing-1), black 70%)}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content:not(.expanded)>.mynah-chat-item-card-related-content-item:nth-of-type(2)~.mynah-chat-item-card-related-content-show-more,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content:not(.expanded)>.mynah-chat-item-card-related-content-item:nth-of-type(2)~.mynah-chat-item-card-related-content-show-more{display:flex}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-show-more,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-show-more{display:none;max-width:80%;z-index:10000;margin-block-start:0;margin-block-end:0;align-self:center;height:var(--mynah-sizing-8);filter:none}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-show-more>span,.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-show-more>i,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-show-more>span,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-show-more>i{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--mynah-font-size-xsmall)}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt{align-self:flex-end}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-chat-item-card-icon-wrapper,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-chat-item-card-icon-wrapper,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-chat-item-card-icon-wrapper,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-chat-item-card-icon-wrapper{align-self:flex-end}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-followup-question,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-followup-question,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-followup-question,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-followup-question,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content{align-items:flex-end}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt .mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt .mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons{display:none}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-card{padding:var(--mynah-sizing-4);background-color:var(--mynah-card-bg-alternate);border-bottom-right-radius:var(--mynah-card-radius-corner)}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content>.mynah-card>.mynah-card-body,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card>.mynah-card-body,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content>.mynah-card>.mynah-card-body,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-card>.mynah-card-body,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content>.mynah-card>.mynah-card-body,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card>.mynah-card-body,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content>.mynah-card>.mynah-card-body,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-card>.mynah-card-body{color:var(--mynah-color-text-alternate)}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content>.mynah-card{border:none}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card{background-color:var(--mynah-color-status-warning)}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-empty:empty,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-empty:empty{display:none}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer-stream.mynah-chat-item-empty.stream-ended,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer-stream.mynah-chat-item-empty.stream-ended{display:none}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-code-result>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-code-result>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-card{border-bottom-left-radius:var(--mynah-card-radius-corner);max-height:100%;flex:1}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-ai-prompt>.mynah-chat-item-card-icon-wrapper,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer>.mynah-chat-item-card-icon-wrapper,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-chat-item-card-icon-wrapper,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-ai-prompt>.mynah-chat-item-card-icon-wrapper,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer>.mynah-chat-item-card-icon-wrapper,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-chat-item-card-icon-wrapper{align-self:flex-start}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-ai-prompt>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-ai-prompt>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact{opacity:1}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-ai-prompt>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact>.mynah-source-link-header,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact>.mynah-source-link-header,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact>.mynah-source-link-header,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-ai-prompt>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact>.mynah-source-link-header,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact>.mynah-source-link-header,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact>.mynah-source-link-header{opacity:1}.mynah-chat-command-selector{display:flex;box-sizing:border-box;background-color:var(--mynah-card-bg);border-radius:var(--mynah-card-radius);width:100%;pointer-events:all;flex-flow:column nowrap;align-items:stretch;justify-content:flex-start;max-height:80vh;overflow-x:hidden;padding:var(--mynah-sizing-4);overflow-y:auto;position:relative;-webkit-mask-image:linear-gradient(to bottom, black 30%, black calc(100% - var(--mynah-sizing-6)), transparent 100%);-webkit-mask-size:100% 100%;mask-image:linear-gradient(to bottom, black 30%, black calc(100% - var(--mynah-sizing-6)), transparent 100%);mask-size:100% 100%}.mynah-chat-command-selector>.mynah-chat-command-selector-group{display:flex;box-sizing:border-box;width:100%;flex-flow:column nowrap;align-items:stretch;justify-content:flex-start;gap:var(--mynah-sizing-1)}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-group-title{margin:0;color:var(--mynah-color-text-strong);padding:0 var(--mynah-sizing-3);margin-bottom:var(--mynah-sizing-1);font-size:var(--mynah-font-size-large);position:relative;border-radius:var(--mynah-input-radius);overflow:hidden}.mynah-chat-command-selector>.mynah-chat-command-selector-group+.mynah-chat-command-selector-group{margin-top:var(--mynah-sizing-2);padding-top:var(--mynah-sizing-4);border-top:var(--mynah-border-width) solid var(--mynah-color-border-default)}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command{display:flex;position:relative;box-sizing:border-box;width:100%;flex-flow:column nowrap;align-items:flex-start;justify-content:flex-start;overflow:hidden;cursor:pointer;padding:var(--mynah-sizing-2) var(--mynah-sizing-3);color:var(--mynah-color-text-default);border-radius:var(--mynah-input-radius);transition:var(--mynah-short-transition-rev);gap:var(--mynah-sizing-1)}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command[disabled=true]{opacity:.5}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command[disabled=true]::before{border-color:transparent !important}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command[disabled=true],.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command[disabled=true] *{pointer-events:none}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command:hover:not([disabled=true]),.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command.target-command:not([disabled=true]){background-color:var(--mynah-color-button)}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command:hover:not([disabled=true]),.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command:hover:not([disabled=true]) *,.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command.target-command:not([disabled=true]),.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command.target-command:not([disabled=true]) *{color:var(--mynah-color-button-reverse)}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command:hover:not([disabled=true]) .mynah-chat-command-selector-command-description,.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command:hover:not([disabled=true]) * .mynah-chat-command-selector-command-description,.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command.target-command:not([disabled=true]) .mynah-chat-command-selector-command-description,.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command.target-command:not([disabled=true]) * .mynah-chat-command-selector-command-description{color:var(--mynah-color-button-reverse);opacity:.65}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command>.mynah-chat-command-selector-command-name{font-family:var(--mynah-font-family);font-size:var(--mynah-font-size-medium);font-weight:bold;flex:0 1 0%}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command>.mynah-chat-command-selector-command-description{font-size:var(--mynah-font-size-small);color:var(--mynah-color-text-weak);flex:1 0 100%}.mynah-chat-command-selector:not(.has-target-item)>.mynah-chat-command-selector-group:first-child>.mynah-chat-command-selector-command:first-of-type:before{content:"";z-index:-1;border:calc(2*var(--mynah-border-width)) solid var(--mynah-color-button);box-sizing:border-box;position:absolute;top:0;left:0;width:100%;height:100%;border-radius:inherit}.mynah-chat-item-tree-view-wrapper{margin:0;margin-block-end:0 !important;margin-block-start:0 !important}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container{background-color:var(--mynah-card-bg);color:var(--mynah-color-text-default);margin-block-start:0 !important;margin-block-end:0 !important;position:relative;border-radius:var(--mynah-input-radius);border:var(--mynah-border-width) solid var(--mynah-color-border-default);overflow:hidden}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container>.mynah-chat-item-tree-view-wrapper-title{display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;position:relative;padding:var(--mynah-sizing-3);gap:var(--mynah-sizing-2);border-bottom:var(--mynah-border-width) solid var(--mynah-color-border-default)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container>.mynah-chat-item-tree-view-wrapper-title>h4{margin:0}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container>.mynah-chat-item-tree-view-wrapper-title:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background-color:var(--mynah-color-border-default);opacity:.25;pointer-events:none}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container>.mynah-chat-item-tree-view{padding:var(--mynah-sizing-2)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view{overflow:hidden;box-sizing:border-box;width:100%;overflow-y:hidden;overflow-x:auto;display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:flex-start;gap:var(--mynah-sizing-half)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-button-title{display:inline-flex;gap:var(--mynah-sizing-1)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-button-weak-title{opacity:.65}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-pull-request-item{width:100%;box-sizing:border-box}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view{padding-left:var(--mynah-sizing-4)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;gap:var(--mynah-sizing-2);overflow:hidden;cursor:pointer;width:calc(100% - var(--mynah-sizing-4));padding:calc(3*var(--mynah-sizing-half));position:relative;box-sizing:content-box;border-radius:var(--mynah-input-radius)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:all;z-index:100}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item>.mynah-chat-item-tree-view-file-item-actions{z-index:150}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item:not(:hover)>.mynah-chat-item-tree-view-file-item-actions{opacity:0;pointer-events:none}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item:hover{background-color:var(--mynah-color-light)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-status-info:before,.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-status-success:before,.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-status-warning:before,.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-status-error:before{content:"";position:absolute;z-index:0;opacity:.1;width:100%;height:100%;left:0;top:0;border-radius:inherit}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-status-info:before{background-color:var(--mynah-color-status-info)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-status-info>.mynah-chat-item-tree-view-file-item-details>.mynah-ui-icon{color:var(--mynah-color-status-info)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-status-success:before{background-color:var(--mynah-color-status-success)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-status-success>.mynah-chat-item-tree-view-file-item-details>.mynah-ui-icon{color:var(--mynah-color-status-success)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-status-warning:before{background-color:var(--mynah-color-status-warning)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-status-warning>.mynah-chat-item-tree-view-file-item-details>.mynah-ui-icon{color:var(--mynah-color-status-warning)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-status-error:before{background-color:var(--mynah-color-status-error)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-status-error>.mynah-chat-item-tree-view-file-item-details>.mynah-ui-icon{color:var(--mynah-color-status-error)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-details{display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;gap:var(--mynah-sizing-1);font-size:90%;z-index:10;flex:1;flex-shrink:2;overflow:hidden}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-details>.mynah-chat-item-tree-view-file-item-details-text{overflow:hidden;flex:1;white-space:nowrap;text-overflow:ellipsis}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-actions{display:flex;flex-flow:row-reverse nowrap;justify-content:flex-end;align-items:center;font-size:90%;z-index:10;padding-right:var(--mynah-sizing-1);flex-shrink:0}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-actions>.mynah-button{width:auto;height:auto;min-width:auto}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-actions>.mynah-button.info{color:var(--mynah-color-status-info)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-actions>.mynah-button.success{color:var(--mynah-color-status-success)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-actions>.mynah-button.warning{color:var(--mynah-color-status-warning)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-actions>.mynah-button.error{color:var(--mynah-color-status-error)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-deleted{text-decoration:line-through}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-title{display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;gap:var(--mynah-sizing-1);max-width:100%;overflow:hidden;z-index:10;flex-shrink:0}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-title>span{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:100%}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item>.mynah-chat-single-file-icon{position:relative;padding:var(--mynah-sizing-2);display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;border-radius:var(--mynah-input-radius);color:var(--mynah-card-bg)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item>.mynah-chat-single-file-icon:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background-color:var(--mynah-color-text-default);opacity:.5;pointer-events:none;border-radius:inherit}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container>.mynah-chat-item-tree-view-file-item{padding:var(--mynah-sizing-2);box-sizing:border-box;width:100%;border-radius:0}.mynah-chat-item-tree-view-wrapper-label{border-top-left-radius:var(--mynah-card-radius);border-top-right-radius:var(--mynah-card-radius);background-color:var(--mynah-color-alternate);margin-bottom:0px;padding:var(--mynah-sizing-4)}.mynah-chat-item-tree-view-wrapper-feedback-label{padding-left:var(--mynah-sizing-4)}.mynah-chat-item-tree-view-wrapper-feedback-div{float:right}.mynah-chat-item-tree-view-wrapper-feedback-div button:first-child{margin-right:var(--mynah-sizing-2)}.mynah-chat-item-tree-view-license{color:var(--mynah-color-text-weak)}.mynah-chat-item-tree-view-license:before{content:"";position:absolute;left:0;right:0;top:0;bottom:0;background-color:var(--mynah-card-bg-alternate);opacity:.07;pointer-events:none}.mynah-chat-item-tree-view-license ul{margin:0;padding-left:var(--mynah-sizing-8)}.mynah-chat-item-tree-view-license ul>li:not(:first-child){margin-top:var(--mynah-sizing-2)}.mynah-chat-item-tree-view-license ul>li .mynah-card-body p{margin:0}.mynah-chat-item-tree-view-license .mynah-chat-item-tree-view-license-dropdown-button>span{max-width:unset}.outer-container{display:flex}.outer-container:not(:empty){margin-top:var(--mynah-sizing-3)}.mynah-prompt-attachment-container.vertical-overflow pre{position:relative;-webkit-mask-image:linear-gradient(to bottom, black 30%, black calc(100% - var(--mynah-sizing-16)), transparent 100%);-webkit-mask-size:100% 100%;mask-image:linear-gradient(to bottom, black 30%, black calc(100% - var(--mynah-sizing-16)), transparent 100%);mask-size:100% 100%}.mynah-prompt-attachment-container{box-sizing:border-box;max-width:100%;max-height:calc(2*var(--mynah-sizing-12))}.mynah-prompt-attachment-container>.mynah-button{position:absolute;background-color:var(--mynah-card-bg) !important;width:var(--mynah-sizing-7) !important;min-width:var(--mynah-sizing-7) !important;max-width:var(--mynah-sizing-7) !important;height:var(--mynah-sizing-7) !important;border-radius:100%;right:calc(-1*var(--mynah-sizing-2));top:calc(-1*var(--mynah-sizing-2));border:var(--mynah-border-width) solid var(--mynah-color-border-default);opacity:1 !important;filter:brightness(0.95)}.mynah-prompt-attachment-container:not(:hover)>.mynah-button{display:none}.mynah-prompt-attachment-container>.mynah-card-body>.mynah-syntax-highlighter pre{text-overflow:ellipsis}.mynah-prompt-input-snippet-attachment-overlay{max-width:90vw;max-height:70vh}.mynah-prompt-input-snippet-attachment-overlay>.mynah-card-body>.mynah-syntax-highlighter{max-height:calc(70vh - var(--mynah-sizing-12)) !important}.mynah-prompt-attachment-container,.mynah-prompt-input-snippet-attachment-overlay{position:relative;overflow:visible;width:100%;box-sizing:border-box}.mynah-prompt-attachment-container>.mynah-card-body,.mynah-prompt-input-snippet-attachment-overlay>.mynah-card-body{max-height:100%}.mynah-prompt-attachment-container>.mynah-card-body>.mynah-syntax-highlighter,.mynah-prompt-input-snippet-attachment-overlay>.mynah-card-body>.mynah-syntax-highlighter{user-select:none;pointer-events:none;margin:0;max-height:100%;overflow:hidden}.mynah-prompt-attachment-container>.mynah-card-body>.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons,.mynah-prompt-input-snippet-attachment-overlay>.mynah-card-body>.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons{display:none}.mynah-prompt-attachment-container pre,.mynah-prompt-input-snippet-attachment-overlay pre{text-overflow:ellipsis}',"",{version:3,sources:["webpack://./src/styles/components/chat/_chat-wrapper.scss","webpack://./src/styles/components/chat/_chat-items-container.scss","webpack://./src/styles/components/chat/_chat-items-bottom-animator.scss","webpack://./src/styles/components/chat/_chat-overflowing-intermediate-block.scss","webpack://./src/styles/components/chat/_chat-prompt-wrapper.scss","webpack://./src/styles/_variables.scss","webpack://./src/styles/_mixins.scss","webpack://./src/styles/components/chat/_chat-item-card.scss","webpack://./src/styles/components/chat/_chat-command-selector.scss","webpack://./src/styles/components/chat/_chat-item-tree-view.scss","webpack://./src/styles/components/chat/_chat-prompt-attachment.scss"],names:[],mappings:"AACA,6CACI,mBAAA,CACA,uBAAA,CACA,yBAAA,CACA,0BAAA,CACA,sBAAA,CAEJ,oBACI,+CAAA,CACA,iBAAA,CACA,KAAA,CACA,OAAA,CACA,QAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,uBAAA,CACA,eAAA,CACA,4BAAA,CACA,mBAAA,CACA,YAAA,CACA,2CACI,UAAA,CACA,cAAA,CACA,qBAAA,CACA,kCAAA,CACA,mCAAA,CAEJ,0BACI,6CAAA,CACA,UAAA,CACA,iBAAA,CACA,KAAA,CACA,OAAA,CACA,QAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,YAAA,CACA,SAAA,CACA,mBAAA,CACA,uCAAA,CACA,8BAAA,CC5CR,gDACI,iBAAA,CACA,YAAA,CACA,WAAA,CACA,iBAAA,CACA,eAAA,CACA,+BAAA,CACA,sBAAA,CACA,yCAAA,CACA,qCAAA,CAIA,wDACI,qCAAA,CAGQ,oIACI,eAAA,CACA,iCAAA,CACA,8JACI,YAAA,CAIJ,wKACI,mBAAA,CACA,6KAEI,aAAA,CC7B5B,2JACE,UAAA,CACA,mBAAA,CACA,iBAAA,CACA,eAAA,CACA,mDAAA,CACA,yDAAA,CACA,QAAA,CACA,MAAA,CACA,OAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,UAAA,CACA,6JAAA,CAOA,6BAAA,CACA,0CAAA,CACA,0BAAA,CACA,qDAAA,CCvBE,uEACI,YAAA,CACA,uBAAA,CACA,YAAA,CACA,gBAAA,CACA,wBAAA,CACA,0HACI,mBAAA,CAIZ,+DACI,YAAA,CACA,uBAAA,CACA,YAAA,CACA,gBAAA,CACA,wBAAA,CACA,kBAAA,CACA,yDAAA,CACA,wEACI,uBAAA,CAEJ,qGACI,mCAAA,CACA,YAAA,CACA,gCAAA,CAEA,4GACI,eAAA,CACA,WAAA,CAEJ,uGACI,uCAAA,CCjCZ,+CACI,aAAA,CACA,6BAAA,CAEA,kEACI,YAAA,CACA,uBAAA,CACA,eAAA,CACA,qBAAA,CACA,wEAAA,CACA,qCAAA,CACA,sCAAA,CACA,6BAAA,CAEA,mGACI,YAAA,CACA,oBAAA,CACA,eAAA,CACA,qBAAA,CACA,yBAAA,CACA,sBAAA,CACA,iBAAA,CACA,kCAAA,CAEA,4IACI,qBAAA,CACA,mBAAA,CACA,kBAAA,CACA,iBAAA,CACA,yBAAA,CACA,qBAAA,CAEA,mJACI,YAAA,CAGJ,kLACI,gBAAA,CACA,cAAA,CACA,oCAAA,CACA,sCAAA,CACA,mCAAA,CACA,gBAAA,CACA,kBAAA,CACA,+CAAA,CACA,eAAA,CACA,sBAAA,CAIR,0IACI,aAAA,CACA,UAAA,CACA,iBAAA,CACA,iBAAA,CAEA,mKACI,oCAAA,CACA,WAAA,CACA,WAAA,CACA,8BAAA,CACA,sCAAA,CACA,mBAAA,CACA,yCAAA,CACA,YAAA,CACA,UAAA,CACA,eAAA,CACA,iBAAA,CAEA,qLACI,sBAAA,CAGJ,gLACI,kCAAA,CACA,sBAAA,CACA,kBAAA,CACA,eAAA,CAGJ,uMACI,iBAAA,CACA,WAAA,CACA,UAAA,CACA,KAAA,CACA,OAAA,CACA,QAAA,CACA,MAAA,CACA,SAAA,CACA,WAAA,CAIR,yKACI,aAAA,CACA,UAAA,CACA,SAAA,CACA,mBAAA,CACA,eAAA,CACA,oBAAA,CACA,qBAAA,CACA,mCAAA,CACA,iBAAA,CACA,UAAA,CACA,sLACI,iBAAA,CACA,uCAAA,CACA,+CAAA,CACA,oBAAA,CACA,6LACI,UAAA,CACA,iBAAA,CACA,SAAA,CACA,UAAA,CACA,UAAA,CACA,WAAA,CACA,0CAAA,CACA,qBAAA,CACA,UAAA,CAGR,0LACI,iBAAA,CACA,kCAAA,CAIR,oKACI,4BAAA,CACA,UAAA,CACA,WAAA,CACA,WAAA,CACA,eAAA,CAEA,sKACI,+CAAA,CACA,+BAAA,CACA,4BAAA,CACA,cAAA,CAIR,0WAEI,mBAAA,CACA,WAAA,CAEA,8WACI,kCAAA,CAOZ,8GACI,YAAA,CAGJ,oIACI,iBAAA,CACA,oBAAA,CACA,eAAA,CACA,cAAA,CAEA,0IACI,UAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,sCAAA,CACA,SAAA,CACA,4CAAA,CACA,YAAA,CACA,6CAAA,CAGJ,uKACI,0CAAA,CACA,SAAA,CACA,4CAAA,CACA,iBAAA,CACA,QAAA,CACA,OAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,gBAAA,CACA,YAAA,CAEA,yKACI,UAAA,CACA,WAAA,CAKJ,gJACI,WAAA,CAGJ,6KACI,SAAA,CAIR,gJACI,8BAAA,CAEA,kJACI,8BAAA,CAGJ,iKACI,YAAA,CAOpB,kFACI,gEAAA,CAGJ,kFACI,UAAA,CACA,uCAAA,CACA,iCAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,wBAAA,CACA,iBAAA,CAGJ,6EACI,aAAA,CACA,yCAAA,CAKJ,qEACI,iCAAA,CAGJ,+EACI,cAAA,CACA,UAAA,CACA,2FACI,6DAAA,CAKZ,kDACI,YAAA,CACA,oBAAA,CACA,qBAAA,CACA,eAAA,CACA,6BAAA,CAEA,sGAEI,uCAAA,CAGJ,wDACI,YAAA,CAGJ,oDACI,QAAA,CACA,oBAAA,CACA,kBAAA,CACA,YAAA,CACA,eAAA,CCvPJ,iFACI,oQAAA,CADJ,iFACI,gDAAA,CADJ,iFACI,ogBAAA,CADJ,iFACI,yFAAA,CADJ,iFACI,qGAAA,CADJ,iFACI,8DAAA,CADJ,iFACI,mQAAA,CADJ,iFACI,ydAAA,CA4HR,6EACI,sMAAA,CAEA,uCAAA,CACA,iDAAA,CACA,yBAAA,CACA,4BAAA,CACA,uDAAA,CAMI,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAGJ,mDAAA,CACA,gCAAA,CACA,yBAAA,CAGI,oDAAA,CAAA,+DAAA,CAAA,yDAAA,CAAA,yDAAA,CAAA,0DAAA,CAAA,wDAAA,CAGJ,kDAAA,CACA,mHAAA,CACA,wCAAA,CAEA,sGAAA,CAEA,gDAAA,CACA,qCAAA,CAEA,sDAAA,CACA,gDAAA,CAGI,8DAAA,CAAA,sEAAA,CAAA,qFAAA,CAAA,sEAAA,CAAA,2EAAA,CAAA,oEAAA,CAAA,8DAAA,CAAA,yEAAA,CAAA,oGAAA,CAGJ,iEAAA,CACA,4FAAA,CAII,kCAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,mCAAA,CAGJ,qDAAA,CACA,6DAAA,CAEA,iEAAA,CACA,yEAAA,CAEA,gDAAA,CACA,oDAAA,CAEA,2BAAA,CACA,yBAAA,CACA,0DAAA,CAGI,kCAAA,CAAA,iCAAA,CAAA,gCAAA,CAAA,8BAAA,CAAA,iCAAA,CAGJ,2BAAA,CACA,uCAAA,CAEA,0CAAA,CACA,2CAAA,CACA,6BAAA,CACA,4CAAA,CCrKA,sEAAA,CAAA,oEAAA,CAAA,oEAAA,CAAA,kEAAA,CAAA,mEAAA,CD2KA,+EAAA,CACA,oHAAA,CE1OJ,6GACI,mBAAA,CACA,uBAAA,CACA,iBAAA,CACA,aAAA,CACA,4CAAA,CACA,6DAAA,CACA,SAAA,CACA,8BAAA,CACA,yBAAA,CAKY,mKACI,8CAAA,CACA,yNACI,uCAAA,CAHR,+JACI,4CAAA,CACA,qNACI,qCAAA,CAHR,mKACI,8CAAA,CACA,yNACI,uCAAA,CAHR,6JACI,2CAAA,CACA,mNACI,oCAAA,CAQhB,iMACI,mCAAA,CACA,uPACI,iBAAA,CACA,0BAAA,CAKZ,2HACI,SAAA,CACA,0CAAA,CAEJ,mKACI,uBAAA,CLxCR,iOACE,UAAA,CACA,mBAAA,CACA,iBAAA,CACA,eAAA,CACA,mDAAA,CACA,yDAAA,CACA,QAAA,CACA,MAAA,CACA,OAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,UAAA,CACA,6JAAA,CAOA,6BAAA,CACA,0CAAA,CACA,0BAAA,CACA,qDAAA,CKyBE,yJACI,cAAA,CACA,UAAA,CACA,uDAAA,CACA,sDAAA,CACA,gCAAA,CACA,gBAAA,CACA,6TACI,sCAAA,CAIR,2IACI,YAAA,CAGJ,qKACI,aAAA,CAEJ,mLACI,6CAAA,CACA,0CAAA,CACA,6BAAA,CACA,kBAAA,CAGA,yLACI,gBAAA,CACA,aAAA,CACA,yBAAA,CACA,0BAAA,CACA,kBAAA,CACA,6CAAA,CACA,YAAA,CACA,mMACI,iBAAA,CACA,oBAAA,CACA,2BAAA,CACA,4BAAA,CACA,mDAAA,CACA,iBAAA,CACA,0CAAA,CACA,8CAAA,CACA,8BAAA,CACA,gBAAA,CACA,iNACI,iBAAA,CACA,UAAA,CACA,qCAAA,CACA,sCAAA,CACA,uCAAA,CACA,wCAAA,CACA,UAAA,CACA,WAAA,CACA,cAAA,CACA,+DAAA,CACA,iBAAA,CACA,WAAA,CACA,qBAAA,CAGR,iMACI,SAAA,CAGR,uKA4BI,cAAA,CA1BI,mOACI,sCAAA,CAKI,6MACI,YAAA,CADJ,6MACI,YAAA,CADJ,6MACI,YAAA,CADJ,6MACI,YAAA,CAKhB,mPACI,gCAAA,CACA,iCAAA,CACA,mFAAA,CACA,2UACI,kCAAA,CACA,uCAAA,CACA,QAAA,CAEJ,qSACI,sCAAA,CACA,eAAA,CAOhB,mLACI,mBAAA,CACA,uBAAA,CACA,iBAAA,CACA,yBAAA,CACA,mQACI,kCAAA,CACA,uCAAA,CACA,iBAAA,CAEJ,yRACI,mBAAA,CACA,kBAAA,CACA,cAAA,CACA,yBAAA,CAIR,iMACI,mDAAA,CACA,qCAAA,CACA,mDAAA,CACA,wCAAA,CACA,cAAA,CACA,uCAAA,CACA,cAAA,CACA,eAAA,CACA,mBAAA,CACA,yBAAA,CACA,kBAAA,CACA,gBAAA,CACA,oCAAA,CACA,2MACI,kBAAA,CACA,sBAAA,CACA,eAAA,CAEJ,qMACI,mBAAA,CAEJ,mNACI,sBAAA,CACA,yBAAA,CAEJ,yNACI,WAAA,CAII,+NACI,uCAAA,CADJ,2NACI,qCAAA,CADJ,+NACI,uCAAA,CADJ,yNACI,oCAAA,CAMhB,yLACI,YAAA,CACA,uBAAA,CACA,yBAAA,CACA,eAAA,CACA,iBAAA,CACA,+QACI,cAAA,CACA,uSACI,SAAA,CACA,eAAA,CACA,eAAA,CAEJ,uVACI,wBAAA,CACA,aAAA,CAUA,uVACI,YAAA,CAEJ,2UACI,4CAAA,CACA,mBAAA,CDvOhB,iBAAA,CAOA,qHANY,CAOZ,2BAAA,CACA,6GARY,CASZ,mBAAA,CC+NgB,gFAAA,CACA,wFAAA,CAGA,2aACI,YAAA,CAMhB,yRACI,YAAA,CACA,aAAA,CACA,aAAA,CACA,oBAAA,CACA,kBAAA,CACA,iBAAA,CACA,4BAAA,CACA,WAAA,CACA,gkBAEI,eAAA,CACA,sBAAA,CACA,kBAAA,CACA,uCAAA,CAIZ,oUAEI,mBAAA,CACA,gdACI,mBAAA,CAEJ,46BAEI,oBAAA,CAIA,wkBACI,YAAA,CAIR,g4BAEI,6BAAA,CACA,+CAAA,CACA,0DAAA,CACA,w4DAEI,uCAAA,CAGR,4gBACI,WAAA,CAIJ,iMACI,kDAAA,CAIR,qKACI,YAAA,CAEJ,+OACI,YAAA,CAKA,ijBACI,yDAAA,CACA,eAAA,CACA,MAAA,CAMJ,urBACI,qBAAA,CAGA,mkCACI,SAAA,CACA,+tCACI,SAAA,CCpUpB,6BACE,YAAA,CACA,qBAAA,CACA,qCAAA,CACA,sCAAA,CACA,UAAA,CACA,kBAAA,CACA,uBAAA,CACA,mBAAA,CACA,0BAAA,CACA,eAAA,CACA,iBAAA,CACA,6BAAA,CACA,eAAA,CFbE,iBAAA,CAOA,oHANY,CAOZ,2BAAA,CACA,4GARY,CASZ,mBAAA,CEKF,gEACE,YAAA,CACA,qBAAA,CACA,UAAA,CACA,uBAAA,CACA,mBAAA,CACA,0BAAA,CACA,yBAAA,CACA,yGACE,QAAA,CACA,oCAAA,CACA,+BAAA,CACA,mCAAA,CACA,sCAAA,CACA,iBAAA,CACA,uCAAA,CACA,eAAA,CAGF,mGACE,gCAAA,CACA,iCAAA,CACA,4EAAA,CAGF,qGACE,YAAA,CACA,iBAAA,CACA,qBAAA,CACA,UAAA,CACA,uBAAA,CACA,sBAAA,CACA,0BAAA,CACA,eAAA,CACA,cAAA,CACA,mDAAA,CACA,qCAAA,CACA,uCAAA,CACA,4CAAA,CACA,yBAAA,CACA,oHAIE,UAAA,CAHA,4HACE,mCAAA,CAGF,0OAEE,mBAAA,CAGJ,yQAEE,0CAAA,CACA,shBAEE,uCAAA,CACA,0tBACE,uCAAA,CACA,WAAA,CAIN,+IACE,oCAAA,CACA,uCAAA,CACA,gBAAA,CACA,WAAA,CAEF,sJACE,sCAAA,CACA,kCAAA,CACA,aAAA,CAQA,4JACE,UAAA,CACA,UAAA,CACA,wEAAA,CACA,qBAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CCzGV,mCACE,QAAA,CACA,6BAAA,CACA,+BAAA,CAEA,gFACE,qCAAA,CACA,qCAAA,CACA,+BAAA,CACA,6BAAA,CACA,iBAAA,CACA,uCAAA,CACA,wEAAA,CACA,eAAA,CAEA,yHACE,YAAA,CACA,oBAAA,CACA,0BAAA,CACA,kBAAA,CACA,iBAAA,CACA,6BAAA,CACA,yBAAA,CACA,+EAAA,CAEA,4HACE,QAAA,CAGF,gIACE,UAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,kDAAA,CACA,WAAA,CACA,mBAAA,CAIJ,2GACE,6BAAA,CAGF,2GACE,eAAA,CACA,qBAAA,CACA,UAAA,CACA,iBAAA,CACA,eAAA,CACA,YAAA,CACA,uBAAA,CACA,0BAAA,CACA,sBAAA,CACA,4BAAA,CAEA,mJACE,mBAAA,CACA,yBAAA,CAGF,wJACE,WAAA,CAGF,8IACE,UAAA,CACA,qBAAA,CAGF,sIACE,kCAAA,CAIJ,qHACE,YAAA,CACA,oBAAA,CACA,6BAAA,CACA,kBAAA,CACA,yBAAA,CACA,eAAA,CACA,cAAA,CACA,wCAAA,CACA,wCAAA,CACA,iBAAA,CACA,sBAAA,CACA,uCAAA,CACA,2HACE,UAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,kBAAA,CACA,WAAA,CAEF,kKACE,WAAA,CAGA,8KACE,SAAA,CACA,mBAAA,CAIJ,2HACE,yCAAA,CAQE,uiBACE,UAAA,CACA,iBAAA,CACA,SAAA,CACA,UAAA,CACA,UAAA,CACA,WAAA,CACA,MAAA,CACA,KAAA,CACA,qBAAA,CAKF,wIACE,+CAAA,CAGF,6LACE,oCAAA,CAKF,2IACE,kDAAA,CAGF,gMACE,uCAAA,CAKF,2IACE,kDAAA,CAGF,gMACE,uCAAA,CAKF,yIACE,gDAAA,CAGF,8LACE,qCAAA,CAKN,6HACE,YAAA,CACA,oBAAA,CACA,0BAAA,CACA,kBAAA,CACA,yBAAA,CACA,aAAA,CACA,UAAA,CACA,MAAA,CACA,aAAA,CACA,eAAA,CAEA,+KACE,eAAA,CACA,MAAA,CACA,kBAAA,CACA,sBAAA,CAIJ,6HACE,YAAA,CACA,4BAAA,CACA,wBAAA,CACA,kBAAA,CACA,aAAA,CACA,UAAA,CACA,mCAAA,CACA,aAAA,CACA,2IACE,UAAA,CACA,WAAA,CACA,cAAA,CAEA,gJACE,oCAAA,CAGF,mJACE,uCAAA,CAGF,mJACE,uCAAA,CAGF,iJACE,qCAAA,CAKN,6HACE,4BAAA,CAGF,2HACE,YAAA,CACA,oBAAA,CACA,0BAAA,CACA,kBAAA,CACA,yBAAA,CACA,cAAA,CACA,eAAA,CACA,UAAA,CACA,aAAA,CAEA,gIACE,sBAAA,CACA,eAAA,CACA,kBAAA,CACA,cAAA,CAIJ,kJACE,iBAAA,CACA,6BAAA,CACA,YAAA,CACA,oBAAA,CACA,sBAAA,CACA,kBAAA,CACA,uCAAA,CACA,0BAAA,CACA,yJACE,UAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,gDAAA,CACA,UAAA,CACA,mBAAA,CACA,qBAAA,CAKN,qHACE,6BAAA,CACA,qBAAA,CACA,UAAA,CACA,eAAA,CAKN,yCACE,+CAAA,CACA,gDAAA,CACA,6CAAA,CACA,iBAAA,CACA,6BAAA,CAGF,kDACE,kCAAA,CAGF,gDACE,WAAA,CAEA,mEACE,kCAAA,CAIJ,mCAaE,kCAAA,CAZA,0CACE,UAAA,CACA,iBAAA,CACA,MAAA,CACA,OAAA,CACA,KAAA,CACA,QAAA,CACA,+CAAA,CACA,WAAA,CACA,mBAAA,CAKF,sCACE,QAAA,CACA,kCAAA,CAGE,2DACE,gCAAA,CAGF,4DACE,QAAA,CAKN,2FACE,eAAA,CC3UJ,iBACE,YAAA,CACA,6BACE,gCAAA,CAKF,yDJRE,iBAAA,CAOA,qHANY,CAOZ,2BAAA,CACA,6GARY,CASZ,mBAAA,CIIJ,mCACE,qBAAA,CACA,cAAA,CACA,yCAAA,CACA,iDACE,iBAAA,CACA,gDAAA,CACA,sCAAA,CACA,0CAAA,CACA,0CAAA,CACA,uCAAA,CACA,kBAAA,CACA,oCAAA,CACA,kCAAA,CACA,wEAAA,CACA,oBAAA,CACA,uBAAA,CAGA,6DACE,YAAA,CAIF,kFACE,sBAAA,CAKN,+CACE,cAAA,CACA,eAAA,CAEE,0FACE,yDAAA,CAIN,kFAEE,iBAAA,CACA,gBAAA,CACA,UAAA,CACA,qBAAA,CACA,oHACE,eAAA,CACA,wKACE,gBAAA,CACA,mBAAA,CACA,QAAA,CACA,eAAA,CACA,eAAA,CACA,sPACE,YAAA,CAIN,0FACE,sBAAA",sourcesContent:[`@import '../../mixins';
.mynah-chat-prompt-overlay-buttons-container {
    display: inline-flex;
    flex-flow: column nowrap;
    gap: var(--mynah-sizing-2);
    justify-content: flex-start;
    align-items: flex-start;
}
.mynah-chat-wrapper {
    transition: var(--mynah-bottom-panel-transition);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: auto;
    height: auto;
    flex-flow: column nowrap;
    overflow: hidden;
    justify-content: space-around;
    align-items: stretch;
    display: none;
    > div[class^="mynah-chat"] {
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        padding-left: var(--mynah-sizing-4);
        padding-right: var(--mynah-sizing-4);
    }
    &:after {
        transition: var(--mynah-very-short-transition);
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: auto;
        height: auto;
        background-color: black;
        z-index: 1000;
        opacity: 0;
        pointer-events: none;
        transform: translate3d(0, 0, 0) scale(2);
        transform-origin: center center;
    }

    @import "chat-items-container";
    @import "chat-overflowing-intermediate-block";
    @import "chat-prompt-wrapper";
}

.mynah-chat-items-container,
.mynah-chat-prompt-input-sticky-card {
    @import "chat-item-card";
}

@import "chat-command-selector";
@import "chat-item-tree-view";
@import "chat-prompt-attachment";
`,`> .mynah-chat-items-container {
    position: relative;
    display: flex;
    flex: 1 1 0%;
    overflow-x: hidden;
    overflow-y: auto;
    flex-flow: column-reverse nowrap;
    align-items: flex-start;
    padding: var(--mynah-chat-wrapper-spacing);
    gap: var(--mynah-chat-wrapper-spacing);
}

&.loading {
    > .mynah-chat-items-container {
        padding-bottom: var(--mynah-sizing-14);
        > .mynah-chat-item-card.mynah-chat-item-answer-stream {
            &:first-child {
                > .mynah-card {
                    min-width: 100px;
                    min-height: var(--mynah-sizing-14);
                    > .mynah-card-votes-wrapper {
                        display: none;
                    }
                }
                &.mynah-chat-item-empty {
                    .mynah-chat-items-spinner {
                        display: inline-flex;
                        > span {
                            // Spinner's size should remain the same
                            flex: 0 0 auto;
                        }
                    }
                }
                &:not(.mynah-chat-item-empty) {
                    @import "chat-items-bottom-animator";
                }
            }
        }
    }
}
`,`&:before {
  content: '';
  pointer-events: none;
  position: absolute;
  overflow: hidden;
  border-bottom-right-radius: var(--mynah-card-radius);
  border-bottom-left-radius: var(--mynah-card-radius-corner);
  bottom: 0;
  left: 0;
  right: 0;
  width: auto;
  height: 100%;
  box-sizing: border-box;
  z-index: 10;
  background-image: linear-gradient(
    90deg,
    var(--mynah-color-button) 0%,
    rgba(255, 255, 255, 0) 25%,
    rgba(255, 255, 255, 0) 50%,
    var(--mynah-color-button) 100%
  );
  background-position: 0% bottom;
  background-size: 200% var(--mynah-sizing-1);
  background-repeat: repeat-x;
  animation: horizontal-roll 1250ms linear infinite both;
}
`,`&.loading {
    > .mynah-chat-overflowing-intermediate-block {
        display: flex;
        flex-flow: column nowrap;
        max-height: 0;
        overflow: visible;
        justify-content: flex-end;
        &:not(.hidden) > .mynah-chat-stop-chat-response-button {
            display: inline-flex;
        }
    }
}
> .mynah-chat-overflowing-intermediate-block {
    display: flex;
    flex-flow: column nowrap;
    max-height: 0;
    overflow: visible;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid var(--mynah-color-border-default);
    &.hidden > * {
        display: none !important;
    }
    > .mynah-chat-stop-chat-response-button {
        margin-bottom: var(--mynah-sizing-2);
        display: none;
        min-height: var(--mynah-sizing-8);

        &:active {
            box-shadow: none;
            filter: none;
        }
        * {
            font-size: var(--mynah-font-size-xsmall);
        }
    }
}
`,`>.mynah-chat-prompt-wrapper {
    display: block;
    padding: var(--mynah-sizing-4);

    >.mynah-chat-prompt {
        display: flex;
        flex-flow: column nowrap;
        overflow: hidden;
        box-sizing: border-box;
        border: var(--mynah-border-width) solid var(--mynah-color-border-default);
        background-color: var(--mynah-card-bg);
        border-radius: var(--mynah-card-radius);
        padding: var(--mynah-sizing-4);

        >.mynah-chat-prompt-input-wrapper {
            display: flex;
            flex-flow: row nowrap;
            overflow: hidden;
            box-sizing: border-box;
            gap: var(--mynah-sizing-2);
            align-items: flex-start;
            position: relative;
            color: var(--mynah-color-text-weak);

            >.mynah-chat-prompt-input-command-wrapper {
                align-self: flex-start;
                display: inline-flex;
                align-items: center;
                position: relative;
                gap: var(--mynah-sizing-1);
                box-sizing: border-box;

                &.hidden {
                    display: none;
                }

                >.mynah-chat-prompt-input-command-text {
                    user-select: none;
                    cursor: pointer;
                    font-family: var(--mynah-font-family);
                    font-size: var(--mynah-font-size-large);
                    color: var(--mynah-color-text-input);
                    font-weight: bold;
                    white-space: nowrap;
                    max-width: calc(10 * var(--mynah-font-size-large));
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }

            >.mynah-chat-prompt-input-inner-wrapper {
                display: block;
                width: 100%;
                position: relative;
                align-self: center;

                >.mynah-chat-prompt-input {
                    font-family: var(--mynah-font-family);
                    border: none;
                    resize: none;
                    background-color: rgba(0, 0, 0, 0);
                    font-size: var(--mynah-font-size-large);
                    color: rgba(0, 0, 0, 0);
                    caret-color: var(--mynah-color-text-input);
                    outline: none;
                    width: 100%;
                    max-height: 20vh;
                    min-height: 1.5rem;

                    &:placeholder-shown {
                        text-overflow: ellipsis;
                    }

                    &::placeholder {
                        color: var(--mynah-color-text-weak);
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                    }

                    &:not(.mynah-chat-prompt-input-sizer) {
                        position: absolute;
                        height: auto;
                        width: auto;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        padding: 0;
                        z-index: 100;
                    }
                }

                >.mynah-chat-prompt-input-sizer {
                    display: block;
                    width: 100%;
                    opacity: 1;
                    pointer-events: none;
                    overflow: hidden;
                    white-space: pre-wrap;
                    word-break: break-word;
                    color: var(--mynah-color-text-input);
                    position: relative;
                    z-index: 50;
                    > span.context {
                        position: relative;
                        color: var(--mynah-color-button-reverse);
                        border-radius: calc(var(--mynah-input-radius)/2);
                        display: inline-block;
                        &:before{
                            content: "";
                            position: absolute;
                            left: -1px;
                            right: -1px;
                            width: auto;
                            height: 100%;
                            background-color: var(--mynah-color-button);
                            border-radius: inherit;
                            z-index: -1;
                        }
                    }
                    > span.placeholder {
                        position: relative;
                        color: var(--mynah-color-text-weak);
                    }
                }

                &~.mynah-chat-prompt-button {
                    background-color: transparent;
                    width: auto;
                    min-width: 0;
                    height: auto;
                    padding-top: 1px;

                    i {
                        font-size: calc(2 * var(--mynah-font-size-xsmall));
                        color: var(--mynah-color-button);
                        height: var(--mynah-sizing-6);
                        padding-left: 0;
                    }
                }

                &.no-text~.mynah-chat-prompt-button:not([disabled]),
                &~.mynah-chat-prompt-button[disabled] {
                    pointer-events: none;
                    opacity: 0.25;

                    i {
                        color: var(--mynah-color-text-weak);
                    }
                }
            }
        }

        >.mynah-chat-prompt-attachment-wrapper {
            &:empty {
                display: none;
            }

            >.mynah-chat-attachment-item {
                position: relative;
                display: inline-block;
                max-width: 250px;
                cursor: pointer;

                &:after {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: var(--mynah-card-radius);
                    opacity: 0;
                    transition: var(--mynah-short-transition-rev);
                    z-index: 8000;
                    background-color: var(--mynah-color-alternate);
                }

                >.mynah-chat-attachment-delete-icon {
                    color: var(--mynah-color-alternate-reverse);
                    opacity: 0;
                    transition: var(--mynah-short-transition-rev);
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 30px;
                    height: 30px;
                    margin-left: -15px;
                    margin-top: -15px;
                    z-index: 9000;

                    >i {
                        width: 30px;
                        height: 30px;
                    }
                }

                &:hover {
                    &:after {
                        opacity: 0.75;
                    }

                    >.mynah-chat-attachment-delete-icon {
                        opacity: 1;
                    }
                }

                >.mynah-card {
                    pointer-events: none !important;

                    * {
                        pointer-events: none !important;
                    }

                    >.mynah-card-body {
                        display: none;
                    }
                }
            }
        }
    }

    &.input-has-focus>.mynah-chat-prompt {
        border: var(--mynah-border-width) solid var(--mynah-color-button);
    }

    >.mynah-chat-prompt-chars-indicator {
        width: 100%;
        font-size: var(--mynah-font-size-xsmall);
        padding-top: var(--mynah-sizing-2);
        opacity: 0.5;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-style: italic;
    }

    &+.mynah-chat-prompt-input-info {
        padding-top: 0;
        margin-top: calc(-1 * var(--mynah-sizing-2));
    }
}

>.mynah-chat-prompt-input-sticky-card {
    &:not(:empty) {
        padding-top: var(--mynah-sizing-4);
    }

    >.mynah-chat-item-card {
        max-width: 100%;
        width: 100%;
        >.mynah-card {
            border-bottom-left-radius: var(--mynah-card-radius) !important;
        }
    }
}

>.mynah-chat-prompt-input-info {
    display: flex;
    flex-flow: row nowrap;
    box-sizing: border-box;
    overflow: hidden;
    padding: var(--mynah-sizing-4);

    &,
    & * {
        font-size: var(--mynah-font-size-xsmall);
    }

    &:empty {
        display: none;
    }

    >* {
        margin: 0;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-top: 0;
        margin-bottom: 0;
    }
}`,`@import './mixins';
/**
 * Flatten a map or list into a string
 * @param {any} $value - The value to flatten
 * @returns {string} The flattened value
 */
@function flatten($value) {
    @if type-of($value) == 'map' {
        $result: "";
        @each $key, $val in $value {
            $flattened-val: flatten($val);
            $result: "#{$result}#{$key}: #{$flattened-val}; ";
        }
        @return $result;
    } @else if type-of($value) == 'list' {
        $result: "";
        @each $item in $value {
            $flattened-item: flatten($item);
            $result: "#{$result}#{$flattened-item}, ";
        }
        @return $result;
    } @else {
        @return $value;
    }
}

/**
 * Export a map as CSS variables
 * @param {map} $map - The map to export
 * @param {string} $name - The name of the export
 */
@mixin export-map($map, $name) {
    :export {
        #{$name}: "#{flatten($map)}";
    }
}

/**
 * Color variables
 */
$mynah-color-text: (
    'default': var(--vscode-foreground),
    'alternate': var(--mynah-color-button-reverse),
    'strong': var(--vscode-input-foreground),
    'weak': var(--vscode-disabledForeground),
    'link': var(--vscode-textLink-foreground),
    'input': var(--vscode-input-foreground)
);

/**
 * Statuses
 */
$mynah-statuses: ("success", "error", "warning", "info");

/**
 * Status variables
 */
$mynah-status-colors: (
    'info': #0971d3,
    'success': #037f03,
    'warning': #b2911c,
    'error': #d91515
);

/**
 * Font variables
 */
$mynah-font-sizes: (
    'xxsmall': 0.75rem,
    'xsmall': 0.85rem,
    'small': 0.95rem,
    'medium': 1rem,
    'large': 1.125rem
);

/**
 * Padding sizes
 */
$mynah-padding-sizes: (
  'none': 0,
  'small': 1,
  'medium': 3,
  'large': 5,
);

/**
 * Transition variables
 */
$mynah-transitions: (
    'bottom-panel': (850, cubic-bezier(0.25, 1, 0, 1)),
    'very-short': (600, cubic-bezier(0.25, 1, 0, 1)),
    'very-long': (1650, cubic-bezier(0.25, 1, 0, 1)),
    'short': (550, cubic-bezier(0.85, 0.15, 0, 1)),
    'short-rev': (580, cubic-bezier(0.35, 1, 0, 1))
);

/**
 * Syntax highlighting variables
 */
 $mynah-syntax-colors: (
    'bg': var(--vscode-terminal-dropBackground),
    'variable': var(--vscode-debugTokenExpression-name),
    'function': var(--vscode-gitDecoration-modifiedResourceForeground),
    'operator': var(--vscode-debugTokenExpression-name),
    'attr-value': var(--vscode-debugIcon-stepBackForeground),
    'attr': var(--vscode-debugTokenExpression-string),
    'property': var(--vscode-terminal-ansiCyan),
    'comment': var(--vscode-debugConsole-sourceForeground),
    'code': var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit))
);

/**
 * Token styles
 */
 $mynah-token-styles: (
    'comments': (color: var(--mynah-color-syntax-comment)),
    'punctuation': (color: currentColor),
    'namespace': (opacity: 0.7),
    'properties': (color: var(--mynah-color-syntax-property)),
    'attributes': (color: var(--mynah-color-syntax-attr)),
    'operators': (color: var(--mynah-color-syntax-operator)),
    'attr-values': (color: var(--mynah-color-syntax-attr-value)),
    'functions': (color: var(--mynah-color-syntax-function), font-weight: 500),
    'variables': (color: var(--mynah-color-syntax-variable), font-weight: 500),
    'bold': (font-weight: bold),
    'italic': (font-style: italic),
    'entity': (cursor: help)
);

/**
 * Syntax token styles
 */
$mynah-syntax-token-styles: (
    'comments': (comment, prolog, doctype, cdata),
    'punctuation': (punctuation),
    'namespace': (namespace),
    'properties': (property, tag, boolean, number, constant, symbol, inserted),
    'attributes': (selector, attr-name, string, char, builtin, deleted),
    'operators': (operator, entity, url),
    'attr-values': (atrule, attr-value, class-name, keyword),
    'functions': (function),
    'variables': (regex, important, variable),
    'bold': (important, bold),
    'italic': (italic),
    'entity': (entity)
);

@include export-map($mynah-color-text, 'mynah-color-text');
@include export-map($mynah-statuses, 'mynah-statuses');
@include export-map($mynah-syntax-colors, 'mynah-syntax-colors');
@include export-map($mynah-status-colors, 'mynah-status-colors');
@include export-map($mynah-font-sizes, 'mynah-font-sizes');
@include export-map($mynah-padding-sizes, 'mynah-padding-sizes');
@include export-map($mynah-transitions, 'mynah-transitions');
@include export-map($mynah-syntax-token-styles, 'mynah-syntax-token-styles');


:root {
    --mynah-font-family: var(--vscode-font-family), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Amazon Ember", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: var(--vscode-font-size, 13px);
    font-family: var(--mynah-font-family, "system-ui");
    --mynah-max-width: 2560px;
    --mynah-sizing-base: 0.25rem;
    --mynah-sizing-half: calc(var(--mynah-sizing-base) / 2);

    /**
     * Sizing variables
     */
    @for $i from 1 through 18 {
        --mynah-sizing-#{$i}: calc(var(--mynah-sizing-base) * #{$i});
    }

    --mynah-chat-wrapper-spacing: var(--mynah-sizing-4);
    --mynah-button-border-width: 1px;
    --mynah-border-width: 1px;

    @each $name, $value in $mynah-color-text {
        --mynah-color-text-#{$name}: #{$value};
    }

    --mynah-color-bg: var(--vscode-sideBar-background);
    --mynah-color-tab-active: var(--vscode-tab-activeBackground, var(--vscode-editor-background, var(--mynah-card-bg)));
    --mynah-color-light: rgba(0, 0, 0, 0.05);

    --mynah-color-border-default: var(--vscode-panel-border, var(--vscode-tab-border, rgba(0, 0, 0, 0.1)));

    --mynah-color-highlight: rgba(255, 179, 0, 0.25);
    --mynah-color-highlight-text: #886411;

    --mynah-color-toggle: var(--vscode-sideBar-background);
    --mynah-color-toggle-reverse: rgba(0, 0, 0, 0.5);

    @each $name, $value in $mynah-syntax-colors {
        --mynah-color-syntax-#{$name}: #{$value};
    }

    --mynah-syntax-code-font-family: var(--vscode-editor-font-family);
    --mynah-syntax-code-font-size: var(--vscode-editor-font-size, var(--mynah-font-size-medium));


    @each $name, $value in $mynah-status-colors {
        --mynah-color-status-#{$name}: #{$value};
    }

    --mynah-color-button: var(--vscode-button-background);
    --mynah-color-button-reverse: var(--vscode-button-foreground);

    --mynah-color-alternate: var(--vscode-button-secondaryBackground);
    --mynah-color-alternate-reverse: var(--vscode-button-secondaryForeground);

    --mynah-card-bg: var(--vscode-editor-background);
    --mynah-card-bg-alternate: var(--mynah-color-button);

    --mynah-shadow-button: none; //0 10px 20px -15px rgba(0, 0, 0, 0.25);
    --mynah-shadow-card: none; //0 10px 20px -15px rgba(0, 0, 0, 0.25);
    --mynah-shadow-overlay: 0 0px 15px -5px rgba(0, 0, 0, 0.4);

    @each $name, $value in $mynah-font-sizes {
        --mynah-font-size-#{$name}: #{$value};
    }

    --mynah-line-height: 1.5rem;
    --mynah-syntax-code-line-height: 1.5rem;

    --mynah-card-radius: var(--mynah-sizing-2);
    --mynah-input-radius: var(--mynah-sizing-1);
    --mynah-card-radius-corner: 0;
    --mynah-button-radius: var(--mynah-sizing-1);

    @each $name, $values in $mynah-transitions {
        @include mynah-transition($name, nth($values, 1), nth($values, 2));
    }

    --mynah-short-transition-rev-opacity: opacity 750ms cubic-bezier(0.35, 1, 0, 1);
    --mynah-text-flow-transition: all 800ms cubic-bezier(0.35, 1.2, 0, 1), transform 800ms cubic-bezier(0.2, 1.05, 0, 1);
}
`,`@mixin list-fader-bottom($height: var(--mynah-sizing-6)) {
    position: relative;
    $listFader: linear-gradient(
        to bottom,
        black 30%,
        black calc(100% - $height),
        transparent 100%
    );
    -webkit-mask-image: $listFader;
    -webkit-mask-size: 100% 100%;
    mask-image: $listFader;
    mask-size: 100% 100%;
}

/**
 * @param {string} $size - The size of the font.
 * @param {string} $weight - The weight of the font.
 * @param {string} $family - The family of the font.
 */
@mixin mynah-font($size, $weight: normal, $family: var(--mynah-font-family)) {
    font-size: $size;
    font-weight: $weight;
    font-family: $family;
}

/**
 * @param {string} $text-color - The color of the text.
 * @param {string} $bg-color - The background color.
 */
@mixin mynah-color($text-color, $bg-color) {
    color: $text-color;
    background-color: $bg-color;
}

/**
 * @param {string} $margin - The margin of the element.
 * @param {string} $padding - The padding of the element.
 */
@mixin mynah-spacing($margin: 0, $padding: 0) {
    margin: $margin;
    padding: $padding;
}

/**
 * @param {string} $radius - The radius of the border.
 */
@mixin mynah-border-radius($radius) {
    border-radius: $radius;
}

/**
 * @param {string} $shadow - The shadow of the element.
 */
 @mixin mynah-box-shadow($shadow) {
    box-shadow: $shadow;
}

/**
 * @param {string} $name - The name of the transition.
 * @param {number} $duration - The duration of the transition in milliseconds.
 * @param {string} $timing-function - The timing function of the transition.
 */
@mixin mynah-transition($name, $duration, $timing-function) {
    --mynah-#{$name}-transition: all #{$duration}ms #{$timing-function};
}
`,`@import '../../variables';
.mynah-chat-item-card {
    display: inline-flex;
    flex-flow: column nowrap;
    position: relative;
    max-width: 90%;
    transition: var(--mynah-text-flow-transition);
    transform: translate3d(0, min(50%, 25vh), 0) scale(0.95, 1.25);
    opacity: 0;
    transform-origin: center bottom;
    gap: var(--mynah-sizing-4);

    &-status {
        @each $status in $mynah-statuses {
            &-#{$status} {
                > .mynah-card {
                    border-color: var(--mynah-color-status-#{$status});
                    > .mynah-chat-item-card-icon {
                        color: var(--mynah-color-status-#{$status});
                    }
                }
            }
        }
    }

    &.mynah-chat-item-card-has-icon {
        > .mynah-card {
            padding-left: var(--mynah-sizing-10);
            > .mynah-chat-item-card-icon {
                position: absolute;
                left: var(--mynah-sizing-4);
            }
        }
    }

    &.reveal {
        opacity: 1;
        transform: translate3d(0, 0, 0) scale(1, 1);
    }
    &.mynah-chat-item-no-content {
        display: none !important;
    }

    &.mynah-chat-item-answer-stream {
        &.typewriter-animating {
            @import "chat-items-bottom-animator";
        }
    }

    .mynah-chat-item-card {
        max-width: 100%;
        width: 100%;
        padding: var(--mynah-sizing-3) 0 var(--mynah-sizing-3) 0;
        border-top: 1px solid var(--mynah-color-border-default);
        margin-top: var(--mynah-sizing-3);
        padding-bottom: 0;
        .mynah-chat-item-card-related-content > .mynah-chat-item-card-related-content-title {
            font-size: var(--mynah-font-size-large);
        }
    }

    > span.invisible {
        display: none;
    }

    &.mynah-chat-item-code-result {
        min-width: 70%;
    }
    > .mynah-chat-item-card-icon-wrapper {
        background-color: var(--mynah-color-alternate);
        color: var(--mynah-color-alternate-reverse);
        padding: var(--mynah-sizing-2);
        border-radius: 100%;
    }
    > .mynah-card {
        > .mynah-chat-items-spinner {
            overflow: visible;
            z-index: 10000;
            gap: var(--mynah-sizing-2);
            justify-content: flex-start;
            align-items: center;
            transition: var(--mynah-very-short-transition);
            display: flex;
            > span {
                position: relative;
                display: inline-block;
                width: var(--mynah-sizing-5);
                height: var(--mynah-sizing-5);
                border: var(--mynah-sizing-half) solid rgba(0, 0, 0, 0);
                border-radius: 50%;
                border-top-color: var(--mynah-color-button);
                animation: spinner-spin 1s ease-in-out infinite;
                transform-origin: center center;
                overflow: visible;
                &:before {
                    position: absolute;
                    content: "";
                    top: calc(-1 * var(--mynah-sizing-half));
                    left: calc(-1 * var(--mynah-sizing-half));
                    right: calc(-1 * var(--mynah-sizing-half));
                    bottom: calc(-1 * var(--mynah-sizing-half));
                    width: auto;
                    height: auto;
                    aspect-ratio: 1; // Just to make sure that the spinner is a circle
                    border: var(--mynah-sizing-half) solid var(--mynah-color-button);
                    border-radius: 50%;
                    opacity: 0.15;
                    box-sizing: border-box;
                }
            }
            > div {
                opacity: 1;
            }
        }
        > .mynah-card-body {
            & > div {
                > .mynah-syntax-highlighter {
                    filter: contrast(1.15) brightness(0.85);
                }

                @for $i from 1 through 4 {
                    h#{$i} {
                        &:first-child {
                            margin-top: 0;
                        }
                    }
                }
            }
            > .mynah-chat-item-card-related-content {
                margin-top: var(--mynah-sizing-3);
                padding-top: var(--mynah-sizing-4);
                border-top: var(--mynah-button-border-width) solid var(--mynah-color-border-default);
                > .mynah-chat-item-card-related-content-title {
                    color: var(--mynah-color-text-weak);
                    font-size: var(--mynah-font-size-xsmall);
                    margin: 0;
                }
                .mynah-source-link-title {
                    font-size: var(--mynah-font-size-small);
                    font-weight: 400;
                }
            }
            padding-left: 0;
        }
    }

    > .mynah-chat-item-followup-question {
        display: inline-flex;
        flex-flow: column nowrap;
        position: relative;
        gap: var(--mynah-sizing-2);
        > .mynah-chat-item-followup-question-text {
            color: var(--mynah-color-text-weak);
            font-size: var(--mynah-font-size-xsmall);
            font-style: italic;
        }
        > .mynah-chat-item-followup-question-options-wrapper {
            display: inline-flex;
            flex-flow: row wrap;
            max-width: 100%;
            gap: var(--mynah-sizing-2);
        }
    }

    .mynah-chat-item-followup-question-option {
        padding: var(--mynah-sizing-1) var(--mynah-sizing-2);
        color: var(--mynah-color-text-default);
        border: var(--mynah-border-width) solid currentColor;
        border-radius: var(--mynah-button-radius);
        cursor: pointer;
        font-size: var(--mynah-font-size-xsmall);
        max-width: 100%;
        overflow: hidden;
        display: inline-flex;
        gap: var(--mynah-sizing-2);
        align-items: center;
        user-select: none;
        line-height: var(--mynah-line-height);
        > span {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        * {
            pointer-events: none;
        }
        &-disabled {
            opacity: 0.25 !important;
            cursor: default !important;
        }
        &:not(:hover) {
            opacity: 0.75;
        }
        &-status {
            @each $status in $mynah-statuses {
                &-#{$status} {
                    color: var(--mynah-color-status-#{$status});
                }
            }
        }
    }

    .mynah-chat-item-card-related-content {
        display: flex;
        flex-flow: column nowrap;
        gap: var(--mynah-sizing-2);
        overflow: hidden;
        position: relative;
        > .mynah-chat-item-card-related-content-item {
            max-width: 100%;
            > .mynah-card {
                padding: 0;
                border-radius: 0;
                box-shadow: none;
            }
            .amzn-mynah-search-result-highlight {
                background-color: inherit;
                color: inherit;
            }
        }
        &:not(.expanded) {
            > .mynah-chat-item-card-related-content-item {
                $maxItems: 1;
                $selector: "&";
                @for $i from 1 through $maxItems {
                    $selector: #{$selector} + ":not(:nth-of-type(" + #{$i} + "))";
                }
                #{$selector} {
                    display: none;
                }
                &:nth-of-type(#{$maxItems}) {
                    margin-bottom: calc(-1 * var(--mynah-sizing-4));
                    pointer-events: none;
                    @include list-fader-bottom(var(--mynah-sizing-12));
                    mask-image: linear-gradient(to top, transparent var(--mynah-sizing-1), black 70%);
                    -webkit-mask-image: linear-gradient(to top, transparent var(--mynah-sizing-1), black 70%);
                }
                &:nth-of-type(#{$maxItems + 1}) {
                    & ~ .mynah-chat-item-card-related-content-show-more {
                        display: flex;
                    }
                }
            }
        }

        > .mynah-chat-item-card-related-content-show-more {
            display: none;
            max-width: 80%;
            z-index: 10000;
            margin-block-start: 0;
            margin-block-end: 0;
            align-self: center;
            height: var(--mynah-sizing-8);
            filter: none;
            > span,
            > i {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: var(--mynah-font-size-xsmall);
            }
        }
    }
    &.mynah-chat-item-system-prompt,
    &.mynah-chat-item-prompt {
        align-self: flex-end;
        > .mynah-chat-item-card-icon-wrapper {
            align-self: flex-end;
        }
        .mynah-chat-item-followup-question,
        .mynah-chat-item-card-related-content {
            align-items: flex-end;
        }

        .mynah-syntax-highlighter {
            > .mynah-syntax-highlighter-copy-buttons {
                display: none;
            }
        }

        .mynah-chat-item-card-related-content > .mynah-card,
        > .mynah-card {
            padding: var(--mynah-sizing-4);
            background-color: var(--mynah-card-bg-alternate);
            border-bottom-right-radius: var(--mynah-card-radius-corner);
            &,
            > .mynah-card-body {
                color: var(--mynah-color-text-alternate);
            }
        }
        .mynah-chat-item-card-related-content > .mynah-card {
            border: none;
        }
    }
    &.mynah-chat-item-system-prompt {
        > .mynah-card {
            background-color: var(--mynah-color-status-warning);
        }
    }

    &.mynah-chat-item-empty:empty {
        display: none;
    }
    &.mynah-chat-item-answer-stream.mynah-chat-item-empty.stream-ended {
        display: none;
    }
    &.mynah-chat-item-answer,
    &.mynah-chat-item-code-result,
    &.mynah-chat-item-answer-stream {
        > .mynah-card {
            border-bottom-left-radius: var(--mynah-card-radius-corner);
            max-height: 100%;
            flex: 1;
        }
    }
    &.mynah-chat-item-ai-prompt,
    &.mynah-chat-item-answer,
    &.mynah-chat-item-answer-stream {
        > .mynah-chat-item-card-icon-wrapper {
            align-self: flex-start;
        }
        > .mynah-chat-item-card-related-content {
            > .mynah-chat-item-card-related-content-item > .mynah-card-compact {
                opacity: 1;
                > .mynah-source-link-header {
                    opacity: 1;
                }
            }
        }
    }
}
`,`@import '../../mixins';
.mynah-chat-command-selector {
  display: flex;
  box-sizing: border-box;
  background-color: var(--mynah-card-bg);
  border-radius: var(--mynah-card-radius);
  width: 100%;
  pointer-events: all;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: flex-start;
  max-height: 80vh;
  overflow-x: hidden;
  padding: var(--mynah-sizing-4);
  overflow-y: auto;
  @include list-fader-bottom();
  > .mynah-chat-command-selector-group {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    flex-flow: column nowrap;
    align-items: stretch;
    justify-content: flex-start;
    gap: var(--mynah-sizing-1);
    > .mynah-chat-command-selector-group-title {
      margin: 0;
      color: var(--mynah-color-text-strong);
      padding: 0 var(--mynah-sizing-3);
      margin-bottom: var(--mynah-sizing-1);
      font-size: var(--mynah-font-size-large);
      position: relative;
      border-radius: var(--mynah-input-radius);
      overflow: hidden;
    }

    & + .mynah-chat-command-selector-group {
      margin-top: var(--mynah-sizing-2);
      padding-top: var(--mynah-sizing-4);
      border-top: var(--mynah-border-width) solid var(--mynah-color-border-default);
    }

    > .mynah-chat-command-selector-command {
      display: flex;
      position: relative;
      box-sizing: border-box;
      width: 100%;
      flex-flow: column nowrap;
      align-items: flex-start;
      justify-content: flex-start;
      overflow: hidden;
      cursor: pointer;
      padding: var(--mynah-sizing-2) var(--mynah-sizing-3);
      color: var(--mynah-color-text-default);
      border-radius: var(--mynah-input-radius);
      transition: var(--mynah-short-transition-rev);
      gap: var(--mynah-sizing-1);
      &[disabled='true'] {
        &::before {
          border-color: transparent !important;
        }
        opacity: 0.5;
        &,
        & * {
          pointer-events: none;
        }
      }
      &:hover:not([disabled="true"]),
      &.target-command:not([disabled="true"]) {
        background-color: var(--mynah-color-button);
        &,
        & * {
          color: var(--mynah-color-button-reverse);
          .mynah-chat-command-selector-command-description {
            color: var(--mynah-color-button-reverse);
            opacity: 0.65;
          }
        }
      }
      > .mynah-chat-command-selector-command-name {
        font-family: var(--mynah-font-family);
        font-size: var(--mynah-font-size-medium);
        font-weight: bold;
        flex: 0 1 0%;
      }
      > .mynah-chat-command-selector-command-description {
        font-size: var(--mynah-font-size-small);
        color: var(--mynah-color-text-weak);
        flex: 1 0 100%;
      }
    }
  }

  &:not(.has-target-item) {
    > .mynah-chat-command-selector-group:first-child {
      > .mynah-chat-command-selector-command:first-of-type {
        &:before {
          content: '';
          z-index: -1;
          border: calc(2 * var(--mynah-border-width)) solid var(--mynah-color-button);
          box-sizing: border-box;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: inherit;
        }
      }
    }
  }
}
`,`.mynah-chat-item-tree-view-wrapper {
  margin: 0;
  margin-block-end: 0 !important;
  margin-block-start: 0 !important;

  > .mynah-chat-item-tree-view-wrapper-container {
    background-color: var(--mynah-card-bg);
    color: var(--mynah-color-text-default);
    margin-block-start: 0 !important;
    margin-block-end: 0 !important;
    position: relative;
    border-radius: var(--mynah-input-radius);
    border: var(--mynah-border-width) solid var(--mynah-color-border-default);
    overflow: hidden;

    > .mynah-chat-item-tree-view-wrapper-title {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      padding: var(--mynah-sizing-3);
      gap: var(--mynah-sizing-2);
      border-bottom: var(--mynah-border-width) solid var(--mynah-color-border-default);

      > h4 {
        margin: 0;
      }

      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: var(--mynah-color-border-default);
        opacity: 0.25;
        pointer-events: none;
      }
    }

    > .mynah-chat-item-tree-view {
      padding: var(--mynah-sizing-2);
    }

    .mynah-chat-item-tree-view {
      overflow: hidden;
      box-sizing: border-box;
      width: 100%;
      overflow-y: hidden;
      overflow-x: auto;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      gap: var(--mynah-sizing-half);

      .mynah-chat-item-tree-view-button-title {
        display: inline-flex;
        gap: var(--mynah-sizing-1);
      }

      .mynah-chat-item-tree-view-button-weak-title {
        opacity: 0.65;
      }

      .mynah-chat-item-pull-request-item {
        width: 100%;
        box-sizing: border-box;
      }

      .mynah-chat-item-tree-view {
        padding-left: var(--mynah-sizing-4);
      }
    }

    .mynah-chat-item-tree-view-file-item {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      gap: var(--mynah-sizing-2);
      overflow: hidden;
      cursor: pointer;
      width: calc(100% - var(--mynah-sizing-4));
      padding: calc(3 * var(--mynah-sizing-half));
      position: relative;
      box-sizing: content-box;
      border-radius: var(--mynah-input-radius);
      &:after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        pointer-events: all;
        z-index: 100;
      }
      > .mynah-chat-item-tree-view-file-item-actions {
        z-index: 150;
      }
      &:not(:hover) {
        > .mynah-chat-item-tree-view-file-item-actions {
          opacity: 0;
          pointer-events: none;
        }
      }

      &:hover {
        background-color: var(--mynah-color-light);
      }

      &-status {
        &-info,
        &-success,
        &-warning,
        &-error {
          &:before {
            content: '';
            position: absolute;
            z-index: 0;
            opacity: 0.1;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            border-radius: inherit;
          }
        }

        &-info {
          &:before {
            background-color: var(--mynah-color-status-info);
          }

          > .mynah-chat-item-tree-view-file-item-details > .mynah-ui-icon {
            color: var(--mynah-color-status-info);
          }
        }

        &-success {
          &:before {
            background-color: var(--mynah-color-status-success);
          }

          > .mynah-chat-item-tree-view-file-item-details > .mynah-ui-icon {
            color: var(--mynah-color-status-success);
          }
        }

        &-warning {
          &:before {
            background-color: var(--mynah-color-status-warning);
          }

          > .mynah-chat-item-tree-view-file-item-details > .mynah-ui-icon {
            color: var(--mynah-color-status-warning);
          }
        }

        &-error {
          &:before {
            background-color: var(--mynah-color-status-error);
          }

          > .mynah-chat-item-tree-view-file-item-details > .mynah-ui-icon {
            color: var(--mynah-color-status-error);
          }
        }
      }

      &-details {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        gap: var(--mynah-sizing-1);
        font-size: 90%;
        z-index: 10;
        flex: 1;
        flex-shrink: 2;
        overflow: hidden;

        > .mynah-chat-item-tree-view-file-item-details-text {
          overflow: hidden;
          flex: 1;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }

      &-actions {
        display: flex;
        flex-flow: row-reverse nowrap;
        justify-content: flex-end;
        align-items: center;
        font-size: 90%;
        z-index: 10;
        padding-right: var(--mynah-sizing-1);
        flex-shrink: 0;
        > .mynah-button {
          width: auto;
          height: auto;
          min-width: auto;

          &.info {
            color: var(--mynah-color-status-info);
          }

          &.success {
            color: var(--mynah-color-status-success);
          }

          &.warning {
            color: var(--mynah-color-status-warning);
          }

          &.error {
            color: var(--mynah-color-status-error);
          }
        }
      }

      &-deleted {
        text-decoration: line-through;
      }

      &-title {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        gap: var(--mynah-sizing-1);
        max-width: 100%;
        overflow: hidden;
        z-index: 10;
        flex-shrink: 0;

        > span {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          max-width: 100%;
        }
      }

      > .mynah-chat-single-file-icon {
        position: relative;
        padding: var(--mynah-sizing-2);
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        border-radius: var(--mynah-input-radius);
        color: var(--mynah-card-bg);
        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: var(--mynah-color-text-default);
          opacity: 0.5;
          pointer-events: none;
          border-radius: inherit;
        }
      }
    }

    > .mynah-chat-item-tree-view-file-item {
      padding: var(--mynah-sizing-2);
      box-sizing: border-box;
      width: 100%;
      border-radius: 0;
    }
  }
}

.mynah-chat-item-tree-view-wrapper-label {
  border-top-left-radius: var(--mynah-card-radius);
  border-top-right-radius: var(--mynah-card-radius);
  background-color: var(--mynah-color-alternate);
  margin-bottom: 0px;
  padding: var(--mynah-sizing-4);
}

.mynah-chat-item-tree-view-wrapper-feedback-label {
  padding-left: var(--mynah-sizing-4);
}

.mynah-chat-item-tree-view-wrapper-feedback-div {
  float: right;

  button:first-child {
    margin-right: var(--mynah-sizing-2);
  }
}

.mynah-chat-item-tree-view-license {
  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: var(--mynah-card-bg-alternate);
    opacity: 0.07;
    pointer-events: none;
  }

  color: var(--mynah-color-text-weak);

  ul {
    margin: 0;
    padding-left: var(--mynah-sizing-8);

    > li {
      &:not(:first-child) {
        margin-top: var(--mynah-sizing-2);
      }

      .mynah-card-body p {
        margin: 0;
      }
    }
  }

  .mynah-chat-item-tree-view-license-dropdown-button > span {
    max-width: unset;
  }
}
`,`@import '../../mixins';
.outer-container {
  display: flex;
  &:not(:empty) {
    margin-top: var(--mynah-sizing-3);
  }
}

.mynah-prompt-attachment-container.vertical-overflow {
  & pre {
    // Show fading effect at the bottom when overflowing
    @include list-fader-bottom(var(--mynah-sizing-16));
  }
}

.mynah-prompt-attachment-container {
  box-sizing: border-box;
  max-width: 100%;
  max-height: calc(2 * var(--mynah-sizing-12));
  > .mynah-button {
    position: absolute;
    background-color: var(--mynah-card-bg) !important;
    width: var(--mynah-sizing-7) !important;
    min-width: var(--mynah-sizing-7) !important;
    max-width: var(--mynah-sizing-7) !important;
    height: var(--mynah-sizing-7) !important;
    border-radius: 100%;
    right: calc(-1 * var(--mynah-sizing-2));
    top: calc(-1 * var(--mynah-sizing-2));
    border: var(--mynah-border-width) solid var(--mynah-color-border-default);
    opacity: 1 !important;
    filter: brightness(0.95);
  }
  &:not(:hover) {
    > .mynah-button {
      display: none;
    }
  }
  > .mynah-card-body > .mynah-syntax-highlighter {
    & pre {
      text-overflow: ellipsis;
    }
  }
}

.mynah-prompt-input-snippet-attachment-overlay {
  max-width: 90vw;
  max-height: 70vh;
  > .mynah-card-body {
    > .mynah-syntax-highlighter {
      max-height: calc(70vh - var(--mynah-sizing-12)) !important;
    }
  }
}
.mynah-prompt-attachment-container,
.mynah-prompt-input-snippet-attachment-overlay {
  position: relative;
  overflow: visible;
  width: 100%;
  box-sizing: border-box;
  > .mynah-card-body {
    max-height: 100%;
    > .mynah-syntax-highlighter {
      user-select: none;
      pointer-events: none;
      margin: 0;
      max-height: 100%;
      overflow: hidden;
      > .mynah-syntax-highlighter-copy-buttons {
        display: none;
      }
    }
  }
  & pre {
    text-overflow: ellipsis;
  }
}
`],sourceRoot:""}]),a.locals={};const d=a},378:(v,t,e)=>{"use strict";e.d(t,{Z:()=>d});var l=e(7537),c=e.n(l),A=e(3645),a=e.n(A)()(c());a.push([v.id,':root{--mynah-font-family: var(--vscode-font-family), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Amazon Ember", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;font-size:var(--vscode-font-size, 13px);font-family:var(--mynah-font-family, "system-ui");--mynah-max-width: 2560px;--mynah-sizing-base: 0.25rem;--mynah-sizing-half: calc(var(--mynah-sizing-base) / 2);--mynah-sizing-1: calc(var(--mynah-sizing-base) * 1);--mynah-sizing-2: calc(var(--mynah-sizing-base) * 2);--mynah-sizing-3: calc(var(--mynah-sizing-base) * 3);--mynah-sizing-4: calc(var(--mynah-sizing-base) * 4);--mynah-sizing-5: calc(var(--mynah-sizing-base) * 5);--mynah-sizing-6: calc(var(--mynah-sizing-base) * 6);--mynah-sizing-7: calc(var(--mynah-sizing-base) * 7);--mynah-sizing-8: calc(var(--mynah-sizing-base) * 8);--mynah-sizing-9: calc(var(--mynah-sizing-base) * 9);--mynah-sizing-10: calc(var(--mynah-sizing-base) * 10);--mynah-sizing-11: calc(var(--mynah-sizing-base) * 11);--mynah-sizing-12: calc(var(--mynah-sizing-base) * 12);--mynah-sizing-13: calc(var(--mynah-sizing-base) * 13);--mynah-sizing-14: calc(var(--mynah-sizing-base) * 14);--mynah-sizing-15: calc(var(--mynah-sizing-base) * 15);--mynah-sizing-16: calc(var(--mynah-sizing-base) * 16);--mynah-sizing-17: calc(var(--mynah-sizing-base) * 17);--mynah-sizing-18: calc(var(--mynah-sizing-base) * 18);--mynah-chat-wrapper-spacing: var(--mynah-sizing-4);--mynah-button-border-width: 1px;--mynah-border-width: 1px;--mynah-color-text-default: var(--vscode-foreground);--mynah-color-text-alternate: var(--mynah-color-button-reverse);--mynah-color-text-strong: var(--vscode-input-foreground);--mynah-color-text-weak: var(--vscode-disabledForeground);--mynah-color-text-link: var(--vscode-textLink-foreground);--mynah-color-text-input: var(--vscode-input-foreground);--mynah-color-bg: var(--vscode-sideBar-background);--mynah-color-tab-active: var(--vscode-tab-activeBackground, var(--vscode-editor-background, var(--mynah-card-bg)));--mynah-color-light: rgba(0, 0, 0, 0.05);--mynah-color-border-default: var(--vscode-panel-border, var(--vscode-tab-border, rgba(0, 0, 0, 0.1)));--mynah-color-highlight: rgba(255, 179, 0, 0.25);--mynah-color-highlight-text: #886411;--mynah-color-toggle: var(--vscode-sideBar-background);--mynah-color-toggle-reverse: rgba(0, 0, 0, 0.5);--mynah-color-syntax-bg: var(--vscode-terminal-dropBackground);--mynah-color-syntax-variable: var(--vscode-debugTokenExpression-name);--mynah-color-syntax-function: var(--vscode-gitDecoration-modifiedResourceForeground);--mynah-color-syntax-operator: var(--vscode-debugTokenExpression-name);--mynah-color-syntax-attr-value: var(--vscode-debugIcon-stepBackForeground);--mynah-color-syntax-attr: var(--vscode-debugTokenExpression-string);--mynah-color-syntax-property: var(--vscode-terminal-ansiCyan);--mynah-color-syntax-comment: var(--vscode-debugConsole-sourceForeground);--mynah-color-syntax-code: var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit));--mynah-syntax-code-font-family: var(--vscode-editor-font-family);--mynah-syntax-code-font-size: var(--vscode-editor-font-size, var(--mynah-font-size-medium));--mynah-color-status-info: #0971d3;--mynah-color-status-success: #037f03;--mynah-color-status-warning: #b2911c;--mynah-color-status-error: #d91515;--mynah-color-button: var(--vscode-button-background);--mynah-color-button-reverse: var(--vscode-button-foreground);--mynah-color-alternate: var(--vscode-button-secondaryBackground);--mynah-color-alternate-reverse: var(--vscode-button-secondaryForeground);--mynah-card-bg: var(--vscode-editor-background);--mynah-card-bg-alternate: var(--mynah-color-button);--mynah-shadow-button: none;--mynah-shadow-card: none;--mynah-shadow-overlay: 0 0px 15px -5px rgba(0, 0, 0, 0.4);--mynah-font-size-xxsmall: 0.75rem;--mynah-font-size-xsmall: 0.85rem;--mynah-font-size-small: 0.95rem;--mynah-font-size-medium: 1rem;--mynah-font-size-large: 1.125rem;--mynah-line-height: 1.5rem;--mynah-syntax-code-line-height: 1.5rem;--mynah-card-radius: var(--mynah-sizing-2);--mynah-input-radius: var(--mynah-sizing-1);--mynah-card-radius-corner: 0;--mynah-button-radius: var(--mynah-sizing-1);--mynah-bottom-panel-transition: all 850ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-short-transition: all 600ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-long-transition: all 1650ms cubic-bezier(0.25, 1, 0, 1);--mynah-short-transition: all 550ms cubic-bezier(0.85, 0.15, 0, 1);--mynah-short-rev-transition: all 580ms cubic-bezier(0.35, 1, 0, 1);--mynah-short-transition-rev-opacity: opacity 750ms cubic-bezier(0.35, 1, 0, 1);--mynah-text-flow-transition: all 800ms cubic-bezier(0.35, 1.2, 0, 1), transform 800ms cubic-bezier(0.2, 1.05, 0, 1)}@keyframes horizontal-roll{0%{background-position:0% bottom}100%{background-position:-200% bottom}}@keyframes bounce{from{transform:translate3d(0, 0, 0)}to{transform:translate3d(0, calc(-1 * var(--mynah-sizing-2)), 0)}}@keyframes spinner-spin{to{transform:rotate(360deg)}}#mynah-wrapper{display:flex;flex-flow:column nowrap;margin:0 auto;width:100%;max-width:var(--mynah-max-width);box-sizing:border-box;height:100%;position:relative;overflow:hidden;justify-content:stretch;align-items:stretch;background-color:var(--mynah-color-bg);color:var(--mynah-color-text-default)}#mynah-wrapper>.mynah-ui-tab-contents-wrapper{flex:1;position:relative}#mynah-wrapper>.mynah-ui-tab-contents-wrapper:first-child>.mynah-chat-wrapper{display:flex}#mynah-wrapper h1{font-weight:600}#mynah-wrapper h2{font-weight:600}#mynah-wrapper h3{font-weight:600}#mynah-wrapper h4{font-weight:600}#mynah-wrapper h5{font-weight:600}#mynah-wrapper h6{font-weight:600}#mynah-wrapper ::-webkit-scrollbar{width:2px;height:2px;opacity:.25}#mynah-wrapper ::-webkit-scrollbar:horizontal{width:0px;height:0px}#mynah-wrapper *:focus{outline:none}',"",{version:3,sources:["webpack://./src/styles/_variables.scss","webpack://./src/styles/_mixins.scss","webpack://./src/styles/_animations.scss","webpack://./src/styles/components/_main-container.scss"],names:[],mappings:"AA6JA,MACI,sMAAA,CAEA,uCAAA,CACA,iDAAA,CACA,yBAAA,CACA,4BAAA,CACA,uDAAA,CAMI,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAGJ,mDAAA,CACA,gCAAA,CACA,yBAAA,CAGI,oDAAA,CAAA,+DAAA,CAAA,yDAAA,CAAA,yDAAA,CAAA,0DAAA,CAAA,wDAAA,CAGJ,kDAAA,CACA,mHAAA,CACA,wCAAA,CAEA,sGAAA,CAEA,gDAAA,CACA,qCAAA,CAEA,sDAAA,CACA,gDAAA,CAGI,8DAAA,CAAA,sEAAA,CAAA,qFAAA,CAAA,sEAAA,CAAA,2EAAA,CAAA,oEAAA,CAAA,8DAAA,CAAA,yEAAA,CAAA,oGAAA,CAGJ,iEAAA,CACA,4FAAA,CAII,kCAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,mCAAA,CAGJ,qDAAA,CACA,6DAAA,CAEA,iEAAA,CACA,yEAAA,CAEA,gDAAA,CACA,oDAAA,CAEA,2BAAA,CACA,yBAAA,CACA,0DAAA,CAGI,kCAAA,CAAA,iCAAA,CAAA,gCAAA,CAAA,8BAAA,CAAA,iCAAA,CAGJ,2BAAA,CACA,uCAAA,CAEA,0CAAA,CACA,2CAAA,CACA,6BAAA,CACA,4CAAA,CCrKA,sEAAA,CAAA,oEAAA,CAAA,oEAAA,CAAA,kEAAA,CAAA,mEAAA,CD2KA,+EAAA,CACA,oHAAA,CE3OJ,2BACI,GACI,6BAAA,CAEJ,KACI,gCAAA,CAAA,CAIR,kBACI,KACI,8BAAA,CAEJ,GACI,6DAAA,CAAA,CAIR,wBACI,GACI,wBAAA,CAAA,CCpBR,eACI,YAAA,CACA,uBAAA,CACA,aAAA,CACA,UAAA,CACA,gCAAA,CACA,qBAAA,CACA,WAAA,CACA,iBAAA,CACA,eAAA,CACA,uBAAA,CACA,mBAAA,CACA,sCAAA,CACA,qCAAA,CAEA,8CACI,MAAA,CACA,iBAAA,CAEI,8EACI,YAAA,CAMR,kBACI,eAAA,CADJ,kBACI,eAAA,CADJ,kBACI,eAAA,CADJ,kBACI,eAAA,CADJ,kBACI,eAAA,CADJ,kBACI,eAAA,CAIR,mCACI,SAAA,CACA,UAAA,CACA,WAAA,CACA,8CACI,SAAA,CACA,UAAA,CAIR,uBACI,YAAA",sourcesContent:[`@import './mixins';
/**
 * Flatten a map or list into a string
 * @param {any} $value - The value to flatten
 * @returns {string} The flattened value
 */
@function flatten($value) {
    @if type-of($value) == 'map' {
        $result: "";
        @each $key, $val in $value {
            $flattened-val: flatten($val);
            $result: "#{$result}#{$key}: #{$flattened-val}; ";
        }
        @return $result;
    } @else if type-of($value) == 'list' {
        $result: "";
        @each $item in $value {
            $flattened-item: flatten($item);
            $result: "#{$result}#{$flattened-item}, ";
        }
        @return $result;
    } @else {
        @return $value;
    }
}

/**
 * Export a map as CSS variables
 * @param {map} $map - The map to export
 * @param {string} $name - The name of the export
 */
@mixin export-map($map, $name) {
    :export {
        #{$name}: "#{flatten($map)}";
    }
}

/**
 * Color variables
 */
$mynah-color-text: (
    'default': var(--vscode-foreground),
    'alternate': var(--mynah-color-button-reverse),
    'strong': var(--vscode-input-foreground),
    'weak': var(--vscode-disabledForeground),
    'link': var(--vscode-textLink-foreground),
    'input': var(--vscode-input-foreground)
);

/**
 * Statuses
 */
$mynah-statuses: ("success", "error", "warning", "info");

/**
 * Status variables
 */
$mynah-status-colors: (
    'info': #0971d3,
    'success': #037f03,
    'warning': #b2911c,
    'error': #d91515
);

/**
 * Font variables
 */
$mynah-font-sizes: (
    'xxsmall': 0.75rem,
    'xsmall': 0.85rem,
    'small': 0.95rem,
    'medium': 1rem,
    'large': 1.125rem
);

/**
 * Padding sizes
 */
$mynah-padding-sizes: (
  'none': 0,
  'small': 1,
  'medium': 3,
  'large': 5,
);

/**
 * Transition variables
 */
$mynah-transitions: (
    'bottom-panel': (850, cubic-bezier(0.25, 1, 0, 1)),
    'very-short': (600, cubic-bezier(0.25, 1, 0, 1)),
    'very-long': (1650, cubic-bezier(0.25, 1, 0, 1)),
    'short': (550, cubic-bezier(0.85, 0.15, 0, 1)),
    'short-rev': (580, cubic-bezier(0.35, 1, 0, 1))
);

/**
 * Syntax highlighting variables
 */
 $mynah-syntax-colors: (
    'bg': var(--vscode-terminal-dropBackground),
    'variable': var(--vscode-debugTokenExpression-name),
    'function': var(--vscode-gitDecoration-modifiedResourceForeground),
    'operator': var(--vscode-debugTokenExpression-name),
    'attr-value': var(--vscode-debugIcon-stepBackForeground),
    'attr': var(--vscode-debugTokenExpression-string),
    'property': var(--vscode-terminal-ansiCyan),
    'comment': var(--vscode-debugConsole-sourceForeground),
    'code': var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit))
);

/**
 * Token styles
 */
 $mynah-token-styles: (
    'comments': (color: var(--mynah-color-syntax-comment)),
    'punctuation': (color: currentColor),
    'namespace': (opacity: 0.7),
    'properties': (color: var(--mynah-color-syntax-property)),
    'attributes': (color: var(--mynah-color-syntax-attr)),
    'operators': (color: var(--mynah-color-syntax-operator)),
    'attr-values': (color: var(--mynah-color-syntax-attr-value)),
    'functions': (color: var(--mynah-color-syntax-function), font-weight: 500),
    'variables': (color: var(--mynah-color-syntax-variable), font-weight: 500),
    'bold': (font-weight: bold),
    'italic': (font-style: italic),
    'entity': (cursor: help)
);

/**
 * Syntax token styles
 */
$mynah-syntax-token-styles: (
    'comments': (comment, prolog, doctype, cdata),
    'punctuation': (punctuation),
    'namespace': (namespace),
    'properties': (property, tag, boolean, number, constant, symbol, inserted),
    'attributes': (selector, attr-name, string, char, builtin, deleted),
    'operators': (operator, entity, url),
    'attr-values': (atrule, attr-value, class-name, keyword),
    'functions': (function),
    'variables': (regex, important, variable),
    'bold': (important, bold),
    'italic': (italic),
    'entity': (entity)
);

@include export-map($mynah-color-text, 'mynah-color-text');
@include export-map($mynah-statuses, 'mynah-statuses');
@include export-map($mynah-syntax-colors, 'mynah-syntax-colors');
@include export-map($mynah-status-colors, 'mynah-status-colors');
@include export-map($mynah-font-sizes, 'mynah-font-sizes');
@include export-map($mynah-padding-sizes, 'mynah-padding-sizes');
@include export-map($mynah-transitions, 'mynah-transitions');
@include export-map($mynah-syntax-token-styles, 'mynah-syntax-token-styles');


:root {
    --mynah-font-family: var(--vscode-font-family), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Amazon Ember", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: var(--vscode-font-size, 13px);
    font-family: var(--mynah-font-family, "system-ui");
    --mynah-max-width: 2560px;
    --mynah-sizing-base: 0.25rem;
    --mynah-sizing-half: calc(var(--mynah-sizing-base) / 2);

    /**
     * Sizing variables
     */
    @for $i from 1 through 18 {
        --mynah-sizing-#{$i}: calc(var(--mynah-sizing-base) * #{$i});
    }

    --mynah-chat-wrapper-spacing: var(--mynah-sizing-4);
    --mynah-button-border-width: 1px;
    --mynah-border-width: 1px;

    @each $name, $value in $mynah-color-text {
        --mynah-color-text-#{$name}: #{$value};
    }

    --mynah-color-bg: var(--vscode-sideBar-background);
    --mynah-color-tab-active: var(--vscode-tab-activeBackground, var(--vscode-editor-background, var(--mynah-card-bg)));
    --mynah-color-light: rgba(0, 0, 0, 0.05);

    --mynah-color-border-default: var(--vscode-panel-border, var(--vscode-tab-border, rgba(0, 0, 0, 0.1)));

    --mynah-color-highlight: rgba(255, 179, 0, 0.25);
    --mynah-color-highlight-text: #886411;

    --mynah-color-toggle: var(--vscode-sideBar-background);
    --mynah-color-toggle-reverse: rgba(0, 0, 0, 0.5);

    @each $name, $value in $mynah-syntax-colors {
        --mynah-color-syntax-#{$name}: #{$value};
    }

    --mynah-syntax-code-font-family: var(--vscode-editor-font-family);
    --mynah-syntax-code-font-size: var(--vscode-editor-font-size, var(--mynah-font-size-medium));


    @each $name, $value in $mynah-status-colors {
        --mynah-color-status-#{$name}: #{$value};
    }

    --mynah-color-button: var(--vscode-button-background);
    --mynah-color-button-reverse: var(--vscode-button-foreground);

    --mynah-color-alternate: var(--vscode-button-secondaryBackground);
    --mynah-color-alternate-reverse: var(--vscode-button-secondaryForeground);

    --mynah-card-bg: var(--vscode-editor-background);
    --mynah-card-bg-alternate: var(--mynah-color-button);

    --mynah-shadow-button: none; //0 10px 20px -15px rgba(0, 0, 0, 0.25);
    --mynah-shadow-card: none; //0 10px 20px -15px rgba(0, 0, 0, 0.25);
    --mynah-shadow-overlay: 0 0px 15px -5px rgba(0, 0, 0, 0.4);

    @each $name, $value in $mynah-font-sizes {
        --mynah-font-size-#{$name}: #{$value};
    }

    --mynah-line-height: 1.5rem;
    --mynah-syntax-code-line-height: 1.5rem;

    --mynah-card-radius: var(--mynah-sizing-2);
    --mynah-input-radius: var(--mynah-sizing-1);
    --mynah-card-radius-corner: 0;
    --mynah-button-radius: var(--mynah-sizing-1);

    @each $name, $values in $mynah-transitions {
        @include mynah-transition($name, nth($values, 1), nth($values, 2));
    }

    --mynah-short-transition-rev-opacity: opacity 750ms cubic-bezier(0.35, 1, 0, 1);
    --mynah-text-flow-transition: all 800ms cubic-bezier(0.35, 1.2, 0, 1), transform 800ms cubic-bezier(0.2, 1.05, 0, 1);
}
`,`@mixin list-fader-bottom($height: var(--mynah-sizing-6)) {
    position: relative;
    $listFader: linear-gradient(
        to bottom,
        black 30%,
        black calc(100% - $height),
        transparent 100%
    );
    -webkit-mask-image: $listFader;
    -webkit-mask-size: 100% 100%;
    mask-image: $listFader;
    mask-size: 100% 100%;
}

/**
 * @param {string} $size - The size of the font.
 * @param {string} $weight - The weight of the font.
 * @param {string} $family - The family of the font.
 */
@mixin mynah-font($size, $weight: normal, $family: var(--mynah-font-family)) {
    font-size: $size;
    font-weight: $weight;
    font-family: $family;
}

/**
 * @param {string} $text-color - The color of the text.
 * @param {string} $bg-color - The background color.
 */
@mixin mynah-color($text-color, $bg-color) {
    color: $text-color;
    background-color: $bg-color;
}

/**
 * @param {string} $margin - The margin of the element.
 * @param {string} $padding - The padding of the element.
 */
@mixin mynah-spacing($margin: 0, $padding: 0) {
    margin: $margin;
    padding: $padding;
}

/**
 * @param {string} $radius - The radius of the border.
 */
@mixin mynah-border-radius($radius) {
    border-radius: $radius;
}

/**
 * @param {string} $shadow - The shadow of the element.
 */
 @mixin mynah-box-shadow($shadow) {
    box-shadow: $shadow;
}

/**
 * @param {string} $name - The name of the transition.
 * @param {number} $duration - The duration of the transition in milliseconds.
 * @param {string} $timing-function - The timing function of the transition.
 */
@mixin mynah-transition($name, $duration, $timing-function) {
    --mynah-#{$name}-transition: all #{$duration}ms #{$timing-function};
}
`,`@keyframes horizontal-roll {
    0% {
        background-position: 0% bottom;
    }
    100% {
        background-position: -200% bottom;
    }
}

@keyframes bounce {
    from {
        transform: translate3d(0, 0, 0);
    }
    to {
        transform: translate3d(0, calc(-1 * var(--mynah-sizing-2)), 0);
    }
}

@keyframes spinner-spin {
    to {
        transform: rotate(360deg);
    }
}
`,`#mynah-wrapper {
    display: flex;
    flex-flow: column nowrap;
    margin: 0 auto;
    width: 100%;
    max-width: var(--mynah-max-width);
    box-sizing: border-box;
    height: 100%;
    position: relative;
    overflow: hidden;
    justify-content: stretch;
    align-items: stretch;
    background-color: var(--mynah-color-bg);
    color: var(--mynah-color-text-default);

    > .mynah-ui-tab-contents-wrapper {
        flex: 1;
        position: relative;
        &:first-child {
            > .mynah-chat-wrapper {
                display: flex;
            }
        }
    }

    @for $i from 1 through 6 {
        h#{$i} {
            font-weight: 600;
        }
    }

    ::-webkit-scrollbar {
        width: 2px;
        height: 2px;
        opacity: 0.25;
        &:horizontal {
            width: 0px;
            height: 0px;
        }
    }

    *:focus {
        outline: none;
    }
}
`],sourceRoot:""}]),a.locals={"mynah-color-text":'"default: var(--vscode-foreground); alternate: var(--mynah-color-button-reverse); strong: var(--vscode-input-foreground); weak: var(--vscode-disabledForeground); link: var(--vscode-textLink-foreground); input: var(--vscode-input-foreground); "',"mynah-statuses":'"success, error, warning, info, "',"mynah-syntax-colors":'"bg: var(--vscode-terminal-dropBackground); variable: var(--vscode-debugTokenExpression-name); function: var(--vscode-gitDecoration-modifiedResourceForeground); operator: var(--vscode-debugTokenExpression-name); attr-value: var(--vscode-debugIcon-stepBackForeground); attr: var(--vscode-debugTokenExpression-string); property: var(--vscode-terminal-ansiCyan); comment: var(--vscode-debugConsole-sourceForeground); code: var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit)); "',"mynah-status-colors":'"info: #0971d3; success: #037f03; warning: #b2911c; error: #d91515; "',"mynah-font-sizes":'"xxsmall: 0.75rem; xsmall: 0.85rem; small: 0.95rem; medium: 1rem; large: 1.125rem; "',"mynah-padding-sizes":'"none: 0; small: 1; medium: 3; large: 5; "',"mynah-transitions":'"bottom-panel: 850, cubic-bezier(0.25, 1, 0, 1), ; very-short: 600, cubic-bezier(0.25, 1, 0, 1), ; very-long: 1650, cubic-bezier(0.25, 1, 0, 1), ; short: 550, cubic-bezier(0.85, 0.15, 0, 1), ; short-rev: 580, cubic-bezier(0.35, 1, 0, 1), ; "',"mynah-syntax-token-styles":'"comments: comment, prolog, doctype, cdata, ; punctuation: punctuation; namespace: namespace; properties: property, tag, boolean, number, constant, symbol, inserted, ; attributes: selector, attr-name, string, char, builtin, deleted, ; operators: operator, entity, url, ; attr-values: atrule, attr-value, class-name, keyword, ; functions: function; variables: regex, important, variable, ; bold: important, bold, ; italic: italic; entity: entity; "'};const d=a},3645:v=>{"use strict";v.exports=function(t){var e=[];return e.toString=function(){return this.map(function(l){var c="",A=l[5]!==void 0;return l[4]&&(c+="@supports (".concat(l[4],") {")),l[2]&&(c+="@media ".concat(l[2]," {")),A&&(c+="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {")),c+=t(l),A&&(c+="}"),l[2]&&(c+="}"),l[4]&&(c+="}"),c}).join("")},e.i=function(l,c,A,a,d){typeof l=="string"&&(l=[[null,l,void 0]]);var m={};if(A)for(var s=0;s<this.length;s++){var i=this[s][0];i!=null&&(m[i]=!0)}for(var o=0;o<l.length;o++){var n=[].concat(l[o]);A&&m[n[0]]||(d!==void 0&&(n[5]===void 0||(n[1]="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {").concat(n[1],"}")),n[5]=d),c&&(n[2]&&(n[1]="@media ".concat(n[2]," {").concat(n[1],"}")),n[2]=c),a&&(n[4]?(n[1]="@supports (".concat(n[4],") {").concat(n[1],"}"),n[4]=a):n[4]="".concat(a)),e.push(n))}},e}},7537:v=>{"use strict";v.exports=function(t){var e=t[1],l=t[3];if(!l)return e;if(typeof btoa=="function"){var c=btoa(unescape(encodeURIComponent(JSON.stringify(l)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),a="/*# ".concat(A," */"),d=l.sources.map(function(m){return"/*# sourceURL=".concat(l.sourceRoot||"").concat(m," */")});return[e].concat(d).concat([a]).join(`
`)}return[e].join(`
`)}},9996:v=>{"use strict";var t=function(s){return function(i){return!!i&&typeof i=="object"}(s)&&!function(i){var o=Object.prototype.toString.call(i);return o==="[object RegExp]"||o==="[object Date]"||function(n){return n.$$typeof===e}(i)}(s)},e=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function l(s,i){return i.clone!==!1&&i.isMergeableObject(s)?d((o=s,Array.isArray(o)?[]:{}),s,i):s;var o}function c(s,i,o){return s.concat(i).map(function(n){return l(n,o)})}function A(s){return Object.keys(s).concat(function(i){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(i).filter(function(o){return Object.propertyIsEnumerable.call(i,o)}):[]}(s))}function a(s,i){try{return i in s}catch{return!1}}function d(s,i,o){(o=o||{}).arrayMerge=o.arrayMerge||c,o.isMergeableObject=o.isMergeableObject||t,o.cloneUnlessOtherwiseSpecified=l;var n=Array.isArray(i);return n===Array.isArray(s)?n?o.arrayMerge(s,i,o):function(h,g,f){var C={};return f.isMergeableObject(h)&&A(h).forEach(function(w){C[w]=l(h[w],f)}),A(g).forEach(function(w){(function(u,y){return a(u,y)&&!(Object.hasOwnProperty.call(u,y)&&Object.propertyIsEnumerable.call(u,y))})(h,w)||(a(h,w)&&f.isMergeableObject(g[w])?C[w]=function(u,y){if(!y.customMerge)return d;var r=y.customMerge(u);return typeof r=="function"?r:d}(w,f)(h[w],g[w],f):C[w]=l(g[w],f))}),C}(s,i,o):l(i,o)}d.all=function(s,i){if(!Array.isArray(s))throw new Error("first argument should be an array");return s.reduce(function(o,n){return d(o,n,i)},{})};var m=d;v.exports=m},7837:(v,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.attributeNames=t.elementNames=void 0,t.elementNames=new Map(["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","textPath"].map(function(e){return[e.toLowerCase(),e]})),t.attributeNames=new Map(["definitionURL","attributeName","attributeType","baseFrequency","baseProfile","calcMode","clipPathUnits","diffuseConstant","edgeMode","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector","zoomAndPan"].map(function(e){return[e.toLowerCase(),e]}))},7220:function(v,t,e){"use strict";var l=this&&this.__assign||function(){return l=Object.assign||function(w){for(var u,y=1,r=arguments.length;y<r;y++)for(var p in u=arguments[y])Object.prototype.hasOwnProperty.call(u,p)&&(w[p]=u[p]);return w},l.apply(this,arguments)},c=this&&this.__createBinding||(Object.create?function(w,u,y,r){r===void 0&&(r=y);var p=Object.getOwnPropertyDescriptor(u,y);p&&!("get"in p?!u.__esModule:p.writable||p.configurable)||(p={enumerable:!0,get:function(){return u[y]}}),Object.defineProperty(w,r,p)}:function(w,u,y,r){r===void 0&&(r=y),w[r]=u[y]}),A=this&&this.__setModuleDefault||(Object.create?function(w,u){Object.defineProperty(w,"default",{enumerable:!0,value:u})}:function(w,u){w.default=u}),a=this&&this.__importStar||function(w){if(w&&w.__esModule)return w;var u={};if(w!=null)for(var y in w)y!=="default"&&Object.prototype.hasOwnProperty.call(w,y)&&c(u,w,y);return A(u,w),u};Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;var d=a(e(9960)),m=e(5863),s=e(7837),i=new Set(["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"]);function o(w){return w.replace(/"/g,"&quot;")}var n=new Set(["area","base","basefont","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr"]);function h(w,u){u===void 0&&(u={});for(var y=("length"in w)?w:[w],r="",p=0;p<y.length;p++)r+=g(y[p],u);return r}function g(w,u){switch(w.type){case d.Root:return h(w.children,u);case d.Doctype:case d.Directive:return"<".concat(w.data,">");case d.Comment:return"<!--".concat(w.data,"-->");case d.CDATA:return function(y){return"<![CDATA[".concat(y.children[0].data,"]]>")}(w);case d.Script:case d.Style:case d.Tag:return function(y,r){var p;r.xmlMode==="foreign"&&(y.name=(p=s.elementNames.get(y.name))!==null&&p!==void 0?p:y.name,y.parent&&f.has(y.parent.name)&&(r=l(l({},r),{xmlMode:!1}))),!r.xmlMode&&C.has(y.name)&&(r=l(l({},r),{xmlMode:"foreign"}));var b="<".concat(y.name),x=function(I,M){var T;if(I){var z=((T=M.encodeEntities)!==null&&T!==void 0?T:M.decodeEntities)===!1?o:M.xmlMode||M.encodeEntities!=="utf8"?m.encodeXML:m.escapeAttribute;return Object.keys(I).map(function(O){var P,L,D=(P=I[O])!==null&&P!==void 0?P:"";return M.xmlMode==="foreign"&&(O=(L=s.attributeNames.get(O))!==null&&L!==void 0?L:O),M.emptyAttrs||M.xmlMode||D!==""?"".concat(O,'="').concat(z(D),'"'):O}).join(" ")}}(y.attribs,r);return x&&(b+=" ".concat(x)),y.children.length===0&&(r.xmlMode?r.selfClosingTags!==!1:r.selfClosingTags&&n.has(y.name))?(r.xmlMode||(b+=" "),b+="/>"):(b+=">",y.children.length>0&&(b+=h(y.children,r)),!r.xmlMode&&n.has(y.name)||(b+="</".concat(y.name,">"))),b}(w,u);case d.Text:return function(y,r){var p,b=y.data||"";return((p=r.encodeEntities)!==null&&p!==void 0?p:r.decodeEntities)===!1||!r.xmlMode&&y.parent&&i.has(y.parent.name)||(b=r.xmlMode||r.encodeEntities!=="utf8"?(0,m.encodeXML)(b):(0,m.escapeText)(b)),b}(w,u)}}t.render=h,t.default=h;var f=new Set(["mi","mo","mn","ms","mtext","annotation-xml","foreignObject","desc","title"]),C=new Set(["svg","math"])},9960:(v,t)=>{"use strict";var e;Object.defineProperty(t,"__esModule",{value:!0}),t.Doctype=t.CDATA=t.Tag=t.Style=t.Script=t.Comment=t.Directive=t.Text=t.Root=t.isTag=t.ElementType=void 0,function(l){l.Root="root",l.Text="text",l.Directive="directive",l.Comment="comment",l.Script="script",l.Style="style",l.Tag="tag",l.CDATA="cdata",l.Doctype="doctype"}(e=t.ElementType||(t.ElementType={})),t.isTag=function(l){return l.type===e.Tag||l.type===e.Script||l.type===e.Style},t.Root=e.Root,t.Text=e.Text,t.Directive=e.Directive,t.Comment=e.Comment,t.Script=e.Script,t.Style=e.Style,t.Tag=e.Tag,t.CDATA=e.CDATA,t.Doctype=e.Doctype},7915:function(v,t,e){"use strict";var l=this&&this.__createBinding||(Object.create?function(s,i,o,n){n===void 0&&(n=o);var h=Object.getOwnPropertyDescriptor(i,o);h&&!("get"in h?!i.__esModule:h.writable||h.configurable)||(h={enumerable:!0,get:function(){return i[o]}}),Object.defineProperty(s,n,h)}:function(s,i,o,n){n===void 0&&(n=o),s[n]=i[o]}),c=this&&this.__exportStar||function(s,i){for(var o in s)o==="default"||Object.prototype.hasOwnProperty.call(i,o)||l(i,s,o)};Object.defineProperty(t,"__esModule",{value:!0}),t.DomHandler=void 0;var A=e(9960),a=e(7790);c(e(7790),t);var d={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},m=function(){function s(i,o,n){this.dom=[],this.root=new a.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof o=="function"&&(n=o,o=d),typeof i=="object"&&(o=i,i=void 0),this.callback=i??null,this.options=o??d,this.elementCB=n??null}return s.prototype.onparserinit=function(i){this.parser=i},s.prototype.onreset=function(){this.dom=[],this.root=new a.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},s.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},s.prototype.onerror=function(i){this.handleCallback(i)},s.prototype.onclosetag=function(){this.lastNode=null;var i=this.tagStack.pop();this.options.withEndIndices&&(i.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(i)},s.prototype.onopentag=function(i,o){var n=this.options.xmlMode?A.ElementType.Tag:void 0,h=new a.Element(i,o,void 0,n);this.addNode(h),this.tagStack.push(h)},s.prototype.ontext=function(i){var o=this.lastNode;if(o&&o.type===A.ElementType.Text)o.data+=i,this.options.withEndIndices&&(o.endIndex=this.parser.endIndex);else{var n=new a.Text(i);this.addNode(n),this.lastNode=n}},s.prototype.oncomment=function(i){if(this.lastNode&&this.lastNode.type===A.ElementType.Comment)this.lastNode.data+=i;else{var o=new a.Comment(i);this.addNode(o),this.lastNode=o}},s.prototype.oncommentend=function(){this.lastNode=null},s.prototype.oncdatastart=function(){var i=new a.Text(""),o=new a.CDATA([i]);this.addNode(o),i.parent=o,this.lastNode=i},s.prototype.oncdataend=function(){this.lastNode=null},s.prototype.onprocessinginstruction=function(i,o){var n=new a.ProcessingInstruction(i,o);this.addNode(n)},s.prototype.handleCallback=function(i){if(typeof this.callback=="function")this.callback(i,this.dom);else if(i)throw i},s.prototype.addNode=function(i){var o=this.tagStack[this.tagStack.length-1],n=o.children[o.children.length-1];this.options.withStartIndices&&(i.startIndex=this.parser.startIndex),this.options.withEndIndices&&(i.endIndex=this.parser.endIndex),o.children.push(i),n&&(i.prev=n,n.next=i),i.parent=o,this.lastNode=null},s}();t.DomHandler=m,t.default=m},7790:function(v,t,e){"use strict";var l,c=this&&this.__extends||(l=function(I,M){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(T,z){T.__proto__=z}||function(T,z){for(var O in z)Object.prototype.hasOwnProperty.call(z,O)&&(T[O]=z[O])},l(I,M)},function(I,M){if(typeof M!="function"&&M!==null)throw new TypeError("Class extends value "+String(M)+" is not a constructor or null");function T(){this.constructor=I}l(I,M),I.prototype=M===null?Object.create(M):(T.prototype=M.prototype,new T)}),A=this&&this.__assign||function(){return A=Object.assign||function(I){for(var M,T=1,z=arguments.length;T<z;T++)for(var O in M=arguments[T])Object.prototype.hasOwnProperty.call(M,O)&&(I[O]=M[O]);return I},A.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.cloneNode=t.hasChildren=t.isDocument=t.isDirective=t.isComment=t.isText=t.isCDATA=t.isTag=t.Element=t.Document=t.CDATA=t.NodeWithChildren=t.ProcessingInstruction=t.Comment=t.Text=t.DataNode=t.Node=void 0;var a=e(9960),d=function(){function I(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(I.prototype,"parentNode",{get:function(){return this.parent},set:function(M){this.parent=M},enumerable:!1,configurable:!0}),Object.defineProperty(I.prototype,"previousSibling",{get:function(){return this.prev},set:function(M){this.prev=M},enumerable:!1,configurable:!0}),Object.defineProperty(I.prototype,"nextSibling",{get:function(){return this.next},set:function(M){this.next=M},enumerable:!1,configurable:!0}),I.prototype.cloneNode=function(M){return M===void 0&&(M=!1),b(this,M)},I}();t.Node=d;var m=function(I){function M(T){var z=I.call(this)||this;return z.data=T,z}return c(M,I),Object.defineProperty(M.prototype,"nodeValue",{get:function(){return this.data},set:function(T){this.data=T},enumerable:!1,configurable:!0}),M}(d);t.DataNode=m;var s=function(I){function M(){var T=I!==null&&I.apply(this,arguments)||this;return T.type=a.ElementType.Text,T}return c(M,I),Object.defineProperty(M.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),M}(m);t.Text=s;var i=function(I){function M(){var T=I!==null&&I.apply(this,arguments)||this;return T.type=a.ElementType.Comment,T}return c(M,I),Object.defineProperty(M.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),M}(m);t.Comment=i;var o=function(I){function M(T,z){var O=I.call(this,z)||this;return O.name=T,O.type=a.ElementType.Directive,O}return c(M,I),Object.defineProperty(M.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),M}(m);t.ProcessingInstruction=o;var n=function(I){function M(T){var z=I.call(this)||this;return z.children=T,z}return c(M,I),Object.defineProperty(M.prototype,"firstChild",{get:function(){var T;return(T=this.children[0])!==null&&T!==void 0?T:null},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"childNodes",{get:function(){return this.children},set:function(T){this.children=T},enumerable:!1,configurable:!0}),M}(d);t.NodeWithChildren=n;var h=function(I){function M(){var T=I!==null&&I.apply(this,arguments)||this;return T.type=a.ElementType.CDATA,T}return c(M,I),Object.defineProperty(M.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),M}(n);t.CDATA=h;var g=function(I){function M(){var T=I!==null&&I.apply(this,arguments)||this;return T.type=a.ElementType.Root,T}return c(M,I),Object.defineProperty(M.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),M}(n);t.Document=g;var f=function(I){function M(T,z,O,P){O===void 0&&(O=[]),P===void 0&&(P=T==="script"?a.ElementType.Script:T==="style"?a.ElementType.Style:a.ElementType.Tag);var L=I.call(this,O)||this;return L.name=T,L.attribs=z,L.type=P,L}return c(M,I),Object.defineProperty(M.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"tagName",{get:function(){return this.name},set:function(T){this.name=T},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"attributes",{get:function(){var T=this;return Object.keys(this.attribs).map(function(z){var O,P;return{name:z,value:T.attribs[z],namespace:(O=T["x-attribsNamespace"])===null||O===void 0?void 0:O[z],prefix:(P=T["x-attribsPrefix"])===null||P===void 0?void 0:P[z]}})},enumerable:!1,configurable:!0}),M}(n);function C(I){return(0,a.isTag)(I)}function w(I){return I.type===a.ElementType.CDATA}function u(I){return I.type===a.ElementType.Text}function y(I){return I.type===a.ElementType.Comment}function r(I){return I.type===a.ElementType.Directive}function p(I){return I.type===a.ElementType.Root}function b(I,M){var T;if(M===void 0&&(M=!1),u(I))T=new s(I.data);else if(y(I))T=new i(I.data);else if(C(I)){var z=M?x(I.children):[],O=new f(I.name,A({},I.attribs),z);z.forEach(function(U){return U.parent=O}),I.namespace!=null&&(O.namespace=I.namespace),I["x-attribsNamespace"]&&(O["x-attribsNamespace"]=A({},I["x-attribsNamespace"])),I["x-attribsPrefix"]&&(O["x-attribsPrefix"]=A({},I["x-attribsPrefix"])),T=O}else if(w(I)){z=M?x(I.children):[];var P=new h(z);z.forEach(function(U){return U.parent=P}),T=P}else if(p(I)){z=M?x(I.children):[];var L=new g(z);z.forEach(function(U){return U.parent=L}),I["x-mode"]&&(L["x-mode"]=I["x-mode"]),T=L}else{if(!r(I))throw new Error("Not implemented yet: ".concat(I.type));var D=new o(I.name,I.data);I["x-name"]!=null&&(D["x-name"]=I["x-name"],D["x-publicId"]=I["x-publicId"],D["x-systemId"]=I["x-systemId"]),T=D}return T.startIndex=I.startIndex,T.endIndex=I.endIndex,I.sourceCodeLocation!=null&&(T.sourceCodeLocation=I.sourceCodeLocation),T}function x(I){for(var M=I.map(function(z){return b(z,!0)}),T=1;T<M.length;T++)M[T].prev=M[T-1],M[T-1].next=M[T];return M}t.Element=f,t.isTag=C,t.isCDATA=w,t.isText=u,t.isComment=y,t.isDirective=r,t.isDocument=p,t.hasChildren=function(I){return Object.prototype.hasOwnProperty.call(I,"children")},t.cloneNode=b},6996:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getFeed=void 0;var l=e(3346),c=e(3905);t.getFeed=function(n){var h=m(o,n);return h?h.name==="feed"?function(g){var f,C=g.children,w={type:"atom",items:(0,c.getElementsByTagName)("entry",C).map(function(r){var p,b=r.children,x={media:d(b)};i(x,"id","id",b),i(x,"title","title",b);var I=(p=m("link",b))===null||p===void 0?void 0:p.attribs.href;I&&(x.link=I);var M=s("summary",b)||s("content",b);M&&(x.description=M);var T=s("updated",b);return T&&(x.pubDate=new Date(T)),x})};i(w,"id","id",C),i(w,"title","title",C);var u=(f=m("link",C))===null||f===void 0?void 0:f.attribs.href;u&&(w.link=u),i(w,"description","subtitle",C);var y=s("updated",C);return y&&(w.updated=new Date(y)),i(w,"author","email",C,!0),w}(h):function(g){var f,C,w=(C=(f=m("channel",g.children))===null||f===void 0?void 0:f.children)!==null&&C!==void 0?C:[],u={type:g.name.substr(0,3),id:"",items:(0,c.getElementsByTagName)("item",g.children).map(function(r){var p=r.children,b={media:d(p)};i(b,"id","guid",p),i(b,"title","title",p),i(b,"link","link",p),i(b,"description","description",p);var x=s("pubDate",p)||s("dc:date",p);return x&&(b.pubDate=new Date(x)),b})};i(u,"title","title",w),i(u,"link","link",w),i(u,"description","description",w);var y=s("lastBuildDate",w);return y&&(u.updated=new Date(y)),i(u,"author","managingEditor",w,!0),u}(h):null};var A=["url","type","lang"],a=["fileSize","bitrate","framerate","samplingrate","channels","duration","height","width"];function d(n){return(0,c.getElementsByTagName)("media:content",n).map(function(h){for(var g=h.attribs,f={medium:g.medium,isDefault:!!g.isDefault},C=0,w=A;C<w.length;C++)g[r=w[C]]&&(f[r]=g[r]);for(var u=0,y=a;u<y.length;u++){var r;g[r=y[u]]&&(f[r]=parseInt(g[r],10))}return g.expression&&(f.expression=g.expression),f})}function m(n,h){return(0,c.getElementsByTagName)(n,h,!0,1)[0]}function s(n,h,g){return g===void 0&&(g=!1),(0,l.textContent)((0,c.getElementsByTagName)(n,h,g,1)).trim()}function i(n,h,g,f,C){C===void 0&&(C=!1);var w=s(g,f,C);w&&(n[h]=w)}function o(n){return n==="rss"||n==="feed"||n==="rdf:RDF"}},4975:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.uniqueSort=t.compareDocumentPosition=t.DocumentPosition=t.removeSubsets=void 0;var l,c=e(7915);function A(a,d){var m=[],s=[];if(a===d)return 0;for(var i=(0,c.hasChildren)(a)?a:a.parent;i;)m.unshift(i),i=i.parent;for(i=(0,c.hasChildren)(d)?d:d.parent;i;)s.unshift(i),i=i.parent;for(var o=Math.min(m.length,s.length),n=0;n<o&&m[n]===s[n];)n++;if(n===0)return l.DISCONNECTED;var h=m[n-1],g=h.children,f=m[n],C=s[n];return g.indexOf(f)>g.indexOf(C)?h===d?l.FOLLOWING|l.CONTAINED_BY:l.FOLLOWING:h===a?l.PRECEDING|l.CONTAINS:l.PRECEDING}t.removeSubsets=function(a){for(var d=a.length;--d>=0;){var m=a[d];if(d>0&&a.lastIndexOf(m,d-1)>=0)a.splice(d,1);else for(var s=m.parent;s;s=s.parent)if(a.includes(s)){a.splice(d,1);break}}return a},function(a){a[a.DISCONNECTED=1]="DISCONNECTED",a[a.PRECEDING=2]="PRECEDING",a[a.FOLLOWING=4]="FOLLOWING",a[a.CONTAINS=8]="CONTAINS",a[a.CONTAINED_BY=16]="CONTAINED_BY"}(l=t.DocumentPosition||(t.DocumentPosition={})),t.compareDocumentPosition=A,t.uniqueSort=function(a){return(a=a.filter(function(d,m,s){return!s.includes(d,m+1)})).sort(function(d,m){var s=A(d,m);return s&l.PRECEDING?-1:s&l.FOLLOWING?1:0}),a}},9432:function(v,t,e){"use strict";var l=this&&this.__createBinding||(Object.create?function(a,d,m,s){s===void 0&&(s=m);var i=Object.getOwnPropertyDescriptor(d,m);i&&!("get"in i?!d.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return d[m]}}),Object.defineProperty(a,s,i)}:function(a,d,m,s){s===void 0&&(s=m),a[s]=d[m]}),c=this&&this.__exportStar||function(a,d){for(var m in a)m==="default"||Object.prototype.hasOwnProperty.call(d,m)||l(d,a,m)};Object.defineProperty(t,"__esModule",{value:!0}),t.hasChildren=t.isDocument=t.isComment=t.isText=t.isCDATA=t.isTag=void 0,c(e(3346),t),c(e(5010),t),c(e(8726),t),c(e(8043),t),c(e(3905),t),c(e(4975),t),c(e(6996),t);var A=e(7915);Object.defineProperty(t,"isTag",{enumerable:!0,get:function(){return A.isTag}}),Object.defineProperty(t,"isCDATA",{enumerable:!0,get:function(){return A.isCDATA}}),Object.defineProperty(t,"isText",{enumerable:!0,get:function(){return A.isText}}),Object.defineProperty(t,"isComment",{enumerable:!0,get:function(){return A.isComment}}),Object.defineProperty(t,"isDocument",{enumerable:!0,get:function(){return A.isDocument}}),Object.defineProperty(t,"hasChildren",{enumerable:!0,get:function(){return A.hasChildren}})},3905:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getElementsByTagType=t.getElementsByTagName=t.getElementById=t.getElements=t.testElement=void 0;var l=e(7915),c=e(8043),A={tag_name:function(s){return typeof s=="function"?function(i){return(0,l.isTag)(i)&&s(i.name)}:s==="*"?l.isTag:function(i){return(0,l.isTag)(i)&&i.name===s}},tag_type:function(s){return typeof s=="function"?function(i){return s(i.type)}:function(i){return i.type===s}},tag_contains:function(s){return typeof s=="function"?function(i){return(0,l.isText)(i)&&s(i.data)}:function(i){return(0,l.isText)(i)&&i.data===s}}};function a(s,i){return typeof i=="function"?function(o){return(0,l.isTag)(o)&&i(o.attribs[s])}:function(o){return(0,l.isTag)(o)&&o.attribs[s]===i}}function d(s,i){return function(o){return s(o)||i(o)}}function m(s){var i=Object.keys(s).map(function(o){var n=s[o];return Object.prototype.hasOwnProperty.call(A,o)?A[o](n):a(o,n)});return i.length===0?null:i.reduce(d)}t.testElement=function(s,i){var o=m(s);return!o||o(i)},t.getElements=function(s,i,o,n){n===void 0&&(n=1/0);var h=m(s);return h?(0,c.filter)(h,i,o,n):[]},t.getElementById=function(s,i,o){return o===void 0&&(o=!0),Array.isArray(i)||(i=[i]),(0,c.findOne)(a("id",s),i,o)},t.getElementsByTagName=function(s,i,o,n){return o===void 0&&(o=!0),n===void 0&&(n=1/0),(0,c.filter)(A.tag_name(s),i,o,n)},t.getElementsByTagType=function(s,i,o,n){return o===void 0&&(o=!0),n===void 0&&(n=1/0),(0,c.filter)(A.tag_type(s),i,o,n)}},8726:(v,t)=>{"use strict";function e(l){if(l.prev&&(l.prev.next=l.next),l.next&&(l.next.prev=l.prev),l.parent){var c=l.parent.children,A=c.lastIndexOf(l);A>=0&&c.splice(A,1)}l.next=null,l.prev=null,l.parent=null}Object.defineProperty(t,"__esModule",{value:!0}),t.prepend=t.prependChild=t.append=t.appendChild=t.replaceElement=t.removeElement=void 0,t.removeElement=e,t.replaceElement=function(l,c){var A=c.prev=l.prev;A&&(A.next=c);var a=c.next=l.next;a&&(a.prev=c);var d=c.parent=l.parent;if(d){var m=d.children;m[m.lastIndexOf(l)]=c,l.parent=null}},t.appendChild=function(l,c){if(e(c),c.next=null,c.parent=l,l.children.push(c)>1){var A=l.children[l.children.length-2];A.next=c,c.prev=A}else c.prev=null},t.append=function(l,c){e(c);var A=l.parent,a=l.next;if(c.next=a,c.prev=l,l.next=c,c.parent=A,a){if(a.prev=c,A){var d=A.children;d.splice(d.lastIndexOf(a),0,c)}}else A&&A.children.push(c)},t.prependChild=function(l,c){if(e(c),c.parent=l,c.prev=null,l.children.unshift(c)!==1){var A=l.children[1];A.prev=c,c.next=A}else c.next=null},t.prepend=function(l,c){e(c);var A=l.parent;if(A){var a=A.children;a.splice(a.indexOf(l),0,c)}l.prev&&(l.prev.next=c),c.parent=A,c.prev=l.prev,c.next=l,l.prev=c}},8043:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.findAll=t.existsOne=t.findOne=t.findOneChild=t.find=t.filter=void 0;var l=e(7915);function c(A,a,d,m){for(var s=[],i=[a],o=[0];;)if(o[0]>=i[0].length){if(o.length===1)return s;i.shift(),o.shift()}else{var n=i[0][o[0]++];if(A(n)&&(s.push(n),--m<=0))return s;d&&(0,l.hasChildren)(n)&&n.children.length>0&&(o.unshift(0),i.unshift(n.children))}}t.filter=function(A,a,d,m){return d===void 0&&(d=!0),m===void 0&&(m=1/0),c(A,Array.isArray(a)?a:[a],d,m)},t.find=c,t.findOneChild=function(A,a){return a.find(A)},t.findOne=function A(a,d,m){m===void 0&&(m=!0);for(var s=null,i=0;i<d.length&&!s;i++){var o=d[i];(0,l.isTag)(o)&&(a(o)?s=o:m&&o.children.length>0&&(s=A(a,o.children,!0)))}return s},t.existsOne=function A(a,d){return d.some(function(m){return(0,l.isTag)(m)&&(a(m)||A(a,m.children))})},t.findAll=function(A,a){for(var d=[],m=[a],s=[0];;)if(s[0]>=m[0].length){if(m.length===1)return d;m.shift(),s.shift()}else{var i=m[0][s[0]++];(0,l.isTag)(i)&&(A(i)&&d.push(i),i.children.length>0&&(s.unshift(0),m.unshift(i.children)))}}},3346:function(v,t,e){"use strict";var l=this&&this.__importDefault||function(m){return m&&m.__esModule?m:{default:m}};Object.defineProperty(t,"__esModule",{value:!0}),t.innerText=t.textContent=t.getText=t.getInnerHTML=t.getOuterHTML=void 0;var c=e(7915),A=l(e(7220)),a=e(9960);function d(m,s){return(0,A.default)(m,s)}t.getOuterHTML=d,t.getInnerHTML=function(m,s){return(0,c.hasChildren)(m)?m.children.map(function(i){return d(i,s)}).join(""):""},t.getText=function m(s){return Array.isArray(s)?s.map(m).join(""):(0,c.isTag)(s)?s.name==="br"?`
`:m(s.children):(0,c.isCDATA)(s)?m(s.children):(0,c.isText)(s)?s.data:""},t.textContent=function m(s){return Array.isArray(s)?s.map(m).join(""):(0,c.hasChildren)(s)&&!(0,c.isComment)(s)?m(s.children):(0,c.isText)(s)?s.data:""},t.innerText=function m(s){return Array.isArray(s)?s.map(m).join(""):(0,c.hasChildren)(s)&&(s.type===a.ElementType.Tag||(0,c.isCDATA)(s))?m(s.children):(0,c.isText)(s)?s.data:""}},5010:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.prevElementSibling=t.nextElementSibling=t.getName=t.hasAttrib=t.getAttributeValue=t.getSiblings=t.getParent=t.getChildren=void 0;var l=e(7915);function c(a){return(0,l.hasChildren)(a)?a.children:[]}function A(a){return a.parent||null}t.getChildren=c,t.getParent=A,t.getSiblings=function(a){var d=A(a);if(d!=null)return c(d);for(var m=[a],s=a.prev,i=a.next;s!=null;)m.unshift(s),s=s.prev;for(;i!=null;)m.push(i),i=i.next;return m},t.getAttributeValue=function(a,d){var m;return(m=a.attribs)===null||m===void 0?void 0:m[d]},t.hasAttrib=function(a,d){return a.attribs!=null&&Object.prototype.hasOwnProperty.call(a.attribs,d)&&a.attribs[d]!=null},t.getName=function(a){return a.name},t.nextElementSibling=function(a){for(var d=a.next;d!==null&&!(0,l.isTag)(d);)d=d.next;return d},t.prevElementSibling=function(a){for(var d=a.prev;d!==null&&!(0,l.isTag)(d);)d=d.prev;return d}},4076:function(v,t,e){"use strict";var l=this&&this.__createBinding||(Object.create?function(p,b,x,I){I===void 0&&(I=x);var M=Object.getOwnPropertyDescriptor(b,x);M&&!("get"in M?!b.__esModule:M.writable||M.configurable)||(M={enumerable:!0,get:function(){return b[x]}}),Object.defineProperty(p,I,M)}:function(p,b,x,I){I===void 0&&(I=x),p[I]=b[x]}),c=this&&this.__setModuleDefault||(Object.create?function(p,b){Object.defineProperty(p,"default",{enumerable:!0,value:b})}:function(p,b){p.default=b}),A=this&&this.__importStar||function(p){if(p&&p.__esModule)return p;var b={};if(p!=null)for(var x in p)x!=="default"&&Object.prototype.hasOwnProperty.call(p,x)&&l(b,p,x);return c(b,p),b},a=this&&this.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(t,"__esModule",{value:!0}),t.decodeXML=t.decodeHTMLStrict=t.decodeHTMLAttribute=t.decodeHTML=t.determineBranch=t.EntityDecoder=t.DecodingMode=t.BinTrieFlags=t.fromCodePoint=t.replaceCodePoint=t.decodeCodePoint=t.xmlDecodeTree=t.htmlDecodeTree=void 0;var d=a(e(3704));t.htmlDecodeTree=d.default;var m=a(e(2060));t.xmlDecodeTree=m.default;var s=A(e(26));t.decodeCodePoint=s.default;var i,o,n,h,g=e(26);function f(p){return p>=i.ZERO&&p<=i.NINE}Object.defineProperty(t,"replaceCodePoint",{enumerable:!0,get:function(){return g.replaceCodePoint}}),Object.defineProperty(t,"fromCodePoint",{enumerable:!0,get:function(){return g.fromCodePoint}}),function(p){p[p.NUM=35]="NUM",p[p.SEMI=59]="SEMI",p[p.EQUALS=61]="EQUALS",p[p.ZERO=48]="ZERO",p[p.NINE=57]="NINE",p[p.LOWER_A=97]="LOWER_A",p[p.LOWER_F=102]="LOWER_F",p[p.LOWER_X=120]="LOWER_X",p[p.LOWER_Z=122]="LOWER_Z",p[p.UPPER_A=65]="UPPER_A",p[p.UPPER_F=70]="UPPER_F",p[p.UPPER_Z=90]="UPPER_Z"}(i||(i={})),function(p){p[p.VALUE_LENGTH=49152]="VALUE_LENGTH",p[p.BRANCH_LENGTH=16256]="BRANCH_LENGTH",p[p.JUMP_TABLE=127]="JUMP_TABLE"}(o=t.BinTrieFlags||(t.BinTrieFlags={})),function(p){p[p.EntityStart=0]="EntityStart",p[p.NumericStart=1]="NumericStart",p[p.NumericDecimal=2]="NumericDecimal",p[p.NumericHex=3]="NumericHex",p[p.NamedEntity=4]="NamedEntity"}(n||(n={})),function(p){p[p.Legacy=0]="Legacy",p[p.Strict=1]="Strict",p[p.Attribute=2]="Attribute"}(h=t.DecodingMode||(t.DecodingMode={}));var C=function(){function p(b,x,I){this.decodeTree=b,this.emitCodePoint=x,this.errors=I,this.state=n.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=h.Strict}return p.prototype.startEntity=function(b){this.decodeMode=b,this.state=n.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1},p.prototype.write=function(b,x){switch(this.state){case n.EntityStart:return b.charCodeAt(x)===i.NUM?(this.state=n.NumericStart,this.consumed+=1,this.stateNumericStart(b,x+1)):(this.state=n.NamedEntity,this.stateNamedEntity(b,x));case n.NumericStart:return this.stateNumericStart(b,x);case n.NumericDecimal:return this.stateNumericDecimal(b,x);case n.NumericHex:return this.stateNumericHex(b,x);case n.NamedEntity:return this.stateNamedEntity(b,x)}},p.prototype.stateNumericStart=function(b,x){return x>=b.length?-1:(32|b.charCodeAt(x))===i.LOWER_X?(this.state=n.NumericHex,this.consumed+=1,this.stateNumericHex(b,x+1)):(this.state=n.NumericDecimal,this.stateNumericDecimal(b,x))},p.prototype.addToNumericResult=function(b,x,I,M){if(x!==I){var T=I-x;this.result=this.result*Math.pow(M,T)+parseInt(b.substr(x,T),M),this.consumed+=T}},p.prototype.stateNumericHex=function(b,x){for(var I,M=x;x<b.length;){var T=b.charCodeAt(x);if(!(f(T)||(I=T,I>=i.UPPER_A&&I<=i.UPPER_F||I>=i.LOWER_A&&I<=i.LOWER_F)))return this.addToNumericResult(b,M,x,16),this.emitNumericEntity(T,3);x+=1}return this.addToNumericResult(b,M,x,16),-1},p.prototype.stateNumericDecimal=function(b,x){for(var I=x;x<b.length;){var M=b.charCodeAt(x);if(!f(M))return this.addToNumericResult(b,I,x,10),this.emitNumericEntity(M,2);x+=1}return this.addToNumericResult(b,I,x,10),-1},p.prototype.emitNumericEntity=function(b,x){var I;if(this.consumed<=x)return(I=this.errors)===null||I===void 0||I.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(b===i.SEMI)this.consumed+=1;else if(this.decodeMode===h.Strict)return 0;return this.emitCodePoint((0,s.replaceCodePoint)(this.result),this.consumed),this.errors&&(b!==i.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed},p.prototype.stateNamedEntity=function(b,x){for(var I=this.decodeTree,M=I[this.treeIndex],T=(M&o.VALUE_LENGTH)>>14;x<b.length;x++,this.excess++){var z=b.charCodeAt(x);if(this.treeIndex=u(I,M,this.treeIndex+Math.max(1,T),z),this.treeIndex<0)return this.result===0||this.decodeMode===h.Attribute&&(T===0||(O=z)===i.EQUALS||function(P){return P>=i.UPPER_A&&P<=i.UPPER_Z||P>=i.LOWER_A&&P<=i.LOWER_Z||f(P)}(O))?0:this.emitNotTerminatedNamedEntity();if((T=((M=I[this.treeIndex])&o.VALUE_LENGTH)>>14)!=0){if(z===i.SEMI)return this.emitNamedEntityData(this.treeIndex,T,this.consumed+this.excess);this.decodeMode!==h.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}var O;return-1},p.prototype.emitNotTerminatedNamedEntity=function(){var b,x=this.result,I=(this.decodeTree[x]&o.VALUE_LENGTH)>>14;return this.emitNamedEntityData(x,I,this.consumed),(b=this.errors)===null||b===void 0||b.missingSemicolonAfterCharacterReference(),this.consumed},p.prototype.emitNamedEntityData=function(b,x,I){var M=this.decodeTree;return this.emitCodePoint(x===1?M[b]&~o.VALUE_LENGTH:M[b+1],I),x===3&&this.emitCodePoint(M[b+2],I),I},p.prototype.end=function(){var b;switch(this.state){case n.NamedEntity:return this.result===0||this.decodeMode===h.Attribute&&this.result!==this.treeIndex?0:this.emitNotTerminatedNamedEntity();case n.NumericDecimal:return this.emitNumericEntity(0,2);case n.NumericHex:return this.emitNumericEntity(0,3);case n.NumericStart:return(b=this.errors)===null||b===void 0||b.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case n.EntityStart:return 0}},p}();function w(p){var b="",x=new C(p,function(I){return b+=(0,s.fromCodePoint)(I)});return function(I,M){for(var T=0,z=0;(z=I.indexOf("&",z))>=0;){b+=I.slice(T,z),x.startEntity(M);var O=x.write(I,z+1);if(O<0){T=z+x.end();break}T=z+O,z=O===0?T+1:T}var P=b+I.slice(T);return b="",P}}function u(p,b,x,I){var M=(b&o.BRANCH_LENGTH)>>7,T=b&o.JUMP_TABLE;if(M===0)return T!==0&&I===T?x:-1;if(T){var z=I-T;return z<0||z>=M?-1:p[x+z]-1}for(var O=x,P=O+M-1;O<=P;){var L=O+P>>>1,D=p[L];if(D<I)O=L+1;else{if(!(D>I))return p[L+M];P=L-1}}return-1}t.EntityDecoder=C,t.determineBranch=u;var y=w(d.default),r=w(m.default);t.decodeHTML=function(p,b){return b===void 0&&(b=h.Legacy),y(p,b)},t.decodeHTMLAttribute=function(p){return y(p,h.Attribute)},t.decodeHTMLStrict=function(p){return y(p,h.Strict)},t.decodeXML=function(p){return r(p,h.Strict)}},26:(v,t)=>{"use strict";var e;Object.defineProperty(t,"__esModule",{value:!0}),t.replaceCodePoint=t.fromCodePoint=void 0;var l=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]);function c(A){var a;return A>=55296&&A<=57343||A>1114111?65533:(a=l.get(A))!==null&&a!==void 0?a:A}t.fromCodePoint=(e=String.fromCodePoint)!==null&&e!==void 0?e:function(A){var a="";return A>65535&&(A-=65536,a+=String.fromCharCode(A>>>10&1023|55296),A=56320|1023&A),a+String.fromCharCode(A)},t.replaceCodePoint=c,t.default=function(A){return(0,t.fromCodePoint)(c(A))}},7322:function(v,t,e){"use strict";var l=this&&this.__importDefault||function(m){return m&&m.__esModule?m:{default:m}};Object.defineProperty(t,"__esModule",{value:!0}),t.encodeNonAsciiHTML=t.encodeHTML=void 0;var c=l(e(4021)),A=e(4625),a=/[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;function d(m,s){for(var i,o="",n=0;(i=m.exec(s))!==null;){var h=i.index;o+=s.substring(n,h);var g=s.charCodeAt(h),f=c.default.get(g);if(typeof f=="object"){if(h+1<s.length){var C=s.charCodeAt(h+1),w=typeof f.n=="number"?f.n===C?f.o:void 0:f.n.get(C);if(w!==void 0){o+=w,n=m.lastIndex+=1;continue}}f=f.v}if(f!==void 0)o+=f,n=h+1;else{var u=(0,A.getCodePoint)(s,h);o+="&#x".concat(u.toString(16),";"),n=m.lastIndex+=Number(u!==g)}}return o+s.substr(n)}t.encodeHTML=function(m){return d(a,m)},t.encodeNonAsciiHTML=function(m){return d(A.xmlReplacer,m)}},4625:(v,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.escapeText=t.escapeAttribute=t.escapeUTF8=t.escape=t.encodeXML=t.getCodePoint=t.xmlReplacer=void 0,t.xmlReplacer=/["&'<>$\x80-\uFFFF]/g;var e=new Map([[34,"&quot;"],[38,"&amp;"],[39,"&apos;"],[60,"&lt;"],[62,"&gt;"]]);function l(A){for(var a,d="",m=0;(a=t.xmlReplacer.exec(A))!==null;){var s=a.index,i=A.charCodeAt(s),o=e.get(i);o!==void 0?(d+=A.substring(m,s)+o,m=s+1):(d+="".concat(A.substring(m,s),"&#x").concat((0,t.getCodePoint)(A,s).toString(16),";"),m=t.xmlReplacer.lastIndex+=Number((64512&i)==55296))}return d+A.substr(m)}function c(A,a){return function(d){for(var m,s=0,i="";m=A.exec(d);)s!==m.index&&(i+=d.substring(s,m.index)),i+=a.get(m[0].charCodeAt(0)),s=m.index+1;return i+d.substring(s)}}t.getCodePoint=String.prototype.codePointAt!=null?function(A,a){return A.codePointAt(a)}:function(A,a){return(64512&A.charCodeAt(a))==55296?1024*(A.charCodeAt(a)-55296)+A.charCodeAt(a+1)-56320+65536:A.charCodeAt(a)},t.encodeXML=l,t.escape=l,t.escapeUTF8=c(/[&<>'"]/g,e),t.escapeAttribute=c(/["&\u00A0]/g,new Map([[34,"&quot;"],[38,"&amp;"],[160,"&nbsp;"]])),t.escapeText=c(/[&<>\u00A0]/g,new Map([[38,"&amp;"],[60,"&lt;"],[62,"&gt;"],[160,"&nbsp;"]]))},3704:(v,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=new Uint16Array('\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map(function(e){return e.charCodeAt(0)}))},2060:(v,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=new Uint16Array("\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map(function(e){return e.charCodeAt(0)}))},4021:(v,t)=>{"use strict";function e(l){for(var c=1;c<l.length;c++)l[c][0]+=l[c-1][0]+1;return l}Object.defineProperty(t,"__esModule",{value:!0}),t.default=new Map(e([[9,"&Tab;"],[0,"&NewLine;"],[22,"&excl;"],[0,"&quot;"],[0,"&num;"],[0,"&dollar;"],[0,"&percnt;"],[0,"&amp;"],[0,"&apos;"],[0,"&lpar;"],[0,"&rpar;"],[0,"&ast;"],[0,"&plus;"],[0,"&comma;"],[1,"&period;"],[0,"&sol;"],[10,"&colon;"],[0,"&semi;"],[0,{v:"&lt;",n:8402,o:"&nvlt;"}],[0,{v:"&equals;",n:8421,o:"&bne;"}],[0,{v:"&gt;",n:8402,o:"&nvgt;"}],[0,"&quest;"],[0,"&commat;"],[26,"&lbrack;"],[0,"&bsol;"],[0,"&rbrack;"],[0,"&Hat;"],[0,"&lowbar;"],[0,"&DiacriticalGrave;"],[5,{n:106,o:"&fjlig;"}],[20,"&lbrace;"],[0,"&verbar;"],[0,"&rbrace;"],[34,"&nbsp;"],[0,"&iexcl;"],[0,"&cent;"],[0,"&pound;"],[0,"&curren;"],[0,"&yen;"],[0,"&brvbar;"],[0,"&sect;"],[0,"&die;"],[0,"&copy;"],[0,"&ordf;"],[0,"&laquo;"],[0,"&not;"],[0,"&shy;"],[0,"&circledR;"],[0,"&macr;"],[0,"&deg;"],[0,"&PlusMinus;"],[0,"&sup2;"],[0,"&sup3;"],[0,"&acute;"],[0,"&micro;"],[0,"&para;"],[0,"&centerdot;"],[0,"&cedil;"],[0,"&sup1;"],[0,"&ordm;"],[0,"&raquo;"],[0,"&frac14;"],[0,"&frac12;"],[0,"&frac34;"],[0,"&iquest;"],[0,"&Agrave;"],[0,"&Aacute;"],[0,"&Acirc;"],[0,"&Atilde;"],[0,"&Auml;"],[0,"&angst;"],[0,"&AElig;"],[0,"&Ccedil;"],[0,"&Egrave;"],[0,"&Eacute;"],[0,"&Ecirc;"],[0,"&Euml;"],[0,"&Igrave;"],[0,"&Iacute;"],[0,"&Icirc;"],[0,"&Iuml;"],[0,"&ETH;"],[0,"&Ntilde;"],[0,"&Ograve;"],[0,"&Oacute;"],[0,"&Ocirc;"],[0,"&Otilde;"],[0,"&Ouml;"],[0,"&times;"],[0,"&Oslash;"],[0,"&Ugrave;"],[0,"&Uacute;"],[0,"&Ucirc;"],[0,"&Uuml;"],[0,"&Yacute;"],[0,"&THORN;"],[0,"&szlig;"],[0,"&agrave;"],[0,"&aacute;"],[0,"&acirc;"],[0,"&atilde;"],[0,"&auml;"],[0,"&aring;"],[0,"&aelig;"],[0,"&ccedil;"],[0,"&egrave;"],[0,"&eacute;"],[0,"&ecirc;"],[0,"&euml;"],[0,"&igrave;"],[0,"&iacute;"],[0,"&icirc;"],[0,"&iuml;"],[0,"&eth;"],[0,"&ntilde;"],[0,"&ograve;"],[0,"&oacute;"],[0,"&ocirc;"],[0,"&otilde;"],[0,"&ouml;"],[0,"&div;"],[0,"&oslash;"],[0,"&ugrave;"],[0,"&uacute;"],[0,"&ucirc;"],[0,"&uuml;"],[0,"&yacute;"],[0,"&thorn;"],[0,"&yuml;"],[0,"&Amacr;"],[0,"&amacr;"],[0,"&Abreve;"],[0,"&abreve;"],[0,"&Aogon;"],[0,"&aogon;"],[0,"&Cacute;"],[0,"&cacute;"],[0,"&Ccirc;"],[0,"&ccirc;"],[0,"&Cdot;"],[0,"&cdot;"],[0,"&Ccaron;"],[0,"&ccaron;"],[0,"&Dcaron;"],[0,"&dcaron;"],[0,"&Dstrok;"],[0,"&dstrok;"],[0,"&Emacr;"],[0,"&emacr;"],[2,"&Edot;"],[0,"&edot;"],[0,"&Eogon;"],[0,"&eogon;"],[0,"&Ecaron;"],[0,"&ecaron;"],[0,"&Gcirc;"],[0,"&gcirc;"],[0,"&Gbreve;"],[0,"&gbreve;"],[0,"&Gdot;"],[0,"&gdot;"],[0,"&Gcedil;"],[1,"&Hcirc;"],[0,"&hcirc;"],[0,"&Hstrok;"],[0,"&hstrok;"],[0,"&Itilde;"],[0,"&itilde;"],[0,"&Imacr;"],[0,"&imacr;"],[2,"&Iogon;"],[0,"&iogon;"],[0,"&Idot;"],[0,"&imath;"],[0,"&IJlig;"],[0,"&ijlig;"],[0,"&Jcirc;"],[0,"&jcirc;"],[0,"&Kcedil;"],[0,"&kcedil;"],[0,"&kgreen;"],[0,"&Lacute;"],[0,"&lacute;"],[0,"&Lcedil;"],[0,"&lcedil;"],[0,"&Lcaron;"],[0,"&lcaron;"],[0,"&Lmidot;"],[0,"&lmidot;"],[0,"&Lstrok;"],[0,"&lstrok;"],[0,"&Nacute;"],[0,"&nacute;"],[0,"&Ncedil;"],[0,"&ncedil;"],[0,"&Ncaron;"],[0,"&ncaron;"],[0,"&napos;"],[0,"&ENG;"],[0,"&eng;"],[0,"&Omacr;"],[0,"&omacr;"],[2,"&Odblac;"],[0,"&odblac;"],[0,"&OElig;"],[0,"&oelig;"],[0,"&Racute;"],[0,"&racute;"],[0,"&Rcedil;"],[0,"&rcedil;"],[0,"&Rcaron;"],[0,"&rcaron;"],[0,"&Sacute;"],[0,"&sacute;"],[0,"&Scirc;"],[0,"&scirc;"],[0,"&Scedil;"],[0,"&scedil;"],[0,"&Scaron;"],[0,"&scaron;"],[0,"&Tcedil;"],[0,"&tcedil;"],[0,"&Tcaron;"],[0,"&tcaron;"],[0,"&Tstrok;"],[0,"&tstrok;"],[0,"&Utilde;"],[0,"&utilde;"],[0,"&Umacr;"],[0,"&umacr;"],[0,"&Ubreve;"],[0,"&ubreve;"],[0,"&Uring;"],[0,"&uring;"],[0,"&Udblac;"],[0,"&udblac;"],[0,"&Uogon;"],[0,"&uogon;"],[0,"&Wcirc;"],[0,"&wcirc;"],[0,"&Ycirc;"],[0,"&ycirc;"],[0,"&Yuml;"],[0,"&Zacute;"],[0,"&zacute;"],[0,"&Zdot;"],[0,"&zdot;"],[0,"&Zcaron;"],[0,"&zcaron;"],[19,"&fnof;"],[34,"&imped;"],[63,"&gacute;"],[65,"&jmath;"],[142,"&circ;"],[0,"&caron;"],[16,"&breve;"],[0,"&DiacriticalDot;"],[0,"&ring;"],[0,"&ogon;"],[0,"&DiacriticalTilde;"],[0,"&dblac;"],[51,"&DownBreve;"],[127,"&Alpha;"],[0,"&Beta;"],[0,"&Gamma;"],[0,"&Delta;"],[0,"&Epsilon;"],[0,"&Zeta;"],[0,"&Eta;"],[0,"&Theta;"],[0,"&Iota;"],[0,"&Kappa;"],[0,"&Lambda;"],[0,"&Mu;"],[0,"&Nu;"],[0,"&Xi;"],[0,"&Omicron;"],[0,"&Pi;"],[0,"&Rho;"],[1,"&Sigma;"],[0,"&Tau;"],[0,"&Upsilon;"],[0,"&Phi;"],[0,"&Chi;"],[0,"&Psi;"],[0,"&ohm;"],[7,"&alpha;"],[0,"&beta;"],[0,"&gamma;"],[0,"&delta;"],[0,"&epsi;"],[0,"&zeta;"],[0,"&eta;"],[0,"&theta;"],[0,"&iota;"],[0,"&kappa;"],[0,"&lambda;"],[0,"&mu;"],[0,"&nu;"],[0,"&xi;"],[0,"&omicron;"],[0,"&pi;"],[0,"&rho;"],[0,"&sigmaf;"],[0,"&sigma;"],[0,"&tau;"],[0,"&upsi;"],[0,"&phi;"],[0,"&chi;"],[0,"&psi;"],[0,"&omega;"],[7,"&thetasym;"],[0,"&Upsi;"],[2,"&phiv;"],[0,"&piv;"],[5,"&Gammad;"],[0,"&digamma;"],[18,"&kappav;"],[0,"&rhov;"],[3,"&epsiv;"],[0,"&backepsilon;"],[10,"&IOcy;"],[0,"&DJcy;"],[0,"&GJcy;"],[0,"&Jukcy;"],[0,"&DScy;"],[0,"&Iukcy;"],[0,"&YIcy;"],[0,"&Jsercy;"],[0,"&LJcy;"],[0,"&NJcy;"],[0,"&TSHcy;"],[0,"&KJcy;"],[1,"&Ubrcy;"],[0,"&DZcy;"],[0,"&Acy;"],[0,"&Bcy;"],[0,"&Vcy;"],[0,"&Gcy;"],[0,"&Dcy;"],[0,"&IEcy;"],[0,"&ZHcy;"],[0,"&Zcy;"],[0,"&Icy;"],[0,"&Jcy;"],[0,"&Kcy;"],[0,"&Lcy;"],[0,"&Mcy;"],[0,"&Ncy;"],[0,"&Ocy;"],[0,"&Pcy;"],[0,"&Rcy;"],[0,"&Scy;"],[0,"&Tcy;"],[0,"&Ucy;"],[0,"&Fcy;"],[0,"&KHcy;"],[0,"&TScy;"],[0,"&CHcy;"],[0,"&SHcy;"],[0,"&SHCHcy;"],[0,"&HARDcy;"],[0,"&Ycy;"],[0,"&SOFTcy;"],[0,"&Ecy;"],[0,"&YUcy;"],[0,"&YAcy;"],[0,"&acy;"],[0,"&bcy;"],[0,"&vcy;"],[0,"&gcy;"],[0,"&dcy;"],[0,"&iecy;"],[0,"&zhcy;"],[0,"&zcy;"],[0,"&icy;"],[0,"&jcy;"],[0,"&kcy;"],[0,"&lcy;"],[0,"&mcy;"],[0,"&ncy;"],[0,"&ocy;"],[0,"&pcy;"],[0,"&rcy;"],[0,"&scy;"],[0,"&tcy;"],[0,"&ucy;"],[0,"&fcy;"],[0,"&khcy;"],[0,"&tscy;"],[0,"&chcy;"],[0,"&shcy;"],[0,"&shchcy;"],[0,"&hardcy;"],[0,"&ycy;"],[0,"&softcy;"],[0,"&ecy;"],[0,"&yucy;"],[0,"&yacy;"],[1,"&iocy;"],[0,"&djcy;"],[0,"&gjcy;"],[0,"&jukcy;"],[0,"&dscy;"],[0,"&iukcy;"],[0,"&yicy;"],[0,"&jsercy;"],[0,"&ljcy;"],[0,"&njcy;"],[0,"&tshcy;"],[0,"&kjcy;"],[1,"&ubrcy;"],[0,"&dzcy;"],[7074,"&ensp;"],[0,"&emsp;"],[0,"&emsp13;"],[0,"&emsp14;"],[1,"&numsp;"],[0,"&puncsp;"],[0,"&ThinSpace;"],[0,"&hairsp;"],[0,"&NegativeMediumSpace;"],[0,"&zwnj;"],[0,"&zwj;"],[0,"&lrm;"],[0,"&rlm;"],[0,"&dash;"],[2,"&ndash;"],[0,"&mdash;"],[0,"&horbar;"],[0,"&Verbar;"],[1,"&lsquo;"],[0,"&CloseCurlyQuote;"],[0,"&lsquor;"],[1,"&ldquo;"],[0,"&CloseCurlyDoubleQuote;"],[0,"&bdquo;"],[1,"&dagger;"],[0,"&Dagger;"],[0,"&bull;"],[2,"&nldr;"],[0,"&hellip;"],[9,"&permil;"],[0,"&pertenk;"],[0,"&prime;"],[0,"&Prime;"],[0,"&tprime;"],[0,"&backprime;"],[3,"&lsaquo;"],[0,"&rsaquo;"],[3,"&oline;"],[2,"&caret;"],[1,"&hybull;"],[0,"&frasl;"],[10,"&bsemi;"],[7,"&qprime;"],[7,{v:"&MediumSpace;",n:8202,o:"&ThickSpace;"}],[0,"&NoBreak;"],[0,"&af;"],[0,"&InvisibleTimes;"],[0,"&ic;"],[72,"&euro;"],[46,"&tdot;"],[0,"&DotDot;"],[37,"&complexes;"],[2,"&incare;"],[4,"&gscr;"],[0,"&hamilt;"],[0,"&Hfr;"],[0,"&Hopf;"],[0,"&planckh;"],[0,"&hbar;"],[0,"&imagline;"],[0,"&Ifr;"],[0,"&lagran;"],[0,"&ell;"],[1,"&naturals;"],[0,"&numero;"],[0,"&copysr;"],[0,"&weierp;"],[0,"&Popf;"],[0,"&Qopf;"],[0,"&realine;"],[0,"&real;"],[0,"&reals;"],[0,"&rx;"],[3,"&trade;"],[1,"&integers;"],[2,"&mho;"],[0,"&zeetrf;"],[0,"&iiota;"],[2,"&bernou;"],[0,"&Cayleys;"],[1,"&escr;"],[0,"&Escr;"],[0,"&Fouriertrf;"],[1,"&Mellintrf;"],[0,"&order;"],[0,"&alefsym;"],[0,"&beth;"],[0,"&gimel;"],[0,"&daleth;"],[12,"&CapitalDifferentialD;"],[0,"&dd;"],[0,"&ee;"],[0,"&ii;"],[10,"&frac13;"],[0,"&frac23;"],[0,"&frac15;"],[0,"&frac25;"],[0,"&frac35;"],[0,"&frac45;"],[0,"&frac16;"],[0,"&frac56;"],[0,"&frac18;"],[0,"&frac38;"],[0,"&frac58;"],[0,"&frac78;"],[49,"&larr;"],[0,"&ShortUpArrow;"],[0,"&rarr;"],[0,"&darr;"],[0,"&harr;"],[0,"&updownarrow;"],[0,"&nwarr;"],[0,"&nearr;"],[0,"&LowerRightArrow;"],[0,"&LowerLeftArrow;"],[0,"&nlarr;"],[0,"&nrarr;"],[1,{v:"&rarrw;",n:824,o:"&nrarrw;"}],[0,"&Larr;"],[0,"&Uarr;"],[0,"&Rarr;"],[0,"&Darr;"],[0,"&larrtl;"],[0,"&rarrtl;"],[0,"&LeftTeeArrow;"],[0,"&mapstoup;"],[0,"&map;"],[0,"&DownTeeArrow;"],[1,"&hookleftarrow;"],[0,"&hookrightarrow;"],[0,"&larrlp;"],[0,"&looparrowright;"],[0,"&harrw;"],[0,"&nharr;"],[1,"&lsh;"],[0,"&rsh;"],[0,"&ldsh;"],[0,"&rdsh;"],[1,"&crarr;"],[0,"&cularr;"],[0,"&curarr;"],[2,"&circlearrowleft;"],[0,"&circlearrowright;"],[0,"&leftharpoonup;"],[0,"&DownLeftVector;"],[0,"&RightUpVector;"],[0,"&LeftUpVector;"],[0,"&rharu;"],[0,"&DownRightVector;"],[0,"&dharr;"],[0,"&dharl;"],[0,"&RightArrowLeftArrow;"],[0,"&udarr;"],[0,"&LeftArrowRightArrow;"],[0,"&leftleftarrows;"],[0,"&upuparrows;"],[0,"&rightrightarrows;"],[0,"&ddarr;"],[0,"&leftrightharpoons;"],[0,"&Equilibrium;"],[0,"&nlArr;"],[0,"&nhArr;"],[0,"&nrArr;"],[0,"&DoubleLeftArrow;"],[0,"&DoubleUpArrow;"],[0,"&DoubleRightArrow;"],[0,"&dArr;"],[0,"&DoubleLeftRightArrow;"],[0,"&DoubleUpDownArrow;"],[0,"&nwArr;"],[0,"&neArr;"],[0,"&seArr;"],[0,"&swArr;"],[0,"&lAarr;"],[0,"&rAarr;"],[1,"&zigrarr;"],[6,"&larrb;"],[0,"&rarrb;"],[15,"&DownArrowUpArrow;"],[7,"&loarr;"],[0,"&roarr;"],[0,"&hoarr;"],[0,"&forall;"],[0,"&comp;"],[0,{v:"&part;",n:824,o:"&npart;"}],[0,"&exist;"],[0,"&nexist;"],[0,"&empty;"],[1,"&Del;"],[0,"&Element;"],[0,"&NotElement;"],[1,"&ni;"],[0,"&notni;"],[2,"&prod;"],[0,"&coprod;"],[0,"&sum;"],[0,"&minus;"],[0,"&MinusPlus;"],[0,"&dotplus;"],[1,"&Backslash;"],[0,"&lowast;"],[0,"&compfn;"],[1,"&radic;"],[2,"&prop;"],[0,"&infin;"],[0,"&angrt;"],[0,{v:"&ang;",n:8402,o:"&nang;"}],[0,"&angmsd;"],[0,"&angsph;"],[0,"&mid;"],[0,"&nmid;"],[0,"&DoubleVerticalBar;"],[0,"&NotDoubleVerticalBar;"],[0,"&and;"],[0,"&or;"],[0,{v:"&cap;",n:65024,o:"&caps;"}],[0,{v:"&cup;",n:65024,o:"&cups;"}],[0,"&int;"],[0,"&Int;"],[0,"&iiint;"],[0,"&conint;"],[0,"&Conint;"],[0,"&Cconint;"],[0,"&cwint;"],[0,"&ClockwiseContourIntegral;"],[0,"&awconint;"],[0,"&there4;"],[0,"&becaus;"],[0,"&ratio;"],[0,"&Colon;"],[0,"&dotminus;"],[1,"&mDDot;"],[0,"&homtht;"],[0,{v:"&sim;",n:8402,o:"&nvsim;"}],[0,{v:"&backsim;",n:817,o:"&race;"}],[0,{v:"&ac;",n:819,o:"&acE;"}],[0,"&acd;"],[0,"&VerticalTilde;"],[0,"&NotTilde;"],[0,{v:"&eqsim;",n:824,o:"&nesim;"}],[0,"&sime;"],[0,"&NotTildeEqual;"],[0,"&cong;"],[0,"&simne;"],[0,"&ncong;"],[0,"&ap;"],[0,"&nap;"],[0,"&ape;"],[0,{v:"&apid;",n:824,o:"&napid;"}],[0,"&backcong;"],[0,{v:"&asympeq;",n:8402,o:"&nvap;"}],[0,{v:"&bump;",n:824,o:"&nbump;"}],[0,{v:"&bumpe;",n:824,o:"&nbumpe;"}],[0,{v:"&doteq;",n:824,o:"&nedot;"}],[0,"&doteqdot;"],[0,"&efDot;"],[0,"&erDot;"],[0,"&Assign;"],[0,"&ecolon;"],[0,"&ecir;"],[0,"&circeq;"],[1,"&wedgeq;"],[0,"&veeeq;"],[1,"&triangleq;"],[2,"&equest;"],[0,"&ne;"],[0,{v:"&Congruent;",n:8421,o:"&bnequiv;"}],[0,"&nequiv;"],[1,{v:"&le;",n:8402,o:"&nvle;"}],[0,{v:"&ge;",n:8402,o:"&nvge;"}],[0,{v:"&lE;",n:824,o:"&nlE;"}],[0,{v:"&gE;",n:824,o:"&ngE;"}],[0,{v:"&lnE;",n:65024,o:"&lvertneqq;"}],[0,{v:"&gnE;",n:65024,o:"&gvertneqq;"}],[0,{v:"&ll;",n:new Map(e([[824,"&nLtv;"],[7577,"&nLt;"]]))}],[0,{v:"&gg;",n:new Map(e([[824,"&nGtv;"],[7577,"&nGt;"]]))}],[0,"&between;"],[0,"&NotCupCap;"],[0,"&nless;"],[0,"&ngt;"],[0,"&nle;"],[0,"&nge;"],[0,"&lesssim;"],[0,"&GreaterTilde;"],[0,"&nlsim;"],[0,"&ngsim;"],[0,"&LessGreater;"],[0,"&gl;"],[0,"&NotLessGreater;"],[0,"&NotGreaterLess;"],[0,"&pr;"],[0,"&sc;"],[0,"&prcue;"],[0,"&sccue;"],[0,"&PrecedesTilde;"],[0,{v:"&scsim;",n:824,o:"&NotSucceedsTilde;"}],[0,"&NotPrecedes;"],[0,"&NotSucceeds;"],[0,{v:"&sub;",n:8402,o:"&NotSubset;"}],[0,{v:"&sup;",n:8402,o:"&NotSuperset;"}],[0,"&nsub;"],[0,"&nsup;"],[0,"&sube;"],[0,"&supe;"],[0,"&NotSubsetEqual;"],[0,"&NotSupersetEqual;"],[0,{v:"&subne;",n:65024,o:"&varsubsetneq;"}],[0,{v:"&supne;",n:65024,o:"&varsupsetneq;"}],[1,"&cupdot;"],[0,"&UnionPlus;"],[0,{v:"&sqsub;",n:824,o:"&NotSquareSubset;"}],[0,{v:"&sqsup;",n:824,o:"&NotSquareSuperset;"}],[0,"&sqsube;"],[0,"&sqsupe;"],[0,{v:"&sqcap;",n:65024,o:"&sqcaps;"}],[0,{v:"&sqcup;",n:65024,o:"&sqcups;"}],[0,"&CirclePlus;"],[0,"&CircleMinus;"],[0,"&CircleTimes;"],[0,"&osol;"],[0,"&CircleDot;"],[0,"&circledcirc;"],[0,"&circledast;"],[1,"&circleddash;"],[0,"&boxplus;"],[0,"&boxminus;"],[0,"&boxtimes;"],[0,"&dotsquare;"],[0,"&RightTee;"],[0,"&dashv;"],[0,"&DownTee;"],[0,"&bot;"],[1,"&models;"],[0,"&DoubleRightTee;"],[0,"&Vdash;"],[0,"&Vvdash;"],[0,"&VDash;"],[0,"&nvdash;"],[0,"&nvDash;"],[0,"&nVdash;"],[0,"&nVDash;"],[0,"&prurel;"],[1,"&LeftTriangle;"],[0,"&RightTriangle;"],[0,{v:"&LeftTriangleEqual;",n:8402,o:"&nvltrie;"}],[0,{v:"&RightTriangleEqual;",n:8402,o:"&nvrtrie;"}],[0,"&origof;"],[0,"&imof;"],[0,"&multimap;"],[0,"&hercon;"],[0,"&intcal;"],[0,"&veebar;"],[1,"&barvee;"],[0,"&angrtvb;"],[0,"&lrtri;"],[0,"&bigwedge;"],[0,"&bigvee;"],[0,"&bigcap;"],[0,"&bigcup;"],[0,"&diam;"],[0,"&sdot;"],[0,"&sstarf;"],[0,"&divideontimes;"],[0,"&bowtie;"],[0,"&ltimes;"],[0,"&rtimes;"],[0,"&leftthreetimes;"],[0,"&rightthreetimes;"],[0,"&backsimeq;"],[0,"&curlyvee;"],[0,"&curlywedge;"],[0,"&Sub;"],[0,"&Sup;"],[0,"&Cap;"],[0,"&Cup;"],[0,"&fork;"],[0,"&epar;"],[0,"&lessdot;"],[0,"&gtdot;"],[0,{v:"&Ll;",n:824,o:"&nLl;"}],[0,{v:"&Gg;",n:824,o:"&nGg;"}],[0,{v:"&leg;",n:65024,o:"&lesg;"}],[0,{v:"&gel;",n:65024,o:"&gesl;"}],[2,"&cuepr;"],[0,"&cuesc;"],[0,"&NotPrecedesSlantEqual;"],[0,"&NotSucceedsSlantEqual;"],[0,"&NotSquareSubsetEqual;"],[0,"&NotSquareSupersetEqual;"],[2,"&lnsim;"],[0,"&gnsim;"],[0,"&precnsim;"],[0,"&scnsim;"],[0,"&nltri;"],[0,"&NotRightTriangle;"],[0,"&nltrie;"],[0,"&NotRightTriangleEqual;"],[0,"&vellip;"],[0,"&ctdot;"],[0,"&utdot;"],[0,"&dtdot;"],[0,"&disin;"],[0,"&isinsv;"],[0,"&isins;"],[0,{v:"&isindot;",n:824,o:"&notindot;"}],[0,"&notinvc;"],[0,"&notinvb;"],[1,{v:"&isinE;",n:824,o:"&notinE;"}],[0,"&nisd;"],[0,"&xnis;"],[0,"&nis;"],[0,"&notnivc;"],[0,"&notnivb;"],[6,"&barwed;"],[0,"&Barwed;"],[1,"&lceil;"],[0,"&rceil;"],[0,"&LeftFloor;"],[0,"&rfloor;"],[0,"&drcrop;"],[0,"&dlcrop;"],[0,"&urcrop;"],[0,"&ulcrop;"],[0,"&bnot;"],[1,"&profline;"],[0,"&profsurf;"],[1,"&telrec;"],[0,"&target;"],[5,"&ulcorn;"],[0,"&urcorn;"],[0,"&dlcorn;"],[0,"&drcorn;"],[2,"&frown;"],[0,"&smile;"],[9,"&cylcty;"],[0,"&profalar;"],[7,"&topbot;"],[6,"&ovbar;"],[1,"&solbar;"],[60,"&angzarr;"],[51,"&lmoustache;"],[0,"&rmoustache;"],[2,"&OverBracket;"],[0,"&bbrk;"],[0,"&bbrktbrk;"],[37,"&OverParenthesis;"],[0,"&UnderParenthesis;"],[0,"&OverBrace;"],[0,"&UnderBrace;"],[2,"&trpezium;"],[4,"&elinters;"],[59,"&blank;"],[164,"&circledS;"],[55,"&boxh;"],[1,"&boxv;"],[9,"&boxdr;"],[3,"&boxdl;"],[3,"&boxur;"],[3,"&boxul;"],[3,"&boxvr;"],[7,"&boxvl;"],[7,"&boxhd;"],[7,"&boxhu;"],[7,"&boxvh;"],[19,"&boxH;"],[0,"&boxV;"],[0,"&boxdR;"],[0,"&boxDr;"],[0,"&boxDR;"],[0,"&boxdL;"],[0,"&boxDl;"],[0,"&boxDL;"],[0,"&boxuR;"],[0,"&boxUr;"],[0,"&boxUR;"],[0,"&boxuL;"],[0,"&boxUl;"],[0,"&boxUL;"],[0,"&boxvR;"],[0,"&boxVr;"],[0,"&boxVR;"],[0,"&boxvL;"],[0,"&boxVl;"],[0,"&boxVL;"],[0,"&boxHd;"],[0,"&boxhD;"],[0,"&boxHD;"],[0,"&boxHu;"],[0,"&boxhU;"],[0,"&boxHU;"],[0,"&boxvH;"],[0,"&boxVh;"],[0,"&boxVH;"],[19,"&uhblk;"],[3,"&lhblk;"],[3,"&block;"],[8,"&blk14;"],[0,"&blk12;"],[0,"&blk34;"],[13,"&square;"],[8,"&blacksquare;"],[0,"&EmptyVerySmallSquare;"],[1,"&rect;"],[0,"&marker;"],[2,"&fltns;"],[1,"&bigtriangleup;"],[0,"&blacktriangle;"],[0,"&triangle;"],[2,"&blacktriangleright;"],[0,"&rtri;"],[3,"&bigtriangledown;"],[0,"&blacktriangledown;"],[0,"&dtri;"],[2,"&blacktriangleleft;"],[0,"&ltri;"],[6,"&loz;"],[0,"&cir;"],[32,"&tridot;"],[2,"&bigcirc;"],[8,"&ultri;"],[0,"&urtri;"],[0,"&lltri;"],[0,"&EmptySmallSquare;"],[0,"&FilledSmallSquare;"],[8,"&bigstar;"],[0,"&star;"],[7,"&phone;"],[49,"&female;"],[1,"&male;"],[29,"&spades;"],[2,"&clubs;"],[1,"&hearts;"],[0,"&diamondsuit;"],[3,"&sung;"],[2,"&flat;"],[0,"&natural;"],[0,"&sharp;"],[163,"&check;"],[3,"&cross;"],[8,"&malt;"],[21,"&sext;"],[33,"&VerticalSeparator;"],[25,"&lbbrk;"],[0,"&rbbrk;"],[84,"&bsolhsub;"],[0,"&suphsol;"],[28,"&LeftDoubleBracket;"],[0,"&RightDoubleBracket;"],[0,"&lang;"],[0,"&rang;"],[0,"&Lang;"],[0,"&Rang;"],[0,"&loang;"],[0,"&roang;"],[7,"&longleftarrow;"],[0,"&longrightarrow;"],[0,"&longleftrightarrow;"],[0,"&DoubleLongLeftArrow;"],[0,"&DoubleLongRightArrow;"],[0,"&DoubleLongLeftRightArrow;"],[1,"&longmapsto;"],[2,"&dzigrarr;"],[258,"&nvlArr;"],[0,"&nvrArr;"],[0,"&nvHarr;"],[0,"&Map;"],[6,"&lbarr;"],[0,"&bkarow;"],[0,"&lBarr;"],[0,"&dbkarow;"],[0,"&drbkarow;"],[0,"&DDotrahd;"],[0,"&UpArrowBar;"],[0,"&DownArrowBar;"],[2,"&Rarrtl;"],[2,"&latail;"],[0,"&ratail;"],[0,"&lAtail;"],[0,"&rAtail;"],[0,"&larrfs;"],[0,"&rarrfs;"],[0,"&larrbfs;"],[0,"&rarrbfs;"],[2,"&nwarhk;"],[0,"&nearhk;"],[0,"&hksearow;"],[0,"&hkswarow;"],[0,"&nwnear;"],[0,"&nesear;"],[0,"&seswar;"],[0,"&swnwar;"],[8,{v:"&rarrc;",n:824,o:"&nrarrc;"}],[1,"&cudarrr;"],[0,"&ldca;"],[0,"&rdca;"],[0,"&cudarrl;"],[0,"&larrpl;"],[2,"&curarrm;"],[0,"&cularrp;"],[7,"&rarrpl;"],[2,"&harrcir;"],[0,"&Uarrocir;"],[0,"&lurdshar;"],[0,"&ldrushar;"],[2,"&LeftRightVector;"],[0,"&RightUpDownVector;"],[0,"&DownLeftRightVector;"],[0,"&LeftUpDownVector;"],[0,"&LeftVectorBar;"],[0,"&RightVectorBar;"],[0,"&RightUpVectorBar;"],[0,"&RightDownVectorBar;"],[0,"&DownLeftVectorBar;"],[0,"&DownRightVectorBar;"],[0,"&LeftUpVectorBar;"],[0,"&LeftDownVectorBar;"],[0,"&LeftTeeVector;"],[0,"&RightTeeVector;"],[0,"&RightUpTeeVector;"],[0,"&RightDownTeeVector;"],[0,"&DownLeftTeeVector;"],[0,"&DownRightTeeVector;"],[0,"&LeftUpTeeVector;"],[0,"&LeftDownTeeVector;"],[0,"&lHar;"],[0,"&uHar;"],[0,"&rHar;"],[0,"&dHar;"],[0,"&luruhar;"],[0,"&ldrdhar;"],[0,"&ruluhar;"],[0,"&rdldhar;"],[0,"&lharul;"],[0,"&llhard;"],[0,"&rharul;"],[0,"&lrhard;"],[0,"&udhar;"],[0,"&duhar;"],[0,"&RoundImplies;"],[0,"&erarr;"],[0,"&simrarr;"],[0,"&larrsim;"],[0,"&rarrsim;"],[0,"&rarrap;"],[0,"&ltlarr;"],[1,"&gtrarr;"],[0,"&subrarr;"],[1,"&suplarr;"],[0,"&lfisht;"],[0,"&rfisht;"],[0,"&ufisht;"],[0,"&dfisht;"],[5,"&lopar;"],[0,"&ropar;"],[4,"&lbrke;"],[0,"&rbrke;"],[0,"&lbrkslu;"],[0,"&rbrksld;"],[0,"&lbrksld;"],[0,"&rbrkslu;"],[0,"&langd;"],[0,"&rangd;"],[0,"&lparlt;"],[0,"&rpargt;"],[0,"&gtlPar;"],[0,"&ltrPar;"],[3,"&vzigzag;"],[1,"&vangrt;"],[0,"&angrtvbd;"],[6,"&ange;"],[0,"&range;"],[0,"&dwangle;"],[0,"&uwangle;"],[0,"&angmsdaa;"],[0,"&angmsdab;"],[0,"&angmsdac;"],[0,"&angmsdad;"],[0,"&angmsdae;"],[0,"&angmsdaf;"],[0,"&angmsdag;"],[0,"&angmsdah;"],[0,"&bemptyv;"],[0,"&demptyv;"],[0,"&cemptyv;"],[0,"&raemptyv;"],[0,"&laemptyv;"],[0,"&ohbar;"],[0,"&omid;"],[0,"&opar;"],[1,"&operp;"],[1,"&olcross;"],[0,"&odsold;"],[1,"&olcir;"],[0,"&ofcir;"],[0,"&olt;"],[0,"&ogt;"],[0,"&cirscir;"],[0,"&cirE;"],[0,"&solb;"],[0,"&bsolb;"],[3,"&boxbox;"],[3,"&trisb;"],[0,"&rtriltri;"],[0,{v:"&LeftTriangleBar;",n:824,o:"&NotLeftTriangleBar;"}],[0,{v:"&RightTriangleBar;",n:824,o:"&NotRightTriangleBar;"}],[11,"&iinfin;"],[0,"&infintie;"],[0,"&nvinfin;"],[4,"&eparsl;"],[0,"&smeparsl;"],[0,"&eqvparsl;"],[5,"&blacklozenge;"],[8,"&RuleDelayed;"],[1,"&dsol;"],[9,"&bigodot;"],[0,"&bigoplus;"],[0,"&bigotimes;"],[1,"&biguplus;"],[1,"&bigsqcup;"],[5,"&iiiint;"],[0,"&fpartint;"],[2,"&cirfnint;"],[0,"&awint;"],[0,"&rppolint;"],[0,"&scpolint;"],[0,"&npolint;"],[0,"&pointint;"],[0,"&quatint;"],[0,"&intlarhk;"],[10,"&pluscir;"],[0,"&plusacir;"],[0,"&simplus;"],[0,"&plusdu;"],[0,"&plussim;"],[0,"&plustwo;"],[1,"&mcomma;"],[0,"&minusdu;"],[2,"&loplus;"],[0,"&roplus;"],[0,"&Cross;"],[0,"&timesd;"],[0,"&timesbar;"],[1,"&smashp;"],[0,"&lotimes;"],[0,"&rotimes;"],[0,"&otimesas;"],[0,"&Otimes;"],[0,"&odiv;"],[0,"&triplus;"],[0,"&triminus;"],[0,"&tritime;"],[0,"&intprod;"],[2,"&amalg;"],[0,"&capdot;"],[1,"&ncup;"],[0,"&ncap;"],[0,"&capand;"],[0,"&cupor;"],[0,"&cupcap;"],[0,"&capcup;"],[0,"&cupbrcap;"],[0,"&capbrcup;"],[0,"&cupcup;"],[0,"&capcap;"],[0,"&ccups;"],[0,"&ccaps;"],[2,"&ccupssm;"],[2,"&And;"],[0,"&Or;"],[0,"&andand;"],[0,"&oror;"],[0,"&orslope;"],[0,"&andslope;"],[1,"&andv;"],[0,"&orv;"],[0,"&andd;"],[0,"&ord;"],[1,"&wedbar;"],[6,"&sdote;"],[3,"&simdot;"],[2,{v:"&congdot;",n:824,o:"&ncongdot;"}],[0,"&easter;"],[0,"&apacir;"],[0,{v:"&apE;",n:824,o:"&napE;"}],[0,"&eplus;"],[0,"&pluse;"],[0,"&Esim;"],[0,"&Colone;"],[0,"&Equal;"],[1,"&ddotseq;"],[0,"&equivDD;"],[0,"&ltcir;"],[0,"&gtcir;"],[0,"&ltquest;"],[0,"&gtquest;"],[0,{v:"&leqslant;",n:824,o:"&nleqslant;"}],[0,{v:"&geqslant;",n:824,o:"&ngeqslant;"}],[0,"&lesdot;"],[0,"&gesdot;"],[0,"&lesdoto;"],[0,"&gesdoto;"],[0,"&lesdotor;"],[0,"&gesdotol;"],[0,"&lap;"],[0,"&gap;"],[0,"&lne;"],[0,"&gne;"],[0,"&lnap;"],[0,"&gnap;"],[0,"&lEg;"],[0,"&gEl;"],[0,"&lsime;"],[0,"&gsime;"],[0,"&lsimg;"],[0,"&gsiml;"],[0,"&lgE;"],[0,"&glE;"],[0,"&lesges;"],[0,"&gesles;"],[0,"&els;"],[0,"&egs;"],[0,"&elsdot;"],[0,"&egsdot;"],[0,"&el;"],[0,"&eg;"],[2,"&siml;"],[0,"&simg;"],[0,"&simlE;"],[0,"&simgE;"],[0,{v:"&LessLess;",n:824,o:"&NotNestedLessLess;"}],[0,{v:"&GreaterGreater;",n:824,o:"&NotNestedGreaterGreater;"}],[1,"&glj;"],[0,"&gla;"],[0,"&ltcc;"],[0,"&gtcc;"],[0,"&lescc;"],[0,"&gescc;"],[0,"&smt;"],[0,"&lat;"],[0,{v:"&smte;",n:65024,o:"&smtes;"}],[0,{v:"&late;",n:65024,o:"&lates;"}],[0,"&bumpE;"],[0,{v:"&PrecedesEqual;",n:824,o:"&NotPrecedesEqual;"}],[0,{v:"&sce;",n:824,o:"&NotSucceedsEqual;"}],[2,"&prE;"],[0,"&scE;"],[0,"&precneqq;"],[0,"&scnE;"],[0,"&prap;"],[0,"&scap;"],[0,"&precnapprox;"],[0,"&scnap;"],[0,"&Pr;"],[0,"&Sc;"],[0,"&subdot;"],[0,"&supdot;"],[0,"&subplus;"],[0,"&supplus;"],[0,"&submult;"],[0,"&supmult;"],[0,"&subedot;"],[0,"&supedot;"],[0,{v:"&subE;",n:824,o:"&nsubE;"}],[0,{v:"&supE;",n:824,o:"&nsupE;"}],[0,"&subsim;"],[0,"&supsim;"],[2,{v:"&subnE;",n:65024,o:"&varsubsetneqq;"}],[0,{v:"&supnE;",n:65024,o:"&varsupsetneqq;"}],[2,"&csub;"],[0,"&csup;"],[0,"&csube;"],[0,"&csupe;"],[0,"&subsup;"],[0,"&supsub;"],[0,"&subsub;"],[0,"&supsup;"],[0,"&suphsub;"],[0,"&supdsub;"],[0,"&forkv;"],[0,"&topfork;"],[0,"&mlcp;"],[8,"&Dashv;"],[1,"&Vdashl;"],[0,"&Barv;"],[0,"&vBar;"],[0,"&vBarv;"],[1,"&Vbar;"],[0,"&Not;"],[0,"&bNot;"],[0,"&rnmid;"],[0,"&cirmid;"],[0,"&midcir;"],[0,"&topcir;"],[0,"&nhpar;"],[0,"&parsim;"],[9,{v:"&parsl;",n:8421,o:"&nparsl;"}],[44343,{n:new Map(e([[56476,"&Ascr;"],[1,"&Cscr;"],[0,"&Dscr;"],[2,"&Gscr;"],[2,"&Jscr;"],[0,"&Kscr;"],[2,"&Nscr;"],[0,"&Oscr;"],[0,"&Pscr;"],[0,"&Qscr;"],[1,"&Sscr;"],[0,"&Tscr;"],[0,"&Uscr;"],[0,"&Vscr;"],[0,"&Wscr;"],[0,"&Xscr;"],[0,"&Yscr;"],[0,"&Zscr;"],[0,"&ascr;"],[0,"&bscr;"],[0,"&cscr;"],[0,"&dscr;"],[1,"&fscr;"],[1,"&hscr;"],[0,"&iscr;"],[0,"&jscr;"],[0,"&kscr;"],[0,"&lscr;"],[0,"&mscr;"],[0,"&nscr;"],[1,"&pscr;"],[0,"&qscr;"],[0,"&rscr;"],[0,"&sscr;"],[0,"&tscr;"],[0,"&uscr;"],[0,"&vscr;"],[0,"&wscr;"],[0,"&xscr;"],[0,"&yscr;"],[0,"&zscr;"],[52,"&Afr;"],[0,"&Bfr;"],[1,"&Dfr;"],[0,"&Efr;"],[0,"&Ffr;"],[0,"&Gfr;"],[2,"&Jfr;"],[0,"&Kfr;"],[0,"&Lfr;"],[0,"&Mfr;"],[0,"&Nfr;"],[0,"&Ofr;"],[0,"&Pfr;"],[0,"&Qfr;"],[1,"&Sfr;"],[0,"&Tfr;"],[0,"&Ufr;"],[0,"&Vfr;"],[0,"&Wfr;"],[0,"&Xfr;"],[0,"&Yfr;"],[1,"&afr;"],[0,"&bfr;"],[0,"&cfr;"],[0,"&dfr;"],[0,"&efr;"],[0,"&ffr;"],[0,"&gfr;"],[0,"&hfr;"],[0,"&ifr;"],[0,"&jfr;"],[0,"&kfr;"],[0,"&lfr;"],[0,"&mfr;"],[0,"&nfr;"],[0,"&ofr;"],[0,"&pfr;"],[0,"&qfr;"],[0,"&rfr;"],[0,"&sfr;"],[0,"&tfr;"],[0,"&ufr;"],[0,"&vfr;"],[0,"&wfr;"],[0,"&xfr;"],[0,"&yfr;"],[0,"&zfr;"],[0,"&Aopf;"],[0,"&Bopf;"],[1,"&Dopf;"],[0,"&Eopf;"],[0,"&Fopf;"],[0,"&Gopf;"],[1,"&Iopf;"],[0,"&Jopf;"],[0,"&Kopf;"],[0,"&Lopf;"],[0,"&Mopf;"],[1,"&Oopf;"],[3,"&Sopf;"],[0,"&Topf;"],[0,"&Uopf;"],[0,"&Vopf;"],[0,"&Wopf;"],[0,"&Xopf;"],[0,"&Yopf;"],[1,"&aopf;"],[0,"&bopf;"],[0,"&copf;"],[0,"&dopf;"],[0,"&eopf;"],[0,"&fopf;"],[0,"&gopf;"],[0,"&hopf;"],[0,"&iopf;"],[0,"&jopf;"],[0,"&kopf;"],[0,"&lopf;"],[0,"&mopf;"],[0,"&nopf;"],[0,"&oopf;"],[0,"&popf;"],[0,"&qopf;"],[0,"&ropf;"],[0,"&sopf;"],[0,"&topf;"],[0,"&uopf;"],[0,"&vopf;"],[0,"&wopf;"],[0,"&xopf;"],[0,"&yopf;"],[0,"&zopf;"]]))}],[8906,"&fflig;"],[0,"&filig;"],[0,"&fllig;"],[0,"&ffilig;"],[0,"&ffllig;"]]))},5863:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.decodeXMLStrict=t.decodeHTML5Strict=t.decodeHTML4Strict=t.decodeHTML5=t.decodeHTML4=t.decodeHTMLAttribute=t.decodeHTMLStrict=t.decodeHTML=t.decodeXML=t.DecodingMode=t.EntityDecoder=t.encodeHTML5=t.encodeHTML4=t.encodeNonAsciiHTML=t.encodeHTML=t.escapeText=t.escapeAttribute=t.escapeUTF8=t.escape=t.encodeXML=t.encode=t.decodeStrict=t.decode=t.EncodingMode=t.EntityLevel=void 0;var l,c,A=e(4076),a=e(7322),d=e(4625);function m(n,h){if(h===void 0&&(h=l.XML),(typeof h=="number"?h:h.level)===l.HTML){var g=typeof h=="object"?h.mode:void 0;return(0,A.decodeHTML)(n,g)}return(0,A.decodeXML)(n)}(function(n){n[n.XML=0]="XML",n[n.HTML=1]="HTML"})(l=t.EntityLevel||(t.EntityLevel={})),function(n){n[n.UTF8=0]="UTF8",n[n.ASCII=1]="ASCII",n[n.Extensive=2]="Extensive",n[n.Attribute=3]="Attribute",n[n.Text=4]="Text"}(c=t.EncodingMode||(t.EncodingMode={})),t.decode=m,t.decodeStrict=function(n,h){var g;h===void 0&&(h=l.XML);var f=typeof h=="number"?{level:h}:h;return(g=f.mode)!==null&&g!==void 0||(f.mode=A.DecodingMode.Strict),m(n,f)},t.encode=function(n,h){h===void 0&&(h=l.XML);var g=typeof h=="number"?{level:h}:h;return g.mode===c.UTF8?(0,d.escapeUTF8)(n):g.mode===c.Attribute?(0,d.escapeAttribute)(n):g.mode===c.Text?(0,d.escapeText)(n):g.level===l.HTML?g.mode===c.ASCII?(0,a.encodeNonAsciiHTML)(n):(0,a.encodeHTML)(n):(0,d.encodeXML)(n)};var s=e(4625);Object.defineProperty(t,"encodeXML",{enumerable:!0,get:function(){return s.encodeXML}}),Object.defineProperty(t,"escape",{enumerable:!0,get:function(){return s.escape}}),Object.defineProperty(t,"escapeUTF8",{enumerable:!0,get:function(){return s.escapeUTF8}}),Object.defineProperty(t,"escapeAttribute",{enumerable:!0,get:function(){return s.escapeAttribute}}),Object.defineProperty(t,"escapeText",{enumerable:!0,get:function(){return s.escapeText}});var i=e(7322);Object.defineProperty(t,"encodeHTML",{enumerable:!0,get:function(){return i.encodeHTML}}),Object.defineProperty(t,"encodeNonAsciiHTML",{enumerable:!0,get:function(){return i.encodeNonAsciiHTML}}),Object.defineProperty(t,"encodeHTML4",{enumerable:!0,get:function(){return i.encodeHTML}}),Object.defineProperty(t,"encodeHTML5",{enumerable:!0,get:function(){return i.encodeHTML}});var o=e(4076);Object.defineProperty(t,"EntityDecoder",{enumerable:!0,get:function(){return o.EntityDecoder}}),Object.defineProperty(t,"DecodingMode",{enumerable:!0,get:function(){return o.DecodingMode}}),Object.defineProperty(t,"decodeXML",{enumerable:!0,get:function(){return o.decodeXML}}),Object.defineProperty(t,"decodeHTML",{enumerable:!0,get:function(){return o.decodeHTML}}),Object.defineProperty(t,"decodeHTMLStrict",{enumerable:!0,get:function(){return o.decodeHTMLStrict}}),Object.defineProperty(t,"decodeHTMLAttribute",{enumerable:!0,get:function(){return o.decodeHTMLAttribute}}),Object.defineProperty(t,"decodeHTML4",{enumerable:!0,get:function(){return o.decodeHTML}}),Object.defineProperty(t,"decodeHTML5",{enumerable:!0,get:function(){return o.decodeHTML}}),Object.defineProperty(t,"decodeHTML4Strict",{enumerable:!0,get:function(){return o.decodeHTMLStrict}}),Object.defineProperty(t,"decodeHTML5Strict",{enumerable:!0,get:function(){return o.decodeHTMLStrict}}),Object.defineProperty(t,"decodeXMLStrict",{enumerable:!0,get:function(){return o.decodeXML}})},5573:v=>{"use strict";var t=/["'&<>]/;v.exports=function(e){var l,c=""+e,A=t.exec(c);if(!A)return c;var a="",d=0,m=0;for(d=A.index;d<c.length;d++){switch(c.charCodeAt(d)){case 34:l="&quot;";break;case 38:l="&amp;";break;case 39:l="&#39;";break;case 60:l="&lt;";break;case 62:l="&gt;";break;default:continue}m!==d&&(a+=c.substring(m,d)),m=d+1,a+=l}return m!==d?a+c.substring(m,d):a}},763:function(v,t,e){"use strict";var l=this&&this.__createBinding||(Object.create?function(y,r,p,b){b===void 0&&(b=p);var x=Object.getOwnPropertyDescriptor(r,p);x&&!("get"in x?!r.__esModule:x.writable||x.configurable)||(x={enumerable:!0,get:function(){return r[p]}}),Object.defineProperty(y,b,x)}:function(y,r,p,b){b===void 0&&(b=p),y[b]=r[p]}),c=this&&this.__setModuleDefault||(Object.create?function(y,r){Object.defineProperty(y,"default",{enumerable:!0,value:r})}:function(y,r){y.default=r}),A=this&&this.__importStar||function(y){if(y&&y.__esModule)return y;var r={};if(y!=null)for(var p in y)p!=="default"&&Object.prototype.hasOwnProperty.call(y,p)&&l(r,y,p);return c(r,y),r};Object.defineProperty(t,"__esModule",{value:!0}),t.Parser=void 0;var a=A(e(9889)),d=e(4076),m=new Set(["input","option","optgroup","select","button","datalist","textarea"]),s=new Set(["p"]),i=new Set(["thead","tbody"]),o=new Set(["dd","dt"]),n=new Set(["rt","rp"]),h=new Map([["tr",new Set(["tr","th","td"])],["th",new Set(["th"])],["td",new Set(["thead","th","td"])],["body",new Set(["head","link","script"])],["li",new Set(["li"])],["p",s],["h1",s],["h2",s],["h3",s],["h4",s],["h5",s],["h6",s],["select",m],["input",m],["output",m],["button",m],["datalist",m],["textarea",m],["option",new Set(["option"])],["optgroup",new Set(["optgroup","option"])],["dd",o],["dt",o],["address",s],["article",s],["aside",s],["blockquote",s],["details",s],["div",s],["dl",s],["fieldset",s],["figcaption",s],["figure",s],["footer",s],["form",s],["header",s],["hr",s],["main",s],["nav",s],["ol",s],["pre",s],["section",s],["table",s],["ul",s],["rt",n],["rp",n],["tbody",i],["tfoot",i]]),g=new Set(["area","base","basefont","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr"]),f=new Set(["math","svg"]),C=new Set(["mi","mo","mn","ms","mtext","annotation-xml","foreignobject","desc","title"]),w=/\s|\//,u=function(){function y(r,p){var b,x,I,M,T;p===void 0&&(p={}),this.options=p,this.startIndex=0,this.endIndex=0,this.openTagStart=0,this.tagname="",this.attribname="",this.attribvalue="",this.attribs=null,this.stack=[],this.foreignContext=[],this.buffers=[],this.bufferOffset=0,this.writeIndex=0,this.ended=!1,this.cbs=r??{},this.lowerCaseTagNames=(b=p.lowerCaseTags)!==null&&b!==void 0?b:!p.xmlMode,this.lowerCaseAttributeNames=(x=p.lowerCaseAttributeNames)!==null&&x!==void 0?x:!p.xmlMode,this.tokenizer=new((I=p.Tokenizer)!==null&&I!==void 0?I:a.default)(this.options,this),(T=(M=this.cbs).onparserinit)===null||T===void 0||T.call(M,this)}return y.prototype.ontext=function(r,p){var b,x,I=this.getSlice(r,p);this.endIndex=p-1,(x=(b=this.cbs).ontext)===null||x===void 0||x.call(b,I),this.startIndex=p},y.prototype.ontextentity=function(r){var p,b,x=this.tokenizer.getSectionStart();this.endIndex=x-1,(b=(p=this.cbs).ontext)===null||b===void 0||b.call(p,(0,d.fromCodePoint)(r)),this.startIndex=x},y.prototype.isVoidElement=function(r){return!this.options.xmlMode&&g.has(r)},y.prototype.onopentagname=function(r,p){this.endIndex=p;var b=this.getSlice(r,p);this.lowerCaseTagNames&&(b=b.toLowerCase()),this.emitOpenTag(b)},y.prototype.emitOpenTag=function(r){var p,b,x,I;this.openTagStart=this.startIndex,this.tagname=r;var M=!this.options.xmlMode&&h.get(r);if(M)for(;this.stack.length>0&&M.has(this.stack[this.stack.length-1]);){var T=this.stack.pop();(b=(p=this.cbs).onclosetag)===null||b===void 0||b.call(p,T,!0)}this.isVoidElement(r)||(this.stack.push(r),f.has(r)?this.foreignContext.push(!0):C.has(r)&&this.foreignContext.push(!1)),(I=(x=this.cbs).onopentagname)===null||I===void 0||I.call(x,r),this.cbs.onopentag&&(this.attribs={})},y.prototype.endOpenTag=function(r){var p,b;this.startIndex=this.openTagStart,this.attribs&&((b=(p=this.cbs).onopentag)===null||b===void 0||b.call(p,this.tagname,this.attribs,r),this.attribs=null),this.cbs.onclosetag&&this.isVoidElement(this.tagname)&&this.cbs.onclosetag(this.tagname,!0),this.tagname=""},y.prototype.onopentagend=function(r){this.endIndex=r,this.endOpenTag(!1),this.startIndex=r+1},y.prototype.onclosetag=function(r,p){var b,x,I,M,T,z;this.endIndex=p;var O=this.getSlice(r,p);if(this.lowerCaseTagNames&&(O=O.toLowerCase()),(f.has(O)||C.has(O))&&this.foreignContext.pop(),this.isVoidElement(O))this.options.xmlMode||O!=="br"||((x=(b=this.cbs).onopentagname)===null||x===void 0||x.call(b,"br"),(M=(I=this.cbs).onopentag)===null||M===void 0||M.call(I,"br",{},!0),(z=(T=this.cbs).onclosetag)===null||z===void 0||z.call(T,"br",!1));else{var P=this.stack.lastIndexOf(O);if(P!==-1)if(this.cbs.onclosetag)for(var L=this.stack.length-P;L--;)this.cbs.onclosetag(this.stack.pop(),L!==0);else this.stack.length=P;else this.options.xmlMode||O!=="p"||(this.emitOpenTag("p"),this.closeCurrentTag(!0))}this.startIndex=p+1},y.prototype.onselfclosingtag=function(r){this.endIndex=r,this.options.xmlMode||this.options.recognizeSelfClosing||this.foreignContext[this.foreignContext.length-1]?(this.closeCurrentTag(!1),this.startIndex=r+1):this.onopentagend(r)},y.prototype.closeCurrentTag=function(r){var p,b,x=this.tagname;this.endOpenTag(r),this.stack[this.stack.length-1]===x&&((b=(p=this.cbs).onclosetag)===null||b===void 0||b.call(p,x,!r),this.stack.pop())},y.prototype.onattribname=function(r,p){this.startIndex=r;var b=this.getSlice(r,p);this.attribname=this.lowerCaseAttributeNames?b.toLowerCase():b},y.prototype.onattribdata=function(r,p){this.attribvalue+=this.getSlice(r,p)},y.prototype.onattribentity=function(r){this.attribvalue+=(0,d.fromCodePoint)(r)},y.prototype.onattribend=function(r,p){var b,x;this.endIndex=p,(x=(b=this.cbs).onattribute)===null||x===void 0||x.call(b,this.attribname,this.attribvalue,r===a.QuoteType.Double?'"':r===a.QuoteType.Single?"'":r===a.QuoteType.NoValue?void 0:null),this.attribs&&!Object.prototype.hasOwnProperty.call(this.attribs,this.attribname)&&(this.attribs[this.attribname]=this.attribvalue),this.attribvalue=""},y.prototype.getInstructionName=function(r){var p=r.search(w),b=p<0?r:r.substr(0,p);return this.lowerCaseTagNames&&(b=b.toLowerCase()),b},y.prototype.ondeclaration=function(r,p){this.endIndex=p;var b=this.getSlice(r,p);if(this.cbs.onprocessinginstruction){var x=this.getInstructionName(b);this.cbs.onprocessinginstruction("!".concat(x),"!".concat(b))}this.startIndex=p+1},y.prototype.onprocessinginstruction=function(r,p){this.endIndex=p;var b=this.getSlice(r,p);if(this.cbs.onprocessinginstruction){var x=this.getInstructionName(b);this.cbs.onprocessinginstruction("?".concat(x),"?".concat(b))}this.startIndex=p+1},y.prototype.oncomment=function(r,p,b){var x,I,M,T;this.endIndex=p,(I=(x=this.cbs).oncomment)===null||I===void 0||I.call(x,this.getSlice(r,p-b)),(T=(M=this.cbs).oncommentend)===null||T===void 0||T.call(M),this.startIndex=p+1},y.prototype.oncdata=function(r,p,b){var x,I,M,T,z,O,P,L,D,U;this.endIndex=p;var G=this.getSlice(r,p-b);this.options.xmlMode||this.options.recognizeCDATA?((I=(x=this.cbs).oncdatastart)===null||I===void 0||I.call(x),(T=(M=this.cbs).ontext)===null||T===void 0||T.call(M,G),(O=(z=this.cbs).oncdataend)===null||O===void 0||O.call(z)):((L=(P=this.cbs).oncomment)===null||L===void 0||L.call(P,"[CDATA[".concat(G,"]]")),(U=(D=this.cbs).oncommentend)===null||U===void 0||U.call(D)),this.startIndex=p+1},y.prototype.onend=function(){var r,p;if(this.cbs.onclosetag){this.endIndex=this.startIndex;for(var b=this.stack.length;b>0;this.cbs.onclosetag(this.stack[--b],!0));}(p=(r=this.cbs).onend)===null||p===void 0||p.call(r)},y.prototype.reset=function(){var r,p,b,x;(p=(r=this.cbs).onreset)===null||p===void 0||p.call(r),this.tokenizer.reset(),this.tagname="",this.attribname="",this.attribs=null,this.stack.length=0,this.startIndex=0,this.endIndex=0,(x=(b=this.cbs).onparserinit)===null||x===void 0||x.call(b,this),this.buffers.length=0,this.bufferOffset=0,this.writeIndex=0,this.ended=!1},y.prototype.parseComplete=function(r){this.reset(),this.end(r)},y.prototype.getSlice=function(r,p){for(;r-this.bufferOffset>=this.buffers[0].length;)this.shiftBuffer();for(var b=this.buffers[0].slice(r-this.bufferOffset,p-this.bufferOffset);p-this.bufferOffset>this.buffers[0].length;)this.shiftBuffer(),b+=this.buffers[0].slice(0,p-this.bufferOffset);return b},y.prototype.shiftBuffer=function(){this.bufferOffset+=this.buffers[0].length,this.writeIndex--,this.buffers.shift()},y.prototype.write=function(r){var p,b;this.ended?(b=(p=this.cbs).onerror)===null||b===void 0||b.call(p,new Error(".write() after done!")):(this.buffers.push(r),this.tokenizer.running&&(this.tokenizer.write(r),this.writeIndex++))},y.prototype.end=function(r){var p,b;this.ended?(b=(p=this.cbs).onerror)===null||b===void 0||b.call(p,new Error(".end() after done!")):(r&&this.write(r),this.ended=!0,this.tokenizer.end())},y.prototype.pause=function(){this.tokenizer.pause()},y.prototype.resume=function(){for(this.tokenizer.resume();this.tokenizer.running&&this.writeIndex<this.buffers.length;)this.tokenizer.write(this.buffers[this.writeIndex++]);this.ended&&this.tokenizer.end()},y.prototype.parseChunk=function(r){this.write(r)},y.prototype.done=function(r){this.end(r)},y}();t.Parser=u},9889:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QuoteType=void 0;var l,c,A,a=e(4076);function d(n){return n===l.Space||n===l.NewLine||n===l.Tab||n===l.FormFeed||n===l.CarriageReturn}function m(n){return n===l.Slash||n===l.Gt||d(n)}function s(n){return n>=l.Zero&&n<=l.Nine}(function(n){n[n.Tab=9]="Tab",n[n.NewLine=10]="NewLine",n[n.FormFeed=12]="FormFeed",n[n.CarriageReturn=13]="CarriageReturn",n[n.Space=32]="Space",n[n.ExclamationMark=33]="ExclamationMark",n[n.Number=35]="Number",n[n.Amp=38]="Amp",n[n.SingleQuote=39]="SingleQuote",n[n.DoubleQuote=34]="DoubleQuote",n[n.Dash=45]="Dash",n[n.Slash=47]="Slash",n[n.Zero=48]="Zero",n[n.Nine=57]="Nine",n[n.Semi=59]="Semi",n[n.Lt=60]="Lt",n[n.Eq=61]="Eq",n[n.Gt=62]="Gt",n[n.Questionmark=63]="Questionmark",n[n.UpperA=65]="UpperA",n[n.LowerA=97]="LowerA",n[n.UpperF=70]="UpperF",n[n.LowerF=102]="LowerF",n[n.UpperZ=90]="UpperZ",n[n.LowerZ=122]="LowerZ",n[n.LowerX=120]="LowerX",n[n.OpeningSquareBracket=91]="OpeningSquareBracket"})(l||(l={})),function(n){n[n.Text=1]="Text",n[n.BeforeTagName=2]="BeforeTagName",n[n.InTagName=3]="InTagName",n[n.InSelfClosingTag=4]="InSelfClosingTag",n[n.BeforeClosingTagName=5]="BeforeClosingTagName",n[n.InClosingTagName=6]="InClosingTagName",n[n.AfterClosingTagName=7]="AfterClosingTagName",n[n.BeforeAttributeName=8]="BeforeAttributeName",n[n.InAttributeName=9]="InAttributeName",n[n.AfterAttributeName=10]="AfterAttributeName",n[n.BeforeAttributeValue=11]="BeforeAttributeValue",n[n.InAttributeValueDq=12]="InAttributeValueDq",n[n.InAttributeValueSq=13]="InAttributeValueSq",n[n.InAttributeValueNq=14]="InAttributeValueNq",n[n.BeforeDeclaration=15]="BeforeDeclaration",n[n.InDeclaration=16]="InDeclaration",n[n.InProcessingInstruction=17]="InProcessingInstruction",n[n.BeforeComment=18]="BeforeComment",n[n.CDATASequence=19]="CDATASequence",n[n.InSpecialComment=20]="InSpecialComment",n[n.InCommentLike=21]="InCommentLike",n[n.BeforeSpecialS=22]="BeforeSpecialS",n[n.SpecialStartSequence=23]="SpecialStartSequence",n[n.InSpecialTag=24]="InSpecialTag",n[n.BeforeEntity=25]="BeforeEntity",n[n.BeforeNumericEntity=26]="BeforeNumericEntity",n[n.InNamedEntity=27]="InNamedEntity",n[n.InNumericEntity=28]="InNumericEntity",n[n.InHexEntity=29]="InHexEntity"}(c||(c={})),function(n){n[n.NoValue=0]="NoValue",n[n.Unquoted=1]="Unquoted",n[n.Single=2]="Single",n[n.Double=3]="Double"}(A=t.QuoteType||(t.QuoteType={}));var i={Cdata:new Uint8Array([67,68,65,84,65,91]),CdataEnd:new Uint8Array([93,93,62]),CommentEnd:new Uint8Array([45,45,62]),ScriptEnd:new Uint8Array([60,47,115,99,114,105,112,116]),StyleEnd:new Uint8Array([60,47,115,116,121,108,101]),TitleEnd:new Uint8Array([60,47,116,105,116,108,101])},o=function(){function n(h,g){var f=h.xmlMode,C=f!==void 0&&f,w=h.decodeEntities,u=w===void 0||w;this.cbs=g,this.state=c.Text,this.buffer="",this.sectionStart=0,this.index=0,this.baseState=c.Text,this.isSpecial=!1,this.running=!0,this.offset=0,this.currentSequence=void 0,this.sequenceIndex=0,this.trieIndex=0,this.trieCurrent=0,this.entityResult=0,this.entityExcess=0,this.xmlMode=C,this.decodeEntities=u,this.entityTrie=C?a.xmlDecodeTree:a.htmlDecodeTree}return n.prototype.reset=function(){this.state=c.Text,this.buffer="",this.sectionStart=0,this.index=0,this.baseState=c.Text,this.currentSequence=void 0,this.running=!0,this.offset=0},n.prototype.write=function(h){this.offset+=this.buffer.length,this.buffer=h,this.parse()},n.prototype.end=function(){this.running&&this.finish()},n.prototype.pause=function(){this.running=!1},n.prototype.resume=function(){this.running=!0,this.index<this.buffer.length+this.offset&&this.parse()},n.prototype.getIndex=function(){return this.index},n.prototype.getSectionStart=function(){return this.sectionStart},n.prototype.stateText=function(h){h===l.Lt||!this.decodeEntities&&this.fastForwardTo(l.Lt)?(this.index>this.sectionStart&&this.cbs.ontext(this.sectionStart,this.index),this.state=c.BeforeTagName,this.sectionStart=this.index):this.decodeEntities&&h===l.Amp&&(this.state=c.BeforeEntity)},n.prototype.stateSpecialStartSequence=function(h){var g=this.sequenceIndex===this.currentSequence.length;if(g?m(h):(32|h)===this.currentSequence[this.sequenceIndex]){if(!g)return void this.sequenceIndex++}else this.isSpecial=!1;this.sequenceIndex=0,this.state=c.InTagName,this.stateInTagName(h)},n.prototype.stateInSpecialTag=function(h){if(this.sequenceIndex===this.currentSequence.length){if(h===l.Gt||d(h)){var g=this.index-this.currentSequence.length;if(this.sectionStart<g){var f=this.index;this.index=g,this.cbs.ontext(this.sectionStart,g),this.index=f}return this.isSpecial=!1,this.sectionStart=g+2,void this.stateInClosingTagName(h)}this.sequenceIndex=0}(32|h)===this.currentSequence[this.sequenceIndex]?this.sequenceIndex+=1:this.sequenceIndex===0?this.currentSequence===i.TitleEnd?this.decodeEntities&&h===l.Amp&&(this.state=c.BeforeEntity):this.fastForwardTo(l.Lt)&&(this.sequenceIndex=1):this.sequenceIndex=Number(h===l.Lt)},n.prototype.stateCDATASequence=function(h){h===i.Cdata[this.sequenceIndex]?++this.sequenceIndex===i.Cdata.length&&(this.state=c.InCommentLike,this.currentSequence=i.CdataEnd,this.sequenceIndex=0,this.sectionStart=this.index+1):(this.sequenceIndex=0,this.state=c.InDeclaration,this.stateInDeclaration(h))},n.prototype.fastForwardTo=function(h){for(;++this.index<this.buffer.length+this.offset;)if(this.buffer.charCodeAt(this.index-this.offset)===h)return!0;return this.index=this.buffer.length+this.offset-1,!1},n.prototype.stateInCommentLike=function(h){h===this.currentSequence[this.sequenceIndex]?++this.sequenceIndex===this.currentSequence.length&&(this.currentSequence===i.CdataEnd?this.cbs.oncdata(this.sectionStart,this.index,2):this.cbs.oncomment(this.sectionStart,this.index,2),this.sequenceIndex=0,this.sectionStart=this.index+1,this.state=c.Text):this.sequenceIndex===0?this.fastForwardTo(this.currentSequence[0])&&(this.sequenceIndex=1):h!==this.currentSequence[this.sequenceIndex-1]&&(this.sequenceIndex=0)},n.prototype.isTagStartChar=function(h){return this.xmlMode?!m(h):function(g){return g>=l.LowerA&&g<=l.LowerZ||g>=l.UpperA&&g<=l.UpperZ}(h)},n.prototype.startSpecial=function(h,g){this.isSpecial=!0,this.currentSequence=h,this.sequenceIndex=g,this.state=c.SpecialStartSequence},n.prototype.stateBeforeTagName=function(h){if(h===l.ExclamationMark)this.state=c.BeforeDeclaration,this.sectionStart=this.index+1;else if(h===l.Questionmark)this.state=c.InProcessingInstruction,this.sectionStart=this.index+1;else if(this.isTagStartChar(h)){var g=32|h;this.sectionStart=this.index,this.xmlMode||g!==i.TitleEnd[2]?this.state=this.xmlMode||g!==i.ScriptEnd[2]?c.InTagName:c.BeforeSpecialS:this.startSpecial(i.TitleEnd,3)}else h===l.Slash?this.state=c.BeforeClosingTagName:(this.state=c.Text,this.stateText(h))},n.prototype.stateInTagName=function(h){m(h)&&(this.cbs.onopentagname(this.sectionStart,this.index),this.sectionStart=-1,this.state=c.BeforeAttributeName,this.stateBeforeAttributeName(h))},n.prototype.stateBeforeClosingTagName=function(h){d(h)||(h===l.Gt?this.state=c.Text:(this.state=this.isTagStartChar(h)?c.InClosingTagName:c.InSpecialComment,this.sectionStart=this.index))},n.prototype.stateInClosingTagName=function(h){(h===l.Gt||d(h))&&(this.cbs.onclosetag(this.sectionStart,this.index),this.sectionStart=-1,this.state=c.AfterClosingTagName,this.stateAfterClosingTagName(h))},n.prototype.stateAfterClosingTagName=function(h){(h===l.Gt||this.fastForwardTo(l.Gt))&&(this.state=c.Text,this.baseState=c.Text,this.sectionStart=this.index+1)},n.prototype.stateBeforeAttributeName=function(h){h===l.Gt?(this.cbs.onopentagend(this.index),this.isSpecial?(this.state=c.InSpecialTag,this.sequenceIndex=0):this.state=c.Text,this.baseState=this.state,this.sectionStart=this.index+1):h===l.Slash?this.state=c.InSelfClosingTag:d(h)||(this.state=c.InAttributeName,this.sectionStart=this.index)},n.prototype.stateInSelfClosingTag=function(h){h===l.Gt?(this.cbs.onselfclosingtag(this.index),this.state=c.Text,this.baseState=c.Text,this.sectionStart=this.index+1,this.isSpecial=!1):d(h)||(this.state=c.BeforeAttributeName,this.stateBeforeAttributeName(h))},n.prototype.stateInAttributeName=function(h){(h===l.Eq||m(h))&&(this.cbs.onattribname(this.sectionStart,this.index),this.sectionStart=-1,this.state=c.AfterAttributeName,this.stateAfterAttributeName(h))},n.prototype.stateAfterAttributeName=function(h){h===l.Eq?this.state=c.BeforeAttributeValue:h===l.Slash||h===l.Gt?(this.cbs.onattribend(A.NoValue,this.index),this.state=c.BeforeAttributeName,this.stateBeforeAttributeName(h)):d(h)||(this.cbs.onattribend(A.NoValue,this.index),this.state=c.InAttributeName,this.sectionStart=this.index)},n.prototype.stateBeforeAttributeValue=function(h){h===l.DoubleQuote?(this.state=c.InAttributeValueDq,this.sectionStart=this.index+1):h===l.SingleQuote?(this.state=c.InAttributeValueSq,this.sectionStart=this.index+1):d(h)||(this.sectionStart=this.index,this.state=c.InAttributeValueNq,this.stateInAttributeValueNoQuotes(h))},n.prototype.handleInAttributeValue=function(h,g){h===g||!this.decodeEntities&&this.fastForwardTo(g)?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(g===l.DoubleQuote?A.Double:A.Single,this.index),this.state=c.BeforeAttributeName):this.decodeEntities&&h===l.Amp&&(this.baseState=this.state,this.state=c.BeforeEntity)},n.prototype.stateInAttributeValueDoubleQuotes=function(h){this.handleInAttributeValue(h,l.DoubleQuote)},n.prototype.stateInAttributeValueSingleQuotes=function(h){this.handleInAttributeValue(h,l.SingleQuote)},n.prototype.stateInAttributeValueNoQuotes=function(h){d(h)||h===l.Gt?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(A.Unquoted,this.index),this.state=c.BeforeAttributeName,this.stateBeforeAttributeName(h)):this.decodeEntities&&h===l.Amp&&(this.baseState=this.state,this.state=c.BeforeEntity)},n.prototype.stateBeforeDeclaration=function(h){h===l.OpeningSquareBracket?(this.state=c.CDATASequence,this.sequenceIndex=0):this.state=h===l.Dash?c.BeforeComment:c.InDeclaration},n.prototype.stateInDeclaration=function(h){(h===l.Gt||this.fastForwardTo(l.Gt))&&(this.cbs.ondeclaration(this.sectionStart,this.index),this.state=c.Text,this.sectionStart=this.index+1)},n.prototype.stateInProcessingInstruction=function(h){(h===l.Gt||this.fastForwardTo(l.Gt))&&(this.cbs.onprocessinginstruction(this.sectionStart,this.index),this.state=c.Text,this.sectionStart=this.index+1)},n.prototype.stateBeforeComment=function(h){h===l.Dash?(this.state=c.InCommentLike,this.currentSequence=i.CommentEnd,this.sequenceIndex=2,this.sectionStart=this.index+1):this.state=c.InDeclaration},n.prototype.stateInSpecialComment=function(h){(h===l.Gt||this.fastForwardTo(l.Gt))&&(this.cbs.oncomment(this.sectionStart,this.index,0),this.state=c.Text,this.sectionStart=this.index+1)},n.prototype.stateBeforeSpecialS=function(h){var g=32|h;g===i.ScriptEnd[3]?this.startSpecial(i.ScriptEnd,4):g===i.StyleEnd[3]?this.startSpecial(i.StyleEnd,4):(this.state=c.InTagName,this.stateInTagName(h))},n.prototype.stateBeforeEntity=function(h){this.entityExcess=1,this.entityResult=0,h===l.Number?this.state=c.BeforeNumericEntity:h===l.Amp||(this.trieIndex=0,this.trieCurrent=this.entityTrie[0],this.state=c.InNamedEntity,this.stateInNamedEntity(h))},n.prototype.stateInNamedEntity=function(h){if(this.entityExcess+=1,this.trieIndex=(0,a.determineBranch)(this.entityTrie,this.trieCurrent,this.trieIndex+1,h),this.trieIndex<0)return this.emitNamedEntity(),void this.index--;this.trieCurrent=this.entityTrie[this.trieIndex];var g=this.trieCurrent&a.BinTrieFlags.VALUE_LENGTH;if(g){var f=(g>>14)-1;if(this.allowLegacyEntity()||h===l.Semi){var C=this.index-this.entityExcess+1;C>this.sectionStart&&this.emitPartial(this.sectionStart,C),this.entityResult=this.trieIndex,this.trieIndex+=f,this.entityExcess=0,this.sectionStart=this.index+1,f===0&&this.emitNamedEntity()}else this.trieIndex+=f}},n.prototype.emitNamedEntity=function(){if(this.state=this.baseState,this.entityResult!==0)switch((this.entityTrie[this.entityResult]&a.BinTrieFlags.VALUE_LENGTH)>>14){case 1:this.emitCodePoint(this.entityTrie[this.entityResult]&~a.BinTrieFlags.VALUE_LENGTH);break;case 2:this.emitCodePoint(this.entityTrie[this.entityResult+1]);break;case 3:this.emitCodePoint(this.entityTrie[this.entityResult+1]),this.emitCodePoint(this.entityTrie[this.entityResult+2])}},n.prototype.stateBeforeNumericEntity=function(h){(32|h)===l.LowerX?(this.entityExcess++,this.state=c.InHexEntity):(this.state=c.InNumericEntity,this.stateInNumericEntity(h))},n.prototype.emitNumericEntity=function(h){var g=this.index-this.entityExcess-1;g+2+Number(this.state===c.InHexEntity)!==this.index&&(g>this.sectionStart&&this.emitPartial(this.sectionStart,g),this.sectionStart=this.index+Number(h),this.emitCodePoint((0,a.replaceCodePoint)(this.entityResult))),this.state=this.baseState},n.prototype.stateInNumericEntity=function(h){h===l.Semi?this.emitNumericEntity(!0):s(h)?(this.entityResult=10*this.entityResult+(h-l.Zero),this.entityExcess++):(this.allowLegacyEntity()?this.emitNumericEntity(!1):this.state=this.baseState,this.index--)},n.prototype.stateInHexEntity=function(h){h===l.Semi?this.emitNumericEntity(!0):s(h)?(this.entityResult=16*this.entityResult+(h-l.Zero),this.entityExcess++):function(g){return g>=l.UpperA&&g<=l.UpperF||g>=l.LowerA&&g<=l.LowerF}(h)?(this.entityResult=16*this.entityResult+((32|h)-l.LowerA+10),this.entityExcess++):(this.allowLegacyEntity()?this.emitNumericEntity(!1):this.state=this.baseState,this.index--)},n.prototype.allowLegacyEntity=function(){return!this.xmlMode&&(this.baseState===c.Text||this.baseState===c.InSpecialTag)},n.prototype.cleanup=function(){this.running&&this.sectionStart!==this.index&&(this.state===c.Text||this.state===c.InSpecialTag&&this.sequenceIndex===0?(this.cbs.ontext(this.sectionStart,this.index),this.sectionStart=this.index):this.state!==c.InAttributeValueDq&&this.state!==c.InAttributeValueSq&&this.state!==c.InAttributeValueNq||(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=this.index))},n.prototype.shouldContinue=function(){return this.index<this.buffer.length+this.offset&&this.running},n.prototype.parse=function(){for(;this.shouldContinue();){var h=this.buffer.charCodeAt(this.index-this.offset);switch(this.state){case c.Text:this.stateText(h);break;case c.SpecialStartSequence:this.stateSpecialStartSequence(h);break;case c.InSpecialTag:this.stateInSpecialTag(h);break;case c.CDATASequence:this.stateCDATASequence(h);break;case c.InAttributeValueDq:this.stateInAttributeValueDoubleQuotes(h);break;case c.InAttributeName:this.stateInAttributeName(h);break;case c.InCommentLike:this.stateInCommentLike(h);break;case c.InSpecialComment:this.stateInSpecialComment(h);break;case c.BeforeAttributeName:this.stateBeforeAttributeName(h);break;case c.InTagName:this.stateInTagName(h);break;case c.InClosingTagName:this.stateInClosingTagName(h);break;case c.BeforeTagName:this.stateBeforeTagName(h);break;case c.AfterAttributeName:this.stateAfterAttributeName(h);break;case c.InAttributeValueSq:this.stateInAttributeValueSingleQuotes(h);break;case c.BeforeAttributeValue:this.stateBeforeAttributeValue(h);break;case c.BeforeClosingTagName:this.stateBeforeClosingTagName(h);break;case c.AfterClosingTagName:this.stateAfterClosingTagName(h);break;case c.BeforeSpecialS:this.stateBeforeSpecialS(h);break;case c.InAttributeValueNq:this.stateInAttributeValueNoQuotes(h);break;case c.InSelfClosingTag:this.stateInSelfClosingTag(h);break;case c.InDeclaration:this.stateInDeclaration(h);break;case c.BeforeDeclaration:this.stateBeforeDeclaration(h);break;case c.BeforeComment:this.stateBeforeComment(h);break;case c.InProcessingInstruction:this.stateInProcessingInstruction(h);break;case c.InNamedEntity:this.stateInNamedEntity(h);break;case c.BeforeEntity:this.stateBeforeEntity(h);break;case c.InHexEntity:this.stateInHexEntity(h);break;case c.InNumericEntity:this.stateInNumericEntity(h);break;default:this.stateBeforeNumericEntity(h)}this.index++}this.cleanup()},n.prototype.finish=function(){this.state===c.InNamedEntity&&this.emitNamedEntity(),this.sectionStart<this.index&&this.handleTrailingData(),this.cbs.onend()},n.prototype.handleTrailingData=function(){var h=this.buffer.length+this.offset;this.state===c.InCommentLike?this.currentSequence===i.CdataEnd?this.cbs.oncdata(this.sectionStart,h,0):this.cbs.oncomment(this.sectionStart,h,0):this.state===c.InNumericEntity&&this.allowLegacyEntity()||this.state===c.InHexEntity&&this.allowLegacyEntity()?this.emitNumericEntity(!1):this.state===c.InTagName||this.state===c.BeforeAttributeName||this.state===c.BeforeAttributeValue||this.state===c.AfterAttributeName||this.state===c.InAttributeName||this.state===c.InAttributeValueSq||this.state===c.InAttributeValueDq||this.state===c.InAttributeValueNq||this.state===c.InClosingTagName||this.cbs.ontext(this.sectionStart,h)},n.prototype.emitPartial=function(h,g){this.baseState!==c.Text&&this.baseState!==c.InSpecialTag?this.cbs.onattribdata(h,g):this.cbs.ontext(h,g)},n.prototype.emitCodePoint=function(h){this.baseState!==c.Text&&this.baseState!==c.InSpecialTag?this.cbs.onattribentity(h):this.cbs.ontextentity(h)},n}();t.default=o},3719:function(v,t,e){"use strict";var l=this&&this.__createBinding||(Object.create?function(w,u,y,r){r===void 0&&(r=y);var p=Object.getOwnPropertyDescriptor(u,y);p&&!("get"in p?!u.__esModule:p.writable||p.configurable)||(p={enumerable:!0,get:function(){return u[y]}}),Object.defineProperty(w,r,p)}:function(w,u,y,r){r===void 0&&(r=y),w[r]=u[y]}),c=this&&this.__setModuleDefault||(Object.create?function(w,u){Object.defineProperty(w,"default",{enumerable:!0,value:u})}:function(w,u){w.default=u}),A=this&&this.__importStar||function(w){if(w&&w.__esModule)return w;var u={};if(w!=null)for(var y in w)y!=="default"&&Object.prototype.hasOwnProperty.call(w,y)&&l(u,w,y);return c(u,w),u},a=this&&this.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(t,"__esModule",{value:!0}),t.DomUtils=t.parseFeed=t.getFeed=t.ElementType=t.Tokenizer=t.createDomStream=t.parseDOM=t.parseDocument=t.DefaultHandler=t.DomHandler=t.Parser=void 0;var d=e(763),m=e(763);Object.defineProperty(t,"Parser",{enumerable:!0,get:function(){return m.Parser}});var s=e(7915),i=e(7915);function o(w,u){var y=new s.DomHandler(void 0,u);return new d.Parser(y,u).end(w),y.root}function n(w,u){return o(w,u).children}Object.defineProperty(t,"DomHandler",{enumerable:!0,get:function(){return i.DomHandler}}),Object.defineProperty(t,"DefaultHandler",{enumerable:!0,get:function(){return i.DomHandler}}),t.parseDocument=o,t.parseDOM=n,t.createDomStream=function(w,u,y){var r=new s.DomHandler(w,u,y);return new d.Parser(r,u)};var h=e(9889);Object.defineProperty(t,"Tokenizer",{enumerable:!0,get:function(){return a(h).default}}),t.ElementType=A(e(9960));var g=e(9432),f=e(9432);Object.defineProperty(t,"getFeed",{enumerable:!0,get:function(){return f.getFeed}});var C={xmlMode:!0};t.parseFeed=function(w,u){return u===void 0&&(u=C),(0,g.getFeed)(n(w,u))},t.DomUtils=A(e(9432))},9430:function(v,t){var e,l;(l=typeof(e=function(){return function(c){function A(x){return x===" "||x==="	"||x===`
`||x==="\f"||x==="\r"}function a(x){var I,M=x.exec(c.substring(y));if(M)return I=M[0],y+=I.length,I}for(var d,m,s,i,o,n=c.length,h=/^[ \t\n\r\u000c]+/,g=/^[, \t\n\r\u000c]+/,f=/^[^ \t\n\r\u000c]+/,C=/[,]+$/,w=/^\d+$/,u=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,y=0,r=[];;){if(a(g),y>=n)return r;d=a(f),m=[],d.slice(-1)===","?(d=d.replace(C,""),b()):p()}function p(){for(a(h),s="",i="in descriptor";;){if(o=c.charAt(y),i==="in descriptor")if(A(o))s&&(m.push(s),s="",i="after descriptor");else{if(o===",")return y+=1,s&&m.push(s),void b();if(o==="(")s+=o,i="in parens";else{if(o==="")return s&&m.push(s),void b();s+=o}}else if(i==="in parens")if(o===")")s+=o,i="in descriptor";else{if(o==="")return m.push(s),void b();s+=o}else if(i==="after descriptor"&&!A(o)){if(o==="")return void b();i="in descriptor",y-=1}y+=1}}function b(){var x,I,M,T,z,O,P,L,D,U=!1,G={};for(T=0;T<m.length;T++)O=(z=m[T])[z.length-1],P=z.substring(0,z.length-1),L=parseInt(P,10),D=parseFloat(P),w.test(P)&&O==="w"?((x||I)&&(U=!0),L===0?U=!0:x=L):u.test(P)&&O==="x"?((x||I||M)&&(U=!0),D<0?U=!0:I=D):w.test(P)&&O==="h"?((M||I)&&(U=!0),L===0?U=!0:M=L):U=!0;U?console&&console.log&&console.log("Invalid srcset descriptor found in '"+c+"' at '"+z+"'."):(G.url=d,x&&(G.w=x),I&&(G.d=I),M&&(G.h=M),r.push(G))}}})=="function"?e.apply(t,[]):e)===void 0||(v.exports=l)},4241:v=>{var t=String,e=function(){return{isColorSupported:!1,reset:t,bold:t,dim:t,italic:t,underline:t,inverse:t,hidden:t,strikethrough:t,black:t,red:t,green:t,yellow:t,blue:t,magenta:t,cyan:t,white:t,gray:t,bgBlack:t,bgRed:t,bgGreen:t,bgYellow:t,bgBlue:t,bgMagenta:t,bgCyan:t,bgWhite:t}};v.exports=e(),v.exports.createColors=e},1353:(v,t,e)=>{"use strict";let l=e(1019);class c extends l{constructor(a){super(a),this.type="atrule"}append(...a){return this.proxyOf.nodes||(this.nodes=[]),super.append(...a)}prepend(...a){return this.proxyOf.nodes||(this.nodes=[]),super.prepend(...a)}}v.exports=c,c.default=c,l.registerAtRule(c)},9932:(v,t,e)=>{"use strict";let l=e(5631);class c extends l{constructor(a){super(a),this.type="comment"}}v.exports=c,c.default=c},1019:(v,t,e)=>{"use strict";let l,c,A,a,{isClean:d,my:m}=e(5513),s=e(4258),i=e(9932),o=e(5631);function n(f){return f.map(C=>(C.nodes&&(C.nodes=n(C.nodes)),delete C.source,C))}function h(f){if(f[d]=!1,f.proxyOf.nodes)for(let C of f.proxyOf.nodes)h(C)}class g extends o{append(...C){for(let w of C){let u=this.normalize(w,this.last);for(let y of u)this.proxyOf.nodes.push(y)}return this.markDirty(),this}cleanRaws(C){if(super.cleanRaws(C),this.nodes)for(let w of this.nodes)w.cleanRaws(C)}each(C){if(!this.proxyOf.nodes)return;let w,u,y=this.getIterator();for(;this.indexes[y]<this.proxyOf.nodes.length&&(w=this.indexes[y],u=C(this.proxyOf.nodes[w],w),u!==!1);)this.indexes[y]+=1;return delete this.indexes[y],u}every(C){return this.nodes.every(C)}getIterator(){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach+=1;let C=this.lastEach;return this.indexes[C]=0,C}getProxyProcessor(){return{get:(C,w)=>w==="proxyOf"?C:C[w]?w==="each"||typeof w=="string"&&w.startsWith("walk")?(...u)=>C[w](...u.map(y=>typeof y=="function"?(r,p)=>y(r.toProxy(),p):y)):w==="every"||w==="some"?u=>C[w]((y,...r)=>u(y.toProxy(),...r)):w==="root"?()=>C.root().toProxy():w==="nodes"?C.nodes.map(u=>u.toProxy()):w==="first"||w==="last"?C[w].toProxy():C[w]:C[w],set:(C,w,u)=>(C[w]===u||(C[w]=u,w!=="name"&&w!=="params"&&w!=="selector"||C.markDirty()),!0)}}index(C){return typeof C=="number"?C:(C.proxyOf&&(C=C.proxyOf),this.proxyOf.nodes.indexOf(C))}insertAfter(C,w){let u,y=this.index(C),r=this.normalize(w,this.proxyOf.nodes[y]).reverse();y=this.index(C);for(let p of r)this.proxyOf.nodes.splice(y+1,0,p);for(let p in this.indexes)u=this.indexes[p],y<u&&(this.indexes[p]=u+r.length);return this.markDirty(),this}insertBefore(C,w){let u,y=this.index(C),r=y===0&&"prepend",p=this.normalize(w,this.proxyOf.nodes[y],r).reverse();y=this.index(C);for(let b of p)this.proxyOf.nodes.splice(y,0,b);for(let b in this.indexes)u=this.indexes[b],y<=u&&(this.indexes[b]=u+p.length);return this.markDirty(),this}normalize(C,w){if(typeof C=="string")C=n(l(C).nodes);else if(Array.isArray(C)){C=C.slice(0);for(let u of C)u.parent&&u.parent.removeChild(u,"ignore")}else if(C.type==="root"&&this.type!=="document"){C=C.nodes.slice(0);for(let u of C)u.parent&&u.parent.removeChild(u,"ignore")}else if(C.type)C=[C];else if(C.prop){if(C.value===void 0)throw new Error("Value field is missed in node creation");typeof C.value!="string"&&(C.value=String(C.value)),C=[new s(C)]}else if(C.selector)C=[new c(C)];else if(C.name)C=[new A(C)];else{if(!C.text)throw new Error("Unknown node type in node creation");C=[new i(C)]}return C.map(u=>(u[m]||g.rebuild(u),(u=u.proxyOf).parent&&u.parent.removeChild(u),u[d]&&h(u),u.raws.before===void 0&&w&&w.raws.before!==void 0&&(u.raws.before=w.raws.before.replace(/\S/g,"")),u.parent=this.proxyOf,u))}prepend(...C){C=C.reverse();for(let w of C){let u=this.normalize(w,this.first,"prepend").reverse();for(let y of u)this.proxyOf.nodes.unshift(y);for(let y in this.indexes)this.indexes[y]=this.indexes[y]+u.length}return this.markDirty(),this}push(C){return C.parent=this,this.proxyOf.nodes.push(C),this}removeAll(){for(let C of this.proxyOf.nodes)C.parent=void 0;return this.proxyOf.nodes=[],this.markDirty(),this}removeChild(C){let w;C=this.index(C),this.proxyOf.nodes[C].parent=void 0,this.proxyOf.nodes.splice(C,1);for(let u in this.indexes)w=this.indexes[u],w>=C&&(this.indexes[u]=w-1);return this.markDirty(),this}replaceValues(C,w,u){return u||(u=w,w={}),this.walkDecls(y=>{w.props&&!w.props.includes(y.prop)||w.fast&&!y.value.includes(w.fast)||(y.value=y.value.replace(C,u))}),this.markDirty(),this}some(C){return this.nodes.some(C)}walk(C){return this.each((w,u)=>{let y;try{y=C(w,u)}catch(r){throw w.addToError(r)}return y!==!1&&w.walk&&(y=w.walk(C)),y})}walkAtRules(C,w){return w?C instanceof RegExp?this.walk((u,y)=>{if(u.type==="atrule"&&C.test(u.name))return w(u,y)}):this.walk((u,y)=>{if(u.type==="atrule"&&u.name===C)return w(u,y)}):(w=C,this.walk((u,y)=>{if(u.type==="atrule")return w(u,y)}))}walkComments(C){return this.walk((w,u)=>{if(w.type==="comment")return C(w,u)})}walkDecls(C,w){return w?C instanceof RegExp?this.walk((u,y)=>{if(u.type==="decl"&&C.test(u.prop))return w(u,y)}):this.walk((u,y)=>{if(u.type==="decl"&&u.prop===C)return w(u,y)}):(w=C,this.walk((u,y)=>{if(u.type==="decl")return w(u,y)}))}walkRules(C,w){return w?C instanceof RegExp?this.walk((u,y)=>{if(u.type==="rule"&&C.test(u.selector))return w(u,y)}):this.walk((u,y)=>{if(u.type==="rule"&&u.selector===C)return w(u,y)}):(w=C,this.walk((u,y)=>{if(u.type==="rule")return w(u,y)}))}get first(){if(this.proxyOf.nodes)return this.proxyOf.nodes[0]}get last(){if(this.proxyOf.nodes)return this.proxyOf.nodes[this.proxyOf.nodes.length-1]}}g.registerParse=f=>{l=f},g.registerRule=f=>{c=f},g.registerAtRule=f=>{A=f},g.registerRoot=f=>{a=f},v.exports=g,g.default=g,g.rebuild=f=>{f.type==="atrule"?Object.setPrototypeOf(f,A.prototype):f.type==="rule"?Object.setPrototypeOf(f,c.prototype):f.type==="decl"?Object.setPrototypeOf(f,s.prototype):f.type==="comment"?Object.setPrototypeOf(f,i.prototype):f.type==="root"&&Object.setPrototypeOf(f,a.prototype),f[m]=!0,f.nodes&&f.nodes.forEach(C=>{g.rebuild(C)})}},2671:(v,t,e)=>{"use strict";let l=e(4241),c=e(2868);class A extends Error{constructor(d,m,s,i,o,n){super(d),this.name="CssSyntaxError",this.reason=d,o&&(this.file=o),i&&(this.source=i),n&&(this.plugin=n),m!==void 0&&s!==void 0&&(typeof m=="number"?(this.line=m,this.column=s):(this.line=m.line,this.column=m.column,this.endLine=s.line,this.endColumn=s.column)),this.setMessage(),Error.captureStackTrace&&Error.captureStackTrace(this,A)}setMessage(){this.message=this.plugin?this.plugin+": ":"",this.message+=this.file?this.file:"<css input>",this.line!==void 0&&(this.message+=":"+this.line+":"+this.column),this.message+=": "+this.reason}showSourceCode(d){if(!this.source)return"";let m=this.source;d==null&&(d=l.isColorSupported),c&&d&&(m=c(m));let s,i,o=m.split(/\r?\n/),n=Math.max(this.line-3,0),h=Math.min(this.line+2,o.length),g=String(h).length;if(d){let{bold:f,gray:C,red:w}=l.createColors(!0);s=u=>f(w(u)),i=u=>C(u)}else s=i=f=>f;return o.slice(n,h).map((f,C)=>{let w=n+1+C,u=" "+(" "+w).slice(-g)+" | ";if(w===this.line){let y=i(u.replace(/\d/g," "))+f.slice(0,this.column-1).replace(/[^\t]/g," ");return s(">")+i(u)+f+`
 `+y+s("^")}return" "+i(u)+f}).join(`
`)}toString(){let d=this.showSourceCode();return d&&(d=`

`+d+`
`),this.name+": "+this.message+d}}v.exports=A,A.default=A},4258:(v,t,e)=>{"use strict";let l=e(5631);class c extends l{constructor(a){a&&a.value!==void 0&&typeof a.value!="string"&&(a={...a,value:String(a.value)}),super(a),this.type="decl"}get variable(){return this.prop.startsWith("--")||this.prop[0]==="$"}}v.exports=c,c.default=c},6461:(v,t,e)=>{"use strict";let l,c,A=e(1019);class a extends A{constructor(m){super({type:"document",...m}),this.nodes||(this.nodes=[])}toResult(m={}){return new l(new c,this,m).stringify()}}a.registerLazyResult=d=>{l=d},a.registerProcessor=d=>{c=d},v.exports=a,a.default=a},250:(v,t,e)=>{"use strict";let l=e(4258),c=e(7981),A=e(9932),a=e(1353),d=e(5995),m=e(1025),s=e(1675);function i(o,n){if(Array.isArray(o))return o.map(f=>i(f));let{inputs:h,...g}=o;if(h){n=[];for(let f of h){let C={...f,__proto__:d.prototype};C.map&&(C.map={...C.map,__proto__:c.prototype}),n.push(C)}}if(g.nodes&&(g.nodes=o.nodes.map(f=>i(f,n))),g.source){let{inputId:f,...C}=g.source;g.source=C,f!=null&&(g.source.input=n[f])}if(g.type==="root")return new m(g);if(g.type==="decl")return new l(g);if(g.type==="rule")return new s(g);if(g.type==="comment")return new A(g);if(g.type==="atrule")return new a(g);throw new Error("Unknown node type: "+o.type)}v.exports=i,i.default=i},5995:(v,t,e)=>{"use strict";let{SourceMapConsumer:l,SourceMapGenerator:c}=e(209),{fileURLToPath:A,pathToFileURL:a}=e(7414),{isAbsolute:d,resolve:m}=e(9830),{nanoid:s}=e(2961),i=e(2868),o=e(2671),n=e(7981),h=Symbol("fromOffsetCache"),g=Boolean(l&&c),f=Boolean(m&&d);class C{constructor(u,y={}){if(u==null||typeof u=="object"&&!u.toString)throw new Error(`PostCSS received ${u} instead of CSS string`);if(this.css=u.toString(),this.css[0]==="\uFEFF"||this.css[0]==="\uFFFE"?(this.hasBOM=!0,this.css=this.css.slice(1)):this.hasBOM=!1,y.from&&(!f||/^\w+:\/\//.test(y.from)||d(y.from)?this.file=y.from:this.file=m(y.from)),f&&g){let r=new n(this.css,y);if(r.text){this.map=r;let p=r.consumer().file;!this.file&&p&&(this.file=this.mapResolve(p))}}this.file||(this.id="<input css "+s(6)+">"),this.map&&(this.map.file=this.from)}error(u,y,r,p={}){let b,x,I;if(y&&typeof y=="object"){let T=y,z=r;if(typeof T.offset=="number"){let O=this.fromOffset(T.offset);y=O.line,r=O.col}else y=T.line,r=T.column;if(typeof z.offset=="number"){let O=this.fromOffset(z.offset);x=O.line,I=O.col}else x=z.line,I=z.column}else if(!r){let T=this.fromOffset(y);y=T.line,r=T.col}let M=this.origin(y,r,x,I);return b=M?new o(u,M.endLine===void 0?M.line:{column:M.column,line:M.line},M.endLine===void 0?M.column:{column:M.endColumn,line:M.endLine},M.source,M.file,p.plugin):new o(u,x===void 0?y:{column:r,line:y},x===void 0?r:{column:I,line:x},this.css,this.file,p.plugin),b.input={column:r,endColumn:I,endLine:x,line:y,source:this.css},this.file&&(a&&(b.input.url=a(this.file).toString()),b.input.file=this.file),b}fromOffset(u){let y,r;if(this[h])r=this[h];else{let b=this.css.split(`
`);r=new Array(b.length);let x=0;for(let I=0,M=b.length;I<M;I++)r[I]=x,x+=b[I].length+1;this[h]=r}y=r[r.length-1];let p=0;if(u>=y)p=r.length-1;else{let b,x=r.length-2;for(;p<x;)if(b=p+(x-p>>1),u<r[b])x=b-1;else{if(!(u>=r[b+1])){p=b;break}p=b+1}}return{col:u-r[p]+1,line:p+1}}mapResolve(u){return/^\w+:\/\//.test(u)?u:m(this.map.consumer().sourceRoot||this.map.root||".",u)}origin(u,y,r,p){if(!this.map)return!1;let b,x,I=this.map.consumer(),M=I.originalPositionFor({column:y,line:u});if(!M.source)return!1;typeof r=="number"&&(b=I.originalPositionFor({column:p,line:r})),x=d(M.source)?a(M.source):new URL(M.source,this.map.consumer().sourceRoot||a(this.map.mapFile));let T={column:M.column,endColumn:b&&b.column,endLine:b&&b.line,line:M.line,url:x.toString()};if(x.protocol==="file:"){if(!A)throw new Error("file: protocol is not available in this PostCSS build");T.file=A(x)}let z=I.sourceContentFor(M.source);return z&&(T.source=z),T}toJSON(){let u={};for(let y of["hasBOM","css","file","id"])this[y]!=null&&(u[y]=this[y]);return this.map&&(u.map={...this.map},u.map.consumerCache&&(u.map.consumerCache=void 0)),u}get from(){return this.file||this.id}}v.exports=C,C.default=C,i&&i.registerInput&&i.registerInput(C)},1939:(v,t,e)=>{"use strict";let{isClean:l,my:c}=e(5513),A=e(8505),a=e(7088),d=e(1019),m=e(6461),s=(e(2448),e(3632)),i=e(6939),o=e(1025);const n={atrule:"AtRule",comment:"Comment",decl:"Declaration",document:"Document",root:"Root",rule:"Rule"},h={AtRule:!0,AtRuleExit:!0,Comment:!0,CommentExit:!0,Declaration:!0,DeclarationExit:!0,Document:!0,DocumentExit:!0,Once:!0,OnceExit:!0,postcssPlugin:!0,prepare:!0,Root:!0,RootExit:!0,Rule:!0,RuleExit:!0},g={Once:!0,postcssPlugin:!0,prepare:!0},f=0;function C(b){return typeof b=="object"&&typeof b.then=="function"}function w(b){let x=!1,I=n[b.type];return b.type==="decl"?x=b.prop.toLowerCase():b.type==="atrule"&&(x=b.name.toLowerCase()),x&&b.append?[I,I+"-"+x,f,I+"Exit",I+"Exit-"+x]:x?[I,I+"-"+x,I+"Exit",I+"Exit-"+x]:b.append?[I,f,I+"Exit"]:[I,I+"Exit"]}function u(b){let x;return x=b.type==="document"?["Document",f,"DocumentExit"]:b.type==="root"?["Root",f,"RootExit"]:w(b),{eventIndex:0,events:x,iterator:0,node:b,visitorIndex:0,visitors:[]}}function y(b){return b[l]=!1,b.nodes&&b.nodes.forEach(x=>y(x)),b}let r={};class p{constructor(x,I,M){let T;if(this.stringified=!1,this.processed=!1,typeof I!="object"||I===null||I.type!=="root"&&I.type!=="document")if(I instanceof p||I instanceof s)T=y(I.root),I.map&&(M.map===void 0&&(M.map={}),M.map.inline||(M.map.inline=!1),M.map.prev=I.map);else{let z=i;M.syntax&&(z=M.syntax.parse),M.parser&&(z=M.parser),z.parse&&(z=z.parse);try{T=z(I,M)}catch(O){this.processed=!0,this.error=O}T&&!T[c]&&d.rebuild(T)}else T=y(I);this.result=new s(x,T,M),this.helpers={...r,postcss:r,result:this.result},this.plugins=this.processor.plugins.map(z=>typeof z=="object"&&z.prepare?{...z,...z.prepare(this.result)}:z)}async(){return this.error?Promise.reject(this.error):this.processed?Promise.resolve(this.result):(this.processing||(this.processing=this.runAsync()),this.processing)}catch(x){return this.async().catch(x)}finally(x){return this.async().then(x,x)}getAsyncError(){throw new Error("Use process(css).then(cb) to work with async plugins")}handleError(x,I){let M=this.result.lastPlugin;try{I&&I.addToError(x),this.error=x,x.name!=="CssSyntaxError"||x.plugin?M.postcssVersion:(x.plugin=M.postcssPlugin,x.setMessage())}catch(T){console&&console.error&&console.error(T)}return x}prepareVisitors(){this.listeners={};let x=(I,M,T)=>{this.listeners[M]||(this.listeners[M]=[]),this.listeners[M].push([I,T])};for(let I of this.plugins)if(typeof I=="object")for(let M in I){if(!h[M]&&/^[A-Z]/.test(M))throw new Error(`Unknown event ${M} in ${I.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);if(!g[M])if(typeof I[M]=="object")for(let T in I[M])x(I,T==="*"?M:M+"-"+T.toLowerCase(),I[M][T]);else typeof I[M]=="function"&&x(I,M,I[M])}this.hasListener=Object.keys(this.listeners).length>0}async runAsync(){this.plugin=0;for(let x=0;x<this.plugins.length;x++){let I=this.plugins[x],M=this.runOnRoot(I);if(C(M))try{await M}catch(T){throw this.handleError(T)}}if(this.prepareVisitors(),this.hasListener){let x=this.result.root;for(;!x[l];){x[l]=!0;let I=[u(x)];for(;I.length>0;){let M=this.visitTick(I);if(C(M))try{await M}catch(T){let z=I[I.length-1].node;throw this.handleError(T,z)}}}if(this.listeners.OnceExit)for(let[I,M]of this.listeners.OnceExit){this.result.lastPlugin=I;try{if(x.type==="document"){let T=x.nodes.map(z=>M(z,this.helpers));await Promise.all(T)}else await M(x,this.helpers)}catch(T){throw this.handleError(T)}}}return this.processed=!0,this.stringify()}runOnRoot(x){this.result.lastPlugin=x;try{if(typeof x=="object"&&x.Once){if(this.result.root.type==="document"){let I=this.result.root.nodes.map(M=>x.Once(M,this.helpers));return C(I[0])?Promise.all(I):I}return x.Once(this.result.root,this.helpers)}if(typeof x=="function")return x(this.result.root,this.result)}catch(I){throw this.handleError(I)}}stringify(){if(this.error)throw this.error;if(this.stringified)return this.result;this.stringified=!0,this.sync();let x=this.result.opts,I=a;x.syntax&&(I=x.syntax.stringify),x.stringifier&&(I=x.stringifier),I.stringify&&(I=I.stringify);let M=new A(I,this.result.root,this.result.opts).generate();return this.result.css=M[0],this.result.map=M[1],this.result}sync(){if(this.error)throw this.error;if(this.processed)return this.result;if(this.processed=!0,this.processing)throw this.getAsyncError();for(let x of this.plugins)if(C(this.runOnRoot(x)))throw this.getAsyncError();if(this.prepareVisitors(),this.hasListener){let x=this.result.root;for(;!x[l];)x[l]=!0,this.walkSync(x);if(this.listeners.OnceExit)if(x.type==="document")for(let I of x.nodes)this.visitSync(this.listeners.OnceExit,I);else this.visitSync(this.listeners.OnceExit,x)}return this.result}then(x,I){return this.async().then(x,I)}toString(){return this.css}visitSync(x,I){for(let[M,T]of x){let z;this.result.lastPlugin=M;try{z=T(I,this.helpers)}catch(O){throw this.handleError(O,I.proxyOf)}if(I.type!=="root"&&I.type!=="document"&&!I.parent)return!0;if(C(z))throw this.getAsyncError()}}visitTick(x){let I=x[x.length-1],{node:M,visitors:T}=I;if(M.type!=="root"&&M.type!=="document"&&!M.parent)return void x.pop();if(T.length>0&&I.visitorIndex<T.length){let[O,P]=T[I.visitorIndex];I.visitorIndex+=1,I.visitorIndex===T.length&&(I.visitors=[],I.visitorIndex=0),this.result.lastPlugin=O;try{return P(M.toProxy(),this.helpers)}catch(L){throw this.handleError(L,M)}}if(I.iterator!==0){let O,P=I.iterator;for(;O=M.nodes[M.indexes[P]];)if(M.indexes[P]+=1,!O[l])return O[l]=!0,void x.push(u(O));I.iterator=0,delete M.indexes[P]}let z=I.events;for(;I.eventIndex<z.length;){let O=z[I.eventIndex];if(I.eventIndex+=1,O===f)return void(M.nodes&&M.nodes.length&&(M[l]=!0,I.iterator=M.getIterator()));if(this.listeners[O])return void(I.visitors=this.listeners[O])}x.pop()}walkSync(x){x[l]=!0;let I=w(x);for(let M of I)if(M===f)x.nodes&&x.each(T=>{T[l]||this.walkSync(T)});else{let T=this.listeners[M];if(T&&this.visitSync(T,x.toProxy()))return}}warnings(){return this.sync().warnings()}get content(){return this.stringify().content}get css(){return this.stringify().css}get map(){return this.stringify().map}get messages(){return this.sync().messages}get opts(){return this.result.opts}get processor(){return this.result.processor}get root(){return this.sync().root}get[Symbol.toStringTag](){return"LazyResult"}}p.registerPostcss=b=>{r=b},v.exports=p,p.default=p,o.registerLazyResult(p),m.registerLazyResult(p)},4715:v=>{"use strict";let t={comma:e=>t.split(e,[","],!0),space:e=>t.split(e,[" ",`
`,"	"]),split(e,l,c){let A=[],a="",d=!1,m=0,s=!1,i="",o=!1;for(let n of e)o?o=!1:n==="\\"?o=!0:s?n===i&&(s=!1):n==='"'||n==="'"?(s=!0,i=n):n==="("?m+=1:n===")"?m>0&&(m-=1):m===0&&l.includes(n)&&(d=!0),d?(a!==""&&A.push(a.trim()),a="",d=!1):a+=n;return(c||a!=="")&&A.push(a.trim()),A}};v.exports=t,t.default=t},8505:(v,t,e)=>{"use strict";let{SourceMapConsumer:l,SourceMapGenerator:c}=e(209),{dirname:A,relative:a,resolve:d,sep:m}=e(9830),{pathToFileURL:s}=e(7414),i=e(5995),o=Boolean(l&&c),n=Boolean(A&&d&&a&&m);v.exports=class{constructor(h,g,f,C){this.stringify=h,this.mapOpts=f.map||{},this.root=g,this.opts=f,this.css=C,this.originalCSS=C,this.usesFileUrls=!this.mapOpts.from&&this.mapOpts.absolute,this.memoizedFileURLs=new Map,this.memoizedPaths=new Map,this.memoizedURLs=new Map}addAnnotation(){let h;h=this.isInline()?"data:application/json;base64,"+this.toBase64(this.map.toString()):typeof this.mapOpts.annotation=="string"?this.mapOpts.annotation:typeof this.mapOpts.annotation=="function"?this.mapOpts.annotation(this.opts.to,this.root):this.outputFile()+".map";let g=`
`;this.css.includes(`\r
`)&&(g=`\r
`),this.css+=g+"/*# sourceMappingURL="+h+" */"}applyPrevMaps(){for(let h of this.previous()){let g,f=this.toUrl(this.path(h.file)),C=h.root||A(h.file);this.mapOpts.sourcesContent===!1?(g=new l(h.text),g.sourcesContent&&(g.sourcesContent=g.sourcesContent.map(()=>null))):g=h.consumer(),this.map.applySourceMap(g,f,this.toUrl(this.path(C)))}}clearAnnotation(){if(this.mapOpts.annotation!==!1)if(this.root){let h;for(let g=this.root.nodes.length-1;g>=0;g--)h=this.root.nodes[g],h.type==="comment"&&h.text.indexOf("# sourceMappingURL=")===0&&this.root.removeChild(g)}else this.css&&(this.css=this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm,""))}generate(){if(this.clearAnnotation(),n&&o&&this.isMap())return this.generateMap();{let h="";return this.stringify(this.root,g=>{h+=g}),[h]}}generateMap(){if(this.root)this.generateString();else if(this.previous().length===1){let h=this.previous()[0].consumer();h.file=this.outputFile(),this.map=c.fromSourceMap(h)}else this.map=new c({file:this.outputFile()}),this.map.addMapping({generated:{column:0,line:1},original:{column:0,line:1},source:this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>"});return this.isSourcesContent()&&this.setSourcesContent(),this.root&&this.previous().length>0&&this.applyPrevMaps(),this.isAnnotation()&&this.addAnnotation(),this.isInline()?[this.css]:[this.css,this.map]}generateString(){this.css="",this.map=new c({file:this.outputFile()});let h,g,f=1,C=1,w="<no source>",u={generated:{column:0,line:0},original:{column:0,line:0},source:""};this.stringify(this.root,(y,r,p)=>{if(this.css+=y,r&&p!=="end"&&(u.generated.line=f,u.generated.column=C-1,r.source&&r.source.start?(u.source=this.sourcePath(r),u.original.line=r.source.start.line,u.original.column=r.source.start.column-1,this.map.addMapping(u)):(u.source=w,u.original.line=1,u.original.column=0,this.map.addMapping(u))),h=y.match(/\n/g),h?(f+=h.length,g=y.lastIndexOf(`
`),C=y.length-g):C+=y.length,r&&p!=="start"){let b=r.parent||{raws:{}};(r.type==="decl"||r.type==="atrule"&&!r.nodes)&&r===b.last&&!b.raws.semicolon||(r.source&&r.source.end?(u.source=this.sourcePath(r),u.original.line=r.source.end.line,u.original.column=r.source.end.column-1,u.generated.line=f,u.generated.column=C-2,this.map.addMapping(u)):(u.source=w,u.original.line=1,u.original.column=0,u.generated.line=f,u.generated.column=C-1,this.map.addMapping(u)))}})}isAnnotation(){return!!this.isInline()||(this.mapOpts.annotation!==void 0?this.mapOpts.annotation:!this.previous().length||this.previous().some(h=>h.annotation))}isInline(){if(this.mapOpts.inline!==void 0)return this.mapOpts.inline;let h=this.mapOpts.annotation;return(h===void 0||h===!0)&&(!this.previous().length||this.previous().some(g=>g.inline))}isMap(){return this.opts.map!==void 0?!!this.opts.map:this.previous().length>0}isSourcesContent(){return this.mapOpts.sourcesContent!==void 0?this.mapOpts.sourcesContent:!this.previous().length||this.previous().some(h=>h.withContent())}outputFile(){return this.opts.to?this.path(this.opts.to):this.opts.from?this.path(this.opts.from):"to.css"}path(h){if(this.mapOpts.absolute||h.charCodeAt(0)===60||/^\w+:\/\//.test(h))return h;let g=this.memoizedPaths.get(h);if(g)return g;let f=this.opts.to?A(this.opts.to):".";typeof this.mapOpts.annotation=="string"&&(f=A(d(f,this.mapOpts.annotation)));let C=a(f,h);return this.memoizedPaths.set(h,C),C}previous(){if(!this.previousMaps)if(this.previousMaps=[],this.root)this.root.walk(h=>{if(h.source&&h.source.input.map){let g=h.source.input.map;this.previousMaps.includes(g)||this.previousMaps.push(g)}});else{let h=new i(this.originalCSS,this.opts);h.map&&this.previousMaps.push(h.map)}return this.previousMaps}setSourcesContent(){let h={};if(this.root)this.root.walk(g=>{if(g.source){let f=g.source.input.from;if(f&&!h[f]){h[f]=!0;let C=this.usesFileUrls?this.toFileUrl(f):this.toUrl(this.path(f));this.map.setSourceContent(C,g.source.input.css)}}});else if(this.css){let g=this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>";this.map.setSourceContent(g,this.css)}}sourcePath(h){return this.mapOpts.from?this.toUrl(this.mapOpts.from):this.usesFileUrls?this.toFileUrl(h.source.input.from):this.toUrl(this.path(h.source.input.from))}toBase64(h){return Buffer?Buffer.from(h).toString("base64"):window.btoa(unescape(encodeURIComponent(h)))}toFileUrl(h){let g=this.memoizedFileURLs.get(h);if(g)return g;if(s){let f=s(h).toString();return this.memoizedFileURLs.set(h,f),f}throw new Error("`map.absolute` option is not available in this PostCSS build")}toUrl(h){let g=this.memoizedURLs.get(h);if(g)return g;m==="\\"&&(h=h.replace(/\\/g,"/"));let f=encodeURI(h).replace(/[#?]/g,encodeURIComponent);return this.memoizedURLs.set(h,f),f}}},7647:(v,t,e)=>{"use strict";let l=e(8505),c=e(7088),A=(e(2448),e(6939));const a=e(3632);class d{constructor(s,i,o){let n;i=i.toString(),this.stringified=!1,this._processor=s,this._css=i,this._opts=o,this._map=void 0;let h=c;this.result=new a(this._processor,n,this._opts),this.result.css=i;let g=this;Object.defineProperty(this.result,"root",{get:()=>g.root});let f=new l(h,n,this._opts,i);if(f.isMap()){let[C,w]=f.generate();C&&(this.result.css=C),w&&(this.result.map=w)}else f.clearAnnotation(),this.result.css=f.css}async(){return this.error?Promise.reject(this.error):Promise.resolve(this.result)}catch(s){return this.async().catch(s)}finally(s){return this.async().then(s,s)}sync(){if(this.error)throw this.error;return this.result}then(s,i){return this.async().then(s,i)}toString(){return this._css}warnings(){return[]}get content(){return this.result.css}get css(){return this.result.css}get map(){return this.result.map}get messages(){return[]}get opts(){return this.result.opts}get processor(){return this.result.processor}get root(){if(this._root)return this._root;let s,i=A;try{s=i(this._css,this._opts)}catch(o){this.error=o}if(this.error)throw this.error;return this._root=s,s}get[Symbol.toStringTag](){return"NoWorkResult"}}v.exports=d,d.default=d},5631:(v,t,e)=>{"use strict";let{isClean:l,my:c}=e(5513),A=e(2671),a=e(1062),d=e(7088);function m(i,o){let n=new i.constructor;for(let h in i){if(!Object.prototype.hasOwnProperty.call(i,h)||h==="proxyCache")continue;let g=i[h],f=typeof g;h==="parent"&&f==="object"?o&&(n[h]=o):h==="source"?n[h]=g:Array.isArray(g)?n[h]=g.map(C=>m(C,n)):(f==="object"&&g!==null&&(g=m(g)),n[h]=g)}return n}class s{constructor(o={}){this.raws={},this[l]=!1,this[c]=!0;for(let n in o)if(n==="nodes"){this.nodes=[];for(let h of o[n])typeof h.clone=="function"?this.append(h.clone()):this.append(h)}else this[n]=o[n]}addToError(o){if(o.postcssNode=this,o.stack&&this.source&&/\n\s{4}at /.test(o.stack)){let n=this.source;o.stack=o.stack.replace(/\n\s{4}at /,`$&${n.input.from}:${n.start.line}:${n.start.column}$&`)}return o}after(o){return this.parent.insertAfter(this,o),this}assign(o={}){for(let n in o)this[n]=o[n];return this}before(o){return this.parent.insertBefore(this,o),this}cleanRaws(o){delete this.raws.before,delete this.raws.after,o||delete this.raws.between}clone(o={}){let n=m(this);for(let h in o)n[h]=o[h];return n}cloneAfter(o={}){let n=this.clone(o);return this.parent.insertAfter(this,n),n}cloneBefore(o={}){let n=this.clone(o);return this.parent.insertBefore(this,n),n}error(o,n={}){if(this.source){let{end:h,start:g}=this.rangeBy(n);return this.source.input.error(o,{column:g.column,line:g.line},{column:h.column,line:h.line},n)}return new A(o)}getProxyProcessor(){return{get:(o,n)=>n==="proxyOf"?o:n==="root"?()=>o.root().toProxy():o[n],set:(o,n,h)=>(o[n]===h||(o[n]=h,n!=="prop"&&n!=="value"&&n!=="name"&&n!=="params"&&n!=="important"&&n!=="text"||o.markDirty()),!0)}}markDirty(){if(this[l]){this[l]=!1;let o=this;for(;o=o.parent;)o[l]=!1}}next(){if(!this.parent)return;let o=this.parent.index(this);return this.parent.nodes[o+1]}positionBy(o,n){let h=this.source.start;if(o.index)h=this.positionInside(o.index,n);else if(o.word){let g=(n=this.toString()).indexOf(o.word);g!==-1&&(h=this.positionInside(g,n))}return h}positionInside(o,n){let h=n||this.toString(),g=this.source.start.column,f=this.source.start.line;for(let C=0;C<o;C++)h[C]===`
`?(g=1,f+=1):g+=1;return{column:g,line:f}}prev(){if(!this.parent)return;let o=this.parent.index(this);return this.parent.nodes[o-1]}rangeBy(o){let n={column:this.source.start.column,line:this.source.start.line},h=this.source.end?{column:this.source.end.column+1,line:this.source.end.line}:{column:n.column+1,line:n.line};if(o.word){let g=this.toString(),f=g.indexOf(o.word);f!==-1&&(n=this.positionInside(f,g),h=this.positionInside(f+o.word.length,g))}else o.start?n={column:o.start.column,line:o.start.line}:o.index&&(n=this.positionInside(o.index)),o.end?h={column:o.end.column,line:o.end.line}:o.endIndex?h=this.positionInside(o.endIndex):o.index&&(h=this.positionInside(o.index+1));return(h.line<n.line||h.line===n.line&&h.column<=n.column)&&(h={column:n.column+1,line:n.line}),{end:h,start:n}}raw(o,n){return new a().raw(this,o,n)}remove(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this}replaceWith(...o){if(this.parent){let n=this,h=!1;for(let g of o)g===this?h=!0:h?(this.parent.insertAfter(n,g),n=g):this.parent.insertBefore(n,g);h||this.remove()}return this}root(){let o=this;for(;o.parent&&o.parent.type!=="document";)o=o.parent;return o}toJSON(o,n){let h={},g=n==null;n=n||new Map;let f=0;for(let C in this){if(!Object.prototype.hasOwnProperty.call(this,C)||C==="parent"||C==="proxyCache")continue;let w=this[C];if(Array.isArray(w))h[C]=w.map(u=>typeof u=="object"&&u.toJSON?u.toJSON(null,n):u);else if(typeof w=="object"&&w.toJSON)h[C]=w.toJSON(null,n);else if(C==="source"){let u=n.get(w.input);u==null&&(u=f,n.set(w.input,f),f++),h[C]={end:w.end,inputId:u,start:w.start}}else h[C]=w}return g&&(h.inputs=[...n.keys()].map(C=>C.toJSON())),h}toProxy(){return this.proxyCache||(this.proxyCache=new Proxy(this,this.getProxyProcessor())),this.proxyCache}toString(o=d){o.stringify&&(o=o.stringify);let n="";return o(this,h=>{n+=h}),n}warn(o,n,h){let g={node:this};for(let f in h)g[f]=h[f];return o.warn(n,g)}get proxyOf(){return this}}v.exports=s,s.default=s},6939:(v,t,e)=>{"use strict";let l=e(1019),c=e(8867),A=e(5995);function a(d,m){let s=new A(d,m),i=new c(s);try{i.parse()}catch(o){throw o}return i.root}v.exports=a,a.default=a,l.registerParse(a)},8867:(v,t,e)=>{"use strict";let l=e(4258),c=e(3852),A=e(9932),a=e(1353),d=e(1025),m=e(1675);const s={empty:!0,space:!0};v.exports=class{constructor(i){this.input=i,this.root=new d,this.current=this.root,this.spaces="",this.semicolon=!1,this.customProperty=!1,this.createTokenizer(),this.root.source={input:i,start:{column:1,line:1,offset:0}}}atrule(i){let o,n,h,g=new a;g.name=i[1].slice(1),g.name===""&&this.unnamedAtrule(g,i),this.init(g,i[2]);let f=!1,C=!1,w=[],u=[];for(;!this.tokenizer.endOfFile();){if(o=(i=this.tokenizer.nextToken())[0],o==="("||o==="["?u.push(o==="("?")":"]"):o==="{"&&u.length>0?u.push("}"):o===u[u.length-1]&&u.pop(),u.length===0){if(o===";"){g.source.end=this.getPosition(i[2]),g.source.end.offset++,this.semicolon=!0;break}if(o==="{"){C=!0;break}if(o==="}"){if(w.length>0){for(h=w.length-1,n=w[h];n&&n[0]==="space";)n=w[--h];n&&(g.source.end=this.getPosition(n[3]||n[2]),g.source.end.offset++)}this.end(i);break}w.push(i)}else w.push(i);if(this.tokenizer.endOfFile()){f=!0;break}}g.raws.between=this.spacesAndCommentsFromEnd(w),w.length?(g.raws.afterName=this.spacesAndCommentsFromStart(w),this.raw(g,"params",w),f&&(i=w[w.length-1],g.source.end=this.getPosition(i[3]||i[2]),g.source.end.offset++,this.spaces=g.raws.between,g.raws.between="")):(g.raws.afterName="",g.params=""),C&&(g.nodes=[],this.current=g)}checkMissedSemicolon(i){let o=this.colon(i);if(o===!1)return;let n,h=0;for(let g=o-1;g>=0&&(n=i[g],n[0]==="space"||(h+=1,h!==2));g--);throw this.input.error("Missed semicolon",n[0]==="word"?n[3]+1:n[2])}colon(i){let o,n,h,g=0;for(let[f,C]of i.entries()){if(o=C,n=o[0],n==="("&&(g+=1),n===")"&&(g-=1),g===0&&n===":"){if(h){if(h[0]==="word"&&h[1]==="progid")continue;return f}this.doubleColon(o)}h=o}return!1}comment(i){let o=new A;this.init(o,i[2]),o.source.end=this.getPosition(i[3]||i[2]),o.source.end.offset++;let n=i[1].slice(2,-2);if(/^\s*$/.test(n))o.text="",o.raws.left=n,o.raws.right="";else{let h=n.match(/^(\s*)([^]*\S)(\s*)$/);o.text=h[2],o.raws.left=h[1],o.raws.right=h[3]}}createTokenizer(){this.tokenizer=c(this.input)}decl(i,o){let n=new l;this.init(n,i[0][2]);let h,g=i[i.length-1];for(g[0]===";"&&(this.semicolon=!0,i.pop()),n.source.end=this.getPosition(g[3]||g[2]||function(w){for(let u=w.length-1;u>=0;u--){let y=w[u],r=y[3]||y[2];if(r)return r}}(i)),n.source.end.offset++;i[0][0]!=="word";)i.length===1&&this.unknownWord(i),n.raws.before+=i.shift()[1];for(n.source.start=this.getPosition(i[0][2]),n.prop="";i.length;){let w=i[0][0];if(w===":"||w==="space"||w==="comment")break;n.prop+=i.shift()[1]}for(n.raws.between="";i.length;){if(h=i.shift(),h[0]===":"){n.raws.between+=h[1];break}h[0]==="word"&&/\w/.test(h[1])&&this.unknownWord([h]),n.raws.between+=h[1]}n.prop[0]!=="_"&&n.prop[0]!=="*"||(n.raws.before+=n.prop[0],n.prop=n.prop.slice(1));let f,C=[];for(;i.length&&(f=i[0][0],f==="space"||f==="comment");)C.push(i.shift());this.precheckMissedSemicolon(i);for(let w=i.length-1;w>=0;w--){if(h=i[w],h[1].toLowerCase()==="!important"){n.important=!0;let u=this.stringFrom(i,w);u=this.spacesFromEnd(i)+u,u!==" !important"&&(n.raws.important=u);break}if(h[1].toLowerCase()==="important"){let u=i.slice(0),y="";for(let r=w;r>0;r--){let p=u[r][0];if(y.trim().indexOf("!")===0&&p!=="space")break;y=u.pop()[1]+y}y.trim().indexOf("!")===0&&(n.important=!0,n.raws.important=y,i=u)}if(h[0]!=="space"&&h[0]!=="comment")break}i.some(w=>w[0]!=="space"&&w[0]!=="comment")&&(n.raws.between+=C.map(w=>w[1]).join(""),C=[]),this.raw(n,"value",C.concat(i),o),n.value.includes(":")&&!o&&this.checkMissedSemicolon(i)}doubleColon(i){throw this.input.error("Double colon",{offset:i[2]},{offset:i[2]+i[1].length})}emptyRule(i){let o=new m;this.init(o,i[2]),o.selector="",o.raws.between="",this.current=o}end(i){this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.semicolon=!1,this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.spaces="",this.current.parent?(this.current.source.end=this.getPosition(i[2]),this.current.source.end.offset++,this.current=this.current.parent):this.unexpectedClose(i)}endFile(){this.current.parent&&this.unclosedBlock(),this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.root.source.end=this.getPosition(this.tokenizer.position())}freeSemicolon(i){if(this.spaces+=i[1],this.current.nodes){let o=this.current.nodes[this.current.nodes.length-1];o&&o.type==="rule"&&!o.raws.ownSemicolon&&(o.raws.ownSemicolon=this.spaces,this.spaces="")}}getPosition(i){let o=this.input.fromOffset(i);return{column:o.col,line:o.line,offset:i}}init(i,o){this.current.push(i),i.source={input:this.input,start:this.getPosition(o)},i.raws.before=this.spaces,this.spaces="",i.type!=="comment"&&(this.semicolon=!1)}other(i){let o=!1,n=null,h=!1,g=null,f=[],C=i[1].startsWith("--"),w=[],u=i;for(;u;){if(n=u[0],w.push(u),n==="("||n==="[")g||(g=u),f.push(n==="("?")":"]");else if(C&&h&&n==="{")g||(g=u),f.push("}");else if(f.length===0){if(n===";"){if(h)return void this.decl(w,C);break}if(n==="{")return void this.rule(w);if(n==="}"){this.tokenizer.back(w.pop()),o=!0;break}n===":"&&(h=!0)}else n===f[f.length-1]&&(f.pop(),f.length===0&&(g=null));u=this.tokenizer.nextToken()}if(this.tokenizer.endOfFile()&&(o=!0),f.length>0&&this.unclosedBracket(g),o&&h){if(!C)for(;w.length&&(u=w[w.length-1][0],u==="space"||u==="comment");)this.tokenizer.back(w.pop());this.decl(w,C)}else this.unknownWord(w)}parse(){let i;for(;!this.tokenizer.endOfFile();)switch(i=this.tokenizer.nextToken(),i[0]){case"space":this.spaces+=i[1];break;case";":this.freeSemicolon(i);break;case"}":this.end(i);break;case"comment":this.comment(i);break;case"at-word":this.atrule(i);break;case"{":this.emptyRule(i);break;default:this.other(i)}this.endFile()}precheckMissedSemicolon(){}raw(i,o,n,h){let g,f,C,w,u=n.length,y="",r=!0;for(let p=0;p<u;p+=1)g=n[p],f=g[0],f!=="space"||p!==u-1||h?f==="comment"?(w=n[p-1]?n[p-1][0]:"empty",C=n[p+1]?n[p+1][0]:"empty",s[w]||s[C]||y.slice(-1)===","?r=!1:y+=g[1]):y+=g[1]:r=!1;if(!r){let p=n.reduce((b,x)=>b+x[1],"");i.raws[o]={raw:p,value:y}}i[o]=y}rule(i){i.pop();let o=new m;this.init(o,i[0][2]),o.raws.between=this.spacesAndCommentsFromEnd(i),this.raw(o,"selector",i),this.current=o}spacesAndCommentsFromEnd(i){let o,n="";for(;i.length&&(o=i[i.length-1][0],o==="space"||o==="comment");)n=i.pop()[1]+n;return n}spacesAndCommentsFromStart(i){let o,n="";for(;i.length&&(o=i[0][0],o==="space"||o==="comment");)n+=i.shift()[1];return n}spacesFromEnd(i){let o,n="";for(;i.length&&(o=i[i.length-1][0],o==="space");)n=i.pop()[1]+n;return n}stringFrom(i,o){let n="";for(let h=o;h<i.length;h++)n+=i[h][1];return i.splice(o,i.length-o),n}unclosedBlock(){let i=this.current.source.start;throw this.input.error("Unclosed block",i.line,i.column)}unclosedBracket(i){throw this.input.error("Unclosed bracket",{offset:i[2]},{offset:i[2]+1})}unexpectedClose(i){throw this.input.error("Unexpected }",{offset:i[2]},{offset:i[2]+1})}unknownWord(i){throw this.input.error("Unknown word",{offset:i[0][2]},{offset:i[0][2]+i[0][1].length})}unnamedAtrule(i,o){throw this.input.error("At-rule without name",{offset:o[2]},{offset:o[2]+o[1].length})}}},20:(v,t,e)=>{"use strict";let l=e(2671),c=e(4258),A=e(1939),a=e(1019),d=e(1723),m=e(7088),s=e(250),i=e(6461),o=e(1728),n=e(9932),h=e(1353),g=e(3632),f=e(5995),C=e(6939),w=e(4715),u=e(1675),y=e(1025),r=e(5631);function p(...b){return b.length===1&&Array.isArray(b[0])&&(b=b[0]),new d(b)}p.plugin=function(b,x){let I,M=!1;function T(...z){console&&console.warn&&!M&&(M=!0,console.warn(b+`: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`),process.env.LANG&&process.env.LANG.startsWith("cn")&&console.warn(b+`: \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:
https://www.w3ctech.com/topic/2226`));let O=x(...z);return O.postcssPlugin=b,O.postcssVersion=new d().version,O}return Object.defineProperty(T,"postcss",{get:()=>(I||(I=T()),I)}),T.process=function(z,O,P){return p([T(P)]).process(z,O)},T},p.stringify=m,p.parse=C,p.fromJSON=s,p.list=w,p.comment=b=>new n(b),p.atRule=b=>new h(b),p.decl=b=>new c(b),p.rule=b=>new u(b),p.root=b=>new y(b),p.document=b=>new i(b),p.CssSyntaxError=l,p.Declaration=c,p.Container=a,p.Processor=d,p.Document=i,p.Comment=n,p.Warning=o,p.AtRule=h,p.Result=g,p.Input=f,p.Rule=u,p.Root=y,p.Node=r,A.registerPostcss(p),v.exports=p,p.default=p},7981:(v,t,e)=>{"use strict";let{SourceMapConsumer:l,SourceMapGenerator:c}=e(209),{existsSync:A,readFileSync:a}=e(4777),{dirname:d,join:m}=e(9830);class s{constructor(o,n){if(n.map===!1)return;this.loadAnnotation(o),this.inline=this.startWith(this.annotation,"data:");let h=n.map?n.map.prev:void 0,g=this.loadMap(n.from,h);!this.mapFile&&n.from&&(this.mapFile=n.from),this.mapFile&&(this.root=d(this.mapFile)),g&&(this.text=g)}consumer(){return this.consumerCache||(this.consumerCache=new l(this.text)),this.consumerCache}decodeInline(o){if(/^data:application\/json;charset=utf-?8,/.test(o)||/^data:application\/json,/.test(o))return decodeURIComponent(o.substr(RegExp.lastMatch.length));if(/^data:application\/json;charset=utf-?8;base64,/.test(o)||/^data:application\/json;base64,/.test(o))return n=o.substr(RegExp.lastMatch.length),Buffer?Buffer.from(n,"base64").toString():window.atob(n);var n;let h=o.match(/data:application\/json;([^,]+),/)[1];throw new Error("Unsupported source map encoding "+h)}getAnnotationURL(o){return o.replace(/^\/\*\s*# sourceMappingURL=/,"").trim()}isMap(o){return typeof o=="object"&&(typeof o.mappings=="string"||typeof o._mappings=="string"||Array.isArray(o.sections))}loadAnnotation(o){let n=o.match(/\/\*\s*# sourceMappingURL=/gm);if(!n)return;let h=o.lastIndexOf(n.pop()),g=o.indexOf("*/",h);h>-1&&g>-1&&(this.annotation=this.getAnnotationURL(o.substring(h,g)))}loadFile(o){if(this.root=d(o),A(o))return this.mapFile=o,a(o,"utf-8").toString().trim()}loadMap(o,n){if(n===!1)return!1;if(n){if(typeof n=="string")return n;if(typeof n!="function"){if(n instanceof l)return c.fromSourceMap(n).toString();if(n instanceof c)return n.toString();if(this.isMap(n))return JSON.stringify(n);throw new Error("Unsupported previous source map format: "+n.toString())}{let h=n(o);if(h){let g=this.loadFile(h);if(!g)throw new Error("Unable to load previous source map: "+h.toString());return g}}}else{if(this.inline)return this.decodeInline(this.annotation);if(this.annotation){let h=this.annotation;return o&&(h=m(d(o),h)),this.loadFile(h)}}}startWith(o,n){return!!o&&o.substr(0,n.length)===n}withContent(){return!!(this.consumer().sourcesContent&&this.consumer().sourcesContent.length>0)}}v.exports=s,s.default=s},1723:(v,t,e)=>{"use strict";let l=e(7647),c=e(1939),A=e(6461),a=e(1025);class d{constructor(s=[]){this.version="8.4.33",this.plugins=this.normalize(s)}normalize(s){let i=[];for(let o of s)if(o.postcss===!0?o=o():o.postcss&&(o=o.postcss),typeof o=="object"&&Array.isArray(o.plugins))i=i.concat(o.plugins);else if(typeof o=="object"&&o.postcssPlugin)i.push(o);else if(typeof o=="function")i.push(o);else if(typeof o!="object"||!o.parse&&!o.stringify)throw new Error(o+" is not a PostCSS plugin");return i}process(s,i={}){return this.plugins.length||i.parser||i.stringifier||i.syntax?new c(this,s,i):new l(this,s,i)}use(s){return this.plugins=this.plugins.concat(this.normalize([s])),this}}v.exports=d,d.default=d,a.registerProcessor(d),A.registerProcessor(d)},3632:(v,t,e)=>{"use strict";let l=e(1728);class c{constructor(a,d,m){this.processor=a,this.messages=[],this.root=d,this.opts=m,this.css=void 0,this.map=void 0}toString(){return this.css}warn(a,d={}){d.plugin||this.lastPlugin&&this.lastPlugin.postcssPlugin&&(d.plugin=this.lastPlugin.postcssPlugin);let m=new l(a,d);return this.messages.push(m),m}warnings(){return this.messages.filter(a=>a.type==="warning")}get content(){return this.css}}v.exports=c,c.default=c},1025:(v,t,e)=>{"use strict";let l,c,A=e(1019);class a extends A{constructor(m){super(m),this.type="root",this.nodes||(this.nodes=[])}normalize(m,s,i){let o=super.normalize(m);if(s){if(i==="prepend")this.nodes.length>1?s.raws.before=this.nodes[1].raws.before:delete s.raws.before;else if(this.first!==s)for(let n of o)n.raws.before=s.raws.before}return o}removeChild(m,s){let i=this.index(m);return!s&&i===0&&this.nodes.length>1&&(this.nodes[1].raws.before=this.nodes[i].raws.before),super.removeChild(m)}toResult(m={}){return new l(new c,this,m).stringify()}}a.registerLazyResult=d=>{l=d},a.registerProcessor=d=>{c=d},v.exports=a,a.default=a,A.registerRoot(a)},1675:(v,t,e)=>{"use strict";let l=e(1019),c=e(4715);class A extends l{constructor(d){super(d),this.type="rule",this.nodes||(this.nodes=[])}get selectors(){return c.comma(this.selector)}set selectors(d){let m=this.selector?this.selector.match(/,\s*/):null,s=m?m[0]:","+this.raw("between","beforeOpen");this.selector=d.join(s)}}v.exports=A,A.default=A,l.registerRule(A)},1062:v=>{"use strict";const t={after:`
`,beforeClose:`
`,beforeComment:`
`,beforeDecl:`
`,beforeOpen:" ",beforeRule:`
`,colon:": ",commentLeft:" ",commentRight:" ",emptyBody:"",indent:"    ",semicolon:!1};class e{constructor(c){this.builder=c}atrule(c,A){let a="@"+c.name,d=c.params?this.rawValue(c,"params"):"";if(c.raws.afterName!==void 0?a+=c.raws.afterName:d&&(a+=" "),c.nodes)this.block(c,a+d);else{let m=(c.raws.between||"")+(A?";":"");this.builder(a+d+m,c)}}beforeAfter(c,A){let a;a=c.type==="decl"?this.raw(c,null,"beforeDecl"):c.type==="comment"?this.raw(c,null,"beforeComment"):A==="before"?this.raw(c,null,"beforeRule"):this.raw(c,null,"beforeClose");let d=c.parent,m=0;for(;d&&d.type!=="root";)m+=1,d=d.parent;if(a.includes(`
`)){let s=this.raw(c,null,"indent");if(s.length)for(let i=0;i<m;i++)a+=s}return a}block(c,A){let a,d=this.raw(c,"between","beforeOpen");this.builder(A+d+"{",c,"start"),c.nodes&&c.nodes.length?(this.body(c),a=this.raw(c,"after")):a=this.raw(c,"after","emptyBody"),a&&this.builder(a),this.builder("}",c,"end")}body(c){let A=c.nodes.length-1;for(;A>0&&c.nodes[A].type==="comment";)A-=1;let a=this.raw(c,"semicolon");for(let d=0;d<c.nodes.length;d++){let m=c.nodes[d],s=this.raw(m,"before");s&&this.builder(s),this.stringify(m,A!==d||a)}}comment(c){let A=this.raw(c,"left","commentLeft"),a=this.raw(c,"right","commentRight");this.builder("/*"+A+c.text+a+"*/",c)}decl(c,A){let a=this.raw(c,"between","colon"),d=c.prop+a+this.rawValue(c,"value");c.important&&(d+=c.raws.important||" !important"),A&&(d+=";"),this.builder(d,c)}document(c){this.body(c)}raw(c,A,a){let d;if(a||(a=A),A&&(d=c.raws[A],d!==void 0))return d;let m=c.parent;if(a==="before"&&(!m||m.type==="root"&&m.first===c||m&&m.type==="document"))return"";if(!m)return t[a];let s=c.root();if(s.rawCache||(s.rawCache={}),s.rawCache[a]!==void 0)return s.rawCache[a];if(a==="before"||a==="after")return this.beforeAfter(c,a);{let o="raw"+((i=a)[0].toUpperCase()+i.slice(1));this[o]?d=this[o](s,c):s.walk(n=>{if(d=n.raws[A],d!==void 0)return!1})}var i;return d===void 0&&(d=t[a]),s.rawCache[a]=d,d}rawBeforeClose(c){let A;return c.walk(a=>{if(a.nodes&&a.nodes.length>0&&a.raws.after!==void 0)return A=a.raws.after,A.includes(`
`)&&(A=A.replace(/[^\n]+$/,"")),!1}),A&&(A=A.replace(/\S/g,"")),A}rawBeforeComment(c,A){let a;return c.walkComments(d=>{if(d.raws.before!==void 0)return a=d.raws.before,a.includes(`
`)&&(a=a.replace(/[^\n]+$/,"")),!1}),a===void 0?a=this.raw(A,null,"beforeDecl"):a&&(a=a.replace(/\S/g,"")),a}rawBeforeDecl(c,A){let a;return c.walkDecls(d=>{if(d.raws.before!==void 0)return a=d.raws.before,a.includes(`
`)&&(a=a.replace(/[^\n]+$/,"")),!1}),a===void 0?a=this.raw(A,null,"beforeRule"):a&&(a=a.replace(/\S/g,"")),a}rawBeforeOpen(c){let A;return c.walk(a=>{if(a.type!=="decl"&&(A=a.raws.between,A!==void 0))return!1}),A}rawBeforeRule(c){let A;return c.walk(a=>{if(a.nodes&&(a.parent!==c||c.first!==a)&&a.raws.before!==void 0)return A=a.raws.before,A.includes(`
`)&&(A=A.replace(/[^\n]+$/,"")),!1}),A&&(A=A.replace(/\S/g,"")),A}rawColon(c){let A;return c.walkDecls(a=>{if(a.raws.between!==void 0)return A=a.raws.between.replace(/[^\s:]/g,""),!1}),A}rawEmptyBody(c){let A;return c.walk(a=>{if(a.nodes&&a.nodes.length===0&&(A=a.raws.after,A!==void 0))return!1}),A}rawIndent(c){if(c.raws.indent)return c.raws.indent;let A;return c.walk(a=>{let d=a.parent;if(d&&d!==c&&d.parent&&d.parent===c&&a.raws.before!==void 0){let m=a.raws.before.split(`
`);return A=m[m.length-1],A=A.replace(/\S/g,""),!1}}),A}rawSemicolon(c){let A;return c.walk(a=>{if(a.nodes&&a.nodes.length&&a.last.type==="decl"&&(A=a.raws.semicolon,A!==void 0))return!1}),A}rawValue(c,A){let a=c[A],d=c.raws[A];return d&&d.value===a?d.raw:a}root(c){this.body(c),c.raws.after&&this.builder(c.raws.after)}rule(c){this.block(c,this.rawValue(c,"selector")),c.raws.ownSemicolon&&this.builder(c.raws.ownSemicolon,c,"end")}stringify(c,A){if(!this[c.type])throw new Error("Unknown AST node type "+c.type+". Maybe you need to change PostCSS stringifier.");this[c.type](c,A)}}v.exports=e,e.default=e},7088:(v,t,e)=>{"use strict";let l=e(1062);function c(A,a){new l(a).stringify(A)}v.exports=c,c.default=c},5513:v=>{"use strict";v.exports.isClean=Symbol("isClean"),v.exports.my=Symbol("my")},3852:v=>{"use strict";const t="'".charCodeAt(0),e='"'.charCodeAt(0),l="\\".charCodeAt(0),c="/".charCodeAt(0),A=`
`.charCodeAt(0),a=" ".charCodeAt(0),d="\f".charCodeAt(0),m="	".charCodeAt(0),s="\r".charCodeAt(0),i="[".charCodeAt(0),o="]".charCodeAt(0),n="(".charCodeAt(0),h=")".charCodeAt(0),g="{".charCodeAt(0),f="}".charCodeAt(0),C=";".charCodeAt(0),w="*".charCodeAt(0),u=":".charCodeAt(0),y="@".charCodeAt(0),r=/[\t\n\f\r "#'()/;[\\\]{}]/g,p=/[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,b=/.[\r\n"'(/\\]/,x=/[\da-f]/i;v.exports=function(I,M={}){let T,z,O,P,L,D,U,G,q,J,Y=I.css.valueOf(),ee=M.ignoreErrors,se=Y.length,W=0,fe=[],de=[];function ge(ue){throw I.error("Unclosed "+ue,W)}return{back:function(ue){de.push(ue)},endOfFile:function(){return de.length===0&&W>=se},nextToken:function(ue){if(de.length)return de.pop();if(W>=se)return;let $=!!ue&&ue.ignoreUnclosed;switch(T=Y.charCodeAt(W),T){case A:case a:case m:case s:case d:z=W;do z+=1,T=Y.charCodeAt(z);while(T===a||T===A||T===m||T===s||T===d);J=["space",Y.slice(W,z)],W=z-1;break;case i:case o:case g:case f:case u:case C:case h:{let H=String.fromCharCode(T);J=[H,H,W];break}case n:if(G=fe.length?fe.pop()[1]:"",q=Y.charCodeAt(W+1),G==="url"&&q!==t&&q!==e&&q!==a&&q!==A&&q!==m&&q!==d&&q!==s){z=W;do{if(D=!1,z=Y.indexOf(")",z+1),z===-1){if(ee||$){z=W;break}ge("bracket")}for(U=z;Y.charCodeAt(U-1)===l;)U-=1,D=!D}while(D);J=["brackets",Y.slice(W,z+1),W,z],W=z}else z=Y.indexOf(")",W+1),P=Y.slice(W,z+1),z===-1||b.test(P)?J=["(","(",W]:(J=["brackets",P,W,z],W=z);break;case t:case e:O=T===t?"'":'"',z=W;do{if(D=!1,z=Y.indexOf(O,z+1),z===-1){if(ee||$){z=W+1;break}ge("string")}for(U=z;Y.charCodeAt(U-1)===l;)U-=1,D=!D}while(D);J=["string",Y.slice(W,z+1),W,z],W=z;break;case y:r.lastIndex=W+1,r.test(Y),z=r.lastIndex===0?Y.length-1:r.lastIndex-2,J=["at-word",Y.slice(W,z+1),W,z],W=z;break;case l:for(z=W,L=!0;Y.charCodeAt(z+1)===l;)z+=1,L=!L;if(T=Y.charCodeAt(z+1),L&&T!==c&&T!==a&&T!==A&&T!==m&&T!==s&&T!==d&&(z+=1,x.test(Y.charAt(z)))){for(;x.test(Y.charAt(z+1));)z+=1;Y.charCodeAt(z+1)===a&&(z+=1)}J=["word",Y.slice(W,z+1),W,z],W=z;break;default:T===c&&Y.charCodeAt(W+1)===w?(z=Y.indexOf("*/",W+2)+1,z===0&&(ee||$?z=Y.length:ge("comment")),J=["comment",Y.slice(W,z+1),W,z],W=z):(p.lastIndex=W+1,p.test(Y),z=p.lastIndex===0?Y.length-1:p.lastIndex-2,J=["word",Y.slice(W,z+1),W,z],fe.push(J),W=z)}return W++,J},position:function(){return W}}}},2448:v=>{"use strict";let t={};v.exports=function(e){t[e]||(t[e]=!0,typeof console<"u"&&console.warn&&console.warn(e))}},1728:v=>{"use strict";class t{constructor(l,c={}){if(this.type="warning",this.text=l,c.node&&c.node.source){let A=c.node.rangeBy(c);this.line=A.start.line,this.column=A.start.column,this.endLine=A.end.line,this.endColumn=A.end.column}for(let A in c)this[A]=c[A]}toString(){return this.node?this.node.error(this.text,{index:this.index,plugin:this.plugin,word:this.word}).message:this.plugin?this.plugin+": "+this.text:this.text}}v.exports=t,t.default=t},7013:()=>{(function(v){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",e={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},l={bash:e,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};v.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:l},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:e}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:l},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:l.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:l.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},e.inside=v.languages.bash;for(var c=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],A=l.variable[1].inside,a=0;a<c.length;a++)A[c[a]]=v.languages.bash[c[a]];v.languages.sh=v.languages.bash,v.languages.shell=v.languages.bash})(Prism)},6551:()=>{Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}}),Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete Prism.languages.c.boolean},8080:()=>{Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}},3229:()=>{(function(v){function t(ee,se){return ee.replace(/<<(\d+)>>/g,function(W,fe){return"(?:"+se[+fe]+")"})}function e(ee,se,W){return RegExp(t(ee,se),W||"")}function l(ee,se){for(var W=0;W<se;W++)ee=ee.replace(/<<self>>/g,function(){return"(?:"+ee+")"});return ee.replace(/<<self>>/g,"[^\\s\\S]")}var c="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",A="class enum interface record struct",a="add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",d="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function m(ee){return"\\b(?:"+ee.trim().replace(/ /g,"|")+")\\b"}var s=m(A),i=RegExp(m(c+" "+A+" "+a+" "+d)),o=m(A+" "+a+" "+d),n=m(c+" "+A+" "+d),h=l("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>",2),g=l("\\((?:[^()]|<<self>>)*\\)",2),f="@?\\b[A-Za-z_]\\w*\\b",C=t("<<0>>(?:\\s*<<1>>)?",[f,h]),w=t("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*",[o,C]),u="\\[\\s*(?:,\\s*)*\\]",y=t("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?",[w,u]),r=t("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>",[h,g,u]),p=t("\\(<<0>>+(?:,<<0>>+)+\\)",[r]),b=t("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?",[p,w,u]),x={keyword:i,punctuation:/[<>()?,.:[\]]/},I=`'(?:[^\r
'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'`,M=`"(?:\\\\.|[^\\\\"\r
])*"`;v.languages.csharp=v.languages.extend("clike",{string:[{pattern:e("(^|[^$\\\\])<<0>>",['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']),lookbehind:!0,greedy:!0},{pattern:e("(^|[^@$\\\\])<<0>>",[M]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:e("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)",[w]),lookbehind:!0,inside:x},{pattern:e("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)",[f,b]),lookbehind:!0,inside:x},{pattern:e("(\\busing\\s+)<<0>>(?=\\s*=)",[f]),lookbehind:!0},{pattern:e("(\\b<<0>>\\s+)<<1>>",[s,C]),lookbehind:!0,inside:x},{pattern:e("(\\bcatch\\s*\\(\\s*)<<0>>",[w]),lookbehind:!0,inside:x},{pattern:e("(\\bwhere\\s+)<<0>>",[f]),lookbehind:!0},{pattern:e("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>",[y]),lookbehind:!0,inside:x},{pattern:e("\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))",[b,n,f]),inside:x}],keyword:i,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),v.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),v.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:e("([(,]\\s*)<<0>>(?=\\s*:)",[f]),lookbehind:!0,alias:"punctuation"}}),v.languages.insertBefore("csharp","class-name",{namespace:{pattern:e("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])",[f]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:e("(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))",[g]),lookbehind:!0,alias:"class-name",inside:x},"return-type":{pattern:e("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))",[b,w]),inside:x,alias:"class-name"},"constructor-invocation":{pattern:e("(\\bnew\\s+)<<0>>(?=\\s*[[({])",[b]),lookbehind:!0,inside:x,alias:"class-name"},"generic-method":{pattern:e("<<0>>\\s*<<1>>(?=\\s*\\()",[f,h]),inside:{function:e("^<<0>>",[f]),generic:{pattern:RegExp(h),alias:"class-name",inside:x}}},"type-list":{pattern:e("\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))",[s,C,f,b,i.source,g,"\\bnew\\s*\\(\\s*\\)"]),lookbehind:!0,inside:{"record-arguments":{pattern:e("(^(?!new\\s*\\()<<0>>\\s*)<<1>>",[C,g]),lookbehind:!0,greedy:!0,inside:v.languages.csharp},keyword:i,"class-name":{pattern:RegExp(b),greedy:!0,inside:x},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var T=M+"|"+I,z=t(`/(?![*/])|//[^\r
]*[\r
]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>`,[T]),O=l(t(`[^"'/()]|<<0>>|\\(<<self>>*\\)`,[z]),2),P="\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",L=t("<<0>>(?:\\s*\\(<<1>>*\\))?",[w,O]);v.languages.insertBefore("csharp","class-name",{attribute:{pattern:e("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])",[P,L]),lookbehind:!0,greedy:!0,inside:{target:{pattern:e("^<<0>>(?=\\s*:)",[P]),alias:"keyword"},"attribute-arguments":{pattern:e("\\(<<0>>*\\)",[O]),inside:v.languages.csharp},"class-name":{pattern:RegExp(w),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var D=`:[^}\r
]+`,U=l(t(`[^"'/()]|<<0>>|\\(<<self>>*\\)`,[z]),2),G=t("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[U,D]),q=l(t(`[^"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)`,[T]),2),J=t("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[q,D]);function Y(ee,se){return{interpolation:{pattern:e("((?:^|[^{])(?:\\{\\{)*)<<0>>",[ee]),lookbehind:!0,inside:{"format-string":{pattern:e("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)",[se,D]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:v.languages.csharp}}},string:/[\s\S]+/}}v.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:e('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"',[G]),lookbehind:!0,greedy:!0,inside:Y(G,U)},{pattern:e('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"',[J]),lookbehind:!0,greedy:!0,inside:Y(J,q)}],char:{pattern:RegExp(I),greedy:!0}}),v.languages.dotnet=v.languages.cs=v.languages.csharp})(Prism)},2247:()=>{(function(v){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;v.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+t.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+`|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`,"i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},v.languages.css.atrule.inside.rest=v.languages.css;var e=v.languages.markup;e&&(e.tag.addInlined("style","css"),e.tag.addAttribute("style","css"))})(Prism)},2734:()=>{(function(v){v.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var t={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(t).forEach(function(e){var l=t[e],c=[];/^\w+$/.test(e)||c.push(/\w+/.exec(e)[0]),e==="diff"&&c.push("bold"),v.languages.diff[e]={pattern:RegExp("^(?:["+l+`].*(?:\r
?|
|(?![\\s\\S])))+`,"m"),alias:c,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(e)[0]}}}}),Object.defineProperty(v.languages.diff,"PREFIXES",{value:t})})(Prism)},7706:()=>{var v,t,e,l;v=Prism,t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,e="(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",l={pattern:RegExp("(^|[^\\w.])"+e+"[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}},v.languages.java=v.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[l,{pattern:RegExp("(^|[^\\w.])"+e+"[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()]|\\s*(?:\\[[\\s,]*\\]\\s*)?::\\s*new\\b)"),lookbehind:!0,inside:l.inside},{pattern:RegExp("(\\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\\s+)"+e+"[A-Z]\\w*\\b"),lookbehind:!0,inside:l.inside}],keyword:t,function:[v.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),v.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),v.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":l,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp("(\\bimport\\s+)"+e+"(?:[A-Z]\\w*|\\*)(?=\\s*;)"),lookbehind:!0,inside:{namespace:l.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp("(\\bimport\\s+static\\s+)"+e+"(?:\\w+|\\*)(?=\\s*;)"),lookbehind:!0,alias:"static",inside:{namespace:l.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g,function(){return t.source})),lookbehind:!0,inside:{punctuation:/\./}}})},235:()=>{Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r
]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r
,.;:})\\]]|//))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),Prism.languages.js=Prism.languages.javascript},8674:()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},1233:()=>{(function(v){var t=v.util.clone(v.languages.javascript),e="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function l(a,d){return a=a.replace(/<S>/g,function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"}).replace(/<BRACES>/g,function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"}).replace(/<SPREAD>/g,function(){return e}),RegExp(a,d)}e=l(e).source,v.languages.jsx=v.languages.extend("markup",t),v.languages.jsx.tag.pattern=l(`</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:"(?:\\\\[^]|[^\\\\"])*"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>`),v.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,v.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,v.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,v.languages.jsx.tag.inside.comment=t.comment,v.languages.insertBefore("inside","attr-name",{spread:{pattern:l("<SPREAD>"),inside:v.languages.jsx}},v.languages.jsx.tag),v.languages.insertBefore("inside","special-attr",{script:{pattern:l("=<BRACES>"),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:v.languages.jsx}}},v.languages.jsx.tag);var c=function(a){return a?typeof a=="string"?a:typeof a.content=="string"?a.content:a.content.map(c).join(""):""},A=function(a){for(var d=[],m=0;m<a.length;m++){var s=a[m],i=!1;if(typeof s!="string"&&(s.type==="tag"&&s.content[0]&&s.content[0].type==="tag"?s.content[0].content[0].content==="</"?d.length>0&&d[d.length-1].tagName===c(s.content[0].content[1])&&d.pop():s.content[s.content.length-1].content==="/>"||d.push({tagName:c(s.content[0].content[1]),openedBraces:0}):d.length>0&&s.type==="punctuation"&&s.content==="{"?d[d.length-1].openedBraces++:d.length>0&&d[d.length-1].openedBraces>0&&s.type==="punctuation"&&s.content==="}"?d[d.length-1].openedBraces--:i=!0),(i||typeof s=="string")&&d.length>0&&d[d.length-1].openedBraces===0){var o=c(s);m<a.length-1&&(typeof a[m+1]=="string"||a[m+1].type==="plain-text")&&(o+=c(a[m+1]),a.splice(m+1,1)),m>0&&(typeof a[m-1]=="string"||a[m-1].type==="plain-text")&&(o=c(a[m-1])+o,a.splice(m-1,1),m--),a[m]=new v.Token("plain-text",o,null,o)}s.content&&typeof s.content!="string"&&A(s.content)}};v.hooks.add("after-tokenize",function(a){a.language!=="jsx"&&a.language!=="tsx"||A(a.tokens)})})(Prism)},4006:()=>{Prism.languages.less=Prism.languages.extend("css",{comment:[/\/\*[\s\S]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,operator:/[+\-*\/]/}),Prism.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,lookbehind:!0,alias:"function"}})},3047:()=>{Prism.languages.lua={comment:/^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,string:{pattern:/(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,greedy:!0},number:/\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,keyword:/\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,function:/(?!\d)\w+(?=\s*(?:[({]))/,operator:[/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,{pattern:/(^|[^.])\.\.(?!\.)/,lookbehind:!0}],punctuation:/[\[\](){},;]|\.+|:+/}},47:()=>{(function(v){function t(m){return m=m.replace(/<inner>/g,function(){return`(?:\\\\.|[^\\\\
\r]|(?:
|\r
?)(?![\r
]))`}),RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:"+m+")")}var e="(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+",l=`\\|?__(?:\\|__)+\\|?(?:(?:
|\r
?)|(?![^]))`.replace(/__/g,function(){return e}),c=`\\|?[ 	]*:?-{3,}:?[ 	]*(?:\\|[ 	]*:?-{3,}:?[ 	]*)+\\|?(?:
|\r
?)`;v.languages.markdown=v.languages.extend("markup",{}),v.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:v.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+l+c+"(?:"+l+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+l+c+")(?:"+l+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(e),inside:v.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+l+")"+c+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+l+"$"),inside:{"table-header":{pattern:RegExp(e),alias:"important",inside:v.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:t("\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*"),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:t("\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*"),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:t("(~~?)(?:(?!~)<inner>)+\\2"),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:t('!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[	 ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ 	]?\\[(?:(?!\\])<inner>)+\\])'),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(m){["url","bold","italic","strike","code-snippet"].forEach(function(s){m!==s&&(v.languages.markdown[m].inside.content.inside[s]=v.languages.markdown[s])})}),v.hooks.add("after-tokenize",function(m){m.language!=="markdown"&&m.language!=="md"||function s(i){if(i&&typeof i!="string")for(var o=0,n=i.length;o<n;o++){var h=i[o];if(h.type==="code"){var g=h.content[1],f=h.content[3];if(g&&f&&g.type==="code-language"&&f.type==="code-block"&&typeof g.content=="string"){var C=g.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),w="language-"+(C=(/[a-z][\w-]*/i.exec(C)||[""])[0].toLowerCase());f.alias?typeof f.alias=="string"?f.alias=[f.alias,w]:f.alias.push(w):f.alias=[w]}}else s(h.content)}}(m.tokens)}),v.hooks.add("wrap",function(m){if(m.type==="code-block"){for(var s="",i=0,o=m.classes.length;i<o;i++){var n=m.classes[i],h=/language-(.+)/.exec(n);if(h){s=h[1];break}}var g=v.languages[s];if(g)m.content=v.highlight(m.content.replace(A,"").replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(C,w){var u;return(w=w.toLowerCase())[0]==="#"?(u=w[1]==="x"?parseInt(w.slice(2),16):Number(w.slice(1)),d(u)):a[w]||C}),g,s);else if(s&&s!=="none"&&v.plugins.autoloader){var f="md-"+new Date().valueOf()+"-"+Math.floor(1e16*Math.random());m.attributes.id=f,v.plugins.autoloader.loadLanguages(s,function(){var C=document.getElementById(f);C&&(C.innerHTML=v.highlight(C.textContent,v.languages[s],s))})}}});var A=RegExp(v.languages.markup.tag.pattern.source,"gi"),a={amp:"&",lt:"<",gt:">",quot:'"'},d=String.fromCodePoint||String.fromCharCode;v.languages.md=v.languages.markdown})(Prism)},4060:()=>{Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(v){v.type==="entity"&&(v.attributes.title=v.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(v,t){var e={};e["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},e.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:e}};l["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};var c={};c[v]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return v}),"i"),lookbehind:!0,greedy:!0,inside:l},Prism.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(v,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(`(^|["'\\s])(?:`+v+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml},5584:()=>{var v,t;v=Prism,t="(?:"+["$eq","$gt","$gte","$in","$lt","$lte","$ne","$nin","$and","$not","$nor","$or","$exists","$type","$expr","$jsonSchema","$mod","$regex","$text","$where","$geoIntersects","$geoWithin","$near","$nearSphere","$all","$elemMatch","$size","$bitsAllClear","$bitsAllSet","$bitsAnyClear","$bitsAnySet","$comment","$elemMatch","$meta","$slice","$currentDate","$inc","$min","$max","$mul","$rename","$set","$setOnInsert","$unset","$addToSet","$pop","$pull","$push","$pullAll","$each","$position","$slice","$sort","$bit","$addFields","$bucket","$bucketAuto","$collStats","$count","$currentOp","$facet","$geoNear","$graphLookup","$group","$indexStats","$limit","$listLocalSessions","$listSessions","$lookup","$match","$merge","$out","$planCacheStats","$project","$redact","$replaceRoot","$replaceWith","$sample","$set","$skip","$sort","$sortByCount","$unionWith","$unset","$unwind","$setWindowFields","$abs","$accumulator","$acos","$acosh","$add","$addToSet","$allElementsTrue","$and","$anyElementTrue","$arrayElemAt","$arrayToObject","$asin","$asinh","$atan","$atan2","$atanh","$avg","$binarySize","$bsonSize","$ceil","$cmp","$concat","$concatArrays","$cond","$convert","$cos","$dateFromParts","$dateToParts","$dateFromString","$dateToString","$dayOfMonth","$dayOfWeek","$dayOfYear","$degreesToRadians","$divide","$eq","$exp","$filter","$first","$floor","$function","$gt","$gte","$hour","$ifNull","$in","$indexOfArray","$indexOfBytes","$indexOfCP","$isArray","$isNumber","$isoDayOfWeek","$isoWeek","$isoWeekYear","$last","$last","$let","$literal","$ln","$log","$log10","$lt","$lte","$ltrim","$map","$max","$mergeObjects","$meta","$min","$millisecond","$minute","$mod","$month","$multiply","$ne","$not","$objectToArray","$or","$pow","$push","$radiansToDegrees","$range","$reduce","$regexFind","$regexFindAll","$regexMatch","$replaceOne","$replaceAll","$reverseArray","$round","$rtrim","$second","$setDifference","$setEquals","$setIntersection","$setIsSubset","$setUnion","$size","$sin","$slice","$split","$sqrt","$stdDevPop","$stdDevSamp","$strcasecmp","$strLenBytes","$strLenCP","$substr","$substrBytes","$substrCP","$subtract","$sum","$switch","$tan","$toBool","$toDate","$toDecimal","$toDouble","$toInt","$toLong","$toObjectId","$toString","$toLower","$toUpper","$trim","$trunc","$type","$week","$year","$zip","$count","$dateAdd","$dateDiff","$dateSubtract","$dateTrunc","$getField","$rand","$sampleRate","$setField","$unsetField","$comment","$explain","$hint","$max","$maxTimeMS","$min","$orderby","$query","$returnKey","$showDiskLoc","$natural"].map(function(e){return e.replace("$","\\$")}).join("|")+")\\b",v.languages.mongodb=v.languages.extend("javascript",{}),v.languages.insertBefore("mongodb","string",{property:{pattern:/(?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)(?=\s*:)/,greedy:!0,inside:{keyword:RegExp(`^(['"])?`+t+"(?:\\1)?$")}}}),v.languages.mongodb.string.inside={url:{pattern:/https?:\/\/[-\w@:%.+~#=]{1,256}\.[a-z0-9()]{1,6}\b[-\w()@:%+.~#?&/=]*/i,greedy:!0},entity:{pattern:/\b(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d\d?|2[0-4]\d|25[0-5])\b/,greedy:!0}},v.languages.insertBefore("mongodb","constant",{builtin:{pattern:RegExp("\\b(?:"+["ObjectId","Code","BinData","DBRef","Timestamp","NumberLong","NumberDecimal","MaxKey","MinKey","RegExp","ISODate","UUID"].join("|")+")\\b"),alias:"keyword"}})},1637:()=>{Prism.languages.objectivec=Prism.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete Prism.languages.objectivec["class-name"],Prism.languages.objc=Prism.languages.objectivec},9208:()=>{Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},4297:()=>{var v,t,e,l,c,A;v=Prism,t={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},l="(?:[^\\\\-]|"+(e=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/).source+")",c=RegExp(l+"-"+l),A={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"},v.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:c,inside:{escape:e,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":t,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},escape:e}},"special-escape":t,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":A}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:e,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":A}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}},7239:()=>{Prism.languages.scala=Prism.languages.extend("java",{"triple-quoted-string":{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},keyword:/<-|=>|\b(?:abstract|case|catch|class|def|derives|do|else|enum|extends|extension|final|finally|for|forSome|given|if|implicit|import|infix|inline|lazy|match|new|null|object|opaque|open|override|package|private|protected|return|sealed|self|super|this|throw|trait|transparent|try|type|using|val|var|while|with|yield)\b/,number:/\b0x(?:[\da-f]*\.)?[\da-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e\d+)?[dfl]?/i,builtin:/\b(?:Any|AnyRef|AnyVal|Boolean|Byte|Char|Double|Float|Int|Long|Nothing|Short|String|Unit)\b/,symbol:/'[^\d\s\\]\w*/}),Prism.languages.insertBefore("scala","triple-quoted-string",{"string-interpolation":{pattern:/\b[a-z]\w*(?:"""(?:[^$]|\$(?:[^{]|\{(?:[^{}]|\{[^{}]*\})*\}))*?"""|"(?:[^$"\r\n]|\$(?:[^{]|\{(?:[^{}]|\{[^{}]*\})*\}))*")/i,greedy:!0,inside:{id:{pattern:/^\w+/,greedy:!0,alias:"function"},escape:{pattern:/\\\$"|\$[$"]/,greedy:!0,alias:"symbol"},interpolation:{pattern:/\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,greedy:!0,inside:{punctuation:/^\$\{?|\}$/,expression:{pattern:/[\s\S]+/,inside:Prism.languages.scala}}},string:/[\s\S]+/}}}),delete Prism.languages.scala["class-name"],delete Prism.languages.scala.function,delete Prism.languages.scala.constant},9578:()=>{Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),Prism.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.languages.scss},4833:()=>{(function(v){var t=v.util.clone(v.languages.typescript);v.languages.tsx=v.languages.extend("jsx",t),delete v.languages.tsx.parameter,delete v.languages.tsx["literal-property"];var e=v.languages.tsx.tag;e.pattern=RegExp("(^|[^\\w$]|(?=</))(?:"+e.pattern.source+")",e.pattern.flags),e.lookbehind=!0})(Prism)},6456:()=>{(function(v){v.languages.typescript=v.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),v.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete v.languages.typescript.parameter,delete v.languages.typescript["literal-property"];var t=v.languages.extend("typescript",{});delete t["class-name"],v.languages.typescript["class-name"].inside=t,v.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),v.languages.ts=v.languages.typescript})(Prism)},9883:()=>{(function(v){function t(A,a){v.languages[A]&&v.languages.insertBefore(A,"comment",{"doc-comment":a})}var e=v.languages.markup.tag,l={pattern:/\/\/\/.*/,greedy:!0,alias:"comment",inside:{tag:e}},c={pattern:/'''.*/,greedy:!0,alias:"comment",inside:{tag:e}};t("csharp",l),t("fsharp",l),t("vbnet",c)})(Prism)},3954:()=>{(function(){if(typeof Prism<"u"){var v=/^diff-([\w-]+)/i,t=/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g,e=RegExp(`(?:__|[^\r
<])*(?:\r
?|
|(?:__|[^\r
<])(?![^\r
]))`.replace(/__/g,function(){return t.source}),"gi"),l=!1;Prism.hooks.add("before-sanity-check",function(c){var A=c.language;v.test(A)&&!c.grammar&&(c.grammar=Prism.languages[A]=Prism.languages.diff)}),Prism.hooks.add("before-tokenize",function(c){l||Prism.languages.diff||Prism.plugins.autoloader||(l=!0,console.warn("Prism's Diff Highlight plugin requires the Diff language definition (prism-diff.js).Make sure the language definition is loaded or use Prism's Autoloader plugin."));var A=c.language;v.test(A)&&!Prism.languages[A]&&(Prism.languages[A]=Prism.languages.diff)}),Prism.hooks.add("wrap",function(c){var A,a;if(c.language!=="diff"){var d=v.exec(c.language);if(!d)return;A=d[1],a=Prism.languages[A]}var m=Prism.languages.diff&&Prism.languages.diff.PREFIXES;if(m&&c.type in m){var s,i=c.content.replace(t,"").replace(/&lt;/g,"<").replace(/&amp;/g,"&"),o=i.replace(/(^|[\r\n])./g,"$1");s=a?Prism.highlight(o,a,A):Prism.util.encode(o);var n,h=new Prism.Token("prefix",m[c.type],[/\w+/.exec(c.type)[0]]),g=Prism.Token.stringify(h,c.language),f=[];for(e.lastIndex=0;n=e.exec(s);)f.push(g+n[0]);/(?:^|[\r\n]).$/.test(i)&&f.push(g),c.content=f.join(""),a&&c.classes.push("language-"+A)}})}})()},6488:()=>{typeof Prism<"u"&&typeof document<"u"&&document.createRange&&(Prism.plugins.KeepMarkup=!0,Prism.hooks.add("before-highlight",function(v){if(v.element.children.length&&Prism.util.isActive(v.element,"keep-markup",!0)){var t=Prism.util.isActive(v.element,"drop-tokens",!1),e=0,l=[];A(v.element),l.length&&(v.keepMarkup=l)}function c(a){if(function(m){return!t||m.nodeName.toLowerCase()!=="span"||!m.classList.contains("token")}(a)){var d={element:a,posOpen:e};l.push(d),A(a),d.posClose=e}else A(a)}function A(a){for(var d=0,m=a.childNodes.length;d<m;d++){var s=a.childNodes[d];s.nodeType===1?c(s):s.nodeType===3&&(e+=s.data.length)}}}),Prism.hooks.add("after-highlight",function(v){if(v.keepMarkup&&v.keepMarkup.length){var t=function(e,l){for(var c=0,A=e.childNodes.length;c<A;c++){var a=e.childNodes[c];if(a.nodeType===1){if(!t(a,l))return!1}else a.nodeType===3&&(!l.nodeStart&&l.pos+a.data.length>l.node.posOpen&&(l.nodeStart=a,l.nodeStartPos=l.node.posOpen-l.pos),l.nodeStart&&l.pos+a.data.length>=l.node.posClose&&(l.nodeEnd=a,l.nodeEndPos=l.node.posClose-l.pos),l.pos+=a.data.length);if(l.nodeStart&&l.nodeEnd){var d=document.createRange();return d.setStart(l.nodeStart,l.nodeStartPos),d.setEnd(l.nodeEnd,l.nodeEndPos),l.node.element.innerHTML="",l.node.element.appendChild(d.extractContents()),d.insertNode(l.node.element),d.detach(),!1}}return!0};v.keepMarkup.forEach(function(e){t(v.element,{node:e,pos:0})}),v.highlightedCode=v.element.innerHTML}}))},8759:()=>{(function(){if(typeof Prism<"u"&&typeof document<"u"){var v="line-numbers",t=/\n(?!$)/g,e=Prism.plugins.lineNumbers={getLine:function(A,a){if(A.tagName==="PRE"&&A.classList.contains(v)){var d=A.querySelector(".line-numbers-rows");if(d){var m=parseInt(A.getAttribute("data-start"),10)||1,s=m+(d.children.length-1);a<m&&(a=m),a>s&&(a=s);var i=a-m;return d.children[i]}}},resize:function(A){c([A])},assumeViewportIndependence:!0},l=void 0;window.addEventListener("resize",function(){e.assumeViewportIndependence&&l===window.innerWidth||(l=window.innerWidth,c(Array.prototype.slice.call(document.querySelectorAll("pre."+v))))}),Prism.hooks.add("complete",function(A){if(A.code){var a=A.element,d=a.parentNode;if(d&&/pre/i.test(d.nodeName)&&!a.querySelector(".line-numbers-rows")&&Prism.util.isActive(a,v)){a.classList.remove(v),d.classList.add(v);var m,s=A.code.match(t),i=s?s.length+1:1,o=new Array(i+1).join("<span></span>");(m=document.createElement("span")).setAttribute("aria-hidden","true"),m.className="line-numbers-rows",m.innerHTML=o,d.hasAttribute("data-start")&&(d.style.counterReset="linenumber "+(parseInt(d.getAttribute("data-start"),10)-1)),A.element.appendChild(m),c([d]),Prism.hooks.run("line-numbers",A)}}}),Prism.hooks.add("line-numbers",function(A){A.plugins=A.plugins||{},A.plugins.lineNumbers=!0})}function c(A){if((A=A.filter(function(d){var m,s=(m=d,m?window.getComputedStyle?getComputedStyle(m):m.currentStyle||null:null)["white-space"];return s==="pre-wrap"||s==="pre-line"})).length!=0){var a=A.map(function(d){var m=d.querySelector("code"),s=d.querySelector(".line-numbers-rows");if(m&&s){var i=d.querySelector(".line-numbers-sizer"),o=m.textContent.split(t);i||((i=document.createElement("span")).className="line-numbers-sizer",m.appendChild(i)),i.innerHTML="0",i.style.display="block";var n=i.getBoundingClientRect().height;return i.innerHTML="",{element:d,lines:o,lineHeights:[],oneLinerHeight:n,sizer:i}}}).filter(Boolean);a.forEach(function(d){var m=d.sizer,s=d.lines,i=d.lineHeights,o=d.oneLinerHeight;i[s.length-1]=void 0,s.forEach(function(n,h){if(n&&n.length>1){var g=m.appendChild(document.createElement("span"));g.style.display="block",g.textContent=n}else i[h]=o})}),a.forEach(function(d){for(var m=d.sizer,s=d.lineHeights,i=0,o=0;o<s.length;o++)s[o]===void 0&&(s[o]=m.children[i++].getBoundingClientRect().height)}),a.forEach(function(d){var m=d.sizer,s=d.element.querySelector(".line-numbers-rows");m.style.display="none",m.innerHTML="",d.lineHeights.forEach(function(i,o){s.children[o].style.height=i+"px"})})}}})()},5660:(v,t,e)=>{var l=function(c){var A=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,a=0,d={},m={manual:c.Prism&&c.Prism.manual,disableWorkerMessageHandler:c.Prism&&c.Prism.disableWorkerMessageHandler,util:{encode:function u(y){return y instanceof s?new s(y.type,u(y.content),y.alias):Array.isArray(y)?y.map(u):y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(u){return Object.prototype.toString.call(u).slice(8,-1)},objId:function(u){return u.__id||Object.defineProperty(u,"__id",{value:++a}),u.__id},clone:function u(y,r){var p,b;switch(r=r||{},m.util.type(y)){case"Object":if(b=m.util.objId(y),r[b])return r[b];for(var x in p={},r[b]=p,y)y.hasOwnProperty(x)&&(p[x]=u(y[x],r));return p;case"Array":return b=m.util.objId(y),r[b]?r[b]:(p=[],r[b]=p,y.forEach(function(I,M){p[M]=u(I,r)}),p);default:return y}},getLanguage:function(u){for(;u;){var y=A.exec(u.className);if(y)return y[1].toLowerCase();u=u.parentElement}return"none"},setLanguage:function(u,y){u.className=u.className.replace(RegExp(A,"gi"),""),u.classList.add("language-"+y)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(p){var u=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(p.stack)||[])[1];if(u){var y=document.getElementsByTagName("script");for(var r in y)if(y[r].src==u)return y[r]}return null}},isActive:function(u,y,r){for(var p="no-"+y;u;){var b=u.classList;if(b.contains(y))return!0;if(b.contains(p))return!1;u=u.parentElement}return!!r}},languages:{plain:d,plaintext:d,text:d,txt:d,extend:function(u,y){var r=m.util.clone(m.languages[u]);for(var p in y)r[p]=y[p];return r},insertBefore:function(u,y,r,p){var b=(p=p||m.languages)[u],x={};for(var I in b)if(b.hasOwnProperty(I)){if(I==y)for(var M in r)r.hasOwnProperty(M)&&(x[M]=r[M]);r.hasOwnProperty(I)||(x[I]=b[I])}var T=p[u];return p[u]=x,m.languages.DFS(m.languages,function(z,O){O===T&&z!=u&&(this[z]=x)}),x},DFS:function u(y,r,p,b){b=b||{};var x=m.util.objId;for(var I in y)if(y.hasOwnProperty(I)){r.call(y,I,y[I],p||I);var M=y[I],T=m.util.type(M);T!=="Object"||b[x(M)]?T!=="Array"||b[x(M)]||(b[x(M)]=!0,u(M,r,I,b)):(b[x(M)]=!0,u(M,r,null,b))}}},plugins:{},highlightAll:function(u,y){m.highlightAllUnder(document,u,y)},highlightAllUnder:function(u,y,r){var p={callback:r,container:u,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};m.hooks.run("before-highlightall",p),p.elements=Array.prototype.slice.apply(p.container.querySelectorAll(p.selector)),m.hooks.run("before-all-elements-highlight",p);for(var b,x=0;b=p.elements[x++];)m.highlightElement(b,y===!0,p.callback)},highlightElement:function(u,y,r){var p=m.util.getLanguage(u),b=m.languages[p];m.util.setLanguage(u,p);var x=u.parentElement;x&&x.nodeName.toLowerCase()==="pre"&&m.util.setLanguage(x,p);var I={element:u,language:p,grammar:b,code:u.textContent};function M(z){I.highlightedCode=z,m.hooks.run("before-insert",I),I.element.innerHTML=I.highlightedCode,m.hooks.run("after-highlight",I),m.hooks.run("complete",I),r&&r.call(I.element)}if(m.hooks.run("before-sanity-check",I),(x=I.element.parentElement)&&x.nodeName.toLowerCase()==="pre"&&!x.hasAttribute("tabindex")&&x.setAttribute("tabindex","0"),!I.code)return m.hooks.run("complete",I),void(r&&r.call(I.element));if(m.hooks.run("before-highlight",I),I.grammar)if(y&&c.Worker){var T=new Worker(m.filename);T.onmessage=function(z){M(z.data)},T.postMessage(JSON.stringify({language:I.language,code:I.code,immediateClose:!0}))}else M(m.highlight(I.code,I.grammar,I.language));else M(m.util.encode(I.code))},highlight:function(u,y,r){var p={code:u,grammar:y,language:r};if(m.hooks.run("before-tokenize",p),!p.grammar)throw new Error('The language "'+p.language+'" has no grammar.');return p.tokens=m.tokenize(p.code,p.grammar),m.hooks.run("after-tokenize",p),s.stringify(m.util.encode(p.tokens),p.language)},tokenize:function(u,y){var r=y.rest;if(r){for(var p in r)y[p]=r[p];delete y.rest}var b=new n;return h(b,b.head,u),o(u,b,y,b.head,0),function(x){for(var I=[],M=x.head.next;M!==x.tail;)I.push(M.value),M=M.next;return I}(b)},hooks:{all:{},add:function(u,y){var r=m.hooks.all;r[u]=r[u]||[],r[u].push(y)},run:function(u,y){var r=m.hooks.all[u];if(r&&r.length)for(var p,b=0;p=r[b++];)p(y)}},Token:s};function s(u,y,r,p){this.type=u,this.content=y,this.alias=r,this.length=0|(p||"").length}function i(u,y,r,p){u.lastIndex=y;var b=u.exec(r);if(b&&p&&b[1]){var x=b[1].length;b.index+=x,b[0]=b[0].slice(x)}return b}function o(u,y,r,p,b,x){for(var I in r)if(r.hasOwnProperty(I)&&r[I]){var M=r[I];M=Array.isArray(M)?M:[M];for(var T=0;T<M.length;++T){if(x&&x.cause==I+","+T)return;var z=M[T],O=z.inside,P=!!z.lookbehind,L=!!z.greedy,D=z.alias;if(L&&!z.pattern.global){var U=z.pattern.toString().match(/[imsuy]*$/)[0];z.pattern=RegExp(z.pattern.source,U+"g")}for(var G=z.pattern||z,q=p.next,J=b;q!==y.tail&&!(x&&J>=x.reach);J+=q.value.length,q=q.next){var Y=q.value;if(y.length>u.length)return;if(!(Y instanceof s)){var ee,se=1;if(L){if(!(ee=i(G,J,u,P))||ee.index>=u.length)break;var W=ee.index,fe=ee.index+ee[0].length,de=J;for(de+=q.value.length;W>=de;)de+=(q=q.next).value.length;if(J=de-=q.value.length,q.value instanceof s)continue;for(var ge=q;ge!==y.tail&&(de<fe||typeof ge.value=="string");ge=ge.next)se++,de+=ge.value.length;se--,Y=u.slice(J,de),ee.index-=J}else if(!(ee=i(G,0,Y,P)))continue;W=ee.index;var ue=ee[0],$=Y.slice(0,W),H=Y.slice(W+ue.length),_=J+Y.length;x&&_>x.reach&&(x.reach=_);var K=q.prev;if($&&(K=h(y,K,$),J+=$.length),g(y,K,se),q=h(y,K,new s(I,O?m.tokenize(ue,O):ue,D,ue)),H&&h(y,q,H),se>1){var Ce={cause:I+","+T,reach:_};o(u,y,r,q.prev,J,Ce),x&&Ce.reach>x.reach&&(x.reach=Ce.reach)}}}}}}function n(){var u={value:null,prev:null,next:null},y={value:null,prev:u,next:null};u.next=y,this.head=u,this.tail=y,this.length=0}function h(u,y,r){var p=y.next,b={value:r,prev:y,next:p};return y.next=b,p.prev=b,u.length++,b}function g(u,y,r){for(var p=y.next,b=0;b<r&&p!==u.tail;b++)p=p.next;y.next=p,p.prev=y,u.length-=b}if(c.Prism=m,s.stringify=function u(y,r){if(typeof y=="string")return y;if(Array.isArray(y)){var p="";return y.forEach(function(T){p+=u(T,r)}),p}var b={type:y.type,content:u(y.content,r),tag:"span",classes:["token",y.type],attributes:{},language:r},x=y.alias;x&&(Array.isArray(x)?Array.prototype.push.apply(b.classes,x):b.classes.push(x)),m.hooks.run("wrap",b);var I="";for(var M in b.attributes)I+=" "+M+'="'+(b.attributes[M]||"").replace(/"/g,"&quot;")+'"';return"<"+b.tag+' class="'+b.classes.join(" ")+'"'+I+">"+b.content+"</"+b.tag+">"},!c.document)return c.addEventListener&&(m.disableWorkerMessageHandler||c.addEventListener("message",function(u){var y=JSON.parse(u.data),r=y.language,p=y.code,b=y.immediateClose;c.postMessage(m.highlight(p,m.languages[r],r)),b&&c.close()},!1)),m;var f=m.util.currentScript();function C(){m.manual||m.highlightAll()}if(f&&(m.filename=f.src,f.hasAttribute("data-manual")&&(m.manual=!0)),!m.manual){var w=document.readyState;w==="loading"||w==="interactive"&&f&&f.defer?document.addEventListener("DOMContentLoaded",C):window.requestAnimationFrame?window.requestAnimationFrame(C):window.setTimeout(C,16)}return m}(typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{});v.exports&&(v.exports=l),e.g!==void 0&&(e.g.Prism=l),l.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},l.languages.markup.tag.inside["attr-value"].inside.entity=l.languages.markup.entity,l.languages.markup.doctype.inside["internal-subset"].inside=l.languages.markup,l.hooks.add("wrap",function(c){c.type==="entity"&&(c.attributes.title=c.content.replace(/&amp;/,"&"))}),Object.defineProperty(l.languages.markup.tag,"addInlined",{value:function(c,A){var a={};a["language-"+A]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:l.languages[A]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var d={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};d["language-"+A]={pattern:/[\s\S]+/,inside:l.languages[A]};var m={};m[c]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return c}),"i"),lookbehind:!0,greedy:!0,inside:d},l.languages.insertBefore("markup","cdata",m)}}),Object.defineProperty(l.languages.markup.tag,"addAttribute",{value:function(c,A){l.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+c+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[A,"language-"+A],inside:l.languages[A]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),l.languages.html=l.languages.markup,l.languages.mathml=l.languages.markup,l.languages.svg=l.languages.markup,l.languages.xml=l.languages.extend("markup",{}),l.languages.ssml=l.languages.xml,l.languages.atom=l.languages.xml,l.languages.rss=l.languages.xml,function(c){var A=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;c.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+A.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+A.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+A.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+A.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:A,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},c.languages.css.atrule.inside.rest=c.languages.css;var a=c.languages.markup;a&&(a.tag.addInlined("style","css"),a.tag.addAttribute("style","css"))}(l),l.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},l.languages.javascript=l.languages.extend("clike",{"class-name":[l.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),l.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,l.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:l.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:l.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:l.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:l.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:l.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),l.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:l.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),l.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),l.languages.markup&&(l.languages.markup.tag.addInlined("script","javascript"),l.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),l.languages.js=l.languages.javascript,function(){if(l!==void 0&&typeof document<"u"){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var c={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},A="data-src-status",a="loading",d="loaded",m="pre[data-src]:not(["+A+'="'+d+'"]):not(['+A+'="'+a+'"])';l.hooks.add("before-highlightall",function(i){i.selector+=", "+m}),l.hooks.add("before-sanity-check",function(i){var o=i.element;if(o.matches(m)){i.code="",o.setAttribute(A,a);var n=o.appendChild(document.createElement("CODE"));n.textContent="Loading\u2026";var h=o.getAttribute("data-src"),g=i.language;if(g==="none"){var f=(/\.(\w+)$/.exec(h)||[,"none"])[1];g=c[f]||f}l.util.setLanguage(n,g),l.util.setLanguage(o,g);var C=l.plugins.autoloader;C&&C.loadLanguages(g),function(w,u,y){var r=new XMLHttpRequest;r.open("GET",w,!0),r.onreadystatechange=function(){r.readyState==4&&(r.status<400&&r.responseText?function(p){o.setAttribute(A,d);var b=function(T){var z=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(T||"");if(z){var O=Number(z[1]),P=z[2],L=z[3];return P?L?[O,Number(L)]:[O,void 0]:[O,O]}}(o.getAttribute("data-range"));if(b){var x=p.split(/\r\n?|\n/g),I=b[0],M=b[1]==null?x.length:b[1];I<0&&(I+=x.length),I=Math.max(0,Math.min(I-1,x.length)),M<0&&(M+=x.length),M=Math.max(0,Math.min(M,x.length)),p=x.slice(I,M).join(`
`),o.hasAttribute("data-start")||o.setAttribute("data-start",String(I+1))}n.textContent=p,l.highlightElement(n)}(r.responseText):r.status>=400?y("\u2716 Error "+r.status+" while fetching file: "+r.statusText):y("\u2716 Error: File does not exist or is empty"))},r.send(null)}(h,0,function(w){o.setAttribute(A,"failed"),n.textContent=w})}}),l.plugins.fileHighlight={highlight:function(i){for(var o,n=(i||document).querySelectorAll(m),h=0;o=n[h++];)l.highlightElement(o)}};var s=!1;l.fileHighlight=function(){s||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),s=!0),l.plugins.fileHighlight.highlight.apply(this,arguments)}}}()},1036:(v,t,e)=>{const l=e(3719),c=e(2997),{isPlainObject:A}=e(977),a=e(9996),d=e(9430),{parse:m}=e(20),s=["img","audio","video","picture","svg","object","map","iframe","embed"],i=["script","style"];function o(w,u){w&&Object.keys(w).forEach(function(y){u(w[y],y)})}function n(w,u){return{}.hasOwnProperty.call(w,u)}function h(w,u){const y=[];return o(w,function(r){u(r)&&y.push(r)}),y}v.exports=f;const g=/^[^\0\t\n\f\r /<=>]+$/;function f(w,u,y){if(w==null)return"";typeof w=="number"&&(w=w.toString());let r="",p="";function b($,H){const _=this;this.tag=$,this.attribs=H||{},this.tagPosition=r.length,this.text="",this.mediaChildren=[],this.updateParentNodeText=function(){G.length&&(G[G.length-1].text+=_.text)},this.updateParentNodeMediaChildren=function(){G.length&&s.includes(this.tag)&&G[G.length-1].mediaChildren.push(this.tag)}}(u=Object.assign({},f.defaults,u)).parser=Object.assign({},C,u.parser);const x=function($){return u.allowedTags===!1||(u.allowedTags||[]).indexOf($)>-1};i.forEach(function($){x($)&&!u.allowVulnerableTags&&console.warn(`

\u26A0\uFE0F Your \`allowedTags\` option includes, \`${$}\`, which is inherently
vulnerable to XSS attacks. Please remove it from \`allowedTags\`.
Or, to disable this warning, add the \`allowVulnerableTags\` option
and ensure you are accounting for this risk.

`)});const I=u.nonTextTags||["script","style","textarea","option"];let M,T;u.allowedAttributes&&(M={},T={},o(u.allowedAttributes,function($,H){M[H]=[];const _=[];$.forEach(function(K){typeof K=="string"&&K.indexOf("*")>=0?_.push(c(K).replace(/\\\*/g,".*")):M[H].push(K)}),_.length&&(T[H]=new RegExp("^("+_.join("|")+")$"))}));const z={},O={},P={};o(u.allowedClasses,function($,H){if(M&&(n(M,H)||(M[H]=[]),M[H].push("class")),z[H]=$,Array.isArray($)){const _=[];z[H]=[],P[H]=[],$.forEach(function(K){typeof K=="string"&&K.indexOf("*")>=0?_.push(c(K).replace(/\\\*/g,".*")):K instanceof RegExp?P[H].push(K):z[H].push(K)}),_.length&&(O[H]=new RegExp("^("+_.join("|")+")$"))}});const L={};let D,U,G,q,J,Y,ee;o(u.transformTags,function($,H){let _;typeof $=="function"?_=$:typeof $=="string"&&(_=f.simpleTransform($)),H==="*"?D=_:L[H]=_});let se=!1;fe();const W=new l.Parser({onopentag:function($,H){if(u.enforceHtmlBoundary&&$==="html"&&fe(),Y)return void ee++;const _=new b($,H);G.push(_);let K=!1;const Ce=!!_.text;let ce;if(n(L,$)&&(ce=L[$]($,H),_.attribs=H=ce.attribs,ce.text!==void 0&&(_.innerText=ce.text),$!==ce.tagName&&(_.name=$=ce.tagName,J[U]=ce.tagName)),D&&(ce=D($,H),_.attribs=H=ce.attribs,$!==ce.tagName&&(_.name=$=ce.tagName,J[U]=ce.tagName)),(!x($)||u.disallowedTagsMode==="recursiveEscape"&&!function(oe){for(const ne in oe)if(n(oe,ne))return!1;return!0}(q)||u.nestingLimit!=null&&U>=u.nestingLimit)&&(K=!0,q[U]=!0,u.disallowedTagsMode==="discard"&&I.indexOf($)!==-1&&(Y=!0,ee=1),q[U]=!0),U++,K){if(u.disallowedTagsMode==="discard")return;p=r,r=""}r+="<"+$,$==="script"&&(u.allowedScriptHostnames||u.allowedScriptDomains)&&(_.innerText=""),(!M||n(M,$)||M["*"])&&o(H,function(oe,ne){if(!g.test(ne)||oe===""&&!u.allowedEmptyAttributes.includes(ne)&&(u.nonBooleanAttributes.includes(ne)||u.nonBooleanAttributes.includes("*")))return void delete _.attribs[ne];let Me=!1;if(!M||n(M,$)&&M[$].indexOf(ne)!==-1||M["*"]&&M["*"].indexOf(ne)!==-1||n(T,$)&&T[$].test(ne)||T["*"]&&T["*"].test(ne))Me=!0;else if(M&&M[$]){for(const ae of M[$])if(A(ae)&&ae.name&&ae.name===ne){Me=!0;let V="";if(ae.multiple===!0){const he=oe.split(" ");for(const ve of he)ae.values.indexOf(ve)!==-1&&(V===""?V=ve:V+=" "+ve)}else ae.values.indexOf(oe)>=0&&(V=oe);oe=V}}if(Me){if(u.allowedSchemesAppliedToAttributes.indexOf(ne)!==-1&&ge($,oe))return void delete _.attribs[ne];if($==="script"&&ne==="src"){let ae=!0;try{const V=ue(oe);if(u.allowedScriptHostnames||u.allowedScriptDomains){const he=(u.allowedScriptHostnames||[]).find(function(me){return me===V.url.hostname}),ve=(u.allowedScriptDomains||[]).find(function(me){return V.url.hostname===me||V.url.hostname.endsWith(`.${me}`)});ae=he||ve}}catch{ae=!1}if(!ae)return void delete _.attribs[ne]}if($==="iframe"&&ne==="src"){let ae=!0;try{const V=ue(oe);if(V.isRelativeUrl)ae=n(u,"allowIframeRelativeUrls")?u.allowIframeRelativeUrls:!u.allowedIframeHostnames&&!u.allowedIframeDomains;else if(u.allowedIframeHostnames||u.allowedIframeDomains){const he=(u.allowedIframeHostnames||[]).find(function(me){return me===V.url.hostname}),ve=(u.allowedIframeDomains||[]).find(function(me){return V.url.hostname===me||V.url.hostname.endsWith(`.${me}`)});ae=he||ve}}catch{ae=!1}if(!ae)return void delete _.attribs[ne]}if(ne==="srcset")try{let ae=d(oe);if(ae.forEach(function(V){ge("srcset",V.url)&&(V.evil=!0)}),ae=h(ae,function(V){return!V.evil}),!ae.length)return void delete _.attribs[ne];oe=h(ae,function(V){return!V.evil}).map(function(V){if(!V.url)throw new Error("URL missing");return V.url+(V.w?` ${V.w}w`:"")+(V.h?` ${V.h}h`:"")+(V.d?` ${V.d}x`:"")}).join(", "),_.attribs[ne]=oe}catch{return void delete _.attribs[ne]}if(ne==="class"){const ae=z[$],V=z["*"],he=O[$],ve=P[$],me=[he,O["*"]].concat(ve).filter(function(ke){return ke});if(!(Ee=oe,Ne=ae&&V?a(ae,V):ae||V,De=me,oe=Ne?(Ee=Ee.split(/\s+/)).filter(function(ke){return Ne.indexOf(ke)!==-1||De.some(function(ze){return ze.test(ke)})}).join(" "):Ee).length)return void delete _.attribs[ne]}if(ne==="style"){if(u.parseStyleAttributes)try{if(oe=function(ae){return ae.nodes[0].nodes.reduce(function(V,he){return V.push(`${he.prop}:${he.value}${he.important?" !important":""}`),V},[]).join(";")}(function(ae,V){if(!V)return ae;const he=ae.nodes[0];let ve;return ve=V[he.selector]&&V["*"]?a(V[he.selector],V["*"]):V[he.selector]||V["*"],ve&&(ae.nodes[0].nodes=he.nodes.reduce(function(me){return function(ke,ze){return n(me,ze.prop)&&me[ze.prop].some(function(Se){return Se.test(ze.value)})&&ke.push(ze),ke}}(ve),[])),ae}(m($+" {"+oe+"}",{map:!1}),u.allowedStyles)),oe.length===0)return void delete _.attribs[ne]}catch{return typeof window<"u"&&console.warn('Failed to parse "'+$+" {"+oe+`}", If you're running this in a browser, we recommend to disable style parsing: options.parseStyleAttributes: false, since this only works in a node environment due to a postcss dependency, More info: https://github.com/apostrophecms/sanitize-html/issues/547`),void delete _.attribs[ne]}else if(u.allowedStyles)throw new Error("allowedStyles option cannot be used together with parseStyleAttributes: false.")}r+=" "+ne,oe&&oe.length?r+='="'+de(oe,!0)+'"':u.allowedEmptyAttributes.includes(ne)&&(r+='=""')}else delete _.attribs[ne];var Ee,Ne,De}),u.selfClosing.indexOf($)!==-1?r+=" />":(r+=">",!_.innerText||Ce||u.textFilter||(r+=de(_.innerText),se=!0)),K&&(r=p+de(r),p="")},ontext:function($){if(Y)return;const H=G[G.length-1];let _;if(H&&(_=H.tag,$=H.innerText!==void 0?H.innerText:$),u.disallowedTagsMode!=="discard"||_!=="script"&&_!=="style"){const K=de($,!1);u.textFilter&&!se?r+=u.textFilter(K,_):se||(r+=K)}else r+=$;G.length&&(G[G.length-1].text+=$)},onclosetag:function($,H){if(Y){if(ee--,ee)return;Y=!1}const _=G.pop();if(!_)return;if(_.tag!==$)return void G.push(_);Y=!!u.enforceHtmlBoundary&&$==="html",U--;const K=q[U];if(K){if(delete q[U],u.disallowedTagsMode==="discard")return void _.updateParentNodeText();p=r,r=""}J[U]&&($=J[U],delete J[U]),u.exclusiveFilter&&u.exclusiveFilter(_)?r=r.substr(0,_.tagPosition):(_.updateParentNodeMediaChildren(),_.updateParentNodeText(),u.selfClosing.indexOf($)!==-1||H&&!x($)&&["escape","recursiveEscape"].indexOf(u.disallowedTagsMode)>=0?K&&(r=p,p=""):(r+="</"+$+">",K&&(r=p+de(r),p=""),se=!1))}},u.parser);return W.write(w),W.end(),r;function fe(){r="",U=0,G=[],q={},J={},Y=!1,ee=0}function de($,H){return typeof $!="string"&&($+=""),u.parser.decodeEntities&&($=$.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),H&&($=$.replace(/"/g,"&quot;"))),$=$.replace(/&(?![a-zA-Z0-9#]{1,20};)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),H&&($=$.replace(/"/g,"&quot;")),$}function ge($,H){for(H=H.replace(/[\x00-\x20]+/g,"");;){const Ce=H.indexOf("<!--");if(Ce===-1)break;const ce=H.indexOf("-->",Ce+4);if(ce===-1)break;H=H.substring(0,Ce)+H.substring(ce+3)}const _=H.match(/^([a-zA-Z][a-zA-Z0-9.\-+]*):/);if(!_)return!!H.match(/^[/\\]{2}/)&&!u.allowProtocolRelative;const K=_[1].toLowerCase();return n(u.allowedSchemesByTag,$)?u.allowedSchemesByTag[$].indexOf(K)===-1:!u.allowedSchemes||u.allowedSchemes.indexOf(K)===-1}function ue($){if(($=$.replace(/^(\w+:)?\s*[\\/]\s*[\\/]/,"$1//")).startsWith("relative:"))throw new Error("relative: exploit attempt");let H="relative://relative-site";for(let K=0;K<100;K++)H+=`/${K}`;const _=new URL($,H);return{isRelativeUrl:_&&_.hostname==="relative-site"&&_.protocol==="relative:",url:_}}}const C={decodeEntities:!0};f.defaults={allowedTags:["address","article","aside","footer","header","h1","h2","h3","h4","h5","h6","hgroup","main","nav","section","blockquote","dd","div","dl","dt","figcaption","figure","hr","li","main","ol","p","pre","ul","a","abbr","b","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rb","rp","rt","rtc","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr","caption","col","colgroup","table","tbody","td","tfoot","th","thead","tr"],nonBooleanAttributes:["abbr","accept","accept-charset","accesskey","action","allow","alt","as","autocapitalize","autocomplete","blocking","charset","cite","class","color","cols","colspan","content","contenteditable","coords","crossorigin","data","datetime","decoding","dir","dirname","download","draggable","enctype","enterkeyhint","fetchpriority","for","form","formaction","formenctype","formmethod","formtarget","headers","height","hidden","high","href","hreflang","http-equiv","id","imagesizes","imagesrcset","inputmode","integrity","is","itemid","itemprop","itemref","itemtype","kind","label","lang","list","loading","low","max","maxlength","media","method","min","minlength","name","nonce","optimum","pattern","ping","placeholder","popover","popovertarget","popovertargetaction","poster","preload","referrerpolicy","rel","rows","rowspan","sandbox","scope","shape","size","sizes","slot","span","spellcheck","src","srcdoc","srclang","srcset","start","step","style","tabindex","target","title","translate","type","usemap","value","width","wrap","onauxclick","onafterprint","onbeforematch","onbeforeprint","onbeforeunload","onbeforetoggle","onblur","oncancel","oncanplay","oncanplaythrough","onchange","onclick","onclose","oncontextlost","oncontextmenu","oncontextrestored","oncopy","oncuechange","oncut","ondblclick","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","ondurationchange","onemptied","onended","onerror","onfocus","onformdata","onhashchange","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onlanguagechange","onload","onloadeddata","onloadedmetadata","onloadstart","onmessage","onmessageerror","onmousedown","onmouseenter","onmouseleave","onmousemove","onmouseout","onmouseover","onmouseup","onoffline","ononline","onpagehide","onpageshow","onpaste","onpause","onplay","onplaying","onpopstate","onprogress","onratechange","onreset","onresize","onrejectionhandled","onscroll","onscrollend","onsecuritypolicyviolation","onseeked","onseeking","onselect","onslotchange","onstalled","onstorage","onsubmit","onsuspend","ontimeupdate","ontoggle","onunhandledrejection","onunload","onvolumechange","onwaiting","onwheel"],disallowedTagsMode:"discard",allowedAttributes:{a:["href","name","target"],img:["src","srcset","alt","title","width","height","loading"]},allowedEmptyAttributes:["alt"],selfClosing:["img","br","hr","area","base","basefont","input","link","meta"],allowedSchemes:["http","https","ftp","mailto","tel"],allowedSchemesByTag:{},allowedSchemesAppliedToAttributes:["href","src","cite"],allowProtocolRelative:!0,enforceHtmlBoundary:!1,parseStyleAttributes:!0},f.simpleTransform=function(w,u,y){return y=y===void 0||y,u=u||{},function(r,p){let b;if(y)for(b in u)p[b]=u[b];else p=u;return{tagName:w,attribs:p}}}},2997:v=>{"use strict";v.exports=t=>{if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}},977:(v,t)=>{"use strict";function e(l){return Object.prototype.toString.call(l)==="[object Object]"}Object.defineProperty(t,"__esModule",{value:!0}),t.isPlainObject=function(l){var c,A;return e(l)!==!1&&((c=l.constructor)===void 0||e(A=c.prototype)!==!1&&A.hasOwnProperty("isPrototypeOf")!==!1)}},8692:(v,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>w});var l=e(3379),c=e.n(l),A=e(7795),a=e.n(A),d=e(569),m=e.n(d),s=e(3565),i=e.n(s),o=e(9216),n=e.n(o),h=e(4589),g=e.n(h),f=e(319),C={};C.styleTagTransform=g(),C.setAttributes=i(),C.insert=m().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=n(),c()(f.Z,C);const w=f.Z&&f.Z.locals?f.Z.locals:void 0},8415:(v,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>w});var l=e(3379),c=e.n(l),A=e(7795),a=e.n(A),d=e(569),m=e.n(d),s=e(3565),i=e.n(s),o=e(9216),n=e.n(o),h=e(4589),g=e.n(h),f=e(9367),C={};C.styleTagTransform=g(),C.setAttributes=i(),C.insert=m().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=n(),c()(f.Z,C);const w=f.Z&&f.Z.locals?f.Z.locals:void 0},7385:(v,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>w});var l=e(3379),c=e.n(l),A=e(7795),a=e.n(A),d=e(569),m=e.n(d),s=e(3565),i=e.n(s),o=e(9216),n=e.n(o),h=e(4589),g=e.n(h),f=e(4747),C={};C.styleTagTransform=g(),C.setAttributes=i(),C.insert=m().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=n(),c()(f.Z,C);const w=f.Z&&f.Z.locals?f.Z.locals:void 0},7416:(v,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>w});var l=e(3379),c=e.n(l),A=e(7795),a=e.n(A),d=e(569),m=e.n(d),s=e(3565),i=e.n(s),o=e(9216),n=e.n(o),h=e(4589),g=e.n(h),f=e(9741),C={};C.styleTagTransform=g(),C.setAttributes=i(),C.insert=m().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=n(),c()(f.Z,C);const w=f.Z&&f.Z.locals?f.Z.locals:void 0},4641:(v,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>w});var l=e(3379),c=e.n(l),A=e(7795),a=e.n(A),d=e(569),m=e.n(d),s=e(3565),i=e.n(s),o=e(9216),n=e.n(o),h=e(4589),g=e.n(h),f=e(8634),C={};C.styleTagTransform=g(),C.setAttributes=i(),C.insert=m().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=n(),c()(f.Z,C);const w=f.Z&&f.Z.locals?f.Z.locals:void 0},4537:(v,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>w});var l=e(3379),c=e.n(l),A=e(7795),a=e.n(A),d=e(569),m=e.n(d),s=e(3565),i=e.n(s),o=e(9216),n=e.n(o),h=e(4589),g=e.n(h),f=e(1360),C={};C.styleTagTransform=g(),C.setAttributes=i(),C.insert=m().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=n(),c()(f.Z,C);const w=f.Z&&f.Z.locals?f.Z.locals:void 0},8283:(v,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>w});var l=e(3379),c=e.n(l),A=e(7795),a=e.n(A),d=e(569),m=e.n(d),s=e(3565),i=e.n(s),o=e(9216),n=e.n(o),h=e(4589),g=e.n(h),f=e(3722),C={};C.styleTagTransform=g(),C.setAttributes=i(),C.insert=m().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=n(),c()(f.Z,C);const w=f.Z&&f.Z.locals?f.Z.locals:void 0},6358:(v,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>w});var l=e(3379),c=e.n(l),A=e(7795),a=e.n(A),d=e(569),m=e.n(d),s=e(3565),i=e.n(s),o=e(9216),n=e.n(o),h=e(4589),g=e.n(h),f=e(2155),C={};C.styleTagTransform=g(),C.setAttributes=i(),C.insert=m().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=n(),c()(f.Z,C);const w=f.Z&&f.Z.locals?f.Z.locals:void 0},1118:(v,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>w});var l=e(3379),c=e.n(l),A=e(7795),a=e.n(A),d=e(569),m=e.n(d),s=e(3565),i=e.n(s),o=e(9216),n=e.n(o),h=e(4589),g=e.n(h),f=e(5247),C={};C.styleTagTransform=g(),C.setAttributes=i(),C.insert=m().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=n(),c()(f.Z,C);const w=f.Z&&f.Z.locals?f.Z.locals:void 0},3249:(v,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>w});var l=e(3379),c=e.n(l),A=e(7795),a=e.n(A),d=e(569),m=e.n(d),s=e(3565),i=e.n(s),o=e(9216),n=e.n(o),h=e(4589),g=e.n(h),f=e(8398),C={};C.styleTagTransform=g(),C.setAttributes=i(),C.insert=m().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=n(),c()(f.Z,C);const w=f.Z&&f.Z.locals?f.Z.locals:void 0},3883:(v,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>w});var l=e(3379),c=e.n(l),A=e(7795),a=e.n(A),d=e(569),m=e.n(d),s=e(3565),i=e.n(s),o=e(9216),n=e.n(o),h=e(4589),g=e.n(h),f=e(5338),C={};C.styleTagTransform=g(),C.setAttributes=i(),C.insert=m().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=n(),c()(f.Z,C);const w=f.Z&&f.Z.locals?f.Z.locals:void 0},6457:(v,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>w});var l=e(3379),c=e.n(l),A=e(7795),a=e.n(A),d=e(569),m=e.n(d),s=e(3565),i=e.n(s),o=e(9216),n=e.n(o),h=e(4589),g=e.n(h),f=e(3407),C={};C.styleTagTransform=g(),C.setAttributes=i(),C.insert=m().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=n(),c()(f.Z,C);const w=f.Z&&f.Z.locals?f.Z.locals:void 0},395:(v,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>w});var l=e(3379),c=e.n(l),A=e(7795),a=e.n(A),d=e(569),m=e.n(d),s=e(3565),i=e.n(s),o=e(9216),n=e.n(o),h=e(4589),g=e.n(h),f=e(2203),C={};C.styleTagTransform=g(),C.setAttributes=i(),C.insert=m().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=n(),c()(f.Z,C);const w=f.Z&&f.Z.locals?f.Z.locals:void 0},7159:(v,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>w});var l=e(3379),c=e.n(l),A=e(7795),a=e.n(A),d=e(569),m=e.n(d),s=e(3565),i=e.n(s),o=e(9216),n=e.n(o),h=e(4589),g=e.n(h),f=e(378),C={};C.styleTagTransform=g(),C.setAttributes=i(),C.insert=m().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=n(),c()(f.Z,C);const w=f.Z&&f.Z.locals?f.Z.locals:void 0},3379:v=>{"use strict";var t=[];function e(A){for(var a=-1,d=0;d<t.length;d++)if(t[d].identifier===A){a=d;break}return a}function l(A,a){for(var d={},m=[],s=0;s<A.length;s++){var i=A[s],o=a.base?i[0]+a.base:i[0],n=d[o]||0,h="".concat(o," ").concat(n);d[o]=n+1;var g=e(h),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(g!==-1)t[g].references++,t[g].updater(f);else{var C=c(f,a);a.byIndex=s,t.splice(s,0,{identifier:h,updater:C,references:1})}m.push(h)}return m}function c(A,a){var d=a.domAPI(a);return d.update(A),function(m){if(m){if(m.css===A.css&&m.media===A.media&&m.sourceMap===A.sourceMap&&m.supports===A.supports&&m.layer===A.layer)return;d.update(A=m)}else d.remove()}}v.exports=function(A,a){var d=l(A=A||[],a=a||{});return function(m){m=m||[];for(var s=0;s<d.length;s++){var i=e(d[s]);t[i].references--}for(var o=l(m,a),n=0;n<d.length;n++){var h=e(d[n]);t[h].references===0&&(t[h].updater(),t.splice(h,1))}d=o}}},569:v=>{"use strict";var t={};v.exports=function(e,l){var c=function(A){if(t[A]===void 0){var a=document.querySelector(A);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch{a=null}t[A]=a}return t[A]}(e);if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(l)}},9216:v=>{"use strict";v.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},3565:(v,t,e)=>{"use strict";v.exports=function(l){var c=e.nc;c&&l.setAttribute("nonce",c)}},7795:v=>{"use strict";v.exports=function(t){var e=t.insertStyleElement(t);return{update:function(l){(function(c,A,a){var d="";a.supports&&(d+="@supports (".concat(a.supports,") {")),a.media&&(d+="@media ".concat(a.media," {"));var m=a.layer!==void 0;m&&(d+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),d+=a.css,m&&(d+="}"),a.media&&(d+="}"),a.supports&&(d+="}");var s=a.sourceMap;s&&typeof btoa<"u"&&(d+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),A.styleTagTransform(d,c,A.options)})(e,t,l)},remove:function(){(function(l){if(l.parentNode===null)return!1;l.parentNode.removeChild(l)})(e)}}}},4589:v=>{"use strict";v.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},7136:v=>{v.exports="data:image/svg+xml;base64,PCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4gPHN2ZyBmaWxsPSIjMDAwMDAwIiB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00NzguMjEgMzM0LjA5M0wzMzYgMjU2bDE0Mi4yMS03OC4wOTNjMTEuNzk1LTYuNDc3IDE1Ljk2MS0yMS4zODQgOS4yMzItMzMuMDM3bC0xOS40OC0zMy43NDFjLTYuNzI4LTExLjY1My0yMS43Mi0xNS40OTktMzMuMjI3LTguNTIzTDI5NiAxODYuNzE4bDMuNDc1LTE2Mi4yMDRDMjk5Ljc2MyAxMS4wNjEgMjg4LjkzNyAwIDI3NS40OCAwaC0zOC45NmMtMTMuNDU2IDAtMjQuMjgzIDExLjA2MS0yMy45OTQgMjQuNTE0TDIxNiAxODYuNzE4IDc3LjI2NSAxMDIuNjA3Yy0xMS41MDYtNi45NzYtMjYuNDk5LTMuMTMtMzMuMjI3IDguNTIzbC0xOS40OCAzMy43NDFjLTYuNzI4IDExLjY1My0yLjU2MiAyNi41NiA5LjIzMyAzMy4wMzdMMTc2IDI1NiAzMy43OSAzMzQuMDkzYy0xMS43OTUgNi40NzctMTUuOTYxIDIxLjM4NC05LjIzMiAzMy4wMzdsMTkuNDggMzMuNzQxYzYuNzI4IDExLjY1MyAyMS43MjEgMTUuNDk5IDMzLjIyNyA4LjUyM0wyMTYgMzI1LjI4MmwtMy40NzUgMTYyLjIwNEMyMTIuMjM3IDUwMC45MzkgMjIzLjA2NCA1MTIgMjM2LjUyIDUxMmgzOC45NjFjMTMuNDU2IDAgMjQuMjgzLTExLjA2MSAyMy45OTUtMjQuNTE0TDI5NiAzMjUuMjgybDEzOC43MzUgODQuMTExYzExLjUwNiA2Ljk3NiAyNi40OTkgMy4xMyAzMy4yMjctOC41MjNsMTkuNDgtMzMuNzQxYzYuNzI4LTExLjY1MyAyLjU2My0yNi41NTktOS4yMzItMzMuMDM2eiIvPjwvc3ZnPg=="},6981:v=>{v.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQ3MV80MzEzKSI+IDxwYXRoIGQ9Ik02IDExLjI1QzguODk5NSAxMS4yNSAxMS4yNSA4Ljg5OTUgMTEuMjUgNkMxMS4yNSAzLjEwMDUxIDguODk5NSAwLjc1IDYgMC43NUMzLjEwMDUxIDAuNzUgMC43NSAzLjEwMDUxIDAuNzUgNkMwLjc1IDguODk5NSAzLjEwMDUxIDExLjI1IDYgMTEuMjVaIiBzdHJva2U9IiM5QkE3QjYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4gPHBhdGggZD0iTTguMjUgNkgzLjc1IiBzdHJva2U9IiM5QkE3QjYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiAvPiA8L2c+IDxkZWZzPiA8Y2xpcFBhdGggaWQ9ImNsaXAwXzQ3MV80MzEzIj4gPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSJ3aGl0ZSIgLz4gPC9jbGlwUGF0aD4gPC9kZWZzPiA8L3N2Zz4g"},7111:v=>{v.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iY2FsZW5kYXIiPiA8cGF0aCBkPSJNMjAsM2gtMXYyYzAsMS4xMDQtMC44OTYsMi0yLDJzLTItMC44OTYtMi0yVjNIOXYyYzAsMS4xMDQtMC44OTYsMi0yLDJTNSw2LjEwNCw1LDVWM0g0QzIuODk1LDMsMiwzLjg5NSwyLDV2MTR2MSBjMCwxLjEwNSwwLjg5NSwyLDIsMmgxNmMxLjEwNSwwLDItMC44OTUsMi0ydi0xVjVDMjIsMy44OTUsMjEuMTA1LDMsMjAsM3ogTTcsMTguNUM3LDE4Ljc3NSw2Ljc3NSwxOSw2LjUsMTloLTEgQzUuMjI1LDE5LDUsMTguNzc1LDUsMTguNXYtMUM1LDE3LjIyNSw1LjIyNSwxNyw1LjUsMTdoMUM2Ljc3NSwxNyw3LDE3LjIyNSw3LDE3LjVWMTguNXogTTcsMTQuNUM3LDE0Ljc3NSw2Ljc3NSwxNSw2LjUsMTVoLTEgQzUuMjI1LDE1LDUsMTQuNzc1LDUsMTQuNXYtMUM1LDEzLjIyNSw1LjIyNSwxMyw1LjUsMTNoMUM2Ljc3NSwxMyw3LDEzLjIyNSw3LDEzLjVWMTQuNXogTTcsMTAuNUM3LDEwLjc3NSw2Ljc3NSwxMSw2LjUsMTFoLTEgQzUuMjI1LDExLDUsMTAuNzc1LDUsMTAuNXYtMUM1LDkuMjI1LDUuMjI1LDksNS41LDloMUM2Ljc3NSw5LDcsOS4yMjUsNyw5LjVWMTAuNXogTTExLDE4LjVjMCwwLjI3NS0wLjIyNSwwLjUtMC41LDAuNWgtMSBDOS4yMjUsMTksOSwxOC43NzUsOSwxOC41di0xQzksMTcuMjI1LDkuMjI1LDE3LDkuNSwxN2gxYzAuMjc1LDAsMC41LDAuMjI1LDAuNSwwLjVWMTguNXogTTExLDE0LjVjMCwwLjI3NS0wLjIyNSwwLjUtMC41LDAuNWgtMSBDOS4yMjUsMTUsOSwxNC43NzUsOSwxNC41di0xQzksMTMuMjI1LDkuMjI1LDEzLDkuNSwxM2gxYzAuMjc1LDAsMC41LDAuMjI1LDAuNSwwLjVWMTQuNXogTTExLDEwLjVjMCwwLjI3NS0wLjIyNSwwLjUtMC41LDAuNWgtMSBDOS4yMjUsMTEsOSwxMC43NzUsOSwxMC41di0xQzksOS4yMjUsOS4yMjUsOSw5LjUsOWgxQzEwLjc3NSw5LDExLDkuMjI1LDExLDkuNVYxMC41eiBNMTUsMTguNWMwLDAuMjc1LTAuMjI1LDAuNS0wLjUsMC41aC0xIGMtMC4yNzUsMC0wLjUtMC4yMjUtMC41LTAuNXYtMWMwLTAuMjc1LDAuMjI1LTAuNSwwLjUtMC41aDFjMC4yNzUsMCwwLjUsMC4yMjUsMC41LDAuNVYxOC41eiBNMTUsMTQuNWMwLDAuMjc1LTAuMjI1LDAuNS0wLjUsMC41IGgtMWMtMC4yNzUsMC0wLjUtMC4yMjUtMC41LTAuNXYtMWMwLTAuMjc1LDAuMjI1LTAuNSwwLjUtMC41aDFjMC4yNzUsMCwwLjUsMC4yMjUsMC41LDAuNVYxNC41eiBNMTUsMTAuNSBjMCwwLjI3NS0wLjIyNSwwLjUtMC41LDAuNWgtMWMtMC4yNzUsMC0wLjUtMC4yMjUtMC41LTAuNXYtMUMxMyw5LjIyNSwxMy4yMjUsOSwxMy41LDloMUMxNC43NzUsOSwxNSw5LjIyNSwxNSw5LjVWMTAuNXogTTE5LDE4LjUgYzAsMC4yNzUtMC4yMjUsMC41LTAuNSwwLjVoLTFjLTAuMjc1LDAtMC41LTAuMjI1LTAuNS0wLjV2LTFjMC0wLjI3NSwwLjIyNS0wLjUsMC41LTAuNWgxYzAuMjc1LDAsMC41LDAuMjI1LDAuNSwwLjVWMTguNXogTTE5LDE0LjVjMCwwLjI3NS0wLjIyNSwwLjUtMC41LDAuNWgtMWMtMC4yNzUsMC0wLjUtMC4yMjUtMC41LTAuNXYtMWMwLTAuMjc1LDAuMjI1LTAuNSwwLjUtMC41aDFjMC4yNzUsMCwwLjUsMC4yMjUsMC41LDAuNSBWMTQuNXogTTE5LDEwLjVjMCwwLjI3NS0wLjIyNSwwLjUtMC41LDAuNWgtMWMtMC4yNzUsMC0wLjUtMC4yMjUtMC41LTAuNXYtMUMxNyw5LjIyNSwxNy4yMjUsOSwxNy41LDloMUMxOC43NzUsOSwxOSw5LjIyNSwxOSw5LjUgVjEwLjV6IE02LDVWMmMwLTAuNTUyLDAuNDQ4LTEsMS0xczEsMC40NDgsMSwxdjNjMCwwLjU1Mi0wLjQ0OCwxLTEsMVM2LDUuNTUyLDYsNXogTTE2LDVWMmMwLTAuNTUyLDAuNDQ3LTEsMS0xczEsMC40NDgsMSwxdjMgYzAsMC41NTItMC40NDcsMS0xLDFTMTYsNS41NTIsMTYsNXoiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},5533:v=>{v.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMyAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjYiIHN0cm9rZT0iI0YxNEM0QyIvPiA8cGF0aCBkPSJNNCA0TDkgOSIgc3Ryb2tlPSIjRjE0QzRDIi8+IDxwYXRoIGQ9Ik05IDRMNCA5IiBzdHJva2U9IiNGMTRDNEMiLz4gPC9zdmc+IA=="},1925:v=>{v.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+IDxnIGlkPSJjYW5jZWwiPiA8cGF0aCBkPSJNMTkuMDcxLDE3LjY1N0wxMy40MTQsMTJsNS42NTctNS42NTdjMC4zOS0wLjM5LDAuMzktMS4wMjQsMC0xLjQxNHMtMS4wMjQtMC4zOS0xLjQxNCwwTDEyLDEwLjU4Nkw2LjM0Myw0LjkyOSBjLTAuMzktMC4zOS0xLjAyNC0wLjM5LTEuNDE0LDBzLTAuMzksMS4wMjQsMCwxLjQxNEwxMC41ODYsMTJsLTUuNjU3LDUuNjU3Yy0wLjM5MSwwLjM5MS0wLjM5LDEuMDI0LDAsMS40MTRzMS4wMjMsMC4zOTEsMS40MTQsMCBMMTIsMTMuNDE0bDUuNjU3LDUuNjU3YzAuMzksMC4zOSwxLjAyNCwwLjM5LDEuNDE0LDBTMTkuNDYyLDE4LjA0NywxOS4wNzEsMTcuNjU3eiIvPiA8L2c+IDxnIGlkPSJMYXllcl8xIj4gPC9nPiA8L3N2Zz4="},880:v=>{v.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ic21zIj4gPHBhdGggZD0iTTE4LjQ4MSwxMGgtMS45NDdjLTIuMTg4LDAtNC4xNDIsMS42MDItNC40NzksMy44NDhDMTEuNjMsMTYuNjc4LDEzLjY5OCwxOSwxNi4zNDcsMTloMS4xSDE4IGMwLjI2NCwwLjQwOSwwLjQ3NCwxLjA0MiwwLjQ3NCwxLjU3MWMwLDAuMjY1LTAuMDM5LDAuNjExLTAuMTE0LDAuOTM5Yy0wLjA3NSwwLjMyOSwwLjI1MiwwLjYwNCwwLjUzNiwwLjQ0MSBjMS45NjgtMS4xMzIsNC4wNDctNC4zMTcsNC4xMDMtNy4yNTlDMjMuMDQ4LDEyLjExMiwyMC45NjUsMTAsMTguNDgxLDEweiIvPiA8cGF0aCBzdHlsZT0ib3BhY2l0eTowLjU7IiBkPSJNMTYuOTIxLDcuNDUxQzE2LjQzMSw0LjI2OSwxMy41ODgsMiwxMC40MDYsMkg3LjU3M0MzLjk2LDIsMC45Myw0Ljk5MiwxLjAwMSw4LjY0OCBjMC4wODIsNC4xNjgsMy4xMDUsOC42NzksNS45NjgsMTAuMjgzYzAuNDE0LDAuMjMyLDAuODg5LTAuMTU5LDAuNzgtMC42MjRjLTAuMTA5LTAuNDY2LTAuMTY2LTAuOTU1LTAuMTY2LTEuMzMxIGMwLTAuNzUsMC4wMzMtMS4zOTYsMC40MTctMS45NzZoMC44MDRoMS42YzAuMjA2LDAsMC40MS0wLjAxNSwwLjYxMi0wLjAzNWMtMC4wMjktMC40MTctMC4wMTUtMC44NDEsMC4wNDktMS4yNjYgQzExLjQ2NywxMS4wMiwxMy44MTgsOSwxNi41MzMsOWgwLjQzM0MxNy4wMTIsOC40OTYsMTcuMDAyLDcuOTc4LDE2LjkyMSw3LjQ1MXoiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},4339:v=>{v.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyNl8yMzY0KSI+IDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMS44MTA2NiA2LjAwMDA2TDMuOTA1MzMgMy45MDUzOEwyLjg0NDY3IDIuODQ0NzNMMC4yMTk2NyA1LjQ2OTczQy0wLjA3MzIyMzMgNS43NjI2MiAtMC4wNzMyMjMzIDYuMjM3NDkgMC4yMTk2NyA2LjUzMDM4TDIuODQ0NjcgOS4xNTU0TDMuOTA1MzMgOC4wOTQ3NUwxLjgxMDY2IDYuMDAwMDZaTTQuMTU5NTggOC40ODg0Mkw2LjQ1NDU4IDIuOTM4NEw3Ljg0MDcyIDMuNTExNkw1LjU0NTc0IDkuMDYxNTdMNC4xNTk1OCA4LjQ4ODQyWk0xMS43ODAzIDUuNDY5NzNMOS4xNTUzMiAyLjg0NDczTDguMDk0NjcgMy45MDUzOEwxMC4xODkzIDYuMDAwMDZMOC4wOTQ2NyA4LjA5NDc1TDkuMTU1MzIgOS4xNTU0TDExLjc4MDMgNi41MzAzOEMxMi4wNzMyIDYuMjM3NDkgMTIuMDczMiA1Ljc2MjYyIDExLjc4MDMgNS40Njk3M1oiIGZpbGw9IndoaXRlIiAvPiA8L2c+IDxkZWZzPiA8Y2xpcFBhdGggaWQ9ImNsaXAwXzQyNl8yMzY0Ij4gPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSJ3aGl0ZSIgLz4gPC9jbGlwUGF0aD4gPC9kZWZzPiA8L3N2Zz4g"},7588:v=>{v.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTEzLjUwNjcgMC45NzMzMzNMMTMuOTg2NyAxLjUwNjY3VjEwLjUyTDEzLjUwNjcgMTFINi43MzMzM0wzLjg1MzMzIDEzLjg4TDMgMTMuNTA2N1YxMUgwLjQ5MzMzM0wwLjAxMzMzMzMgMTAuNTJWMS41MDY2N0wwLjQ5MzMzMyAwLjk3MzMzM0gxMy41MDY3Wk0xMy4wMjY3IDkuOTg2NjdWMS45ODY2N0gxLjAyNjY3VjkuOTg2NjdIMy40OEw0LjAxMzMzIDEwLjUyVjEyLjI4TDYuMTQ2NjcgMTAuMTQ2N0w2LjUyIDkuOTg2NjdIMTMuMDI2N1oiIGZpbGw9IiNGMTRDNEMiLz4gPC9zdmc+IA=="},2666:v=>{v.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4OV80Mjk4OSkiPiA8cGF0aCBkPSJNNy41IDQuNUgxLjVWMTAuNUg3LjVWNC41WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPiA8cGF0aCBkPSJNMy43NSA0LjVWMS41SDEwLjVWOC4yNUg3LjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4gPC9nPiA8ZGVmcz4gPGNsaXBQYXRoIGlkPSJjbGlwMF8xODlfNDI5ODkiPiA8cmVjdCB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9IndoaXRlIiAvPiA8L2NsaXBQYXRoPiA8L2RlZnM+IDwvc3ZnPiA="},5070:v=>{v.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDIuMjVDMCAxLjgzNTc5IDAuMzM1Nzg2IDEuNSAwLjc1IDEuNUgxMS4yNUMxMS42NjQyIDEuNSAxMiAxLjgzNTc5IDEyIDIuMjVWNC41SDEwLjVWM0gxLjVWOC4yNUg0LjVWOS43NUgwLjc1QzAuMzM1Nzg2IDkuNzUgMCA5LjQxNDIzIDAgOVYyLjI1Wk05Ljc1IDcuNUgxMlY5SDkuNzVWMTEuMjVIOC4yNVY5SDZWNy41SDguMjVWNS4yNUg5Ljc1VjcuNVoiIGZpbGw9IndoaXRlIiAvPiA8L3N2Zz4g"},6829:v=>{v.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTExLjcwNjcgMy4yNjY2N0wxMi4wMjY3IDQuMDEzMzNWMTIuOTczM0wxMS4wMTMzIDEzLjk4NjdIMkwwLjk4NjY2NyAxMi45NzMzVjAuOTczMzMzTDIgMC4wMTMzMzMzSDguMDI2NjdMOC43MiAwLjI4TDExLjcwNjcgMy4yNjY2N1pNMTEuMDEzMyAxMi45NzMzVjQuOTczMzNINy4wMTMzM1YwLjk3MzMzM0gyVjEyLjk3MzNIMTEuMDEzM1pNOC4wMjY2NyA0LjAxMzMzSDExLjAxMzNMOC4wMjY2NyAwLjk3MzMzM1Y0LjAxMzMzWiIgZmlsbD0iI0M1QzVDNSIvPiA8L3N2Zz4g"},4983:v=>{v.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLjc1IDMuODU2NjZMMS43MTMzNSAyLjg5MzMxTDYgNy4xNzk0M0wxMC4yODY3IDIuODkzMzFMMTEuMjUgMy44NTY2Nkw2IDkuMTA2NjZMMC43NSAzLjg1NjY2WiIgZmlsbD0iI0QxRDVEQiIgLz4gPC9zdmc+IA=="},5227:v=>{v.exports="data:image/svg+xml;base64,PCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4gPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTEyIDEzLjc1QzEyLjk2NjUgMTMuNzUgMTMuNzUgMTIuOTY2NSAxMy43NSAxMkMxMy43NSAxMS4wMzM1IDEyLjk2NjUgMTAuMjUgMTIgMTAuMjVDMTEuMDMzNSAxMC4yNSAxMC4yNSAxMS4wMzM1IDEwLjI1IDEyQzEwLjI1IDEyLjk2NjUgMTEuMDMzNSAxMy43NSAxMiAxMy43NVoiIGZpbGw9IiMwMDAwMDAiLz4gPHBhdGggZD0iTTEyIDYuNzVDMTIuOTY2NSA2Ljc1IDEzLjc1IDUuOTY2NSAxMy43NSA1QzEzLjc1IDQuMDMzNSAxMi45NjY1IDMuMjUgMTIgMy4yNUMxMS4wMzM1IDMuMjUgMTAuMjUgNC4wMzM1IDEwLjI1IDVDMTAuMjUgNS45NjY1IDExLjAzMzUgNi43NSAxMiA2Ljc1WiIgZmlsbD0iIzAwMDAwMCIvPiA8cGF0aCBkPSJNMTIgMjAuNzVDMTIuOTY2NSAyMC43NSAxMy43NSAxOS45NjY1IDEzLjc1IDE5QzEzLjc1IDE4LjAzMzUgMTIuOTY2NSAxNy4yNSAxMiAxNy4yNUMxMS4wMzM1IDE3LjI1IDEwLjI1IDE4LjAzMzUgMTAuMjUgMTlDMTAuMjUgMTkuOTY2NSAxMS4wMzM1IDIwLjc1IDEyIDIwLjc1WiIgZmlsbD0iIzAwMDAwMCIvPiA8L3N2Zz4="},5548:v=>{v.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjQ0Nzk5IDAuMTA2NjkxQzEuMDc4ODYgLTAuMDc3OTk5OSAwLjYzNDE5MiAtMC4wMTY5MjYxIDAuMzI4NTI4IDAuMjYwNDQ0QzAuMDIyODY0NCAwLjUzNzgxMyAtMC4wODA5OCAwLjk3NDQ4MiAwLjA2NzEwMDEgMS4zNTk3NkwyLjYyMTIyIDguMDA1MDVMMC4wNjcyODQ3IDE0LjYzOTdDLTAuMDgwOTg2OSAxNS4wMjQ5IDAuMDIyNjE2OCAxNS40NjE2IDAuMzI4MTEgMTUuNzM5MUMwLjYzMzYwNCAxNi4wMTY2IDEuMDc4MjIgMTYuMDc4IDEuNDQ3NDQgMTUuODkzNUwxNS40NDY0IDguODk5OTFDMTUuNzg1MyA4LjczMDYzIDE1Ljk5OTQgOC4zODQ0MiAxNS45OTk1IDguMDA1NjRDMTUuOTk5NiA3LjYyNjg1IDE1Ljc4NTcgNy4yODA1MiAxNS40NDcgNy4xMTEwM0wxLjQ0Nzk5IDAuMTA2NjkxWk00LjM3OTYxIDcuMDA1MzNMMi44NTkwMyAzLjA0OTA3TDEwLjc2NjEgNy4wMDUzM0g0LjM3OTYxWk00LjM3OTIzIDkuMDA1MzNMMi44NTk5NCAxMi45NTIyTDEwLjc2MDIgOS4wMDUzM0g0LjM3OTIzWiIgZmlsbD0iIzA5NzJEMyIgLz4gPC9zdmc+IA=="},5430:v=>{v.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iZXJyb3JfaW5saW5lIj4gPHBhdGggZD0iTTEyLDFDNS45MiwxLDEsNS45MiwxLDEyYzAsNi4wOCw0LjkyLDExLDExLDExczExLTQuOTIsMTEtMTFDMjMsNS45MiwxOC4wOCwxLDEyLDF6IE0xMiwxOGMtMC41NSwwLTEtMC40NS0xLTFzMC40NS0xLDEtMSBzMSwwLjQ1LDEsMVMxMi41NSwxOCwxMiwxOHogTTEzLDEzLjg3NkMxMywxNC40OTUsMTIuNTUsMTUsMTIsMTVzLTEtMC41MDUtMS0xLjEyNFY3LjEyNEMxMSw2LjUwNSwxMS40NSw2LDEyLDZzMSwwLjUwNSwxLDEuMTI0IFYxMy44NzZ6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},4784:v=>{v.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyNl8yMzYzKSI+IDxwYXRoIGQ9Ik03LjUgMS41SDEwLjVWNC41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgLz4gPHBhdGggZD0iTTQuNSA3LjVMMTAuNSAxLjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiAvPiA8cGF0aCBkPSJNMTAuNSA2Ljc4NlYxMC41SDEuNVYxLjVINS4yNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPiA8L2c+IDxkZWZzPiA8Y2xpcFBhdGggaWQ9ImNsaXAwXzQyNl8yMzYzIj4gPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSJ3aGl0ZSIgLz4gPC9jbGlwUGF0aD4gPC9kZWZzPiA8L3N2Zz4g"},2591:v=>{v.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0icmVkZXllIj4gPHBhdGggc3R5bGU9Im9wYWNpdHk6MC41OyIgZD0iTTE1LDEyYy0xLjEwNSwwLTItMC44OTUtMi0yYzAtMC42NCwwLjMwNi0xLjIwMiwwLjc3My0xLjU2OUMxMy4yMzYsOC4xNjQsMTIuNjQsOCwxMiw4IGMtMi4yMDksMC00LDEuNzkxLTQsNGMwLDIuMjA5LDEuNzkxLDQsNCw0czQtMS43OTEsNC00YzAtMC4wOS0wLjAyMS0wLjE3NC0wLjAyNi0wLjI2M0MxNS42ODQsMTEuOSwxNS4zNTUsMTIsMTUsMTJ6Ii8+IDxwYXRoIGQ9Ik0yMi44NDIsMTEuNDZDMjIuNjUyLDExLjE2LDE4LjAwMSw0LDEyLDRTMS4zNDgsMTEuMTYsMS4xNTgsMTEuNDZjLTAuMjEsMC4zMy0wLjIxLDAuNzUsMCwxLjA4IEMxLjM0OCwxMi44NCw1Ljk5OSwyMCwxMiwyMHMxMC42NTItNy4xNiwxMC44NDItNy40NkMyMy4wNTMsMTIuMjEsMjMuMDUzLDExLjc5LDIyLjg0MiwxMS40NnogTTEyLDE3IGMtMi43NjIsMC01LjAwMS0yLjIzOS01LjAwMS01UzkuMjM4LDcsMTIsN3M1LjAwMSwyLjIzOSw1LjAwMSw1UzE0Ljc2MiwxNywxMiwxN3oiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},8166:v=>{v.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iaW5mb3JtYXRpb24iPiA8cGF0aCBkPSJNMTIsMUM1LjkyNSwxLDEsNS45MjUsMSwxMnM0LjkyNSwxMSwxMSwxMXMxMS00LjkyNSwxMS0xMVMxOC4wNzUsMSwxMiwxeiBNMTQsMTdjMCwxLjEwNS0wLjg5NSwyLTIsMnMtMi0wLjg5NS0yLTJ2LTUgYzAtMS4xMDUsMC44OTUtMiwyLTJzMiwwLjg5NSwyLDJWMTd6IE0xMiw4Yy0xLjEwNSwwLTItMC44OTUtMi0yYzAtMS4xMDUsMC44OTUtMiwyLTJzMiwwLjg5NSwyLDJDMTQsNy4xMDUsMTMuMTA1LDgsMTIsOHoiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},5355:v=>{v.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iY2FyZXRfbGVmdCI+IDxwYXRoIGQ9Ik0xNCwxOGMtMC4yNTYsMC0wLjUxMi0wLjA5OC0wLjcwNy0wLjI5M2wtNS01Yy0wLjM5MS0wLjM5MS0wLjM5MS0xLjAyMywwLTEuNDE0bDUtNWMwLjM5MS0wLjM5MSwxLjAyMy0wLjM5MSwxLjQxNCwwIHMwLjM5MSwxLjAyMywwLDEuNDE0TDEwLjQxNCwxMmw0LjI5Myw0LjI5M2MwLjM5MSwwLjM5MSwwLjM5MSwxLjAyMywwLDEuNDE0QzE0LjUxMiwxNy45MDIsMTQuMjU2LDE4LDE0LDE4eiIvPiA8L2c+IDxnIGlkPSJMYXllcl8xIj4gPC9nPiA8L3N2Zz4g"},9124:v=>{v.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ibGlnaHQiPiA8cGF0aCBkPSJNNy4xMDYsMTNoOS43ODlDMTguMTkyLDExLjcyOSwxOSw5Ljk2LDE5LDhjMC0zLjg2Ni0zLjEzNC03LTctN1M1LDQuMTM0LDUsOEM1LDkuOTYsNS44MDgsMTEuNzI5LDcuMTA2LDEzeiIvPiA8cGF0aCBzdHlsZT0ib3BhY2l0eTowLjU7IiBkPSJNMTQsMjFoMXYxYzAsMC41NTMtMC40NDcsMS0xLDFoLTRjLTAuNTUyLDAtMS0wLjQ0Ny0xLTF2LTFoMUgxNHogTTcsMTRjMCwwLDEsMS41LDEsM2MwLDEsMCwyLDEsM2g2IGMxLTEsMS0yLDEtM2MwLTEuNSwxLTMsMS0zSDd6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},4743:v=>{v.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iaHlwZXJsaW5rIj4gPHBhdGggZD0iTTE2LjUsNWgtNGMtMi4xMywwLTMuOTgsMS4yMi00Ljg5LDNoMi40NWMwLjYzLTAuNjIsMS40OS0xLDIuNDQtMWg0YzEuOTMsMCwzLjUsMS41NywzLjUsMy41UzE4LjQzLDE0LDE2LjUsMTRoLTQgYy0xLjM5LDAtMi42LTAuODItMy4xNS0ySDcuMjFjMC42NSwyLjMsMi43OCw0LDUuMjksNGg0YzMuMDMsMCw1LjUtMi40Nyw1LjUtNS41QzIyLDcuNDcsMTkuNTMsNSwxNi41LDV6IE0xMS41LDE4aC00IEM1LjU3LDE4LDQsMTYuNDMsNCwxNC41UzUuNTcsMTEsNy41LDExaDRjMS4zOSwwLDIuNiwwLjgyLDMuMTUsMmgyLjE0Yy0wLjY1LTIuMy0yLjc4LTQtNS4yOS00aC00QzQuNDcsOSwyLDExLjQ3LDIsMTQuNSBDMiwxNy41Myw0LjQ3LDIwLDcuNSwyMGg0YzIuMTMsMCwzLjk4LTEuMjIsNC44OS0zaC0yLjQ1QzEzLjMxLDE3LjYyLDEyLjQ1LDE4LDExLjUsMTh6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},7306:v=>{v.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDIuNUMwIDEuNjcxNTcgMC42NzE1NzMgMSAxLjUgMUg5QzkuODI4NDMgMSAxMC41IDEuNjcxNTcgMTAuNSAyLjVWNUg5VjIuNUgxLjVWOEg2VjkuNUgxLjVDMC42NzE1NzIgOS41IDAgOC44Mjg0MyAwIDhWMi41Wk05IDExVjkuNUg3LjQ5OTk5VjhIOVY2LjVIMTAuNVY4SDEyVjkuNUgxMC41VjExSDlaIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4g"},487:v=>{v.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iYW5ub3VuY2VyIj4gPHBhdGggZD0iTTIwLjg5OSwxOS4zOTRsLTYuNDktMTUuMDk1bC0xMS4xNCwxMS4xNGw4LjUzMSwzLjY1M2wtMS42NjksMS44MjFjLTAuMTA2LDAuMTE3LTAuMTUyLDAuMjc2LTAuMTIzLDAuNDMyIGMwLjAzLDAuMTU1LDAuMTMxLDAuMjg3LDAuMjcyLDAuMzU2bDIuNTcxLDEuMjVjMC4wNywwLjAzNCwwLjE0NSwwLjA1LDAuMjE5LDAuMDVjMC4xMzcsMCwwLjI3Mi0wLjA1NywwLjM2OS0wLjE2M2wyLTIuMTg3IGwyLjk0MiwxLjI2TDIwLjg5OSwxOS4zOTR6Ii8+IDxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuNTsiIGQ9Ik05LjUsNkM5LjMzOSw2LDkuMTgsNS45MjIsOS4wODQsNS43NzdsLTItM2MtMC4xNTMtMC4yMy0wLjA5MS0wLjU0LDAuMTM5LTAuNjkzIHMwLjU0MS0wLjA5MiwwLjY5MywwLjEzOWwyLDNjMC4xNTMsMC4yMywwLjA5MSwwLjU0LTAuMTM5LDAuNjkzQzkuNjkyLDUuOTczLDkuNTk2LDYsOS41LDZ6IE00LjkxNiwxMC43NzcgYzAuMTUzLTAuMjMsMC4wOTEtMC41NC0wLjEzOS0wLjY5M2wtMy0yQzEuNTQ1LDcuOTMsMS4yMzYsNy45OTMsMS4wODQsOC4yMjNjLTAuMTUzLDAuMjMtMC4wOTEsMC41NCwwLjEzOSwwLjY5M2wzLDIgQzQuMzA4LDEwLjk3Myw0LjQwNCwxMSw0LjUsMTFDNC42NjEsMTEsNC44MiwxMC45MjIsNC45MTYsMTAuNzc3eiBNNi44NTQsNy44NTRjMC4xOTUtMC4xOTUsMC4xOTUtMC41MTIsMC0wLjcwN2wtNC00IGMtMC4xOTUtMC4xOTUtMC41MTItMC4xOTUtMC43MDcsMHMtMC4xOTUsMC41MTIsMCwwLjcwN2w0LDRDNi4yNDQsNy45NTEsNi4zNzIsOCw2LjUsOFM2Ljc1Niw3Ljk1MSw2Ljg1NCw3Ljg1NHogTTE4Ljg1NCwyMi44NTQgbDMtM2MwLjE5NS0wLjE5NSwwLjE5NS0wLjUxMiwwLTAuNzA3cy0wLjUxMi0wLjE5NS0wLjcwNywwbC0zLDNjLTAuMTk1LDAuMTk1LTAuMTk1LDAuNTEyLDAsMC43MDcgQzE4LjI0NCwyMi45NTEsMTguMzcyLDIzLDE4LjUsMjNTMTguNzU2LDIyLjk1MSwxOC44NTQsMjIuODU0eiBNMi44NTQsMTUuODU0bDEyLTEyYzAuMTk1LTAuMTk1LDAuMTk1LTAuNTEyLDAtMC43MDcgcy0wLjUxMi0wLjE5NS0wLjcwNywwbC0xMiwxMmMtMC4xOTUsMC4xOTUtMC4xOTUsMC41MTIsMCwwLjcwN0MyLjI0NCwxNS45NTEsMi4zNzIsMTYsMi41LDE2UzIuNzU2LDE1Ljk1MSwyLjg1NCwxNS44NTR6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},7701:v=>{v.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ibWVudSI+IDxwYXRoIGQ9Ik0yMSw4SDNDMi40NDgsOCwyLDcuNTUyLDIsN3MwLjQ0OC0xLDEtMWgxOGMwLjU1MywwLDEsMC40NDgsMSwxUzIxLjU1Myw4LDIxLDh6IE0yMiwxMmMwLTAuNTUyLTAuNDQ3LTEtMS0xSDMgYy0wLjU1MiwwLTEsMC40NDgtMSwxczAuNDQ4LDEsMSwxaDE4QzIxLjU1MywxMywyMiwxMi41NTIsMjIsMTJ6IE0yMiwxN2MwLTAuNTUzLTAuNDQ3LTEtMS0xSDNjLTAuNTUyLDAtMSwwLjQ0Ny0xLDFzMC40NDgsMSwxLDEgaDE4QzIxLjU1MywxOCwyMiwxNy41NTMsMjIsMTd6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},5654:v=>{v.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0icmVtb3ZlIj4gPHBhdGggZD0iTTIxLDEzSDNjLTAuNTUyLDAtMS0wLjQ0OC0xLTFzMC40NDgtMSwxLTFoMThjMC41NTIsMCwxLDAuNDQ4LDEsMVMyMS41NTIsMTMsMjEsMTN6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},6541:v=>{v.exports="data:image/svg+xml;base64,PCEtLSBDcmVhdGVkIHdpdGggSW5rc2NhcGUgKGh0dHA6Ly93d3cuaW5rc2NhcGUub3JnLykgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiBpZD0ic3ZnNDEiIHdpZHRoPSIyMi45NDU4MThtbSIgaGVpZ2h0PSIyNS45MjU4NDRtbSIgdmlld0JveD0iMCAwIDg2LjcyNDM1IDk3Ljk4NzQ0MyIgc29kaXBvZGk6ZG9jbmFtZT0iTXluYWhJY29uV2hpdGUuc3ZnIiBpbmtzY2FwZTp2ZXJzaW9uPSIxLjEgKGM0ZThmOWUsIDIwMjEtMDUtMjQpIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPiA8c29kaXBvZGk6bmFtZWR2aWV3IGlkPSJuYW1lZHZpZXc2IiBwYWdlY29sb3I9IiNmZmZmZmYiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBib3JkZXJvcGFjaXR5PSIxLjAiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiIHNob3dncmlkPSJmYWxzZSIgdW5pdHM9Im1tIiBmaXQtbWFyZ2luLXRvcD0iMCIgZml0LW1hcmdpbi1sZWZ0PSIwIiBmaXQtbWFyZ2luLXJpZ2h0PSIwIiBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgaW5rc2NhcGU6em9vbT0iMi4yNTAwMDAxIiBpbmtzY2FwZTpjeD0iNTQuODg4ODg3IiBpbmtzY2FwZTpjeT0iODMuMzMzMzMxIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyOTYiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDMiIGlua3NjYXBlOndpbmRvdy14PSIwIiBpbmtzY2FwZTp3aW5kb3cteT0iMjMiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9Imc0NyIgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIiAvPiA8ZGVmcyBpZD0iZGVmczQ1IiAvPiA8ZyBpZD0iZzQ3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTEwLjU3MjU3LC04OS4zNDQxMzUpIj4gPHBhdGggaWQ9InBhdGgxMTkiIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjAuNjY2NjY3IiBkPSJtIDEzMi4zMDczLDE3NS42OTcyOCBjIC0xMC45OTE5LC02LjM5MTk2IC0yMC41NDgzLC0xMS43MTUyNiAtMjEuMDE0NzMsLTEyLjM1MzE0IC0xLC0xIC0wLjY2NjY2LC03LjEyMzE5IC0wLjY2NjY2LC0yNS4wOTAyNSAwLC0yMy40NDI5MiAwLjAwNCwtMjMuNTA2MTkgMS41LC0yNS4xMzk0NSAyLjI2NjQxLC0yLjQ3Mzk5IDM5LjY3MSwtMjMuNzcwMzA1IDQxLjc0OTg2LC0yMy43NzAzMDUgMi4wMDU4LDAgNDAuMzc5NDQsMjEuOTA4MTk1IDQyLjI2ODgxLDI0LjEzMjAwNSAxLjAyNzg2LDEuMjA5ODEgMS4xNTU3OCwyLjcxNDY4IDEuMTUyMjgsOS45NzEwOCBsIC0wLjAwNCw4Ljg5NjkyIGMgLTIuNDU5NDIsMS40Mzk5NCAtNS42MzMwNCwyLjY5MjU5IC03Ljk2NjE3LDQuMDM4NjQgLTAuMzcxOCwtMC4xNTMyNyAtMC4wNjg3LC0xLjAzODYzIC0wLjA1NDQsLTguODI2NTQgMC4wMjA2LC0xMS4yMTIxIDAuMDIwNiwtOS4yMTIxIC0xLjUxODY4LC0xMC4zMTg3NiAtMS41MjExNCwtMS4wOTM2NSAtMzIuNTE5MzMsLTE4LjU2MDAwOCAtMzMuODQ0MTYsLTE4LjU2MDAwOCAtMS4yNTIzNSwwIC0zMS4wNDUyOSwxNi45Njg1NjggLTMzLjExNjU5LDE4Ljg2MTU0OCAtMS40OTAxOCwxLjM2MTg5IC0xLjUsMS40OTg2NiAtMS41LDIwLjg4NzQgdiAxOS41MTY1MyBsIDIuMTY2NjcsMS42MDIyOSBjIDEuMTkxNjcsMC44ODEyNyA4LjQ4MzAzLDUuMjQ2NTQgMTYuMjAzMDMsOS43MDA2IDEwLjI1NTM0LDUuOTE2ODQgMTQuNjMzNjgsOC4wOTgzIDE2LjI1MzgxLDguMDk4MyAxLjYxNjk0LDAgNi4yMTA5MywtMi4yODA3NCAxNi45NjM2NCwtOC40MjE4IDguMTEwNCwtNC42MzE5OCAxNS4xODIwNCwtOS40ODY3MyAxNi4xNzAwNSwtMTAuMTg5NDUgMi4xNjY2NiwtMS41NDEwMyAyLjI0MjgsLTAuNzIyNDkgMi4yNDI4LC02LjIxODg5IHYgLTguMTY5ODYgYyAzLjM5NTIxLC0xLjg4NTk2IDYuMzcxNzgsLTMuMjg2OCA4LC00IDAsMiA3LjFlLTQsNS41ODU5OCAtMC4xMjA3OSwxMS43MDYxNSAtMC4yMDg5OCwxMC41MjY1NSAtMC4yNDA1LDEwLjcyNzI5IC0xLjg3OTIxLDExLjk2NjA3IC00LjAzMzQ2LDMuMDQ5MDggLTQwLjEwNzk0LDIzLjMyNjU0IC00MS40Nzg3NywyMy4zMTUyMSAtMC44MzY2NywtMC4wMDcgLTEwLjUxNDYsLTUuMjQyMzQgLTIxLjUwNjUsLTExLjYzNDI5IHogbSA2Ljk4NTI3LC0xMy4yNDU3NCAtMTMsLTcuNTI2NCAtMC4xODE3LC0xMi4xMjM4MyBjIC0wLjEyOTU3LC04LjY0NDk4IDAuMDMzNSwtMTIuMTIzODQgMC41Njg0MSwtMTIuMTIzODQgMC40MTI1NywwIDIuMjE5MDMsMC44MjUgNC4wMTQzNiwxLjgzMzMzIGwgMy4yNjQyNSwxLjgzMzM0IDYuNmUtNCw3LjM5NjY3IGMgMy40ZS00LDQuMzMwODQgMC4xMzU4NSw3LjQ3NDA5IDAuMzM0MDIsOC42MDMzMyA0LDIgNC4wMTIxMiwxLjk3OTEzIDkuMDUzODUsNC45MDE3MiAxMS4xODMwNiw2LjQ4MjYgOS42NTg0MSw2LjQ4MyAyMC45MjkyNCwtMC4wMDUgbCA5LjY2MzA1LC01LjU2MzA2IDAuMDEwMywtMTEuNTE3MTIgMC4wMTAzLC0xMS41MTcxMiAtMS44MzMzMywwLjk1NzQzIGMgLTEuMDA4MzQsMC41MjY1OSAtNS4yODMzNCwyLjkzMjY5IC05LjUsNS4zNDY4OSAtNC4yMTY2NywyLjQxNDIgLTguMTMyNDUsNC4zOTEwNiAtOC43MDE3NCw0LjM5MzAyIC0xLjEyNjk5LDAuMDA0IC0yMi44ODM1MiwtMTIuMTQ0MjIgLTI0LjgyMjk0LC0xMy44NjAyOCAtMC42NTUyNSwtMC41Nzk3OCAtMC44MDg3MywtMS4xMzY0OCAtMSwtMi4wMDI3NyAwLjI3ODA4LC0xLjM3ODY4IDIxLjE5MTI3LC0xMi4xMzM3MSAyNS43ODkyNSwtMTQuODAwMDUgMS40MDIwMiwwLjY2NjM0IDEyLjA2ODc2LDYuNTQyNDggMTIuMDY4NzYsNi41NDI0OCAtMi4zNzA1NywxLjcyOTcgLTQuNjY4MjcsMy4zNjg0MiAtNi42NjY3NCw1LjEyMzg2IC00LC0yIC0zLjQ4NzYzLC0xLjY5OTg0IC01LjQ2MTM1LC0yLjY0MTA0IC0zLjE3MjI4LDEuOTQzMTcgLTQuNTM4NjUsMi42NDEwNCAtOS44NzE5MSw2LjA0Nzg0IDIuMzMzMjYsMS41OTMyIDcuMzMzMjYsNC41OTMyIDkuOTUwNTcsNS41OTM1MyAyLjM4MjY5LC0xLjAwMDMzIDIuMzgyNjksLTEuMDAwMzMgMTAuNzgzNTYsLTUuMDg5OTYgOS45NzI5MiwtNC44NTQ5MiA4Ljg3NjYsLTUuNTIyNTcgMTQuNTc3MDYsLTEuOTI0MDIgbCAyLjcxMjA0LDEuNzEyMDMgLTAuMTc4MjgsMTYuMzg1NDEgLTAuNTExNjksMTUuOTE2MjEgLTEyLjY2NjU5LDguMDMxOTcgYyAtNi45ODU4LDQuNDI5NzUgLTEzLjMzMzQxLDYuOTY4MDMgLTE0LjY2NjY3LDcuNTgyNDYgLTEuNjY2NzQsLTAuNjE0NDMgLTcuMzQyMTEsLTMuMjY2MTIgLTE0LjY2NjY3LC03LjUwNjcgeiIgLz4gPC9nPiA8L3N2Zz4g"},6283:v=>{v.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyNl8yMzYwKSI+IDxwYXRoIGQ9Ik02IDEuNjI1QzMuMzc1IDEuNjI1IDMuMzc1IDUuMTI1IDMuMzc1IDUuMTI1TDAuNzUgOC4yNUgxMS4yNUw4LjYyNSA1LjEyNUM4LjYyNSA1LjEyNSA4LjYyNSAxLjYyNSA2IDEuNjI1WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPiA8cGF0aCBkPSJNNC4yNSA4LjYyNVY5LjVDNC4yNSA5Ljk2NDEzIDQuNDM0MzcgMTAuNDA5MiA0Ljc2MjU2IDEwLjczNzRDNS4wOTA3NSAxMS4wNjU2IDUuNTM1ODcgMTEuMjUgNiAxMS4yNUM2LjQ2NDEzIDExLjI1IDYuOTA5MjQgMTEuMDY1NiA3LjIzNzQzIDEwLjczNzRDNy41NjU2MiAxMC40MDkyIDcuNzUgOS45NjQxMyA3Ljc1IDkuNVY4LjYyNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPiA8cGF0aCBkPSJNNiAwLjc1VjEuNjI1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4gPC9nPiA8ZGVmcz4gPGNsaXBQYXRoIGlkPSJjbGlwMF80MjZfMjM2MCI+IDxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiIC8+IDwvY2xpcFBhdGg+IDwvZGVmcz4gPC9zdmc+IA=="},5957:v=>{v.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ibGlzdF9jaGVjayI+IDxwYXRoIGQ9Ik0xMiwyM0M1LjkzNSwyMywxLDE4LjA2NSwxLDEyUzUuOTM1LDEsMTIsMWMxLjgzNywwLDMuNjU3LDAuNDYzLDUuMjYzLDEuMzM5YzAuNDg0LDAuMjY1LDAuNjYzLDAuODcyLDAuMzk4LDEuMzU3IHMtMC44NzIsMC42NjQtMS4zNTcsMC4zOTlDMTQuOTkyLDMuMzc4LDEzLjUwNCwzLDEyLDNjLTQuOTYyLDAtOSw0LjAzOC05LDljMCw0Ljk2Myw0LjAzOCw5LDksOWM0Ljk2MywwLDktNC4wMzcsOS05IGMwLTAuNTMzLTAuMDUyLTEuMDcxLTAuMTU3LTEuNjQ0Yy0wLjEwMS0wLjU0MywwLjI1OS0xLjA2NSwwLjgwMi0xLjE2NWMwLjU1Mi0wLjA5OSwxLjA2NCwwLjI2LDEuMTY1LDAuODAyIEMyMi45MzgsMTAuNjg4LDIzLDExLjM0NCwyMywxMkMyMywxOC4wNjUsMTguMDY1LDIzLDEyLDIzeiBNMTEuNzA3LDE1LjcwN2w5LTljMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNCBzLTEuMDIzLTAuMzkxLTEuNDE0LDBMMTEsMTMuNTg2bC0zLjI5My0zLjI5M2MtMC4zOTEtMC4zOTEtMS4wMjMtMC4zOTEtMS40MTQsMHMtMC4zOTEsMS4wMjMsMCwxLjQxNGw0LDQgQzEwLjQ4OCwxNS45MDIsMTAuNzQ0LDE2LDExLDE2UzExLjUxMiwxNS45MDIsMTEuNzA3LDE1LjcwN3oiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},3522:v=>{v.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjY1ODMgNS41NzAyTDAuNzUgNi40Nzg1TDQuMjI3MzUgOS45NTU4NUwxMS4yNSAyLjkzMzJMMTAuMzQxNyAyLjAyNDlMNC4yMjczNSA4LjEzOTI1TDEuNjU4MyA1LjU3MDJaIiBmaWxsPSJ3aGl0ZSIgLz4gPC9zdmc+IA=="},437:v=>{v.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMyAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjE4NTk2IDEuNjI1NTRDNS4wODM0MiAwLjA3MTA5MTggNy4wNzEwOSAtMC40NjE1MDMgOC42MjU1NCAwLjQzNTk2TDkuMzY2NDcgMC44NjM3MzRDMTAuNjMxMyAxLjU5Mzk4IDExLjA2NDcgMy4yMTEzIDEwLjMzNDQgNC40NzYxMkMxMC4xMjczIDQuODM0ODQgOS42Njg2MSA0Ljk1Nzc1IDkuMzA5ODkgNC43NTA2NEM4Ljk1MTE3IDQuNTQzNTQgOC44MjgyNiA0LjA4NDg0IDkuMDM1MzcgMy43MjYxMkM5LjM1MTQgMy4xNzg3NCA5LjE2Mzg1IDIuNDc4OCA4LjYxNjQ3IDIuMTYyNzdMNy44NzU1NCAxLjczNUM3LjAzODUzIDEuMjUxNzUgNS45NjgyNSAxLjUzODUzIDUuNDg1IDIuMzc1NTRMMS43MzUgOC44NzA3M0MxLjI1MTc1IDkuNzA3NzUgMS41Mzg1MyAxMC43NzggMi4zNzU1NCAxMS4yNjEzQzMuMjEyNTUgMTEuNzQ0NSA0LjI4Mjg0IDExLjQ1NzcgNC43NjYwOSAxMC42MjA3TDcuMTQxMDkgNi41MDcxMUM3LjI3OTE2IDYuMjY3OTcgNy4xOTcyMiA1Ljk2MjE3IDYuOTU4MDcgNS44MjQxQzYuNzE4OTMgNS42ODYwMyA2LjQxMzEzIDUuNzY3OTcgNi4yNzUwNiA2LjAwNzExTDQuNzQ4MzEgOC42NTE1M0M0LjU0MTIgOS4wMTAyNSA0LjA4MjUxIDkuMTMzMTUgMy43MjM3OSA4LjkyNjA1QzMuMzY1MDcgOC43MTg5NCAzLjI0MjE2IDguMjYwMjUgMy40NDkyNyA3LjkwMTUzTDQuOTc2MDIgNS4yNTcxMUM1LjUyODMxIDQuMzAwNTMgNi43NTE0OSAzLjk3Mjc4IDcuNzA4MDcgNC41MjUwNkM4LjY2NDY2IDUuMDc3MzUgOC45OTI0MSA2LjMwMDUzIDguNDQwMTMgNy4yNTcxMUw2LjA2NTEyIDExLjM3MDdDNS4xNjc2NiAxMi45MjUyIDMuMTc5OTkgMTMuNDU3OCAxLjYyNTU0IDEyLjU2MDNDMC4wNzEwOTE4IDExLjY2MjkgLTAuNDYxNTAzIDkuNjc1MTggMC40MzU5NiA4LjEyMDczTDQuMTg1OTYgMS42MjU1NFoiIGZpbGw9IndoaXRlIi8+IDwvc3ZnPiA="},8728:v=>{v.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0icGF1c2UiPiA8cGF0aCBkPSJNOSwyMkg2Yy0wLjU1LDAtMS0wLjQ1LTEtMVYzYzAtMC41NSwwLjQ1LTEsMS0xaDNjMC41NSwwLDEsMC40NSwxLDF2MThDMTAsMjEuNTUsOS41NSwyMiw5LDIyeiBNMTksMjFWMyBjMC0wLjU1LTAuNDUtMS0xLTFoLTNjLTAuNTUsMC0xLDAuNDUtMSwxdjE4YzAsMC41NSwwLjQ1LDEsMSwxaDNDMTguNTUsMjIsMTksMjEuNTUsMTksMjF6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},3395:v=>{v.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTEyLjIyNjcgMC4wMTMzMzMzTDEzLjk4NjcgMS43NzMzM1YzLjIxMzMzTDUuNzczMzMgMTEuNDhMNS41MDY2NyAxMS42NEwxLjQgMTMuOTg2N0wwLjAxMzMzMzMgMTIuNkwyLjM2IDguNDkzMzNMMi41MiA4LjIyNjY3TDEwLjc4NjcgMC4wMTMzMzMzSDEyLjIyNjdaTTEuNCAxMi42TDQuMzg2NjcgMTEuMDUzM0wyLjk0NjY3IDkuNjEzMzNMMS40IDEyLjZaTTUuMjQgMTAuNTJMMTMuMjQgMi41MkwxMS40OCAwLjc1OTk5OUwzLjQ4IDguNzZMNS4yNCAxMC41MloiIGZpbGw9IiNDNUM1QzUiLz4gPC9zdmc+IA=="},1783:v=>{v.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0icGxheSI+IDxwYXRoIGQ9Ik0yMS41NDksMTEuMjA4TDcuMzI4LDIuMTNDNy4wNTIsMS45NTUsNi43MTUsMS45NTcsNi40NDEsMi4xMzZDNi4xNjgsMi4zMTUsNiwyLjY0NCw2LDN2MTggYzAsMC4zNTQsMC4xNjcsMC42ODMsMC40MzksMC44NjJDNi41NzgsMjEuOTU0LDYuNzMzLDIyLDYuODg5LDIyYzAuMTQ5LDAsMC4yOTgtMC4wNDIsMC40MzMtMC4xMjdsMTQuMjIzLTguOTIyIGMwLjI4LTAuMTc2LDAuNDU1LTAuNTA5LDAuNDU2LTAuODdDMjIuMDAxLDExLjcyLDIxLjgyOSwxMS4zODYsMjEuNTQ5LDExLjIwOHoiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},1033:v=>{v.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iYWRkIj4gPHBhdGggZD0iTTIxLDExaC04VjNjMC0wLjU1Mi0wLjQ0OC0xLTEtMXMtMSwwLjQ0OC0xLDF2OEgzYy0wLjU1MiwwLTEsMC40NDgtMSwxczAuNDQ4LDEsMSwxaDh2OGMwLDAuNTUzLDAuNDQ4LDEsMSwxczEtMC40NDcsMS0xIHYtOGg4YzAuNTUyLDAsMS0wLjQ0OCwxLTFTMjEuNTUyLDExLDIxLDExeiIvPiA8L2c+IDxnIGlkPSJMYXllcl8xIj4gPC9nPiA8L3N2Zz4g"},723:v=>{v.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDEwLjUwMDJDOC40ODUyOCAxMC41MDAyIDEwLjUgOC40ODU0NyAxMC41IDYuMDAwMTlIMTJDMTIgOS4zMTM4OSA5LjMxMzcxIDEyLjAwMDIgNiAxMi4wMDAyQzIuNjg2MjkgMTIuMDAwMiAwIDkuMzEzODkgMCA2LjAwMDE5QzAgMi42ODY0OCAyLjY4NjI5IDAuMDAwMTg1NTIyIDUuOTkzNjYgMC4wMDAyMTIzMzZDNy43NDc3NCAtMC4wMTQ2MjA3IDkuMzg1MiAwLjc0ODUgMTAuNSAyLjAzMTc4VjAuMDAwMTg1NTIySDEyVjQuNTAwMTlINy41VjMuMDAwMTlIOS4zNTQwN0M4LjUyMjU5IDIuMDUyMjQgNy4zMDYxMiAxLjQ4OTE2IDYgMS41MDAxOUMzLjUxNDcyIDEuNTAwMTkgMS41IDMuNTE0OSAxLjUgNi4wMDAxOUMxLjUgOC40ODU0NyAzLjUxNDcyIDEwLjUwMDIgNiAxMC41MDAyWiIgZmlsbD0id2hpdGUiIC8+IDwvc3ZnPiA="},7016:v=>{v.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyNl8yMzYyKSI+IDxwYXRoIGQ9Ik02Ljc1IDEuNUgxMC41VjUuMjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiAvPiA8cGF0aCBkPSJNNS4yNSAxLjVIMS41VjUuMjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiAvPiA8cGF0aCBkPSJNNS4yNSAxMC41SDEuNVY2Ljc1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgLz4gPHBhdGggZD0iTTYuNzUgMTAuNUgxMC41VjYuNzUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiAvPiA8cGF0aCBkPSJNMS41IDEuNUwxMC41IDEwLjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiAvPiA8cGF0aCBkPSJNMTAuNSAxLjVMMS41IDEwLjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiAvPiA8L2c+IDxkZWZzPiA8Y2xpcFBhdGggaWQ9ImNsaXAwXzQyNl8yMzYyIj4gPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSJ3aGl0ZSIgLz4gPC9jbGlwUGF0aD4gPC9kZWZzPiA8L3N2Zz4g"},6147:v=>{v.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ibWluaW1pemVfeDQwX21pcnJvcmVkIj4gPHBhdGggZD0iTTQuMDI0LDE0LjM0N2MtMC4wNTcsMC4xNzktMC4wMSwwLjM3NCwwLjEyMywwLjUwNmwxLjc5MywxLjc5M2wtMy42NDgsMy42NDhjLTAuMzg5LDAuMzg5LTAuMzg5LDEuMDI1LDAsMS40MTQgYzAuMzg5LDAuMzg5LDEuMDI1LDAuMzg5LDEuNDE0LDBsMy42NDgtMy42NDhsMS43OTMsMS43OTNjMC4xMzIsMC4xMzIsMC4zMjgsMC4xOCwwLjUwNiwwLjEyM2MwLjE3OC0wLjA1NywwLjMxLTAuMjA5LDAuMzQtMC4zOTQgbDEtNmMwLjAyNS0wLjE1OC0wLjAyNS0wLjMyMS0wLjE0LTAuNDM2Yy0wLjExNC0wLjExNC0wLjI3Ny0wLjE2NS0wLjQzNi0wLjE0bC02LDFDNC4yMzMsMTQuMDM3LDQuMDgxLDE0LjE2OSw0LjAyNCwxNC4zNDd6IE0xNC4zNDcsNC4wMjRjMC4xNzktMC4wNTcsMC4zNzQtMC4wMSwwLjUwNiwwLjEyM2wxLjc5MywxLjc5M2wzLjY0OC0zLjY0OGMwLjM4OS0wLjM4OSwxLjAyNS0wLjM4OSwxLjQxNCwwIGMwLjM4OSwwLjM4OSwwLjM4OSwxLjAyNSwwLDEuNDE0TDE4LjA2LDcuMzU0bDEuNzkzLDEuNzkzYzAuMTMyLDAuMTMyLDAuMTgsMC4zMjgsMC4xMjMsMC41MDZjLTAuMDU3LDAuMTc4LTAuMjA5LDAuMzEtMC4zOTQsMC4zNCBsLTYsMWMtMC4xNTgsMC4wMjUtMC4zMjEtMC4wMjUtMC40MzYtMC4xNGMtMC4xMTQtMC4xMTQtMC4xNjUtMC4yNzctMC4xNC0wLjQzNmwxLTZDMTQuMDM3LDQuMjMzLDE0LjE2OSw0LjA4MSwxNC4zNDcsNC4wMjR6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},9448:v=>{v.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTAuODYgMC42MDMzMzNIMS42NFYyLjI5MzMzTDIuMjQ2NjcgMS43M0MyLjcwODg5IDEuMjM4ODkgMy4yNTc3OCAwLjkyMTExMSAzLjg5MzMzIDAuNzc2NjY3QzQuNTI4ODkgMC42MDMzMzMgNS4xNjQ0NCAwLjYwMzMzMyA1LjggMC43NzY2NjdDNi40MzU1NiAwLjkyMTExMSA2Ljk4NDQ0IDEuMjM4ODkgNy40NDY2NyAxLjczQzcuOTM3NzggMi4xOTIyMiA4LjI3IDIuNzQxMTEgOC40NDMzMyAzLjM3NjY3QzguNjE2NjcgNC4wMTIyMiA4LjYxNjY3IDQuNjQ3NzggOC40NDMzMyA1LjI4MzMzQzguMjcgNS45MTg4OSA3Ljk1MjIyIDYuNDgyMjIgNy40OSA2Ljk3MzMzTDMuMjQzMzMgMTEuMTc2N0wyLjY4IDEwLjYxMzNMNi44ODMzMyA2LjM2NjY3QzcuMjU4ODkgNi4wMiA3LjUxODg5IDUuNjAxMTEgNy42NjMzMyA1LjExQzcuODA3NzggNC41OSA3LjgwNzc4IDQuMDg0NDQgNy42NjMzMyAzLjU5MzMzQzcuNTE4ODkgMy4wNzMzMyA3LjI1ODg5IDIuNjQgNi44ODMzMyAyLjI5MzMzQzYuNTM2NjcgMS45MTc3OCA2LjEwMzMzIDEuNjcyMjIgNS41ODMzMyAxLjU1NjY3QzUuMDkyMjIgMS40MTIyMiA0LjYwMTExIDEuNDEyMjIgNC4xMSAxLjU1NjY3QzMuNjE4ODkgMS42NzIyMiAzLjE4NTU2IDEuOTE3NzggMi44MSAyLjI5MzMzTDIuMDMgMy4wNzMzM0g0LjExVjMuODUzMzNIMS4yNUwwLjg2IDMuNDYzMzNWMC42MDMzMzNaIiBmaWxsPSIjQzVDNUM1IiAvPiA8L3N2Zz4g"},1140:v=>{v.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDgwIiBoZWlnaHQ9IjEwODAiIHZpZXdCb3g9IjAgMCAxMDgwIDEwODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZGVzYz5DcmVhdGVkIHdpdGggRmFicmljLmpzIDUuMi40PC9kZXNjPiA8ZGVmcz4gPC9kZWZzPiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDU0MCA1NDApIiBpZD0iZGJkNzU1MWEtNWNhNy00YzVmLWFlOTgtNzE4OGI0YjNlZGViIiA+IDxyZWN0IHN0eWxlPSJzdHJva2U6IG5vbmU7IHN0cm9rZS13aWR0aDogMTsgc3Ryb2tlLWRhc2hhcnJheTogbm9uZTsgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7IHN0cm9rZS1kYXNob2Zmc2V0OiAwOyBzdHJva2UtbGluZWpvaW46IG1pdGVyOyBzdHJva2UtbWl0ZXJsaW1pdDogNDsgZmlsbDogcmdiKDI1NSwyNTUsMjU1KTsgZmlsbC1ydWxlOiBub256ZXJvOyBvcGFjaXR5OiAxOyB2aXNpYmlsaXR5OiBoaWRkZW47IiB2ZWN0b3ItZWZmZWN0PSJub24tc2NhbGluZy1zdHJva2UiIHg9Ii01NDAiIHk9Ii01NDAiIHJ4PSIwIiByeT0iMCIgd2lkdGg9IjEwODAiIGhlaWdodD0iMTA4MCIgLz4gPC9nPiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDU0MCA1NDApIiBpZD0iM2ZlNzcxZGYtYjJiYy00NzRhLWE1NDAtYThlYWM4NTI1NzFlIiA+IDwvZz4gPGcgdHJhbnNmb3JtPSJtYXRyaXgoMCAtOTAgOTAgMCA1NDAgNTQwKSIgPiA8cGF0aCBzdHlsZT0ic3Ryb2tlOiBub25lOyBzdHJva2Utd2lkdGg6IDE7IHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7IHN0cm9rZS1saW5lY2FwOiBidXR0OyBzdHJva2UtZGFzaG9mZnNldDogMDsgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjsgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7IGZpbGw6IHJnYigyMDksMjEzLDIxOSk7IGZpbGwtcnVsZTogZXZlbm9kZDsgb3BhY2l0eTogMTsiIHRyYW5zZm9ybT0iIHRyYW5zbGF0ZSgtNiwgLTYpIiBkPSJNIDAuNzUgMy44NTY2NiBMIDEuNzEzMzUgMi44OTMzMSBMIDYgNy4xNzk0MyBMIDEwLjI4NjcgMi44OTMzMSBMIDExLjI1IDMuODU2NjYgTCA2IDkuMTA2NjYgTCAwLjc1IDMuODU2NjYgWiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiAvPiA8L2c+IDwvc3ZnPg=="},242:v=>{v.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ic2VhcmNoIj4gPHBhdGggZD0iTTIyLjcwNywyMS4yOTNsLTUuNjgyLTUuNjgyQzE4LjI1OCwxNC4wNzEsMTksMTIuMTIyLDE5LDEwYzAtNC45NjItNC4wMzctOS05LTljLTQuOTYyLDAtOSw0LjAzOC05LDljMCw0Ljk2Myw0LjAzOCw5LDksOSBjMi4xMjIsMCw0LjA3MS0wLjc0Miw1LjYxMS0xLjk3NWw1LjY4Miw1LjY4MkMyMS40ODgsMjIuOTAyLDIxLjc0NCwyMywyMiwyM3MwLjUxMi0wLjA5OCwwLjcwNy0wLjI5MyBDMjMuMDk4LDIyLjMxNiwyMy4wOTgsMjEuNjg0LDIyLjcwNywyMS4yOTN6IE0xMCwxN2MtMy44NiwwLTctMy4xNDEtNy03YzAtMy44NiwzLjE0LTcsNy03YzMuODU5LDAsNywzLjE0LDcsNyBDMTcsMTMuODU5LDEzLjg1OSwxNywxMCwxN3oiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},1730:v=>{v.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ic3Rhcl9vbiI+IDxwYXRoIGQ9Ik0yMi4xNDMsOC4yNjdsLTEuNTY5LTAuMjI4djBsLTQuODItMC43bC0yLjAxOC00LjA4NGMwLDAsMCwwLDAsMGwtMC44MzktMS42OTljLTAuMzY3LTAuNzQzLTEuNDI2LTAuNzQzLTEuNzkzLDAgbC0wLjgzOSwxLjY5OWMwLDAsMCwwLDAsMEw4LjI0Niw3LjM0TDIuNjc4LDguMTQ4YzAsMCwwLDAsMCwwTDEuODU3LDguMjY3Yy0wLjgyLDAuMTE5LTEuMTQ4LDEuMTI3LTAuNTU0LDEuNzA2bDAuNTk0LDAuNTc5bDAsMCBsNC4wMjgsMy45MjNsLTEuMDIyLDUuOTUyYzAsMCwwLDAsMCwwbC0wLjA2OSwwLjQwMmMtMC4xNCwwLjgxNywwLjcxNywxLjQ0LDEuNDUsMS4wNTRsMC42NDUtMC4zMzhsMCwwTDEyLDE4Ljg4Mmw0LjU5LDIuNDFsMCwwIGwxLjEyNSwwLjU5YzAuNzM0LDAuMzg1LDEuNTkxLTAuMjM4LDEuNDUtMS4wNTVsLTAuMjM0LTEuMzY0bDAsMGwtMC44NTctNC45OTFsMy44MjctMy43MjdsMCwwbDAuNzk2LTAuNzc1IEMyMy4yOTEsOS4zOTQsMjIuOTYzLDguMzg2LDIyLjE0Myw4LjI2N3oiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},6367:v=>{v.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjgwMHB4IiB3aWR0aD0iODAwcHgiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCA0NjAuODkzIDQ2MC44OTMiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8Zz4gPGc+IDxnPiA8cGF0aCBkPSJNNDIwLjg0LDBIMTYwLjA1MWMtMTguMTIxLDAtMzIuODY0LDE0Ljc0My0zMi44NjQsMzIuODY1djc2LjEzNmM5LjM5OCwwLDI5Ni41MTktMC4xNjMsMjk2LjUxOS0wLjE2M3YxODQuODE1IGMwLDEuNTgtMS4yODUsMi44NjUtMi44NjUsMi44NjVoLTU3LjEzNXYzMGg1Ny4xMzVjMTguMTIyLDAsMzIuODY1LTE0Ljc0MywzMi44NjUtMzIuODY1VjMyLjg2NSBDNDUzLjcwNSwxNC43NDMsNDM4Ljk2MiwwLDQyMC44NCwweiBNMTU3LjE4Niw3OC44MzhWMzIuODY1YzAtMS41OCwxLjI4NS0yLjg2NSwyLjg2NC0yLjg2NWgyNjAuNzg5IGMxLjU4LDAsMi44NjUsMS4yODUsMi44NjUsMi44NjV2NDUuOTczSDE1Ny4xODZ6Ii8+IDxjaXJjbGUgY3g9IjE4My44MzUiIGN5PSI1Ni41NTYiIHI9IjE4LjEiLz4gPHBhdGggZD0iTTMwMC44NCwxMzQuMzc1Yy04Ljc1NiwwLTI1Mi42MjIsMC0yNjAuNzg5LDBjLTE4LjEwOSwwLTMyLjg2NCwxNC43MTctMzIuODY0LDMyLjg2NHYyNjAuNzg5IGMwLDE4LjEyLDE0Ljc0MiwzMi44NjUsMzIuODY0LDMyLjg2NUgzMDAuODRjMTguMTE4LDAsMzIuODY1LTE0LjczOSwzMi44NjUtMzIuODY1VjE2Ny4yMzkgQzMzMy43MDUsMTQ5LjA5OCwzMTguOTUyLDEzNC4zNzUsMzAwLjg0LDEzNC4zNzV6IE0zNy4xODYsMTY3LjIzOWMwLTEuNTc5LDEuMjg1LTIuODY0LDIuODY0LTIuODY0aDI2MC43ODkgYzEuNTgsMCwyLjg2NSwxLjI4NSwyLjg2NSwyLjg2NHY0NS45NzRIMzcuMTg2VjE2Ny4yMzl6IE0zMDMuNzA2LDQyOC4wMjhoLTAuMDAxYzAsMS41OC0xLjI4NSwyLjg2NS0yLjg2NSwyLjg2NUg0MC4wNTEgYy0xLjU3OSwwLTIuODY0LTEuMjg1LTIuODY0LTIuODY1VjI0My4yMTNoMjY2LjUxOVY0MjguMDI4eiIvPiA8Y2lyY2xlIGN4PSI2NC44MzUiIGN5PSIxODguOTMxIiByPSIxOC4xIi8+IDwvZz4gPC9nPiA8L2c+IDwvc3ZnPg=="},640:v=>{v.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ic2VsZWN0X3RleHQiPiA8cGF0aCBkPSJNMSw5aDJ2MkgxVjl6IE0xLDdoMlY1SDFWN3ogTTUsMjNoMnYtMkg1VjIzeiBNMSwzaDJWMUgxVjN6IE0xLDIzaDJ2LTJIMVYyM3ogTTExLDFIOXYyaDJWMXogTTE1LDFoLTJ2MmgyVjF6IE03LDFINXYyaDIgVjF6IE05LDIzaDJ2LTJIOVYyM3ogTTEsMTloMnYtMkgxVjE5eiBNMSwxNWgydi0ySDFWMTV6IE0yMSwxMWgyVjloLTJWMTF6IE0xMywyM2gydi0yaC0yVjIzeiBNMjEsMTVoMnYtMmgtMlYxNXogTTIxLDdoMlY1aC0yVjd6IE0yMSwxdjJoMlYxSDIxeiBNMjEsMTloMnYtMmgtMlYxOXogTTIxLDIzaDJ2LTJoLTJWMjN6IE0xNywyM2gydi0yaC0yVjIzeiBNMTcsM2gyVjFoLTJWM3ogTTE3Ljg5NSw3LjMwMyBDMTcuOTY1LDcuMjE5LDE4LDcuMDkzLDE4LDYuOTE4VjUuNTA0YzAtMC4xODktMC4wMzUtMC4zMjItMC4xMDUtMC4zOTJDMTcuODE4LDUuMDM1LDE3LjY4NSw1LDE3LjQ5Niw1SDE1LjVoLTAuNzc1aC01LjQ1SDguNSBINi41MDRDNi4zMjksNSw2LjE5Niw1LjAzNSw2LjExOSw1LjExMkM2LjAzNSw1LjE4Miw2LDUuMzE1LDYsNS41MDR2MS40MTRjMCwwLjE3NSwwLjAzNSwwLjMwMSwwLjExOSwwLjM4NSBjMC4wNzcsMC4wODQsMC4yMSwwLjExOSwwLjM4NSwwLjExOUg4LjVoMC43NzVoMS4yMTN2MTEuMDc0YzAsMC4xNzUsMC4wMzUsMC4zMDEsMC4xMTksMC4zODVDMTAuNjg0LDE4Ljk1OCwxMC44MTcsMTksMTAuOTkyLDE5IGgyLjAxNmMwLjE4OSwwLDAuMzIyLTAuMDQyLDAuMzk5LTAuMTE5YzAuMDctMC4wODQsMC4xMDUtMC4yMSwwLjEwNS0wLjM4NVY3LjQyMmgxLjIxM0gxNS41aDEuOTk2IEMxNy42ODUsNy40MjIsMTcuODE4LDcuMzg3LDE3Ljg5NSw3LjMwM3oiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},4365:v=>{v.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjUgMC43NUMxLjA4NTc5IDAuNzUgMC43NSAxLjA4NTc5IDAuNzUgMS41VjYuNzVDMC43NSA3LjE2NDIxIDEuMDg1NzkgNy41IDEuNSA3LjVIMy4zMjU1Mkw1LjA3OTUxIDEwLjQyMTFMNS4wODA4NyAxMC40MjM0QzUuMzg4MjkgMTAuOTMxMyA1Ljk0NTcyIDExLjI1IDYuNTQ3NSAxMS4yNUM3LjQ5NDIxIDExLjI1IDguMjU3NSAxMC40ODY3IDguMjU3NSA5LjU0VjguMjg3NUg5LjMzNzVDMTAuODAyIDguMjg3NSAxMS44Njg5IDYuOTEzMzYgMTEuNTIwOCA1LjQ5ODMyTDExLjUyMDIgNS40OTYwM0wxMC43NjMxIDIuNDYwMDNMMTAuNzYyOCAyLjQ1ODk2QzEwLjUxNSAxLjQ1ODU2IDkuNjE1OTEgMC43NSA4LjU4IDAuNzVIMy43NUgxLjVaTTIuMjUgNlYyLjI1SDNWNkgyLjI1Wk00LjUgNi41NDIxM0w2LjM2NDEzIDkuNjQ2NjVMNi4zNjQ1NSA5LjY0NzM1QzYuNDAyMjUgOS43MDkwNiA2LjQ3NDU1IDkuNzUgNi41NDc1IDkuNzVDNi42NjU3OSA5Ljc1IDYuNzU3NSA5LjY1ODI5IDYuNzU3NSA5LjU0VjcuNTM3NUM2Ljc1NzUgNy4xMjMyOSA3LjA5MzI5IDYuNzg3NSA3LjUwNzUgNi43ODc1SDkuMzM3NUM5LjgyMjY4IDYuNzg3NSAxMC4xODA2IDYuMzMyMjcgMTAuMDY0NSA1Ljg1NzY1TDEwLjA2NDIgNS44NTY2OUw5LjMwNzI5IDIuODIxNDhMOS4zMDY5MiAyLjgxOTk4QzkuMjI0MzQgMi40ODU5NCA4LjkyMzcyIDIuMjUgOC41OCAyLjI1SDQuNVY2LjU0MjEzWiIgZmlsbD0id2hpdGUiIC8+IDwvc3ZnPiA="},9541:v=>{v.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjM2NDU1IDIuMzUyNjRMNi4zNjQxMiAyLjM1MzM1TDQuNSA1LjQ1Nzg3VjkuNzVIOC41OEM4LjkyMzcyIDkuNzUgOS4yMjQzNCA5LjUxNDA2IDkuMzA2OTEgOS4xODAwMkwxMC4wNjQyIDYuMTQzMzJMMTAuMDY0NCA2LjE0MjQ4QzEwLjE4MDcgNS42Njc4MSA5LjgyMjcxIDUuMjEyNSA5LjMzNzUgNS4yMTI1SDcuNTA3NUM3LjA5MzI5IDUuMjEyNSA2Ljc1NzUgNC44NzY3MSA2Ljc1NzUgNC40NjI1VjIuNDZDNi43NTc1IDIuMzQxNzEgNi42NjU3OSAyLjI1IDYuNTQ3NSAyLjI1QzYuNDc0NTUgMi4yNSA2LjQwMjI2IDIuMjkwOTQgNi4zNjQ1NSAyLjM1MjY0Wk0zIDkuNzVWNkgyLjI1VjkuNzVIM1pNMy4zMjU1MiA0LjVMNS4wNzk1MSAxLjU3ODkxTDUuMDgwODcgMS41NzY2NEM1LjM4ODI5IDEuMDY4NzQgNS45NDU3MyAwLjc1IDYuNTQ3NSAwLjc1QzcuNDk0MjIgMC43NSA4LjI1NzUgMS41MTMyOSA4LjI1NzUgMi40NlYzLjcxMjVIOS4zMzc1QzEwLjgwMiAzLjcxMjUgMTEuODY4OSA1LjA4NjY2IDExLjUyMDggNi41MDE2OUwxMS41MjAyIDYuNTAzOTlMMTAuNzYzMSA5LjUzOTk3TDEwLjc2MjkgOS41NDA3NkMxMC41MTUyIDEwLjU0MTMgOS42MTYwMSAxMS4yNSA4LjU4IDExLjI1SDEuNUMxLjA4NTc5IDExLjI1IDAuNzUgMTAuOTE0MiAwLjc1IDEwLjVWNS4yNUMwLjc1IDQuODM1NzkgMS4wODU3OSA0LjUgMS41IDQuNUgzLjMyNTUyWiIgZmlsbD0id2hpdGUiIC8+IDwvc3ZnPiA="},5512:v=>{v.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iY2FyZXRfdXAiPiA8cGF0aCBkPSJNMTcsMTVjLTAuMjU2LDAtMC41MTItMC4wOTgtMC43MDctMC4yOTNMMTIsMTAuNDE0bC00LjI5Myw0LjI5M2MtMC4zOTEsMC4zOTEtMS4wMjMsMC4zOTEtMS40MTQsMHMtMC4zOTEtMS4wMjMsMC0xLjQxNCBsNS01YzAuMzkxLTAuMzkxLDEuMDIzLTAuMzkxLDEuNDE0LDBsNSw1YzAuMzkxLDAuMzkxLDAuMzkxLDEuMDIzLDAsMS40MTRDMTcuNTEyLDE0LjkwMiwxNy4yNTYsMTUsMTcsMTV6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},3786:v=>{v.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0icHJvZmlsZSI+IDxwYXRoIGQ9Ik03LDZjMC0yLjc2MSwyLjIzOS01LDUtNXM1LDIuMjM5LDUsNXMtMi4yMzksNS01LDVTNyw4Ljc2MSw3LDZ6IE0yMS45NDgsMTguNjg0QzIwLjg2OCwxNS40NDMsMTcuMDE1LDEyLDEyLDEyIHMtOC44NjksMy40NDMtOS45NDksNi42ODRjLTAuMTIsMC4zNTktMC4wMjYsMC43NTYsMC4yNDIsMS4wMjNDNC40MTcsMjEuODMsNy44NjQsMjMsMTIsMjNjNC4xMzcsMCw3LjU4NC0xLjE3LDkuNzA3LTMuMjkzIEMyMS45NzUsMTkuNDM5LDIyLjA2OCwxOS4wNDMsMjEuOTQ4LDE4LjY4NHoiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},9610:v=>{v.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0id2FybmluZyI+IDxwYXRoIGQ9Ik0yMS44NTcsMTguNDgybC05LTE1LjAzYy0wLjM2MS0wLjYwNC0xLjM1NC0wLjYwNC0xLjcxNSwwbC05LDE1LjAzYy0wLjE4NiwwLjMwOS0wLjE5LDAuNjk1LTAuMDEzLDEuMDEgQzIuMzA3LDE5LjgwNiwyLjY0LDIwLDMsMjBoMThjMC4zNiwwLDAuNjkyLTAuMTk0LDAuODctMC41MDhDMjIuMDQ4LDE5LjE3NywyMi4wNDMsMTguNzkyLDIxLjg1NywxOC40ODJ6IE0xMiwxOCBjLTAuNTUyLDAtMS0wLjQ0OC0xLTFjMC0wLjU1MiwwLjQ0OC0xLDEtMXMxLDAuNDQ4LDEsMUMxMywxNy41NTIsMTIuNTUyLDE4LDEyLDE4eiBNMTMsMTRjMCwwLjU1My0wLjQ0OCwxLTEsMXMtMS0wLjQ0Ny0xLTFWOCBjMC0wLjU1MiwwLjQ0OC0xLDEtMXMxLDAuNDQ4LDEsMVYxNHoiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},1407:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Button=t.ButtonAbstract=void 0;const l=e(970),c=e(4769),A=e(4083),a=e(4977),d=e(7853),m=e(9456);e(8692);class s{constructor(){this.updateLabel=n=>{},this.setEnabled=n=>{}}}t.ButtonAbstract=s;class i extends s{constructor(n){var h;super(),this.showButtonTooltip=(g,f,C)=>{g.trim()!==void 0&&(clearTimeout(this.buttonTooltipTimeout),this.buttonTooltipTimeout=setTimeout(()=>{this.buttonTooltip=new A.Overlay({background:!0,closeOnOutsideClick:!1,referenceElement:this.render,dimOutside:!1,removeOtherOverlays:!0,verticalDirection:f??A.OverlayVerticalDirection.TO_TOP,horizontalDirection:C??A.OverlayHorizontalDirection.CENTER,children:[new a.Card({border:!1,children:[new d.CardBody({body:g}).render]}).render]})},350))},this.hideButtonTooltip=()=>{var g;clearTimeout(this.buttonTooltipTimeout),this.buttonTooltip!==null&&((g=this.buttonTooltip)===null||g===void 0||g.close(),this.buttonTooltip=null)},this.updateLabel=g=>{this.render.querySelector(".mynah-button-label").replaceWith(c.DomBuilder.getInstance().build({type:"span",classNames:["mynah-button-label"],children:[g]}))},this.setEnabled=g=>{g?this.render.removeAttribute("disabled"):this.render.setAttribute("disabled","disabled")},this.render=c.DomBuilder.getInstance().build({type:"button",classNames:["mynah-button",...n.primary===!1?["mynah-button-secondary"]:[],...n.classNames!==void 0?n.classNames:[]],attributes:{...n.attributes},events:{...n.additionalEvents,click:n.onClick,...n.tooltip!=null?{mouseover:g=>{var f;const C=(0,l.marked)((f=n.tooltip)!==null&&f!==void 0?f:"",{breaks:!0});this.showButtonTooltip(C,n.tooltipVerticalDirection,n.tooltipHorizontalDirection)},mouseleave:this.hideButtonTooltip}:{}},children:[...n.icon!==void 0?[n.icon]:[],...n.label!==void 0?[{type:"span",classNames:["mynah-button-label"],children:[n.label]}]:[],...(h=n.children)!==null&&h!==void 0?h:[]]})}}t.Button=class extends s{constructor(o){var n;return super(),this.updateLabel=h=>{},this.setEnabled=h=>{},new((n=m.Config.getInstance().config.componentClasses.Button)!==null&&n!==void 0?n:i)(o)}}},7853:function(v,t,e){"use strict";var l=this&&this.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(t,"__esModule",{value:!0}),t.CardBody=t.PARTS_CLASS_NAME_VISIBLE=t.PARTS_CLASS_NAME=t.highlightersWithTooltip=void 0;const c=e(4769),A=e(970),a=l(e(5937)),d=e(4083),m=e(8990),s=e(7019);e(6457),t.highlightersWithTooltip={start:{markupStart:"<mark ",markupAttributes:o=>`marker-index=${o}`,markupEnd:" reference-tracker>"},end:{markup:"</mark>"}},t.PARTS_CLASS_NAME="typewriter-part",t.PARTS_CLASS_NAME_VISIBLE="typewriter";class i{constructor(n){var h,g;this.nextCodeBlockIndex=0,this.codeBlockStartIndex=0,this.processNode=C=>{var w,u,y,r,p,b,x,I,M,T,z,O;let P=C;if(this.props.useParts===!0&&P.nodeType===Node.TEXT_NODE)P=c.DomBuilder.getInstance().build({type:"span",classNames:["mynah-ui-animation-text-content"],children:(w=P.textContent)===null||w===void 0?void 0:w.split(" ").map(L=>c.DomBuilder.getInstance().build({type:"span",classNames:[t.PARTS_CLASS_NAME],children:[L," "]}))});else{if(((u=P.tagName)===null||u===void 0?void 0:u.toLowerCase())==="a"){const L=(y=P.getAttribute("href"))!==null&&y!==void 0?y:"";return c.DomBuilder.getInstance().build({type:"a",classNames:this.props.useParts===!0?[t.PARTS_CLASS_NAME]:[],events:{click:D=>{this.props.onLinkClick!==void 0&&this.props.onLinkClick(L,D)},auxclick:D=>{this.props.onLinkClick!==void 0&&this.props.onLinkClick(L,D)}},attributes:{href:(r=P.getAttribute("href"))!==null&&r!==void 0?r:"",target:"_blank"},innerHTML:P.innerHTML})}if(((p=P.tagName)===null||p===void 0?void 0:p.toLowerCase())==="pre"&&P.querySelector("code")!==null||((b=P.tagName)===null||b===void 0?void 0:b.toLowerCase())==="code"){const L=((x=P.tagName)===null||x===void 0?void 0:x.toLowerCase())==="pre"||P.innerHTML.match(/\r|\n/)!==null,D=((I=P.tagName)===null||I===void 0?void 0:I.toLowerCase())==="pre"?P.querySelector("code"):P,U=(T=Array.from((M=D?.classList)!==null&&M!==void 0?M:[]).find(J=>J.match("language-")))===null||T===void 0?void 0:T.replace("language-",""),G=(z=D?.innerHTML)!==null&&z!==void 0?z:"",q=new m.SyntaxHighlighter({codeStringWithMarkup:(0,a.default)(G),language:U?.trim()!==""?U:"",keepHighlights:!0,showCopyOptions:L,block:L,index:L?this.nextCodeBlockIndex:void 0,onCopiedToClipboard:this.props.onCopiedToClipboard!=null?(J,Y,ee)=>{this.props.onCopiedToClipboard!=null&&this.props.onCopiedToClipboard(J,Y,this.getReferenceTrackerInformationFromElement(q),this.codeBlockStartIndex+(ee??0),this.nextCodeBlockIndex)}:void 0,onInsertToCursorPosition:this.props.onInsertToCursorPosition!=null?(J,Y,ee)=>{this.props.onInsertToCursorPosition!=null&&this.props.onInsertToCursorPosition(J,Y,this.getReferenceTrackerInformationFromElement(q),this.codeBlockStartIndex+(ee??0),this.nextCodeBlockIndex)}:void 0}).render;return this.props.useParts===!0&&q.classList.add(t.PARTS_CLASS_NAME),L&&++this.nextCodeBlockIndex,q}(O=P.childNodes)===null||O===void 0||O.forEach(L=>{P.replaceChild(this.processNode(L),L)})}return P},this.getReferenceTrackerInformationFromElement=C=>{var w;const u=(w=C.querySelector("code"))===null||w===void 0?void 0:w.cloneNode(!0);if(u!==void 0){const y=u.querySelectorAll("mark[reference-tracker]");if(y.length>0)return Array.from(y).map((r,p)=>{var b,x,I,M,T,z;const O=`__MARK${p}_${(0,s.generateUID)()}_START__`,P=c.DomBuilder.getInstance().build({type:"span",innerHTML:O});r.insertAdjacentElement("afterbegin",P);const L=u.innerText.indexOf(O);P.remove();const D=(b=this.props.highlightRangeWithTooltip)===null||b===void 0?void 0:b[parseInt((x=r.getAttribute("marker-index"))!==null&&x!==void 0?x:"0")];return{...D,recommendationContentSpan:{start:L,end:L+(((M=(I=D?.recommendationContentSpan)===null||I===void 0?void 0:I.end)!==null&&M!==void 0?M:0)-((z=(T=D?.recommendationContentSpan)===null||T===void 0?void 0:T.start)!==null&&z!==void 0?z:0))}}})}return[]},this.showHighlightRangeTooltip=(C,w)=>{clearTimeout(this.highlightRangeTooltipTimeout),this.highlightRangeTooltipTimeout=setTimeout(()=>{var u;this.highlightRangeTooltip=new d.Overlay({background:!0,closeOnOutsideClick:!1,referenceElement:(u=C.currentTarget)!==null&&u!==void 0?u:C.target,removeOtherOverlays:!0,dimOutside:!1,verticalDirection:d.OverlayVerticalDirection.TO_TOP,horizontalDirection:d.OverlayHorizontalDirection.START_TO_RIGHT,children:[{type:"div",classNames:["mynah-ui-syntax-highlighter-highlight-tooltip"],children:[new i({body:w}).render]}]})},500)},this.hideHighlightRangeTooltip=()=>{var C;clearTimeout(this.highlightRangeTooltipTimeout),this.highlightRangeTooltip!==null&&((C=this.highlightRangeTooltip)===null||C===void 0||C.close(),this.highlightRangeTooltip=null)},this.getContentBodyChildren=C=>{if(C.body!=null&&C.body.trim()!==""){let w=C.body;return C.body!==void 0&&C.highlightRangeWithTooltip!==void 0&&C.highlightRangeWithTooltip.length>0&&C.highlightRangeWithTooltip.forEach((u,y)=>{if(w!==void 0&&u.recommendationContentSpan!==void 0){const r=`${t.highlightersWithTooltip.start.markupStart}${t.highlightersWithTooltip.start.markupAttributes(y.toString())}${t.highlightersWithTooltip.start.markupEnd}`;let p=u.recommendationContentSpan.start+y*(r.length+t.highlightersWithTooltip.end.markup.length),b=p+r.length-u.recommendationContentSpan.start+u.recommendationContentSpan.end;b>w.length&&(p=w.length-1),b>w.length&&(b=w.length-1),w=w.slice(0,p)+r+w.slice(p),w=w.slice(0,b)+t.highlightersWithTooltip.end.markup+w.slice(b)}}),[...Array.from(c.DomBuilder.getInstance().build({type:"div",innerHTML:`${A.marked.parse(w,{breaks:!0})}`}).childNodes).map(u=>{const y=this.processNode(u);return y.querySelectorAll!==void 0&&Array.from(y.querySelectorAll("*:empty:not(img):not(br):not(hr)")).forEach(r=>{r.remove()}),y})]}return[]},this.codeBlockStartIndex=(h=n.codeBlockStartIndex)!==null&&h!==void 0?h:0,this.props=n;const f=[...this.getContentBodyChildren(this.props),...this.props.children!=null?this.props.processChildren===!0?this.props.children.map(C=>{const w=this.processNode(C);return w.querySelectorAll!==void 0&&Array.from(w.querySelectorAll("*:empty:not(img):not(br):not(hr)")).forEach(u=>{u.remove()}),w}):this.props.children:[]];this.render=c.DomBuilder.getInstance().build({type:"div",classNames:["mynah-card-body",...(g=this.props.classNames)!==null&&g!==void 0?g:[]],children:this.props.childLocation==="above-body"?f.reverse():f}),Array.from(this.render.querySelectorAll("mark[reference-tracker]")).forEach(C=>{C.addEventListener("mouseenter",w=>{var u,y;const r=parseInt((u=w.target.getAttribute("marker-index"))!==null&&u!==void 0?u:"0");((y=n.highlightRangeWithTooltip)===null||y===void 0?void 0:y[r])!==void 0&&this.showHighlightRangeTooltip(w,n.highlightRangeWithTooltip[r].information)}),C.addEventListener("mouseleave",this.hideHighlightRangeTooltip)})}}t.CardBody=i},4977:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Card=void 0;const l=e(4769),c=e(7609);e(6457),t.Card=class{constructor(A){var a,d,m;this.engagementStartTime=-1,this.totalMouseDistanceTraveled={x:0,y:0},this.resetEngagement=()=>{this.engagementStartTime=-1,this.totalMouseDistanceTraveled={x:0,y:0},this.previousMousePosition={x:0,y:0},this.mouseDownInfo={x:0,y:0,time:-1}},this.handleEngagement=s=>{var i;this.props.onCardEngaged!==void 0&&this.props.onCardEngaged({engagementDurationTillTrigger:new Date().getTime()-this.engagementStartTime,engagementType:s!==void 0?c.EngagementType.INTERACTION:c.EngagementType.TIME,totalMouseDistanceTraveled:this.totalMouseDistanceTraveled,selectionDistanceTraveled:Boolean((i=s?.x)!==null&&i!==void 0?i:0)&&Boolean(s?.y)?s:void 0}),this.resetEngagement()},this.props=A,this.render=l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-card",`padding-${(a=A.padding)!==null&&a!==void 0?a:"large"}`,A.border!==!1?"border":"",A.background!==!1?"background":"",...(d=A.classNames)!==null&&d!==void 0?d:[]],persistent:A.persistent,innerHTML:A.innerHTML,children:[...(m=A.children)!==null&&m!==void 0?m:[]],events:{...A.events,...A.onCardEngaged!==void 0?{mouseenter:s=>{this.engagementStartTime===-1&&(this.engagementStartTime=new Date().getTime(),this.previousMousePosition={x:s.clientX,y:s.clientY},this.totalMouseDistanceTraveled={x:0,y:0})},mousemove:s=>{this.engagementStartTime===-1&&(this.engagementStartTime=new Date().getTime()),this.totalMouseDistanceTraveled={x:this.totalMouseDistanceTraveled.x+Math.abs(s.clientX-this.previousMousePosition.x),y:this.totalMouseDistanceTraveled.y+Math.abs(s.clientY-this.previousMousePosition.y)},this.previousMousePosition={x:s.clientX,y:s.clientY}},mousedown:s=>{this.mouseDownInfo={x:s.clientX,y:s.clientY,time:new Date().getTime()}},mouseup:s=>{var i;const o=s.clientX,n=s.clientY,h=new Date().getTime();this.mouseDownInfo!==void 0&&(Math.abs(this.mouseDownInfo.x-o)>6||Math.abs(this.mouseDownInfo.y-n)>6)&&h-this.mouseDownInfo.time>300&&this.handleEngagement({x:Math.abs(this.mouseDownInfo.x-o),y:Math.abs(this.mouseDownInfo.y-n),selectedText:(i=window?.getSelection())===null||i===void 0?void 0:i.toString()})},mouseleave:()=>{const s=new Date().getTime();this.engagementStartTime!==-1&&s-this.engagementStartTime>3e3?this.handleEngagement():this.resetEngagement()}}:{}},attributes:A.attributes})}}},2922:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemButtonsWrapper=void 0;const l=e(4769),c=e(1407),A=e(9275);t.ChatItemButtonsWrapper=class{constructor(a){var d;this.actions={},this.handleValidationChange=m=>{Object.keys(this.actions).forEach(s=>{this.actions[s].data.waitMandatoryFormItems!==!1&&this.actions[s].element.setEnabled(m)})},this.disableAll=()=>{Object.keys(this.actions).forEach(m=>{this.actions[m].data.disabled!==!1&&this.actions[m].element.setEnabled(!1)})},this.props=a,this.render=l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-buttons-container",...(d=this.props.classNames)!==null&&d!==void 0?d:[]],children:this.props.buttons.map(m=>{const s=new c.Button({label:m.text,icon:m.icon!=null?new A.Icon({icon:m.icon}).render:void 0,primary:m.status!==void 0,onClick:i=>{a.formItems!==null&&a.formItems.disableAll(),this.disableAll(),this.props.onActionClick(m,i)}});return m.disabled===!0&&s.setEnabled(!1),this.actions[m.id]={data:m,element:s},s.render})}),a.formItems!==null&&(this.handleValidationChange(a.formItems.isFormValid()),a.formItems.onValidationChange=m=>{this.handleValidationChange(m)})}}},5056:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemCardContent=void 0;const l=e(4769),c=e(7853),A=e(7019);t.ChatItemCardContent=class{constructor(a){var d,m;this.contentBody=null,this.updateStack=[],this.typewriterItemIndex=0,this.typewriterId=`typewriter-card-${(0,A.generateUID)()}`,this.lastAnimationDuration=0,this.getCardContent=()=>{var s,i;return new c.CardBody({body:(s=this.props.body)!==null&&s!==void 0?s:"",useParts:this.props.renderAsStream,classNames:[this.typewriterId,...(i=this.props.classNames)!==null&&i!==void 0?i:[]],highlightRangeWithTooltip:this.props.codeReference,children:this.props.children,...this.props.contentEvents})},this.updateCard=()=>{var s,i,o;if(this.updateTimer===void 0&&this.updateStack.length>0){const n=this.updateStack.shift();if(n!==void 0){this.props={...this.props,...n};const h=this.getCardContent(),g=Array.from((s=h.render.querySelectorAll(".typewriter-part"))!==null&&s!==void 0?s:[]);for(let w=0;w<g.length;w++)g[w].setAttribute("index",w.toString());const f=g.length-this.typewriterItemIndex,C=Math.min(50,Math.floor(500/f));h.render.insertAdjacentElement("beforeend",(0,l.getTypewriterPartsCss)(this.typewriterId,this.typewriterItemIndex,g.length,C)),(o=(i=this.props).onAnimationStateChange)===null||o===void 0||o.call(i,!0),this.contentBody=h,this.render.replaceWith(this.contentBody.render),this.render=this.contentBody.render,this.lastAnimationDuration=C*f,this.typewriterItemIndex=g.length,this.updateTimer=setTimeout(()=>{var w,u;this.updateTimer=void 0,(u=(w=this.props).onAnimationStateChange)===null||u===void 0||u.call(w,!1),this.updateCard()},this.lastAnimationDuration)}}},this.updateCardStack=s=>{this.updateStack.push(s),this.updateCard()},this.getRenderDetails=()=>{var s,i;return{totalNumberOfCodeBlocks:(i=(s=this.contentBody)===null||s===void 0?void 0:s.nextCodeBlockIndex)!==null&&i!==void 0?i:0}},this.props=a,this.contentBody=this.getCardContent(),this.render=this.contentBody.render,(d=this.props.renderAsStream)!==null&&d!==void 0&&d&&((m=this.props.body)!==null&&m!==void 0?m:"").trim()!==""&&this.updateCardStack({})}}},8892:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemCard=void 0;const l=e(4769),c=e(4601),A=e(6508),a=e(7609),d=e(7853),m=e(9275),s=e(9674),i=e(7690),o=e(5369),n=e(4221),h=e(9456),g=e(6765),f=e(2922),C=e(1434),w=e(8347),u=e(6855),y=e(4977),r=e(5056);t.ChatItemCard=class{constructor(p){var b,x;this.card=null,this.updateStack=[],this.initialSpinner=null,this.cardIcon=null,this.contentBody=null,this.chatFormItems=null,this.customRendererWrapper=null,this.chatButtons=null,this.fileTreeWrapper=null,this.followUps=null,this.votes=null,this.generateCard=()=>{var I,M,T;const z=l.DomBuilder.getInstance().build({type:"div",classNames:this.getCardClasses(),attributes:{messageId:(I=this.props.chatItem.messageId)!==null&&I!==void 0?I:"unknown"},children:[...A.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("showChatAvatars")===!0?[this.chatAvatar]:[],...this.card!=null?[(M=this.card)===null||M===void 0?void 0:M.render]:[],...((T=this.props.chatItem.followUp)===null||T===void 0?void 0:T.text)!==void 0?[new s.ChatItemFollowUpContainer({tabId:this.props.tabId,chatItem:this.props.chatItem}).render]:[]]});return setTimeout(()=>{z.addClass("reveal"),this.checkCardSnap()},this.props.chatItem.type===a.ChatItemType.PROMPT?10:200),z},this.getCardClasses=()=>{var I,M;const T=!(0,u.chatItemHasContent)(this.props.chatItem)&&this.props.chatItem.followUp==null&&this.props.chatItem.relatedContent==null&&this.props.chatItem.type===a.ChatItemType.ANSWER;return[...this.props.chatItem.icon!==void 0?["mynah-chat-item-card-has-icon"]:[],`mynah-chat-item-card-status-${(I=this.props.chatItem.status)!==null&&I!==void 0?I:"default"}`,"mynah-chat-item-card",`mynah-chat-item-${(M=this.props.chatItem.type)!==null&&M!==void 0?M:a.ChatItemType.ANSWER}`,...(0,u.chatItemHasContent)(this.props.chatItem)?[]:["mynah-chat-item-empty"],...T?["mynah-chat-item-no-content"]:[]]},this.updateCardContent=()=>{var I,M,T,z,O,P,L,D,U,G,q,J,Y,ee,se,W,fe,de,ge,ue;if(A.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId)===void 0)return;const $={onLinkClick:(H,_)=>{c.MynahUIGlobalEvents.getInstance().dispatch(a.MynahEventNames.LINK_CLICK,{messageId:this.props.chatItem.messageId,link:H,event:_})},...h.Config.getInstance().config.codeCopyToClipboardEnabled!==!1&&this.props.chatItem.codeCopyToClipboardEnabled!==!1?{onCopiedToClipboard:(H,_,K,Ce)=>{var ce,oe,ne,Me;c.MynahUIGlobalEvents.getInstance().dispatch(a.MynahEventNames.COPY_CODE_TO_CLIPBOARD,{messageId:this.props.chatItem.messageId,type:H,text:_,referenceTrackerInformation:K,codeBlockIndex:Ce,totalCodeBlocks:((oe=(ce=this.contentBody)===null||ce===void 0?void 0:ce.getRenderDetails().totalNumberOfCodeBlocks)!==null&&oe!==void 0?oe:0)+((Me=(ne=this.customRendererWrapper)===null||ne===void 0?void 0:ne.nextCodeBlockIndex)!==null&&Me!==void 0?Me:0)})}}:{},...h.Config.getInstance().config.codeInsertToCursorEnabled!==!1&&this.props.chatItem.codeInsertToCursorEnabled!==!1?{onInsertToCursorPosition:(H,_,K,Ce)=>{var ce,oe,ne,Me;c.MynahUIGlobalEvents.getInstance().dispatch(a.MynahEventNames.INSERT_CODE_TO_CURSOR_POSITION,{messageId:this.props.chatItem.messageId,type:H,text:_,referenceTrackerInformation:K,codeBlockIndex:Ce,totalCodeBlocks:((oe=(ce=this.contentBody)===null||ce===void 0?void 0:ce.getRenderDetails().totalNumberOfCodeBlocks)!==null&&oe!==void 0?oe:0)+((Me=(ne=this.customRendererWrapper)===null||ne===void 0?void 0:ne.nextCodeBlockIndex)!==null&&Me!==void 0?Me:0)})}}:{}};if((0,u.chatItemHasContent)(this.props.chatItem)&&((M=(I=this.initialSpinner)===null||I===void 0?void 0:I[0])===null||M===void 0||M.remove()),this.props.chatItem.icon!==void 0&&(this.cardIcon!==null?(this.cardIcon.render.remove(),this.cardIcon=null):(this.cardIcon=new m.Icon({icon:this.props.chatItem.icon,classNames:["mynah-chat-item-card-icon","mynah-card-inner-order-10"]}),(T=this.card)===null||T===void 0||T.render.insertChild("beforeend",this.cardIcon.render))),this.props.chatItem.body!==void 0&&this.props.chatItem.body!==""){const H={body:(z=this.props.chatItem.body)!==null&&z!==void 0?z:"",classNames:["mynah-card-inner-order-20"],renderAsStream:this.props.chatItem.type===a.ChatItemType.ANSWER_STREAM,codeReference:this.props.chatItem.codeReference,onAnimationStateChange:_=>{_?this.render.addClass("typewriter-animating"):this.render.removeClass("typewriter-animating")},children:this.props.chatItem.relatedContent!==void 0?[new i.ChatItemSourceLinksContainer({messageId:(O=this.props.chatItem.messageId)!==null&&O!==void 0?O:"unknown",tabId:this.props.tabId,relatedContent:(P=this.props.chatItem.relatedContent)===null||P===void 0?void 0:P.content,title:(L=this.props.chatItem.relatedContent)===null||L===void 0?void 0:L.title}).render]:[],contentEvents:$};this.contentBody!==null?this.contentBody.updateCardStack(H):(this.contentBody=new r.ChatItemCardContent(H),(D=this.card)===null||D===void 0||D.render.insertChild("beforeend",this.contentBody.render))}if(this.customRendererWrapper!==null&&(this.customRendererWrapper.render.remove(),this.customRendererWrapper=null),this.props.chatItem.customRenderer!==void 0){const H={};typeof this.props.chatItem.customRenderer=="object"?H.children=Array.isArray(this.props.chatItem.customRenderer)?this.props.chatItem.customRenderer:[this.props.chatItem.customRenderer]:typeof this.props.chatItem.customRenderer=="string"&&(H.innerHTML=(0,C.cleanHtml)(this.props.chatItem.customRenderer)),this.customRendererWrapper=new d.CardBody({body:H.innerHTML,children:H.children,classNames:["mynah-card-inner-order-30"],processChildren:!0,useParts:!0,codeBlockStartIndex:(G=(U=this.contentBody)===null||U===void 0?void 0:U.getRenderDetails().totalNumberOfCodeBlocks)!==null&&G!==void 0?G:0,...$}),(q=this.card)===null||q===void 0||q.render.insertChild("beforeend",this.customRendererWrapper.render)}if(this.chatFormItems!==null&&(this.chatFormItems.render.remove(),this.chatFormItems=null),this.props.chatItem.formItems!==void 0&&(this.chatFormItems=new g.ChatItemFormItemsWrapper({classNames:["mynah-card-inner-order-40"],tabId:this.props.tabId,chatItem:this.props.chatItem}),(J=this.card)===null||J===void 0||J.render.insertChild("beforeend",this.chatFormItems.render)),this.fileTreeWrapper!==null&&(this.fileTreeWrapper.render.remove(),this.fileTreeWrapper=null),this.props.chatItem.fileList!==void 0){const{filePaths:H=[],deletedFiles:_=[],actions:K,details:Ce}=this.props.chatItem.fileList,ce=(Y=this.props.chatItem.body)!==null&&Y!==void 0?Y:"";this.fileTreeWrapper=new n.ChatItemTreeViewWrapper({tabId:this.props.tabId,classNames:["mynah-card-inner-order-50"],messageId:(ee=this.props.chatItem.messageId)!==null&&ee!==void 0?ee:"",cardTitle:this.props.chatItem.fileList.fileTreeTitle,rootTitle:this.props.chatItem.fileList.rootFolderTitle,files:H,deletedFiles:_,actions:K,details:Ce,references:(se=this.props.chatItem.codeReference)!==null&&se!==void 0?se:[],referenceSuggestionLabel:ce}),(W=this.card)===null||W===void 0||W.render.insertChild("beforeend",this.fileTreeWrapper.render)}this.chatButtons!==null&&(this.chatButtons.render.remove(),this.chatButtons=null),this.props.chatItem.buttons!==void 0&&(this.chatButtons=new f.ChatItemButtonsWrapper({tabId:this.props.tabId,classNames:["mynah-card-inner-order-60"],formItems:this.chatFormItems,buttons:this.props.chatItem.buttons,onActionClick:H=>{if(c.MynahUIGlobalEvents.getInstance().dispatch(a.MynahEventNames.BODY_ACTION_CLICKED,{tabId:this.props.tabId,messageId:this.props.chatItem.messageId,actionId:H.id,actionText:H.text,...this.chatFormItems!==null?{formItemValues:this.chatFormItems.getAllValues()}:{}}),H.keepCardAfterClick===!1&&(this.render.remove(),this.props.chatItem.messageId!==void 0)){const _=A.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("chatItems");A.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).updateStore({chatItems:[..._.map(K=>this.props.chatItem.messageId!==K.messageId?K:{type:a.ChatItemType.ANSWER,messageId:K.messageId})]},!0)}}}),(fe=this.card)===null||fe===void 0||fe.render.insertChild("beforeend",this.chatButtons.render)),this.votes!==null&&(this.votes.render.remove(),this.votes=null),this.props.chatItem.canBeVoted===!0&&this.props.chatItem.messageId!==void 0&&(this.votes=new o.ChatItemRelevanceVote({tabId:this.props.tabId,classNames:["mynah-card-inner-order-70"],messageId:this.props.chatItem.messageId}),(de=this.card)===null||de===void 0||de.render.insertChild("beforeend",this.votes.render)),this.followUps!==null&&(this.followUps.render.remove(),this.followUps=null),((ge=this.props.chatItem.followUp)===null||ge===void 0?void 0:ge.text)!==void 0&&(this.followUps=new s.ChatItemFollowUpContainer({tabId:this.props.tabId,chatItem:this.props.chatItem}),(ue=this.render)===null||ue===void 0||ue.insertChild("afterend",this.followUps.render))},this.getChatAvatar=()=>l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-card-icon-wrapper"],children:[new m.Icon({icon:this.props.chatItem.type===a.ChatItemType.PROMPT?m.MynahIcons.USER:m.MynahIcons.MYNAH}).render]}),this.checkCardSnap=()=>{this.render.offsetParent!=null&&this.props.chatItem.snapToTop===!0&&(this.render.offsetParent.scrollTop=this.render.offsetTop-w.CONTAINER_GAP-this.render.offsetParent.offsetTop)},this.updateCard=()=>{var I,M,T;if(this.updateStack.length>0){const z=this.updateStack.shift();if(z!==void 0){if(this.props.chatItem={...this.props.chatItem,...z},this.props.chatItem.messageId!==void 0){const O=(M=(I=A.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId))===null||I===void 0?void 0:I.getStore())===null||M===void 0?void 0:M.chatItems;A.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).updateStore({chatItems:O?.map(P=>P.messageId===this.props.chatItem.messageId?this.props.chatItem:P)},!0)}(T=this.render)===null||T===void 0||T.update({...this.props.chatItem.messageId!=null?{attributes:{messageid:this.props.chatItem.messageId}}:{},classNames:[...this.getCardClasses(),"reveal"]}),this.updateCardContent(),this.updateCard()}}else setTimeout(()=>{this.checkCardSnap()},200)},this.updateCardStack=I=>{this.updateStack.push(I),this.updateCard()},this.getRenderDetails=()=>{var I,M,T,z;return{totalNumberOfCodeBlocks:((M=(I=this.contentBody)===null||I===void 0?void 0:I.getRenderDetails().totalNumberOfCodeBlocks)!==null&&M!==void 0?M:0)+((z=(T=this.customRendererWrapper)===null||T===void 0?void 0:T.nextCodeBlockIndex)!==null&&z!==void 0?z:0)}},this.props=p,this.chatAvatar=this.getChatAvatar(),A.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).subscribe("showChatAvatars",I=>{I?(this.chatAvatar=this.getChatAvatar(),this.render.insertChild("afterbegin",this.chatAvatar)):this.chatAvatar.remove()}),this.props.chatItem.type===a.ChatItemType.ANSWER_STREAM&&(this.initialSpinner=[l.DomBuilder.getInstance().build({type:"div",persistent:!0,classNames:["mynah-chat-items-spinner"],children:[{type:"span"},{type:"div",children:[h.Config.getInstance().config.texts.spinnerText]}]})]),this.card=new y.Card({classNames:["hide-if-empty"],children:(b=this.initialSpinner)!==null&&b!==void 0?b:[]}),this.updateCardContent(),this.render=this.generateCard(),this.props.chatItem.type===a.ChatItemType.ANSWER_STREAM&&((x=this.props.chatItem.body)!==null&&x!==void 0?x:"").trim()!==""&&this.updateCardStack({})}}},3068:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemFollowUpOption=void 0;const l=e(970),c=e(4769),A=e(9275),a=e(4083),d=e(4977),m=e(7853),s=e(4601);t.ChatItemFollowUpOption=class{constructor(i){var o;this.disabled=!1,this.showCroppedFollowupText=(n,h)=>{h.trim()!==void 0&&(clearTimeout(this.followupTooltipTimeout),this.followupTooltipTimeout=setTimeout(()=>{const g=n.target;this.followupTooltip=new a.Overlay({background:!0,closeOnOutsideClick:!1,referenceElement:g,dimOutside:!1,removeOtherOverlays:!0,verticalDirection:a.OverlayVerticalDirection.TO_TOP,horizontalDirection:a.OverlayHorizontalDirection.START_TO_RIGHT,children:[new d.Card({border:!1,children:[new m.CardBody({body:h}).render]}).render]})},250))},this.hideCroppedFollowupText=()=>{var n;clearTimeout(this.followupTooltipTimeout),this.followupTooltip!==null&&((n=this.followupTooltip)===null||n===void 0||n.close(),this.followupTooltip=null)},this.setEnabled=n=>{this.disabled=!n,n?this.render.removeClass("mynah-chat-item-followup-question-option-disabled"):this.render.addClass("mynah-chat-item-followup-question-option-disabled")},this.props=i,this.disabled=this.props.followUpOption.disabled===!0,l.marked.use({extensions:[{name:"text",renderer:n=>n.text}]}),this.render=c.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-followup-question-option",`mynah-chat-item-followup-question-option-status-${(o=i.followUpOption.status)!==null&&o!==void 0?o:"default"}`,i.followUpOption.disabled===!0?"mynah-chat-item-followup-question-option-disabled":""],children:[...i.followUpOption.icon!==void 0?[new A.Icon({icon:i.followUpOption.icon}).render]:[],{type:"span",classNames:["mynah-chat-item-followup-question-option-text"],innerHTML:(0,l.marked)(i.followUpOption.pillText,{breaks:!0}).replace("<p>","").replace("</p>","")}],events:{click:n=>{this.disabled||(this.hideCroppedFollowupText(),this.props.onClick(i.followUpOption))},mouseover:n=>{(0,s.cancelEvent)(n);const h=this.render.querySelector(".mynah-chat-item-followup-question-option-text");let g;h!=null&&h.offsetWidth<h.scrollWidth&&(g=(0,l.marked)(i.followUpOption.pillText,{breaks:!0})),i.followUpOption.description!==void 0&&(g!=null&&(g+=`

`),g=i.followUpOption.description),g!=null&&this.showCroppedFollowupText(n,g)},mouseleave:this.hideCroppedFollowupText}})}}},9674:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemFollowUpContainer=void 0;const l=e(4769),c=e(4601),A=e(7609),a=e(3068);t.ChatItemFollowUpContainer=class{constructor(d){var m,s,i,o;this.handleLinkClick=(n,h)=>{c.MynahUIGlobalEvents.getInstance().dispatch(A.MynahEventNames.LINK_CLICK,{tabId:this.props.tabId,messageId:this.props.chatItem.messageId,link:n,event:h})},this.props=d,this.props.chatItem=d.chatItem,this.followupOptions=((s=(m=this.props.chatItem.followUp)===null||m===void 0?void 0:m.options)!==null&&s!==void 0?s:[]).map(n=>new a.ChatItemFollowUpOption({followUpOption:n,onClick:h=>{var g,f;c.MynahUIGlobalEvents.getInstance().removeListener(A.MynahEventNames.CHAT_ITEM_ADD,this.itemAddListenerId),c.MynahUIGlobalEvents.getInstance().dispatch(A.MynahEventNames.FOLLOW_UP_CLICKED,{tabId:this.props.tabId,messageId:this.props.chatItem.messageId,followUpOption:h}),!((g=this.render.parentElement)===null||g===void 0)&&g.hasClass("mynah-chat-item-empty")?(f=this.render.parentElement)===null||f===void 0||f.remove():this.render.remove()}})),this.itemAddListenerId=c.MynahUIGlobalEvents.getInstance().addListener(A.MynahEventNames.CHAT_ITEM_ADD,n=>{n.tabId===this.props.tabId&&(this.render.remove(),this.followupOptions.forEach(h=>h.hideCroppedFollowupText()),this.followupOptions=[],c.MynahUIGlobalEvents.getInstance().removeListener(A.MynahEventNames.CHAT_ITEM_ADD,this.itemAddListenerId))}),this.render=l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-followup-question"],children:[{type:"div",classNames:["mynah-chat-item-followup-question-text"],children:[(o=(i=this.props.chatItem.followUp)===null||i===void 0?void 0:i.text)!==null&&o!==void 0?o:""]},{type:"div",classNames:["mynah-chat-item-followup-question-options-wrapper"],children:this.followupOptions.map(n=>n.render)}]}),Array.from(this.render.getElementsByTagName("a")).forEach(n=>{const h=n.href;n.onclick=g=>{this.handleLinkClick(h,g)},n.onauxclick=g=>{this.handleLinkClick(h,g)}})}}},6765:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemFormItemsWrapper=void 0;const l=e(9456),c=e(4769),A=e(4432),a=e(2010),d=e(6755),m=e(626),s=e(9897),i=e(9275);t.ChatItemFormItemsWrapper=class{constructor(o){var n,h;this.options={},this.validationItems={},this.isValid=!1,this.getValidationHandler=g=>g.mandatory===!0?(this.validationItems[g.id]=g.value!==void 0&&g.value!=="",{onChange:f=>{this.validationItems[g.id]=f!==void 0&&f!=="",this.isFormValid()}}):{},this.isFormValid=()=>{const g=Object.keys(this.validationItems).reduce((f,C)=>f&&this.validationItems[C],!0);return this.isValid!==g&&this.onValidationChange!==void 0&&this.onValidationChange(g),this.isValid=g,g},this.disableAll=()=>{Object.keys(this.options).forEach(g=>this.options[g].setEnabled(!1))},this.getAllValues=()=>{const g={};return Object.keys(this.options).forEach(f=>{g[f]=this.options[f].getValue()}),g},this.props=o,this.render=c.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-form-items-container",...(n=this.props.classNames)!==null&&n!==void 0?n:[]],children:(h=this.props.chatItem.formItems)===null||h===void 0?void 0:h.map(g=>{var f,C,w,u,y;let r,p=`${g.mandatory===!0?"* ":""}${(f=g.title)!==null&&f!==void 0?f:""}`;g.mandatory===!0&&(p=c.DomBuilder.getInstance().build({type:"div",classNames:["mynah-ui-form-item-mandatory-title"],children:[new i.Icon({icon:i.MynahIcons.ASTERISK}).render,(C=g.title)!==null&&C!==void 0?C:""]}),g.value===void 0&&(g.value=(u=(w=g.options)===null||w===void 0?void 0:w[0])===null||u===void 0?void 0:u.value));const b=(y=g.value)===null||y===void 0?void 0:y.toString();switch(g.type){case"select":r=new a.Select({label:p,value:b,options:g.options,optional:g.mandatory!==!0,placeholder:l.Config.getInstance().config.texts.pleaseSelect,...this.getValidationHandler(g)});break;case"radiogroup":r=new A.RadioGroup({label:p,value:b,options:g.options,optional:g.mandatory!==!0,...this.getValidationHandler(g)});break;case"textarea":r=new m.TextArea({label:p,value:b,placeholder:g.placeholder,...this.getValidationHandler(g)});break;case"textinput":r=new s.TextInput({label:p,value:b,placeholder:g.placeholder,...this.getValidationHandler(g)});break;case"numericinput":r=new s.TextInput({label:p,value:b,type:"number",placeholder:g.placeholder,...this.getValidationHandler(g)});break;case"email":r=new s.TextInput({label:p,value:b,type:"email",placeholder:g.placeholder,...this.getValidationHandler(g)});break;case"stars":r=new d.Stars({label:p,value:b,...this.getValidationHandler(g)})}return r!==void 0?(this.options[g.id]=r,r.render):null})}),this.isFormValid()}}},5369:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemRelevanceVote=void 0;const l=e(7609),c=e(4769),A=e(9275),a=e(4601),d=e(1407),m=e(9456);t.ChatItemRelevanceVote=class{constructor(s){var i;this.handleVoteChange=o=>{a.MynahUIGlobalEvents.getInstance().dispatch(l.MynahEventNames.CARD_VOTE,{messageId:this.props.messageId,tabId:this.props.tabId,vote:o});const n=[m.Config.getInstance().config.texts.feedbackThanks,...o===l.RelevancyVoteType.DOWN?[new d.Button({label:m.Config.getInstance().config.texts.feedbackReportButtonLabel,onClick:()=>{this.sendFeedbackListenerId===void 0&&(this.sendFeedbackListenerId=a.MynahUIGlobalEvents.getInstance().addListener(l.MynahEventNames.FEEDBACK_SET,h=>{h.messageId===this.props.messageId&&h.tabId===this.props.tabId&&(a.MynahUIGlobalEvents.getInstance().removeListener(l.MynahEventNames.FEEDBACK_SET,this.sendFeedbackListenerId),this.render.remove())})),a.MynahUIGlobalEvents.getInstance().dispatch(l.MynahEventNames.SHOW_FEEDBACK_FORM,{tabId:this.props.tabId,messageId:this.props.messageId})},primary:!1}).render]:[]];this.render.replaceChildren(...n),o===l.RelevancyVoteType.UP&&setTimeout(()=>{this.render.remove()},3500)},this.props=s,this.votingId=`${this.props.tabId}-${this.props.messageId}`,this.render=c.DomBuilder.getInstance().build({type:"div",classNames:["mynah-card-votes-wrapper",...(i=this.props.classNames)!==null&&i!==void 0?i:[]],children:[{type:"div",classNames:["mynah-card-vote"],children:[{type:"input",events:{change:o=>{this.handleVoteChange(l.RelevancyVoteType.UP)}},attributes:{type:"radio",id:`${this.votingId}-vote-up`,name:`${this.votingId}-vote`,value:"up"},classNames:["mynah-vote-radio","mynah-vote-up-radio"]},{type:"input",events:{change:o=>{this.handleVoteChange(l.RelevancyVoteType.DOWN)}},attributes:{type:"radio",id:`${this.votingId}-vote-down`,name:`${this.votingId}-vote`,value:"down"},classNames:["mynah-vote-radio","mynah-vote-down-radio"]},{type:"label",attributes:{for:`${this.votingId}-vote-up`},classNames:["mynah-vote-label","mynah-vote-up"],children:[new A.Icon({icon:A.MynahIcons.THUMBS_UP}).render]},{type:"label",attributes:{for:`${this.votingId}-vote-down`},classNames:["mynah-vote-label","mynah-vote-down"],children:[new A.Icon({icon:A.MynahIcons.THUMBS_DOWN}).render]}]}]})}}},7690:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemSourceLinksContainer=void 0;const l=e(4769),c=e(4601),A=e(7609),a=e(1407),d=e(4977),m=e(9275),s=e(8948);t.ChatItemSourceLinksContainer=class{constructor(i){this.props=i,this.showMoreButtonBlock=new a.Button({classNames:["mynah-chat-item-card-related-content-show-more"],primary:!1,icon:new m.Icon({icon:m.MynahIcons.DOWN_OPEN}).render,onClick:()=>{c.MynahUIGlobalEvents.getInstance().dispatch(A.MynahEventNames.SHOW_MORE_WEB_RESULTS_CLICK,{messageId:this.props.messageId}),this.showMoreButtonBlock.render.remove(),this.render.addClass("expanded")},label:"Show more"}),this.props.relatedContent!==void 0&&(this.render=l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-card-related-content",this.props.relatedContent!==void 0&&this.props.relatedContent.length<=1?"expanded":""],children:[...this.props.title!==void 0?[{type:"span",classNames:["mynah-chat-item-card-related-content-title"],children:[this.props.title]}]:[],...this.props.relatedContent.map(o=>l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-card-related-content-item"],children:[new d.Card({background:!1,border:!1,padding:"none",children:[new s.SourceLinkHeader({sourceLink:o,showCardOnHover:!0,onClick:n=>{c.MynahUIGlobalEvents.getInstance().dispatch(A.MynahEventNames.SOURCE_LINK_CLICK,{messageId:this.props.messageId,link:o.url,event:n})}}).render]}).render]})),this.showMoreButtonBlock.render]}))}}},2336:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemTreeFile=void 0;const l=e(970),c=e(4769),A=e(4601),a=e(7609),d=e(1407),m=e(4977),s=e(7853),i=e(9275),o=e(4083);t.ChatItemTreeFile=class{constructor(n){var h,g,f,C;this.showTooltip=(w,u,y)=>{w.trim()!==""&&(clearTimeout(this.fileTooltipTimeout),this.fileTooltipTimeout=setTimeout(()=>{this.fileTooltip=new o.Overlay({background:!0,closeOnOutsideClick:!1,referenceElement:this.render,dimOutside:!1,removeOtherOverlays:!0,verticalDirection:u??o.OverlayVerticalDirection.TO_TOP,horizontalDirection:y??o.OverlayHorizontalDirection.CENTER,children:[new m.Card({border:!1,children:[new s.CardBody({body:w}).render]}).render]})},250))},this.hideTooltip=()=>{var w;this.fileTooltipTimeout!=null&&clearTimeout(this.fileTooltipTimeout),(w=this.fileTooltip)===null||w===void 0||w.close(),this.fileTooltip=null},this.render=c.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-tree-view-file-item",((h=n.details)===null||h===void 0?void 0:h.status)!==void 0?`mynah-chat-item-tree-view-file-item-status-${(g=n.details)===null||g===void 0?void 0:g.status}`:""],events:{click:()=>{this.hideTooltip(),A.MynahUIGlobalEvents.getInstance().dispatch(a.MynahEventNames.FILE_CLICK,{tabId:n.tabId,messageId:n.messageId,filePath:n.originalFilePath,deleted:n.deleted})},...((f=n.details)===null||f===void 0?void 0:f.description)!=null?{mouseenter:w=>{var u,y;const r=(0,l.marked)((y=(u=n.details)===null||u===void 0?void 0:u.description)!==null&&y!==void 0?y:"",{breaks:!0});this.showTooltip(r,o.OverlayVerticalDirection.CENTER,o.OverlayHorizontalDirection.TO_RIGHT)},mouseout:this.hideTooltip}:{}},children:[...n.icon!=null?[{type:"span",classNames:["mynah-chat-single-file-icon"],children:[new i.Icon({icon:(C=n.icon)!==null&&C!==void 0?C:i.MynahIcons.PAPER_CLIP}).render]}]:[],{type:"div",classNames:["mynah-chat-item-tree-view-file-item-title",n.deleted===!0?"mynah-chat-item-tree-view-file-item-deleted":""],children:[{type:"span",children:[n.fileName]}]},{type:"div",classNames:["mynah-chat-item-tree-view-file-item-details"],children:n.details!=null?[...n.details.icon!==void 0?[new i.Icon({icon:n.details.icon}).render]:[],...n.details.label!==void 0?[{type:"span",classNames:["mynah-chat-item-tree-view-file-item-details-text"],children:[n.details.label]}]:[]]:[]},...n.actions!==void 0?[{type:"div",classNames:["mynah-chat-item-tree-view-file-item-actions"],children:n.actions.map(w=>{var u,y;return new d.Button({icon:new i.Icon({icon:w.icon}).render,...w.label!==void 0?{label:w.label}:{},attributes:{title:(u=w.description)!==null&&u!==void 0?u:""},classNames:["mynah-icon-button",(y=w.status)!==null&&y!==void 0?y:""],primary:!1,onClick:r=>{(0,A.cancelEvent)(r),this.hideTooltip(),A.MynahUIGlobalEvents.getInstance().dispatch(a.MynahEventNames.FILE_ACTION_CLICK,{tabId:n.tabId,messageId:n.messageId,filePath:n.originalFilePath,actionName:w.name})}}).render})}]:[]]})}}},2932:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemTreeViewLicense=void 0;const l=e(9456),c=e(4769),A=e(7853),a=e(8029);t.ChatItemTreeViewLicense=class{constructor(d){this.buildDropdownChildren=m=>c.DomBuilder.getInstance().build({type:"ul",classNames:["mynah-chat-item-tree-view-license-container"],children:m.map(s=>({type:"li",children:[new A.CardBody({body:s.information}).render]}))}),d.references.length!==0?this.render=new a.CollapsibleContent({title:l.Config.getInstance().config.texts.codeSuggestionWithReferenceTitle,classNames:["mynah-chat-item-tree-view-license"],children:[this.buildDropdownChildren(d.references)]}).render:this.render=c.DomBuilder.getInstance().build({type:"span",classNames:["empty"]})}}},4221:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemTreeViewWrapper=void 0;const l=e(9456),c=e(4769),A=e(7831),a=e(9275),d=e(2336),m=e(4469),s=e(2932);t.ChatItemTreeViewWrapper=class{constructor(i){var o,n,h,g,f,C;const w=new s.ChatItemTreeViewLicense({referenceSuggestionLabel:i.referenceSuggestionLabel,references:i.references}).render,u=i.files.length===1&&i.rootTitle==null?new d.ChatItemTreeFile({filePath:i.files[0],fileName:i.files[0],originalFilePath:i.files[0],tabId:i.tabId,messageId:i.messageId,deleted:i.deletedFiles.includes(i.files[0]),details:i.details!=null?i.details[i.files[0]]:void 0,actions:i.actions!=null?i.actions[i.files[0]]:void 0,icon:a.MynahIcons.PAPER_CLIP}).render:new m.ChatItemTreeView({messageId:i.messageId,tabId:i.tabId,node:(0,A.fileListToTree)(i.files,i.deletedFiles,i.actions,i.details,i.rootTitle)}).render;this.render=c.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-tree-view-wrapper",...(o=i.classNames)!==null&&o!==void 0?o:[]],children:[{type:"div",classNames:["mynah-chat-item-tree-view-wrapper-container"],children:[...i.cardTitle!==""?[{type:"div",classNames:["mynah-chat-item-tree-view-wrapper-title"],children:[{type:"h4",children:[`${(n=i.cardTitle)!==null&&n!==void 0?n:l.Config.getInstance().config.texts.codeSuggestions}`]},{type:"span",children:[`${((g=(h=i.files)===null||h===void 0?void 0:h.length)!==null&&g!==void 0?g:0)+((C=(f=i.deletedFiles)===null||f===void 0?void 0:f.length)!==null&&C!==void 0?C:0)} ${l.Config.getInstance().config.texts.files}`]}]}]:[],w,u]}]})}}},4469:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemTreeView=void 0;const l=e(9456),c=e(4769),A=e(4601),a=e(1407),d=e(9275),m=e(2336);class s{constructor(o){var n;this.node=o.node,this.tabId=o.tabId,this.messageId=o.messageId,this.isOpen=!0,this.depth=(n=o.depth)!==null&&n!==void 0?n:0,this.render=c.DomBuilder.getInstance().build({type:"div",classNames:this.getClassNames(),children:[...this.node.type==="folder"?this.buildFolderNode():this.buildFileNode()]})}getClassNames(){return["mynah-chat-item-tree-view",this.node.type==="file"?"mynah-chat-tree-view-file":"mynah-chat-tree-view-folder-"+(this.isOpen?"open":"closed")]}updateTree(){this.render.update({classNames:this.getClassNames(),children:[...this.node.type==="folder"?this.buildFolderNode():this.buildFileNode()]})}buildFolderChildren(){return this.node.type!=="folder"?[]:this.isOpen?this.node.children.map(o=>c.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-pull-request-item"],children:[new s({node:o,depth:this.depth+1,tabId:this.tabId,messageId:this.messageId}).render]})):[]}buildFolderNode(){return this.node.type!=="folder"?[]:[new a.Button({icon:new d.Icon({icon:this.isOpen?d.MynahIcons.DOWN_OPEN:d.MynahIcons.RIGHT_OPEN}).render,classNames:["mynah-chat-item-tree-view-button"],label:c.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-tree-view-button-title"],children:[{type:"span",children:[this.node.name]},{type:"span",classNames:["mynah-chat-item-tree-view-button-weak-title"],children:[`${this.node.children.length} ${l.Config.getInstance().config.texts.files}`]}]}),primary:!1,onClick:o=>{(0,A.cancelEvent)(o),this.isOpen=!this.isOpen,this.updateTree()}}).render,...this.buildFolderChildren()]}buildFileNode(){return this.node.type!=="file"?[]:[new m.ChatItemTreeFile({fileName:this.node.name,filePath:this.node.filePath,originalFilePath:this.node.originalFilePath,tabId:this.tabId,messageId:this.messageId,details:this.node.details,deleted:this.node.deleted,actions:this.node.actions}).render]}}t.ChatItemTreeView=s},2990:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatPromptInputCommand=void 0;const l=e(4769);t.ChatPromptInputCommand=class{constructor(c){this.setCommand=A=>{A.trim()===""?this.render.addClass("hidden"):this.render.removeClass("hidden"),this.promptTextInputCommand.innerText=A},this.props=c,this.promptTextInputCommand=l.DomBuilder.getInstance().build({type:"span",classNames:["mynah-chat-prompt-input-command-text"],events:{click:this.props.onRemoveClick}}),this.render=l.DomBuilder.getInstance().build({type:"span",classNames:["mynah-chat-prompt-input-command-wrapper",this.props.command===""?"hidden":""],children:[this.promptTextInputCommand]})}}},6200:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatPromptInputInfo=void 0;const l=e(970),c=e(4769),A=e(6508),a=e(7853),d=e(4601),m=e(7609);t.ChatPromptInputInfo=class{constructor(s){var i,o;this.linkClick=(n,h)=>{d.MynahUIGlobalEvents.getInstance().dispatch(m.MynahEventNames.INFO_LINK_CLICK,{link:n,event:h})},l.marked.use({extensions:[{name:"text",renderer:n=>n.text}]}),A.MynahUITabsStore.getInstance().addListenerToDataStore(s.tabId,"promptInputInfo",n=>{var h,g;this.render.update({children:[new a.CardBody({onLinkClick:this.linkClick,body:(g=(h=A.MynahUITabsStore.getInstance().getTabDataStore(s.tabId))===null||h===void 0?void 0:h.getValue("promptInputInfo"))!==null&&g!==void 0?g:""}).render]})}),this.render=c.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-prompt-input-info"],children:[new a.CardBody({onLinkClick:this.linkClick,body:(o=(i=A.MynahUITabsStore.getInstance().getTabDataStore(s.tabId))===null||i===void 0?void 0:i.getValue("promptInputInfo"))!==null&&o!==void 0?o:""}).render]})}}},270:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatPromptInputStickyCard=void 0;const l=e(4769),c=e(6508),A=e(7609),a=e(8892);t.ChatPromptInputStickyCard=class{constructor(d){var m,s;c.MynahUITabsStore.getInstance().addListenerToDataStore(d.tabId,"promptInputStickyCard",o=>{var n;o===null?this.render.clear():this.render.update({children:[new a.ChatItemCard({chatItem:{...o,messageId:(n=o.messageId)!==null&&n!==void 0?n:"sticky-card",type:A.ChatItemType.ANSWER},tabId:d.tabId}).render]})});const i=(m=c.MynahUITabsStore.getInstance().getTabDataStore(d.tabId))===null||m===void 0?void 0:m.getValue("promptInputStickyCard");this.render=l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-prompt-input-sticky-card"],children:i!==null?[new a.ChatItemCard({chatItem:{...i,messageId:(s=i.messageId)!==null&&s!==void 0?s:"sticky-card",type:A.ChatItemType.ANSWER},tabId:d.tabId}).render]:[]})}}},967:function(v,t,e){"use strict";var l=this&&this.__importDefault||function(f){return f&&f.__esModule?f:{default:f}};Object.defineProperty(t,"__esModule",{value:!0}),t.ChatPromptInput=t.MAX_USER_INPUT=t.MAX_USER_INPUT_THRESHOLD=void 0;const c=e(4769),A=e(7609),a=e(4601),d=e(4083),m=e(6508),s=l(e(5573)),i=e(2990),o=e(9585),n=e(3296),h=e(9123),g=e(9456);t.MAX_USER_INPUT_THRESHOLD=96,t.MAX_USER_INPUT=()=>g.Config.getInstance().config.maxUserInput-t.MAX_USER_INPUT_THRESHOLD,t.ChatPromptInput=class{constructor(f){this.quickPickOpen=!1,this.selectedCommand="",this.updateAvailableCharactersIndicator=()=>{const C=this.promptTextInput.promptTextInputMaxLength-this.promptTextInput.getTextInputValue().trim().length;this.remainingCharsIndicator.update({innerHTML:`${Math.max(0,C)}/${(0,t.MAX_USER_INPUT)()}`})},this.handleInputKeydown=C=>{var w,u,y,r,p,b;if(this.quickPickOpen){const x=[A.KeyMap.ENTER,A.KeyMap.ESCAPE,A.KeyMap.SPACE,A.KeyMap.TAB,A.KeyMap.AT,A.KeyMap.BACK_SLASH,A.KeyMap.SLASH],I=[A.KeyMap.ARROW_UP,A.KeyMap.ARROW_DOWN];if(x.includes(C.key)){if(C.preventDefault(),C.key===A.KeyMap.ESCAPE)this.quickPickType==="quick-action"?this.clearTextArea(!0):(this.promptTextInput.updateTextInputValue(`${this.promptTextInput.getTextInputValue().substring(0,this.quickPickTriggerIndex)}${this.textAfter}`),this.promptTextInput.focus(this.quickPickTriggerIndex)),(w=this.quickPick)===null||w===void 0||w.close();else if(C.key===A.KeyMap.ENTER||C.key===A.KeyMap.TAB||C.key===A.KeyMap.SPACE){let M;this.filteredQuickPickItemGroups.length>0&&(this.quickPick.render.querySelector(".target-command")!=null?M=this.quickPick.render.querySelector(".target-command"):((u=this.quickPick.render.querySelector(".mynah-chat-command-selector-command"))===null||u===void 0?void 0:u.getAttribute("disabled"))!=="true"&&(M=this.quickPick.render.querySelector(".mynah-chat-command-selector-command")));const T={command:(y=M?.getAttribute("command"))!==null&&y!==void 0?y:"",placeholder:(r=M?.getAttribute("placeholder"))!==null&&r!==void 0?r:void 0};this.quickPickType==="context"?this.handleContextCommandSelection(T):this.handleQuickActionCommandSelection(T)}}else if(I.includes(C.key)){C.preventDefault(),this.quickPick.render.querySelector(".mynah-chat-command-selector").addClass("has-target-item");const M=Array.from(this.quickPick.render.querySelectorAll(".mynah-chat-command-selector-command"));let T=M.findIndex(O=>O.classList.contains("target-command"));T=T===-1?M.length:T;let z=T;if(M.length===((p=M.filter(O=>O.getAttribute("disabled")==="true"))===null||p===void 0?void 0:p.length))z=-1;else{let O=!1;for(;!O;)C.key===A.KeyMap.ARROW_UP?z>0?z-=1:z=M.length-1:z<M.length-1?z+=1:z=0,M[z].getAttribute("disabled")!=="true"&&(O=!0)}z!==-1&&((b=M[T])===null||b===void 0||b.classList.remove("target-command"),M[z].classList.add("target-command"),M[z].getAttribute("prompt")!==null&&this.promptTextInput.updateTextInputValue(M[z].getAttribute("prompt")))}else this.quickPick!=null&&setTimeout(()=>{this.promptTextInput.getTextInputValue()===""?this.quickPick.close():(this.filteredQuickPickItemGroups=[],[...this.quickPickItemGroups].forEach(M=>{var T;const z={...M};try{const O=(T=this.promptTextInput.getTextInputValue().substring(this.quickPickTriggerIndex).match(/\S*/gi))===null||T===void 0?void 0:T[0],P=new RegExp(O??"","gi");z.commands=z.commands.filter(L=>L.command.match(P)),z.commands.length>0&&this.filteredQuickPickItemGroups.push(z)}catch{}}),this.filteredQuickPickItemGroups.length>0?(this.quickPick.toggleHidden(!1),this.quickPick.updateContent([this.getQuickPickItemGroups(this.filteredQuickPickItemGroups)])):this.quickPick.toggleHidden(!0))},1)}else if(C.key===A.KeyMap.BACKSPACE||C.key===A.KeyMap.DELETE)if(this.selectedCommand!==""&&this.promptTextInput.getTextInputValue()==="")(0,a.cancelEvent)(C),this.clearTextArea(!0);else{const x=this.promptTextInput.getWordAndIndexOnCursorPos();if(x.word.charAt(0)===A.KeyMap.AT){(0,a.cancelEvent)(C);const I=this.promptTextInput.getTextInputValue();this.promptTextInput.updateTextInputValue(I.substring(0,x.wordStartIndex)+I.substring(x.wordStartIndex+x.word.length)),this.promptTextInput.focus(x.wordStartIndex)}}else C.key===A.KeyMap.ENTER&&(!C.isComposing&&!C.shiftKey&&!C.ctrlKey||C.isComposing&&C.shiftKey)?((0,a.cancelEvent)(C),this.sendPrompt()):(this.selectedCommand===""&&C.key===A.KeyMap.SLASH&&this.promptTextInput.getTextInputValue()===""||C.key===A.KeyMap.AT)&&(this.quickPickType=C.key===A.KeyMap.AT?"context":"quick-action",this.quickPickItemGroups=m.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue(this.quickPickType==="context"?"contextCommands":"quickActionCommands"),this.quickPickTriggerIndex=this.quickPickType==="context"?this.promptTextInput.getCursorPos():1,this.textAfter=this.promptTextInput.getTextInputValue().substring(this.quickPickTriggerIndex),this.quickPickItemGroups.length>0&&(this.filteredQuickPickItemGroups=[...this.quickPickItemGroups],this.quickPick=new d.Overlay({closeOnOutsideClick:!0,referenceElement:this.render.querySelector(".mynah-chat-prompt"),dimOutside:!1,stretchWidth:!0,verticalDirection:d.OverlayVerticalDirection.TO_TOP,horizontalDirection:d.OverlayHorizontalDirection.START_TO_RIGHT,onClose:()=>{this.quickPickOpen=!1},children:[this.getQuickPickItemGroups(this.filteredQuickPickItemGroups)]}),this.quickPickOpen=!0))},this.getQuickPickItemGroups=C=>c.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-command-selector"],children:C.map(w=>c.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-command-selector-group"],children:[...w.groupName!==void 0?[c.DomBuilder.getInstance().build({type:"h4",classNames:["mynah-chat-command-selector-group-title"],children:[w.groupName]})]:[],...w.commands.map(u=>c.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-command-selector-command"],attributes:{...u},events:{click:()=>{u.disabled!==!0&&(this.quickPickType==="context"?this.handleContextCommandSelection(u):this.handleQuickActionCommandSelection(u))}},children:[{type:"div",classNames:["mynah-chat-command-selector-command-name"],children:[u.command]},...u.description!==void 0?[{type:"div",classNames:["mynah-chat-command-selector-command-description"],children:[u.description]}]:[]]}))]}))}),this.handleQuickActionCommandSelection=C=>{this.selectedCommand=C.command,this.promptTextInput.updateTextInputValue(""),C.placeholder!==void 0?(this.promptTextInputCommand.setCommand(this.selectedCommand),this.promptTextInput.updateTextInputPlaceholder(C.placeholder)):this.sendPrompt(),this.quickPick.close(),g.Config.getInstance().config.autoFocus&&this.promptTextInput.focus()},this.handleContextCommandSelection=C=>{const w=this.promptTextInput.getTextInputValue().substring(0,this.quickPickTriggerIndex);this.promptTextInput.updateTextInputValue(`${w}${C.command} ${this.textAfter}`,{index:this.quickPickTriggerIndex+C.command.length,text:C.placeholder}),this.quickPick.close(),this.promptTextInput.focus(this.quickPickTriggerIndex+C.command.length+1)},this.clearTextArea=C=>{this.selectedCommand="",this.promptTextInput.clear(),this.promptTextInput.updateTextInputMaxLength((0,t.MAX_USER_INPUT)()),this.promptTextInputCommand.setCommand(""),C!==!0&&(this.attachmentWrapper.clear(),this.promptAttachment.clear()),this.updateAvailableCharactersIndicator()},this.addAttachment=(C,w)=>{a.MynahUIGlobalEvents.getInstance().dispatch(A.MynahEventNames.ADD_ATTACHMENT,{textToAdd:C,tabId:this.props.tabId,type:w})},this.sendPrompt=()=>{var C;const w=this.promptTextInput.getTextInputValue();if(w.trim()!==""||this.selectedCommand.trim()!==""){const u=(C=this.promptAttachment)===null||C===void 0?void 0:C.lastAttachmentContent,y=w+(u??""),r=[],p=(0,s.default)(y.replace(/@\S*/gi,x=>(r.includes(x)||r.push(x),`**${x}**`))),b={tabId:this.props.tabId,prompt:{prompt:y,escapedPrompt:p,context:r,...this.selectedCommand!==""?{command:this.selectedCommand}:{}}};this.clearTextArea(),a.MynahUIGlobalEvents.getInstance().dispatch(A.MynahEventNames.CHAT_PROMPT,b)}},this.props=f,this.promptTextInputCommand=new i.ChatPromptInputCommand({command:"",onRemoveClick:()=>{this.selectedCommand="",this.promptTextInputCommand.setCommand("")}}),this.promptTextInput=new h.PromptTextInput({initMaxLength:(0,t.MAX_USER_INPUT)(),tabId:this.props.tabId,onKeydown:this.handleInputKeydown,onInput:()=>this.updateAvailableCharactersIndicator()}),this.remainingCharsIndicator=c.DomBuilder.getInstance().build({type:"span",classNames:["mynah-chat-prompt-chars-indicator"],innerHTML:`${(0,t.MAX_USER_INPUT)()-this.promptTextInput.getTextInputValue().length}/${(0,t.MAX_USER_INPUT)()}`}),this.sendButton=new n.SendButton({tabId:this.props.tabId,onClick:()=>{this.sendPrompt()}}),this.promptAttachment=new o.PromptAttachment({tabId:this.props.tabId}),this.attachmentWrapper=c.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-prompt-attachment-wrapper"],children:[this.promptAttachment.render]}),this.render=c.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-prompt-wrapper"],children:[{type:"div",classNames:["mynah-chat-prompt"],children:[{type:"div",classNames:["mynah-chat-prompt-input-wrapper"],children:[this.promptTextInputCommand.render,this.promptTextInput.render,this.sendButton.render]},this.attachmentWrapper]},this.remainingCharsIndicator]}),a.MynahUIGlobalEvents.getInstance().addListener(A.MynahEventNames.ADD_ATTACHMENT,C=>{var w,u;if(this.props.tabId===C.tabId){const y=this.promptTextInput.getTextInputValue().trim().length,r=(0,t.MAX_USER_INPUT)()+t.MAX_USER_INPUT_THRESHOLD-y,p=(u=(w=C.textToAdd)!==null&&w!==void 0?w:"")===null||u===void 0?void 0:u.slice(0,r);this.promptAttachment.updateAttachment(p,C.type),this.promptTextInput.updateTextInputMaxLength(Math.min((0,t.MAX_USER_INPUT)(),Math.max(t.MAX_USER_INPUT_THRESHOLD,(0,t.MAX_USER_INPUT)()+t.MAX_USER_INPUT_THRESHOLD-p.length))),this.updateAvailableCharactersIndicator(),setTimeout(()=>{this.promptTextInput.focus()},100)}}),a.MynahUIGlobalEvents.getInstance().addListener(A.MynahEventNames.REMOVE_ATTACHMENT,()=>{this.promptTextInput.updateTextInputMaxLength((0,t.MAX_USER_INPUT)()),this.promptAttachment.clear(),this.updateAvailableCharactersIndicator()}),this.promptTextInput.focus()}}},8347:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatWrapper=t.CONTAINER_GAP=void 0;const l=e(6855),c=e(9456),A=e(4769),a=e(7019),d=e(6508),m=e(7609),s=e(1407),i=e(9275),o=e(8892),n=e(967),h=e(6200),g=e(270);e(395),t.CONTAINER_GAP=12,t.ChatWrapper=class{constructor(f){var C;this.allRenderedChatItems={},this.insertChatItem=u=>{var y,r;const p=u.messageId!=null&&u.messageId!==""?u.messageId:`TEMP_${(0,a.generateUID)()}`,b=new o.ChatItemCard({tabId:this.props.tabId,chatItem:{...u,messageId:p}});u.type===m.ChatItemType.ANSWER_STREAM?((y=this.lastStreamingChatItemCard)===null||y===void 0||y.render.addClass("stream-ended"),this.lastStreamingChatItemMessageId=p,this.lastStreamingChatItemCard=b):u.type!==m.ChatItemType.ANSWER&&u.type!==m.ChatItemType.ANSWER_PART&&(0,l.chatItemHasContent)(u)&&((r=this.lastStreamingChatItemCard)===null||r===void 0||r.render.addClass("stream-ended"),this.lastStreamingChatItemCard=null,this.lastStreamingChatItemMessageId=null),this.chatItemsContainer.insertChild("afterbegin",b.render),this.allRenderedChatItems[p]=b,u.type!==m.ChatItemType.PROMPT&&u.type!==m.ChatItemType.SYSTEM_PROMPT||(this.chatItemsContainer.scrollTop=this.chatItemsContainer.scrollHeight+500)},this.checkLastAnswerStreamChange=u=>{u.type!==void 0&&u.type!==null&&u.type!==m.ChatItemType.ANSWER_STREAM&&u.type!==m.ChatItemType.ANSWER_PART&&(this.lastStreamingChatItemCard=null,this.lastStreamingChatItemMessageId=null)},this.updateLastChatAnswer=u=>{if(this.lastStreamingChatItemCard!==null){if(this.lastStreamingChatItemCard.updateCardStack(u),u.messageId!=null&&u.messageId!==""){if(this.lastStreamingChatItemMessageId!=null&&this.lastStreamingChatItemMessageId!==u.messageId){const y=this.allRenderedChatItems[this.lastStreamingChatItemMessageId];y!=null&&(this.allRenderedChatItems[u.messageId]=y,this.lastStreamingChatItemMessageId!=null&&delete this.allRenderedChatItems[this.lastStreamingChatItemMessageId])}this.lastStreamingChatItemMessageId=u.messageId}this.checkLastAnswerStreamChange(u)}},this.getChatItem=u=>{var y;if(((y=this.allRenderedChatItems[u])===null||y===void 0?void 0:y.render)!==void 0)return{chatItem:this.allRenderedChatItems[u].props.chatItem,render:this.allRenderedChatItems[u].render,renderDetails:this.allRenderedChatItems[u].getRenderDetails()}},this.endStreamWithMessageId=(u,y)=>{var r;((r=this.allRenderedChatItems[u])===null||r===void 0?void 0:r.render)!==void 0&&(this.allRenderedChatItems[u].render.addClass("stream-ended"),this.updateChatAnswerWithMessageId(u,y),this.lastStreamingChatItemMessageId===u&&(this.lastStreamingChatItemCard=null,this.lastStreamingChatItemMessageId=null))},this.updateChatAnswerWithMessageId=(u,y)=>{var r;((r=this.allRenderedChatItems[u])===null||r===void 0?void 0:r.render)!==void 0&&(this.allRenderedChatItems[u].updateCardStack(y),this.lastStreamingChatItemMessageId===u&&this.checkLastAnswerStreamChange(y))},this.addAttachmentToPrompt=(u,y)=>{this.promptInput.addAttachment(u,y)},this.props=f,d.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).subscribe("chatItems",u=>{const y=u[u.length-1];if(this.chatItemsContainer.children.length===u.length){const r=this.chatItemsContainer.children.item(0);if(r!==null){const p=new o.ChatItemCard({tabId:this.props.tabId,chatItem:y});y.messageId!==void 0&&(this.allRenderedChatItems[y.messageId]=p),r.innerHTML=p.render.innerHTML}}else u.length>0?this.chatItemsContainer.children.length===0?u.forEach(r=>{this.insertChatItem(r)}):this.insertChatItem(y):(this.chatItemsContainer.clear(!0),this.allRenderedChatItems={})}),d.MynahUITabsStore.getInstance().addListenerToDataStore(this.props.tabId,"loadingChat",u=>{u?this.render.addClass("loading"):this.render.removeClass("loading")}),d.MynahUITabsStore.getInstance().addListenerToDataStore(this.props.tabId,"cancelButtonWhenLoading",u=>{u?this.intermediateBlockContainer.removeClass("hidden"):this.intermediateBlockContainer.addClass("hidden")}),this.chatItemsContainer=A.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-items-container"],persistent:!0,children:[]}),this.promptInfo=new h.ChatPromptInputInfo({tabId:this.props.tabId}).render,this.promptStickyCard=new g.ChatPromptInputStickyCard({tabId:this.props.tabId}).render,this.intermediateBlockContainer=A.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-overflowing-intermediate-block",...d.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("cancelButtonWhenLoading")===!1?["hidden"]:[]],children:[...((C=this.props)===null||C===void 0?void 0:C.onStopChatResponse)!==void 0?[new s.Button({classNames:["mynah-chat-stop-chat-response-button"],label:c.Config.getInstance().config.texts.stopGenerating,icon:new i.Icon({icon:i.MynahIcons.CANCEL}).render,onClick:()=>{var u,y;((u=this.props)===null||u===void 0?void 0:u.onStopChatResponse)!==void 0&&((y=this.props)===null||y===void 0||y.onStopChatResponse(this.props.tabId))}}).render]:[]]}),c.Config.getInstance().config.showPromptField&&(this.promptInput=new n.ChatPromptInput({tabId:this.props.tabId}),this.promptInputElement=this.promptInput.render),this.render=A.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-wrapper"],attributes:{"mynah-tab-id":this.props.tabId},persistent:!0,children:[{type:"style",children:[`
          .mynah-nav-tabs-wrapper[selected-tab="${this.props.tabId}"] ~ .mynah-ui-tab-contents-wrapper > .mynah-chat-wrapper[mynah-tab-id="${this.props.tabId}"]{
              display: flex;
            }
            .mynah-nav-tabs-wrapper[selected-tab="${this.props.tabId}"] ~ .mynah-ui-tab-contents-wrapper > .mynah-chat-wrapper:not([mynah-tab-id="${this.props.tabId}"]) * {
              pointer-events: none !important;
            }`]},this.chatItemsContainer,this.intermediateBlockContainer,this.promptStickyCard,this.promptInputElement,this.promptInfo]});const w=d.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("chatItems");w.length>0&&w.forEach(u=>this.insertChatItem(u))}}},9585:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PromptAttachment=void 0;const l=e(4769),c=e(6508),A=e(65);t.PromptAttachment=class{constructor(a){this.lastAttachmentContent="",this.updateAttachment=(d,m)=>{var s,i,o,n,h,g,f;this.attachmentItem!==void 0&&this.attachmentItem.clear(),this.render.clear(),this.lastAttachmentContent=d!=null?m==="code"?`
~~~~~~~~~~
${d}
~~~~~~~~~~`:`
${d}
`:"",d!==void 0&&d!==""&&(this.attachmentItem=new A.PromptTextAttachment({tabId:this.props.tabId,content:d,type:m??"markdown"}),this.render.insertChild("afterbegin",this.attachmentItem.render),((i=(s=this.render.getBoundingClientRect())===null||s===void 0?void 0:s.height)!==null&&i!==void 0?i:0)<((g=(h=(n=(o=this.render.getElementsByTagName("code"))===null||o===void 0?void 0:o[0])===null||n===void 0?void 0:n.getBoundingClientRect())===null||h===void 0?void 0:h.height)!==null&&g!==void 0?g:0)&&this.render.children[0].classList.add("vertical-overflow")),(f=c.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId))===null||f===void 0||f.updateStore({selectedCodeSnippet:d})},this.clear=()=>{var d;this.lastAttachmentContent="",this.attachmentItem!==void 0&&this.attachmentItem.clear(),this.attachmentItem=void 0,this.render.clear(),(d=c.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId))===null||d===void 0||d.updateStore({selectedCodeSnippet:void 0})},this.props=a,this.render=l.DomBuilder.getInstance().build({type:"div",classNames:["outer-container"],persistent:!0})}}},65:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PromptTextAttachment=void 0;const l=e(4083),c=e(9275),A=e(1407),a=e(4601),d=e(7609),m=e(4977),s=e(7853),i=e(8990);t.PromptTextAttachment=class{constructor(o){this.showPreviewOverLay=()=>{this.previewOverlay=new l.Overlay({background:!0,closeOnOutsideClick:!1,referenceElement:this.render,dimOutside:!1,removeOtherOverlays:!0,verticalDirection:l.OverlayVerticalDirection.TO_TOP,horizontalDirection:l.OverlayHorizontalDirection.START_TO_RIGHT,children:[new m.Card({border:!1,classNames:["mynah-prompt-input-snippet-attachment-overlay"],children:[new s.CardBody({...this.props.type==="markdown"?{body:this.props.content}:{children:[new i.SyntaxHighlighter({block:!0,codeStringWithMarkup:this.props.content,showCopyOptions:!1}).render]}}).render]}).render]})},this.closePreviewOverLay=()=>{this.previewOverlay!==void 0&&(this.previewOverlay.close(),this.previewOverlay=void 0)},this.clear=()=>{this.closePreviewOverLay()},this.props=o,this.render=new m.Card({padding:"none",border:!1,events:{mouseenter:()=>{this.showPreviewOverLay()},mouseleave:()=>{this.closePreviewOverLay()}},classNames:["mynah-prompt-attachment-container"],children:[new s.CardBody({...this.props.type==="markdown"?{body:this.props.content}:{children:[new i.SyntaxHighlighter({block:!0,codeStringWithMarkup:this.props.content,showCopyOptions:!1}).render]}}).render,new A.Button({classNames:["code-snippet-close-button"],onClick:n=>{(0,a.cancelEvent)(n),a.MynahUIGlobalEvents.getInstance().dispatch(d.MynahEventNames.REMOVE_ATTACHMENT,this.props.tabId),this.closePreviewOverLay()},icon:new c.Icon({icon:c.MynahIcons.CANCEL}).render,primary:!1}).render]}).render}}},9123:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PromptTextInput=void 0;const l=e(9456),c=e(4769),A=e(4601),a=e(6508),d=e(7609),m=e(967);t.PromptTextInput=class{constructor(s){this.keydownSupport=!0,this.updatePromptTextInputSizer=o=>{var n,h;this.promptTextInput.value.trim()!==""?this.render.removeClass("no-text"):this.render.addClass("no-text");let g=this.promptTextInput.value;o?.text!=null&&(g=`${g.substring(0,(n=o.index)!==null&&n!==void 0?n:g.length)} <span class="placeholder">${o.text}</span> ${g.substring(((h=o.index)!==null&&h!==void 0?h:g.length)+1)}`),this.promptTextInputSizer.innerHTML=`${g.replace(/\n/g,"<br>").replace(/@\S*/gi,f=>`<span class="context">${f}</span>`)}&nbsp`},this.getCursorPos=()=>{var o;return(o=this.promptTextInput.selectionStart)!==null&&o!==void 0?o:this.promptTextInput.value.length},this.getWordAndIndexOnCursorPos=()=>{const o=this.promptTextInput.value,n=this.getCursorPos();let h=-1,g=o.indexOf(" ",n);for(let f=n-1;f>=0;f--)if(o[f]===" "){h=f;break}return g===-1&&(g=o.length),{wordStartIndex:h+1,word:o.substring(h+1,g)}},this.clear=()=>{this.promptTextInputSizer.innerHTML="",this.updateTextInputValue("");const o=a.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("promptInputPlaceholder");this.updateTextInputPlaceholder(o),this.render.addClass("no-text")},this.focus=o=>{l.Config.getInstance().config.autoFocus&&this.promptTextInput.focus(),o!=null?this.promptTextInput.setSelectionRange(o,o):this.updateTextInputValue("")},this.getTextInputValue=()=>this.promptTextInput.value,this.updateTextInputValue=(o,n)=>{this.promptTextInput.value=o,this.updatePromptTextInputSizer(n)},this.updateTextInputMaxLength=o=>{this.promptTextInputMaxLength=o,this.promptTextInput.update({attributes:{maxlength:o.toString()}})},this.updateTextInputPlaceholder=o=>{this.promptTextInput.update({attributes:{placeholder:o}})},this.props=s,this.promptTextInputMaxLength=s.initMaxLength;const i=a.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("promptInputDisabledState");this.promptTextInputSizer=c.DomBuilder.getInstance().build({type:"span",classNames:["mynah-chat-prompt-input","mynah-chat-prompt-input-sizer"]}),this.promptTextInput=c.DomBuilder.getInstance().build({type:"textarea",classNames:["mynah-chat-prompt-input"],attributes:{...i?{disabled:"disabled"}:{},tabindex:"1",rows:"1",maxlength:(0,m.MAX_USER_INPUT)().toString(),type:"text",placeholder:a.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("promptInputPlaceholder"),value:"",...l.Config.getInstance().config.autoFocus?{autofocus:"autofocus"}:{}},events:{keypress:o=>{this.keydownSupport||this.props.onKeydown(o)},keydown:o=>{o.key!==""?(this.keydownSupport=!0,this.props.onKeydown(o)):this.keydownSupport=!1},input:o=>{this.updatePromptTextInputSizer(),this.props.onInput!==void 0&&this.props.onInput(o)},focus:()=>{this.render.addClass("input-has-focus")},blur:()=>{this.render.removeClass("input-has-focus")}}}),this.render=c.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-prompt-input-inner-wrapper","no-text"],children:[this.promptTextInputSizer,this.promptTextInput]}),a.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).subscribe("promptInputDisabledState",o=>{o?this.promptTextInput.setAttribute("disabled","disabled"):(this.promptTextInput.removeAttribute("disabled"),l.Config.getInstance().config.autoFocus&&this.promptTextInput.focus())}),a.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).subscribe("promptInputPlaceholder",o=>{o!==void 0&&this.promptTextInput.update({attributes:{placeholder:o}})}),A.MynahUIGlobalEvents.getInstance().addListener(d.MynahEventNames.TAB_FOCUS,o=>{o.tabId===this.props.tabId&&this.promptTextInput.focus()})}}},3296:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SendButton=void 0;const l=e(6508),c=e(1407),A=e(9275);t.SendButton=class{constructor(a){this.props=a;const d=l.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("promptInputDisabledState");this.render=new c.Button({classNames:["mynah-icon-button","mynah-chat-prompt-button"],attributes:{...d?{disabled:"disabled"}:{},tabindex:"5"},icon:new A.Icon({icon:A.MynahIcons.ENVELOPE_SEND}).render,primary:!1,onClick:()=>{this.props.onClick()}}).render,l.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).subscribe("promptInputDisabledState",m=>{m?this.render.setAttribute("disabled","disabled"):this.render.removeAttribute("disabled")})}}},8029:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CollapsibleContent=void 0;const l=e(4769),c=e(7019),A=e(9275);e(8415),t.CollapsibleContent=class{constructor(a){this.uid=(0,c.generateUID)(),this.props={initialCollapsedState:!0,onCollapseStateChange:()=>{},classNames:[],...a},this.icon=new A.Icon({icon:this.props.initialCollapsedState?A.MynahIcons.RIGHT_OPEN:A.MynahIcons.DOWN_OPEN}).render,this.render=l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-collapsible-content-wrapper",...this.props.classNames],children:[{type:"input",classNames:["mynah-collapsible-content-checkbox"],attributes:{type:"checkbox",name:this.uid,id:this.uid,...this.props.initialCollapsedState?{checked:"checked"}:{}},events:{change:d=>{const m=d.currentTarget.checked,s=new A.Icon({icon:m===!0?A.MynahIcons.RIGHT_OPEN:A.MynahIcons.DOWN_OPEN}).render;this.icon.replaceWith(s),this.icon=s,this.props.onCollapseStateChange(m)}}},{type:"label",classNames:["mynah-collapsible-content-label"],attributes:{for:this.uid},children:[{type:"div",classNames:["mynah-collapsible-content-label-title-wrapper"],children:[this.icon,{type:"span",classNames:["mynah-collapsible-content-label-title-text"],children:[this.props.title]}]},{type:"div",classNames:["mynah-collapsible-content-label-content-wrapper"],children:this.props.children}]}]})}}},7059:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CustomFormWrapper=void 0;const l=e(4769),c=e(4601),A=e(6508),a=e(7609),d=e(6765),m=e(2922),s=e(7853),i=e(1407),o=e(9275);t.CustomFormWrapper=class{constructor(n){this.chatFormItems=null,this.chatButtons=null,this.getFormItems=()=>A.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId)===void 0?[]:(this.chatFormItems!==null&&(this.chatFormItems.render.remove(),this.chatFormItems=null),this.props.chatItem.formItems!==void 0&&(this.chatFormItems=new d.ChatItemFormItemsWrapper({tabId:this.props.tabId,chatItem:this.props.chatItem})),this.chatButtons!==null&&(this.chatButtons.render.remove(),this.chatButtons=null),this.props.chatItem.buttons!==void 0&&(this.chatButtons=new m.ChatItemButtonsWrapper({tabId:this.props.tabId,formItems:this.chatFormItems,buttons:this.props.chatItem.buttons,onActionClick:(h,g)=>{g!==void 0&&(0,c.cancelEvent)(g),c.MynahUIGlobalEvents.getInstance().dispatch(a.MynahEventNames.CUSTOM_FORM_ACTION_CLICK,{tabId:this.props.tabId,id:h.id,text:h.text,...this.chatFormItems!==null?{formItemValues:this.chatFormItems.getAllValues()}:{}}),this.props.onFormAction!==void 0&&(this.props.onFormAction(h.id,this.chatFormItems!==null?this.chatFormItems.getAllValues():{}),this.render.remove())}})),[...this.chatFormItems!==null?[this.chatFormItems.render]:[],...this.chatButtons!==null?[this.chatButtons.render]:[]]),this.props=n,this.render=l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-feedback-form"],events:{click:c.cancelEvent},children:[{type:"div",classNames:["mynah-feedback-form-header"],children:[...this.props.title!==void 0?[{type:"h4",children:[this.props.title]}]:[],new i.Button({primary:!1,onClick:h=>{this.props.onCloseButtonClick!==void 0&&this.props.onCloseButtonClick(h)},icon:new o.Icon({icon:o.MynahIcons.CANCEL}).render}).render]},...this.props.description!==void 0?[new s.CardBody({body:this.props.description}).render]:[],...this.getFormItems()]})}}},1223:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FeedbackFormComment=void 0;const l=e(4769);t.FeedbackFormComment=class{constructor(c){var A;this.getComment=()=>this.render.value,this.clear=()=>{this.render.value=""},this.render=l.DomBuilder.getInstance().build({type:"textarea",events:{keyup:a=>{c.onChange!==void 0&&c.onChange(this.render.value)}},classNames:["mynah-feedback-form-comment"],attributes:{value:(A=c.initComment)!==null&&A!==void 0?A:""}})}}},8054:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FeedbackForm=void 0;const l=e(7609),c=e(4769),A=e(1407),a=e(1223),d=e(4601),m=e(9275),s=e(9456),i=e(2010),o=e(7059);e(7385),t.FeedbackForm=class{constructor(n){var h;this.feedbackPayload={messageId:"",selectedOption:"",tabId:"",comment:""},this.onFeedbackSet=g=>{d.MynahUIGlobalEvents.getInstance().dispatch(l.MynahEventNames.FEEDBACK_SET,g)},this.close=()=>{this.feedbackComment.clear(),this.feedbackOptionsWrapper.setValue(s.Config.getInstance().config.feedbackOptions[0].value),this.feedbackPayload={messageId:"",selectedOption:s.Config.getInstance().config.feedbackOptions[0].value,tabId:"",comment:""},this.feedbackFormWrapper.removeClass("mynah-feedback-form-show")},this.show=()=>{this.feedbackFormWrapper.addClass("mynah-feedback-form-show")},this.feedbackPayload={selectedOption:s.Config.getInstance().config.feedbackOptions[0].value,messageId:"",tabId:"",comment:"",...n?.initPayload},d.MynahUIGlobalEvents.getInstance().addListener(l.MynahEventNames.SHOW_FEEDBACK_FORM,g=>{this.feedbackFormWrapper===void 0&&(this.feedbackFormWrapper=c.DomBuilder.getInstance().createPortal(l.MynahPortalNames.FEEDBACK_FORM,{type:"div",attributes:{id:"mynah-feedback-form-wrapper"}},"afterbegin")),this.feedbackFormWrapper.clear(),this.feedbackFormWrapper.update({children:[g.messageId!==void 0?this.feedbackFormContainer:g.customFormData!==void 0?new o.CustomFormWrapper({tabId:g.tabId,chatItem:g.customFormData,title:g.customFormData.title,description:g.customFormData.description,onFormAction:()=>{this.close()},onCloseButtonClick:f=>{(0,d.cancelEvent)(f),this.close()}}).render:""]}),g.messageId!==void 0&&(this.feedbackPayload.messageId=g.messageId),this.feedbackPayload.tabId=g.tabId,setTimeout(()=>{this.show()},5)}),this.feedbackOptionsWrapper=new i.Select({options:s.Config.getInstance().config.feedbackOptions,onChange:g=>{this.feedbackPayload.selectedOption=g},label:s.Config.getInstance().config.texts.feedbackFormOptionsLabel}),this.feedbackComment=new a.FeedbackFormComment({onChange:g=>{this.feedbackPayload.comment=g},initComment:(h=this.feedbackPayload)===null||h===void 0?void 0:h.comment}),this.feedbackSubmitButton=new A.Button({label:s.Config.getInstance().config.texts.submit,primary:!0,onClick:()=>{this.onFeedbackSet(this.feedbackPayload),this.close()}}),this.feedbackFormContainer=c.DomBuilder.getInstance().build({type:"div",classNames:["mynah-feedback-form"],events:{click:d.cancelEvent},children:[{type:"div",classNames:["mynah-feedback-form-header"],children:[{type:"h4",children:[s.Config.getInstance().config.texts.feedbackFormTitle]},new A.Button({primary:!1,onClick:()=>{this.close()},icon:new m.Icon({icon:m.MynahIcons.CANCEL}).render}).render]},this.feedbackOptionsWrapper.render,{type:"span",children:[s.Config.getInstance().config.texts.feedbackFormCommentLabel]},this.feedbackComment.render,{type:"div",classNames:["mynah-feedback-form-buttons-container"],children:[new A.Button({primary:!1,label:s.Config.getInstance().config.texts.cancel,onClick:()=>{this.close()}}).render,this.feedbackSubmitButton.render]}]})}}},4432:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RadioGroup=t.RadioGroupInternal=t.RadioGroupAbstract=void 0;const l=e(9456),c=e(4769),A=e(4601),a=e(7019),d=e(9275);e(7416);class m{constructor(){this.setValue=o=>{},this.getValue=()=>"",this.setEnabled=o=>{}}}t.RadioGroupAbstract=m;class s extends m{constructor(o){var n,h;super(),this.groupName=(0,a.generateUID)(),this.setValue=g=>{var f,C;(f=this.radioGroupElement.querySelector("[checked]"))===null||f===void 0||f.removeAttribute("checked"),(C=this.radioGroupElement.querySelector(`[id="${this.groupName}_${g}"]`))===null||C===void 0||C.setAttribute("checked","checked")},this.getValue=()=>{var g,f,C;return(C=(f=(g=this.radioGroupElement.querySelector("[checked]"))===null||g===void 0?void 0:g.getAttribute("id"))===null||f===void 0?void 0:f.replace(`${this.groupName}_`,""))!==null&&C!==void 0?C:""},this.setEnabled=g=>{g?(this.radioGroupElement.removeAttribute("disabled"),this.radioGroupElement.querySelectorAll("input").forEach(f=>f.removeAttribute("disabled"))):(this.radioGroupElement.setAttribute("disabled","disabled"),this.radioGroupElement.querySelectorAll("input").forEach(f=>f.setAttribute("disabled","disabled")))},this.radioGroupElement=c.DomBuilder.getInstance().build({type:"div",classNames:["mynah-form-input","no-border",...(n=o.classNames)!==null&&n!==void 0?n:[]],children:(h=o.options)===null||h===void 0?void 0:h.map((g,f)=>({type:"div",classNames:["mynah-form-input-radio-wrapper"],children:[{type:"label",classNames:["mynah-form-input-radio-label"],events:{click:C=>{(0,A.cancelEvent)(C),C.currentTarget.querySelector("input").checked=!0,this.setValue(g.value),o.onChange!==void 0&&o.onChange(g.value)}},children:[{type:"input",attributes:{type:"radio",id:`${this.groupName}_${g.value}`,name:this.groupName,value:g.value,...o.value!==void 0&&o.value===g.value||o.optional!==!0&&o.value===void 0&&f===0?{checked:"checked"}:{}}},{type:"span",classNames:["mynah-form-input-radio-check"],children:[new d.Icon({icon:d.MynahIcons.OK}).render]},{type:"span",children:[g.label]}]}]}))}),this.render=c.DomBuilder.getInstance().build({type:"div",classNames:["mynah-form-input-wrapper"],children:[{type:"span",classNames:["mynah-form-input-label"],children:[...o.label!==void 0?[o.label]:[]]},{type:"div",classNames:["mynah-form-input-container"],...o.attributes!==void 0?{attributes:o.attributes}:{},children:[this.radioGroupElement]}]})}}t.RadioGroupInternal=s,t.RadioGroup=class extends m{constructor(i){var o;return super(),this.setValue=n=>{},this.getValue=()=>"",this.setEnabled=n=>{},new((o=l.Config.getInstance().config.componentClasses.RadioGroup)!==null&&o!==void 0?o:s)(i)}}},2010:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Select=t.SelectInternal=t.SelectAbstract=void 0;const l=e(9456),c=e(4769),A=e(9275);e(7416);class a{constructor(){this.setValue=s=>{},this.getValue=()=>"",this.setEnabled=s=>{}}}t.SelectAbstract=a;class d{constructor(s){var i,o,n,h;this.setValue=g=>{this.selectElement.value=g},this.getValue=()=>this.selectElement.value,this.setEnabled=g=>{g?this.selectElement.removeAttribute("disabled"):this.selectElement.setAttribute("disabled","disabled")},this.selectElement=c.DomBuilder.getInstance().build({type:"select",classNames:["mynah-form-input",...(i=s.classNames)!==null&&i!==void 0?i:[]],events:{change:g=>{s.onChange!==void 0&&s.onChange(g.currentTarget.value)}},children:[...s.optional===!0?[{label:(o=s.placeholder)!==null&&o!==void 0?o:"...",value:""}]:[],...(n=s.options)!==null&&n!==void 0?n:[]].map(g=>({type:"option",classNames:g.value===""?["empty-option"]:[],attributes:{value:g.value},children:[g.label]}))}),s.value!==void 0&&(this.selectElement.value=s.value),this.render=c.DomBuilder.getInstance().build({type:"div",classNames:["mynah-form-input-wrapper"],children:[{type:"span",classNames:["mynah-form-input-label"],children:[...s.label!==void 0?[s.label]:[]]},{type:"div",classNames:["mynah-form-input-container"],...s.attributes!==void 0?{attributes:s.attributes}:{},children:[this.selectElement,new A.Icon({icon:(h=s.icon)!==null&&h!==void 0?h:A.MynahIcons.DOWN_OPEN,classNames:["mynah-select-handle"]}).render]}]})}}t.SelectInternal=d,t.Select=class extends a{constructor(m){var s;return super(),this.setValue=i=>{},this.getValue=()=>"",this.setEnabled=i=>{},new((s=l.Config.getInstance().config.componentClasses.Select)!==null&&s!==void 0?s:d)(m)}}},6755:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Stars=void 0;const l=e(4769),c=e(9275);e(7416),t.Stars=class{constructor(A){var a,d,m;this.setValue=s=>{this.starsContainer.setAttribute("selected-star",s.toString())},this.getValue=()=>{var s;return(s=this.starsContainer.getAttribute("selected-star"))!==null&&s!==void 0?s:""},this.setEnabled=s=>{s?this.render.removeAttribute("disabled"):this.render.setAttribute("disabled","disabled")},this.starsContainer=l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-feedback-form-stars-container"],attributes:{...A.value!==void 0&&{"selected-star":(d=(a=A.value)===null||a===void 0?void 0:a.toString())!==null&&d!==void 0?d:"1"}},children:Array(5).fill(void 0).map((s,i)=>l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-feedback-form-star",...A.value===(i+1).toString()?["selected"]:[]],events:{click:o=>{var n;(n=this.starsContainer.querySelector(".selected"))===null||n===void 0||n.removeClass("selected"),o.currentTarget.addClass("selected"),A.onChange!==void 0&&A.onChange((i+1).toString()),this.setValue(i+1)}},attributes:{star:(i+1).toString()},children:[new c.Icon({icon:c.MynahIcons.STAR}).render]}))}),this.render=l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-form-input-wrapper"],children:[{type:"span",classNames:["mynah-form-input-label"],children:[...A.label!==void 0?[A.label]:[]]},{type:"div",classNames:["mynah-form-input-container"],...A.attributes!==void 0?{attributes:A.attributes}:{},children:[{type:"div",classNames:["mynah-form-input","no-border",...(m=A.classNames)!==null&&m!==void 0?m:[]],children:[this.starsContainer]}]}]})}}},626:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextArea=t.TextAreaInternal=t.TextAreaAbstract=void 0;const l=e(9456),c=e(4769);e(7416);class A{constructor(){this.setValue=m=>{},this.getValue=()=>"",this.setEnabled=m=>{}}}t.TextAreaAbstract=A;class a extends A{constructor(m){var s,i;super(),this.setValue=o=>{this.inputElement.value=o},this.getValue=()=>this.inputElement.value,this.setEnabled=o=>{o?this.inputElement.removeAttribute("disabled"):this.inputElement.setAttribute("disabled","disabled")},this.inputElement=c.DomBuilder.getInstance().build({type:"textarea",classNames:["mynah-form-input",...(s=m.classNames)!==null&&s!==void 0?s:[]],attributes:m.placeholder!==void 0?{placeholder:m.placeholder}:{},events:{keyup:o=>{m.onChange!==void 0&&m.onChange(o.currentTarget.value)}}}),this.inputElement.value=(i=m.value)!==null&&i!==void 0?i:"",this.render=c.DomBuilder.getInstance().build({type:"div",classNames:["mynah-form-input-wrapper"],children:[{type:"span",classNames:["mynah-form-input-label"],children:[...m.label!==void 0?[m.label]:[]]},{type:"div",classNames:["mynah-form-input-container"],...m.attributes!==void 0?{attributes:m.attributes}:{},children:[this.inputElement]}]})}}t.TextAreaInternal=a,t.TextArea=class extends A{constructor(d){var m;return super(),this.setValue=s=>{},this.getValue=()=>"",this.setEnabled=s=>{},new((m=l.Config.getInstance().config.componentClasses.TextArea)!==null&&m!==void 0?m:a)(d)}}},9897:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextInput=t.TextInputInternal=t.TextInputAbstract=void 0;const l=e(9456),c=e(4769);e(7416);class A{constructor(){this.setValue=m=>{},this.getValue=()=>"",this.setEnabled=m=>{}}}t.TextInputAbstract=A;class a extends A{constructor(m){var s,i,o,n;super(),this.setValue=h=>{this.inputElement.value=h},this.getValue=()=>this.inputElement.value,this.setEnabled=h=>{h?this.inputElement.removeAttribute("disabled"):this.inputElement.setAttribute("disabled","disabled")},this.inputElement=c.DomBuilder.getInstance().build({type:"input",classNames:["mynah-form-input",...(s=m.classNames)!==null&&s!==void 0?s:[]],attributes:{type:(i=m.type)!==null&&i!==void 0?i:"text",...m.placeholder!==void 0?{placeholder:m.placeholder}:{}},events:{keyup:h=>{m.onChange!==void 0&&m.onChange(h.currentTarget.value)}}}),this.inputElement.value=(n=(o=m.value)===null||o===void 0?void 0:o.toString())!==null&&n!==void 0?n:"",this.render=c.DomBuilder.getInstance().build({type:"div",classNames:["mynah-form-input-wrapper"],children:[{type:"span",classNames:["mynah-form-input-label"],children:[...m.label!==void 0?[m.label]:[]]},{type:"div",classNames:["mynah-form-input-container"],...m.attributes!==void 0?{attributes:m.attributes}:{},children:[this.inputElement]}]})}}t.TextInputInternal=a,t.TextInput=class extends A{constructor(d){var m;return super(),this.setValue=s=>{},this.getValue=()=>"",this.setEnabled=s=>{},new((m=l.Config.getInstance().config.componentClasses.TextInput)!==null&&m!==void 0?m:a)(d)}}},9275:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Icon=t.MynahIcons=void 0;const l=e(4769),c=e(6364);var A;e(4641),function(a){a.MYNAH="mynah",a.MENU="menu",a.MINUS="minus",a.SEARCH="search",a.PLUS="plus",a.PAPER_CLIP="paper-clip",a.LIST_ADD="list-add",a.TABS="tabs",a.CHAT="chat",a.LINK="link",a.DOC="doc",a.EXTERNAL="external",a.CANCEL="cancel",a.CANCEL_CIRCLE="cancel-circle",a.CALENDAR="calendar",a.COMMENT="comment",a.MEGAPHONE="megaphone",a.NOTIFICATION="notification",a.EYE="eye",a.ELLIPSIS="ellipsis",a.OK="ok",a.UP_OPEN="up-open",a.DOWN_OPEN="down-open",a.RIGHT_OPEN="right-open",a.LEFT_OPEN="left-open",a.RESIZE_FULL="resize-full",a.RESIZE_SMALL="resize-small",a.BLOCK="block",a.OK_CIRCLED="ok-circled",a.INFO="info",a.WARNING="warning",a.ERROR="error",a.THUMBS_UP="thumbs-up",a.THUMBS_DOWN="thumbs-down",a.STAR="star",a.LIGHT_BULB="light-bulb",a.ENVELOPE_SEND="envelope-send",a.REFRESH="refresh",a.USER="user",a.PLAY="play",a.PENCIL="pencil",a.PAUSE="pause",a.CODE_BLOCK="code-block",a.COPY="copy",a.CURSOR_INSERT="cursor-insert",a.TEXT_SELECT="text-select",a.REVERT="revert",a.ASTERISK="asterisk"}(A||(t.MynahIcons=A={})),t.Icon=class{constructor(a){c.MynahUIIconImporter.getInstance(),this.render=l.DomBuilder.getInstance().build({type:"i",classNames:["mynah-ui-icon",`mynah-ui-icon-${a.icon}`,...a.classNames!==void 0?a.classNames:[]],children:[{type:"span",attributes:{"aria-hidden":"true"},children:[a.icon]}]})}}},6364:function(v,t,e){"use strict";var l=this&&this.__importDefault||function(De){return De&&De.__esModule?De:{default:De}};Object.defineProperty(t,"__esModule",{value:!0}),t.MynahUIIconImporter=void 0;const c=e(4769),A=e(9275),a=l(e(6541)),d=l(e(7701)),m=l(e(5654)),s=l(e(242)),i=l(e(1033)),o=l(e(437)),n=l(e(7306)),h=l(e(6367)),g=l(e(3395)),f=l(e(880)),C=l(e(7588)),w=l(e(4743)),u=l(e(6829)),y=l(e(4784)),r=l(e(1925)),p=l(e(5533)),b=l(e(7111)),x=l(e(487)),I=l(e(6283)),M=l(e(2591)),T=l(e(5227)),z=l(e(3522)),O=l(e(5512)),P=l(e(4983)),L=l(e(1140)),D=l(e(5355)),U=l(e(7016)),G=l(e(6147)),q=l(e(6981)),J=l(e(5957)),Y=l(e(8166)),ee=l(e(9610)),se=l(e(5430)),W=l(e(9541)),fe=l(e(4365)),de=l(e(1730)),ge=l(e(9124)),ue=l(e(5548)),$=l(e(723)),H=l(e(3786)),_=l(e(1783)),K=l(e(8728)),Ce=l(e(4339)),ce=l(e(2666)),oe=l(e(5070)),ne=l(e(640)),Me=l(e(9448)),Ee=l(e(7136));class Ne{constructor(){const ae={MYNAH:a.default,MENU:d.default,MINUS:m.default,SEARCH:s.default,PLUS:i.default,PAPER_CLIP:o.default,LIST_ADD:n.default,TABS:h.default,PENCIL:g.default,CHAT:f.default,LINK:w.default,DOC:u.default,EXTERNAL:y.default,CANCEL:r.default,CANCEL_CIRCLE:p.default,CALENDAR:b.default,COMMENT:C.default,MEGAPHONE:x.default,NOTIFICATION:I.default,EYE:M.default,ELLIPSIS:T.default,OK:z.default,UP_OPEN:O.default,DOWN_OPEN:P.default,RIGHT_OPEN:L.default,LEFT_OPEN:D.default,RESIZE_FULL:U.default,RESIZE_SMALL:G.default,BLOCK:q.default,OK_CIRCLED:J.default,INFO:Y.default,WARNING:ee.default,ERROR:se.default,THUMBS_UP:W.default,THUMBS_DOWN:fe.default,STAR:de.default,LIGHT_BULB:ge.default,ENVELOPE_SEND:ue.default,REFRESH:$.default,USER:H.default,PLAY:_.default,PAUSE:K.default,CODE_BLOCK:Ce.default,COPY:ce.default,CURSOR_INSERT:oe.default,TEXT_SELECT:ne.default,REVERT:Me.default,ASTERISK:Ee.default};c.DomBuilder.getInstance().createPortal("mynah-ui-icons",{type:"style",attributes:{type:"text/css"},children:[`
      ${Object.keys(A.MynahIcons).map(V=>{const he=A.MynahIcons[V];return`
        :root{
          --mynah-ui-icon-${he}: url(${ae[V]});
        }
        .mynah-ui-icon-${he} {
          -webkit-mask-image: var(--mynah-ui-icon-${he});
          mask-image: var(--mynah-ui-icon-${he});
        }`}).join("")}
      `]},"beforebegin")}}t.MynahUIIconImporter=Ne,Ne.getInstance=()=>(Ne.instance===void 0&&(Ne.instance=new Ne),Ne.instance)},1541:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TabBarButtonsWrapper=void 0;const l=e(9456),c=e(4769),A=e(4601),a=e(6508),d=e(7609),m=e(1407),s=e(9275),i=e(4083);t.TabBarButtonsWrapper=class{constructor(n){this.getTabsBarButtonsRender=h=>{var g,f;let C=(g=l.Config.getInstance().config.tabBarButtons)!==null&&g!==void 0?g:[];const w=(f=a.MynahUITabsStore.getInstance().getTabDataStore(h))===null||f===void 0?void 0:f.getValue("tabBarButtons");return w!=null&&w.length>0&&(C=w),C.map(u=>new o({onButtonClick:y=>{A.MynahUIGlobalEvents.getInstance().dispatch(d.MynahEventNames.TAB_BAR_BUTTON_CLICK,{tabId:h,buttonId:y}),this.props.onButtonClick!=null&&this.props.onButtonClick(h,y)},tabBarActionButton:u}).render)},this.props=n??{},this.render=c.DomBuilder.getInstance().build({type:"div",persistent:!0,classNames:["mynah-nav-tabs-bar-buttons-wrapper"],children:this.getTabsBarButtonsRender(a.MynahUITabsStore.getInstance().getSelectedTabId())}),a.MynahUITabsStore.getInstance().addListener("selectedTabChange",h=>{this.render.clear(),this.render.update({children:this.getTabsBarButtonsRender(h)})})}};class o{constructor(h){this.showButtonOptionsOverlay=g=>{this.buttonOptionsOverlay=new i.Overlay({background:!0,closeOnOutsideClick:!0,referenceElement:this.render,dimOutside:!1,removeOtherOverlays:!0,verticalDirection:i.OverlayVerticalDirection.TO_BOTTOM,horizontalDirection:i.OverlayHorizontalDirection.END_TO_LEFT,children:[{type:"div",classNames:["mynah-nav-tabs-bar-buttons-wrapper-overlay"],children:g.map(f=>new m.Button({label:f.text,icon:f.icon!=null?new s.Icon({icon:f.icon}).render:void 0,primary:!1,onClick:()=>{this.hideButtonOptionsOverlay(),this.props.onButtonClick(f.id)}}).render)}]})},this.hideButtonOptionsOverlay=()=>{this.buttonOptionsOverlay!==void 0&&(this.buttonOptionsOverlay.close(),this.buttonOptionsOverlay=void 0)},this.props=h,this.render=new m.Button({label:this.props.tabBarActionButton.text,tooltip:this.props.tabBarActionButton.description,tooltipVerticalDirection:i.OverlayVerticalDirection.START_TO_BOTTOM,tooltipHorizontalDirection:i.OverlayHorizontalDirection.TO_LEFT,icon:this.props.tabBarActionButton.icon!=null?new s.Icon({icon:this.props.tabBarActionButton.icon}).render:void 0,primary:!1,onClick:()=>{var g;this.props.tabBarActionButton.items!=null&&((g=this.props.tabBarActionButton.items)===null||g===void 0?void 0:g.length)>0?this.showButtonOptionsOverlay(this.props.tabBarActionButton.items):this.props.onButtonClick(this.props.tabBarActionButton.id)}}).render}}},6446:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Tabs=void 0;const l=e(9456),c=e(4769),A=e(4601),a=e(6508),d=e(1407),m=e(4977),s=e(7853),i=e(9275),o=e(1541),n=e(4083),h=e(3392);e(4537),t.Tabs=class{constructor(g){this.tabIdTitleSubscriptions={},this.tabIdChatItemsSubscriptions={},this.getTabOptionsFromTabStoreData=()=>{const f=a.MynahUITabsStore.getInstance().getAllTabs();return Object.keys(f).map(C=>{var w;return{value:C,label:(w=f[C].store)===null||w===void 0?void 0:w.tabTitle,selected:f[C].isSelected}})},this.getTabsRender=f=>{const C=this.getTabOptionsFromTabStoreData();return C.forEach(w=>{this.assignListener(w.value)}),this.toggleGroup=new h.Toggle({onChange:w=>{a.MynahUITabsStore.getInstance().selectTab(w),this.props.onChange!==void 0&&this.props.onChange(w)},onRemove:(w,u)=>{this.props.onBeforeTabRemove===void 0||this.props.onBeforeTabRemove(w)?a.MynahUITabsStore.getInstance().removeTab(w):this.showCloseTabConfirmationOverLay(u,w)},name:"mynah-main-tabs",options:C,value:f}),[this.toggleGroup.render,new d.Button({classNames:["mynah-toggle-close-button"],additionalEvents:{mouseenter:w=>{a.MynahUITabsStore.getInstance().tabsLength()===l.Config.getInstance().config.maxTabs&&this.showMaxReachedOverLay(w.currentTarget,l.Config.getInstance().config.texts.noMoreTabsTooltip)},mouseleave:()=>{this.hideMaxReachedOverLay()}},onClick:w=>{(0,A.cancelEvent)(w),a.MynahUITabsStore.getInstance().tabsLength()<l.Config.getInstance().config.maxTabs&&a.MynahUITabsStore.getInstance().addTab()},icon:new i.Icon({icon:i.MynahIcons.PLUS}).render,primary:!1}).render]},this.showMaxReachedOverLay=(f,C)=>{this.maxReachedOverlay=new n.Overlay({background:!0,closeOnOutsideClick:!1,referenceElement:f,dimOutside:!1,removeOtherOverlays:!0,verticalDirection:n.OverlayVerticalDirection.TO_BOTTOM,horizontalDirection:n.OverlayHorizontalDirection.CENTER,children:[new m.Card({border:!1,classNames:["mynah-nav-tabs-max-reached-overlay"],children:[new s.CardBody({body:C}).render]}).render]})},this.hideMaxReachedOverLay=()=>{this.maxReachedOverlay!==void 0&&(this.maxReachedOverlay.close(),this.maxReachedOverlay=void 0)},this.showCloseTabConfirmationOverLay=(f,C)=>{var w,u,y;this.closeConfirmationOverlay=new n.Overlay({background:!0,closeOnOutsideClick:!0,referenceElement:f,dimOutside:!1,removeOtherOverlays:!0,verticalDirection:n.OverlayVerticalDirection.TO_BOTTOM,horizontalDirection:n.OverlayHorizontalDirection.START_TO_RIGHT,children:[new m.Card({border:!1,classNames:["mynah-nav-tabs-close-confirmation-overlay"],children:[new s.CardBody({body:(w=a.MynahUITabsStore.getInstance().getTabDataStore(C).getValue("tabCloseConfirmationMessage"))!==null&&w!==void 0?w:l.Config.getInstance().config.texts.tabCloseConfirmationMessage}).render,c.DomBuilder.getInstance().build({type:"div",classNames:["mynah-nav-tabs-close-confirmation-buttons-wrapper"],children:[new d.Button({onClick:()=>{this.hideshowCloseTabConfirmationOverLay()},label:(u=a.MynahUITabsStore.getInstance().getTabDataStore(C).getValue("tabCloseConfirmationKeepButton"))!==null&&u!==void 0?u:l.Config.getInstance().config.texts.tabCloseConfirmationKeepButton}).render,new d.Button({onClick:()=>{a.MynahUITabsStore.getInstance().removeTab(C),this.hideshowCloseTabConfirmationOverLay()},classNames:["mynah-nav-tabs-close-confirmation-close-button"],label:(y=a.MynahUITabsStore.getInstance().getTabDataStore(C).getValue("tabCloseConfirmationCloseButton"))!==null&&y!==void 0?y:l.Config.getInstance().config.texts.tabCloseConfirmationCloseButton}).render]})]}).render]})},this.hideshowCloseTabConfirmationOverLay=()=>{this.closeConfirmationOverlay!==void 0&&(this.closeConfirmationOverlay.close(),this.closeConfirmationOverlay=void 0)},this.assignListener=f=>{var C,w;this.tabIdTitleSubscriptions[f]=(C=a.MynahUITabsStore.getInstance().addListenerToDataStore(f,"tabTitle",u=>{this.toggleGroup.updateOptionTitle(f,u)}))!==null&&C!==void 0?C:"",this.tabIdChatItemsSubscriptions[f]=(w=a.MynahUITabsStore.getInstance().addListenerToDataStore(f,"chatItems",()=>{this.toggleGroup.updateOptionIndicator(f,!0)}))!==null&&w!==void 0?w:""},this.removeListenerAssignments=f=>{a.MynahUITabsStore.getInstance().removeListenerFromDataStore(f,this.tabIdTitleSubscriptions[f],"tabTitle"),a.MynahUITabsStore.getInstance().removeListenerFromDataStore(f,this.tabIdChatItemsSubscriptions[f],"chatItems")},this.props=g,this.render=c.DomBuilder.getInstance().build({type:"div",persistent:!0,classNames:["mynah-nav-tabs-wrapper"],events:{dblclick:f=>{(0,A.cancelEvent)(f),a.MynahUITabsStore.getInstance().tabsLength()<l.Config.getInstance().config.maxTabs&&a.MynahUITabsStore.getInstance().addTab()}},children:[...this.getTabsRender(a.MynahUITabsStore.getInstance().getSelectedTabId()),new o.TabBarButtonsWrapper().render]}),a.MynahUITabsStore.getInstance().addListener("add",(f,C)=>{var w;this.assignListener(f),this.toggleGroup.addOption({value:f,label:(w=C?.store)===null||w===void 0?void 0:w.tabTitle,selected:C?.isSelected}),this.render.setAttribute("selected-tab",f)}),a.MynahUITabsStore.getInstance().addListener("remove",(f,C)=>{this.removeListenerAssignments(f),this.toggleGroup.removeOption(f),C!==void 0&&this.toggleGroup.snapToOption(a.MynahUITabsStore.getInstance().getSelectedTabId()),this.render.setAttribute("selected-tab",a.MynahUITabsStore.getInstance().getSelectedTabId())}),a.MynahUITabsStore.getInstance().addListener("selectedTabChange",f=>{this.render.setAttribute("selected-tab",f),this.toggleGroup.setValue(f)})}}},6075:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NoTabs=void 0;const l=e(970),c=e(9456),A=e(4769),a=e(4601),d=e(6508),m=e(1407),s=e(9275);e(8283),t.NoTabs=class{constructor(){var i;this.render=A.DomBuilder.getInstance().build({type:"div",persistent:!0,classNames:["mynah-no-tabs-wrapper",...d.MynahUITabsStore.getInstance().tabsLength()>0?["hidden"]:[]],children:[{type:"div",classNames:["mynah-no-tabs-icon-wrapper"],children:[new s.Icon({icon:s.MynahIcons.TABS}).render]},{type:"div",classNames:["mynah-no-tabs-info"],innerHTML:(0,l.marked)((i=c.Config.getInstance().config.texts.noTabsOpen)!==null&&i!==void 0?i:"",{breaks:!0})},{type:"div",classNames:["mynah-no-tabs-buttons-wrapper"],children:[new m.Button({onClick:o=>{(0,a.cancelEvent)(o),d.MynahUITabsStore.getInstance().tabsLength()<c.Config.getInstance().config.maxTabs&&d.MynahUITabsStore.getInstance().addTab()},icon:new s.Icon({icon:s.MynahIcons.PLUS}).render,label:c.Config.getInstance().config.texts.openNewTab}).render]}]}),d.MynahUITabsStore.getInstance().addListener("add",()=>{this.render.addClass("hidden")}),d.MynahUITabsStore.getInstance().addListener("remove",()=>{d.MynahUITabsStore.getInstance().tabsLength()===0&&this.render.removeClass("hidden")})}}},7067:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Notification=void 0;const l=e(4769),c=e(4601),A=e(7609),a=e(9275),d=e(4083);e(6358),t.Notification=class{constructor(m){var s;this.getNextCalculatedTop=()=>{const i=(0,l.DS)(".mynah-notification");if(i.length>0){const o=i[i.length-1].getBoundingClientRect();return o.top+o.height+d.OVERLAY_MARGIN}return 0},this.getChildren=i=>i instanceof Array?i:[i],this.duration=m.duration!==void 0?m.duration:5e3,this.type=(s=m.type)!==null&&s!==void 0?s:A.NotificationType.INFO,this.props=m}notify(){var m,s,i;this.notificationOverlay=new d.Overlay({referencePoint:{left:Math.max((m=document.documentElement.clientWidth)!==null&&m!==void 0?m:0,(s=window.innerWidth)!==null&&s!==void 0?s:0),top:this.getNextCalculatedTop()},dimOutside:!1,closeOnOutsideClick:!1,horizontalDirection:d.OverlayHorizontalDirection.TO_LEFT,verticalDirection:d.OverlayVerticalDirection.TO_BOTTOM,onClose:this.props.onNotificationHide,children:[{type:"div",classNames:["mynah-notification",this.props.onNotificationClick!==void 0?"mynah-notification-clickable":""],events:{click:o=>{var n;(0,c.cancelEvent)(o),this.props.onNotificationClick!==void 0&&(this.props.onNotificationClick(),(n=this.notificationOverlay)===null||n===void 0||n.close())}},children:[new a.Icon({icon:this.type.toString()}).render,{type:"div",classNames:["mynah-notification-container"],children:[{type:"h3",classNames:["mynah-notification-title"],children:[(i=this.props.title)!==null&&i!==void 0?i:""]},{type:"div",classNames:["mynah-notification-content"],children:this.getChildren(this.props.content)}]}]}]}),this.duration!==-1&&setTimeout(()=>{var o;(o=this.notificationOverlay)===null||o===void 0||o.close()},this.duration)}}},4083:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Overlay=t.OverlayVerticalDirection=t.OverlayHorizontalDirection=t.OVERLAY_MARGIN=void 0;const l=e(4769),c=e(7019),A=e(7609);var a,d;e(1118),t.OVERLAY_MARGIN=8,function(m){m.TO_LEFT="horizontal-direction-to-left",m.END_TO_LEFT="horizontal-direction-from-end-to-left",m.TO_RIGHT="horizontal-direction-to-right",m.START_TO_RIGHT="horizontal-direction-from-start-to-right",m.CENTER="horizontal-direction-at-center"}(a||(t.OverlayHorizontalDirection=a={})),function(m){m.TO_BOTTOM="vertical-direction-to-bottom",m.START_TO_BOTTOM="vertical-direction-from-start-to-bottom",m.TO_TOP="vertical-direction-to-top",m.END_TO_TOP="vertical-direction-from-end-to-top",m.CENTER="vertical-direction-at-center"}(d||(t.OverlayVerticalDirection=d={})),t.Overlay=class{constructor(m){var s,i,o,n,h,g,f,C;this.guid=(0,c.generateUID)(),this.close=()=>{this.render.removeClass("mynah-overlay-open"),setTimeout(()=>{this.render.remove()},250),this.onClose!==void 0&&this.onClose()},this.windowBlurHandler=()=>{this.close(),window.removeEventListener("blur",this.windowBlurHandler.bind(this)),window.removeEventListener("resize",this.windowBlurHandler.bind(this))},this.getCalculatedLeft=(P,L,D)=>{const U=L!==void 0?L.getBoundingClientRect():D!==void 0?{left:D.left,width:0}:{left:0,width:0};switch(P.toString()){case a.TO_RIGHT:return U.left+U.width+t.OVERLAY_MARGIN;case a.START_TO_RIGHT:return U.left;case a.TO_LEFT:return U.left-t.OVERLAY_MARGIN;case a.END_TO_LEFT:return U.left+U.width;case a.CENTER:return U.left+U.width/2;default:return 0}},this.getCalculatedWidth=P=>P!==void 0?P.getBoundingClientRect().width:0,this.getCalculatedTop=(P,L,D)=>{const U=L!==void 0?L.getBoundingClientRect():D!==void 0?{top:D.top,height:0}:{top:0,height:0};switch(P.toString()){case d.TO_BOTTOM:return U.top+U.height+t.OVERLAY_MARGIN;case d.START_TO_BOTTOM:return U.top;case d.TO_TOP:return U.top-t.OVERLAY_MARGIN;case d.END_TO_TOP:return U.top+U.height;case d.CENTER:return U.top+U.height/2;default:return U.top}},this.updateContent=P=>{this.innerContainer.update({children:P})},this.toggleHidden=P=>{this.render.hidden=P};const w=(s=m.horizontalDirection)!==null&&s!==void 0?s:a.TO_RIGHT,u=(i=m.verticalDirection)!==null&&i!==void 0?i:d.START_TO_BOTTOM;this.onClose=m.onClose;const y=m.dimOutside!==!1,r=m.closeOnOutsideClick!==!1,p=this.getCalculatedTop(u,m.referenceElement,m.referencePoint),b=this.getCalculatedLeft(w,m.referenceElement,m.referencePoint),x=m.stretchWidth===!0?this.getCalculatedWidth(m.referenceElement):0;this.innerContainer=l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-overlay-inner-container"],children:m.children}),this.container=l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-overlay-container",w,u,m.background!==!1?"background":""],attributes:{style:`top: ${p}px; left: ${b}px; ${x!==0?`width: ${x}px;`:""}`},children:[this.innerContainer]}),m.removeOtherOverlays===!0&&l.DomBuilder.getInstance().removeAllPortals(A.MynahPortalNames.OVERLAY),this.render=l.DomBuilder.getInstance().createPortal(`${A.MynahPortalNames.OVERLAY}-${this.guid}`,{type:"div",attributes:{id:`mynah-overlay-${this.guid}`},classNames:["mynah-overlay",...y?["mynah-overlay-dim-outside"]:[],...r?["mynah-overlay-close-on-outside-click"]:[]],events:{click:r?this.close:()=>{}},children:[this.container]},"beforeend");const I=Math.max((o=document.documentElement.clientHeight)!==null&&o!==void 0?o:0,(n=window.innerHeight)!==null&&n!==void 0?n:0),M=Math.max((h=document.documentElement.clientWidth)!==null&&h!==void 0?h:0,(g=window.innerWidth)!==null&&g!==void 0?g:0),T=this.container.getBoundingClientRect(),z=parseFloat((f=this.container.style.top)!==null&&f!==void 0?f:"0"),O=parseFloat((C=this.container.style.left)!==null&&C!==void 0?C:"0");T.top<t.OVERLAY_MARGIN?this.container.style.top=`${z+(t.OVERLAY_MARGIN-T.top)}px`:T.top+T.height+t.OVERLAY_MARGIN>I&&(this.container.style.top=z-(T.top+T.height+t.OVERLAY_MARGIN-I)+"px"),T.left<t.OVERLAY_MARGIN?this.container.style.left=`${O+(t.OVERLAY_MARGIN-T.left)}px`:T.left+T.width+t.OVERLAY_MARGIN>M&&(this.container.style.left=O-(T.left+T.width+t.OVERLAY_MARGIN-M)+"px"),setTimeout(()=>{this.render.addClass("mynah-overlay-open"),r&&(window.addEventListener("blur",this.windowBlurHandler.bind(this)),window.addEventListener("resize",this.windowBlurHandler.bind(this)))},10)}}},3304:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SourceLinkBody=void 0;const l=e(7853);t.SourceLinkBody=class{constructor(c){var A;this.props=c,this.render=new l.CardBody({highlightRangeWithTooltip:c.highlightRangeWithTooltip,body:(A=this.props.suggestion.body)!==null&&A!==void 0?A:"",children:this.props.children}).render}}},8948:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SourceLinkHeader=void 0;const l=e(160),c=e(4769),A=e(827),a=e(9275),d=e(4083),m=e(4862);t.SourceLinkHeader=class{constructor(s){this.getSourceMetaBlock=o=>{const n=[];return o!=null&&Object.keys(o).forEach(h=>{const g=o[h];g.isAccepted===!0&&n.push({type:"span",classNames:["mynah-title-meta-block-item","approved-answer"],children:[new a.Icon({icon:a.MynahIcons.OK}).render]}),g.lastActivityDate!==void 0&&n.push({type:"span",classNames:["mynah-title-meta-block-item"],children:[new a.Icon({icon:a.MynahIcons.CALENDAR}).render,{type:"span",classNames:["mynah-title-meta-block-item-text"],children:[(0,l.getTimeDiff)(new Date().getTime()-g.lastActivityDate,2)]}]}),g.answerCount!==void 0&&n.push({type:"span",classNames:["mynah-title-meta-block-item"],children:[new a.Icon({icon:a.MynahIcons.CHAT}).render,{type:"span",classNames:["mynah-title-meta-block-item-text"],children:[g.answerCount.toString()]}]}),g.stars!==void 0&&n.push({type:"span",classNames:["mynah-title-meta-block-item"],children:[new a.Icon({icon:a.MynahIcons.STAR}).render,{type:"span",classNames:["mynah-title-meta-block-item-text"],children:[`${g.stars.toString()} contributors`]}]}),g.forks!==void 0&&n.push({type:"span",classNames:["mynah-title-meta-block-item"],children:[new a.Icon({icon:a.MynahIcons.DOWN_OPEN}).render,{type:"span",classNames:["mynah-title-meta-block-item-text"],children:[`${g.forks.toString()} forks`]}]}),g.score!==void 0&&n.push({type:"span",classNames:["mynah-title-meta-block-item"],children:[new a.Icon({icon:a.MynahIcons.THUMBS_UP}).render,{type:"span",classNames:["mynah-title-meta-block-item-text"],children:[`${g.score.toString()}`]}]})}),{type:"span",classNames:["mynah-title-meta-block"],children:n}},this.showLinkPreview=(o,n)=>{n.body!==void 0&&(clearTimeout(this.sourceLinkPreviewTimeout),this.sourceLinkPreviewTimeout=setTimeout(()=>{const h=o.target;this.sourceLinkPreview=new d.Overlay({background:!0,closeOnOutsideClick:!1,referenceElement:h,dimOutside:!1,removeOtherOverlays:!0,verticalDirection:d.OverlayVerticalDirection.TO_TOP,horizontalDirection:d.OverlayHorizontalDirection.START_TO_RIGHT,children:[new m.SourceLinkCard({sourceLink:n}).render]})},500))},this.hideLinkPreview=()=>{var o;clearTimeout(this.sourceLinkPreviewTimeout),this.sourceLinkPreview!==null&&((o=this.sourceLinkPreview)===null||o===void 0||o.close(),this.sourceLinkPreview=null)};const i=s.sourceLink.url.replace(/^(http|https):\/\//,"").split("/");i[i.length-1].trim()===""&&i.pop(),this.render=c.DomBuilder.getInstance().build({type:"div",classNames:["mynah-source-link-header"],...s.showCardOnHover===!0?{events:{mouseenter:o=>{this.showLinkPreview(o,s.sourceLink)},mouseleave:this.hideLinkPreview}}:{},attributes:{origin:(0,A.getOrigin)(s.sourceLink.url)},children:[{type:"span",classNames:["mynah-source-thumbnail"]},{type:"div",classNames:["mynah-source-link-title-wrapper"],children:[{type:"a",classNames:["mynah-source-link-title"],events:{...s.onClick!==void 0&&{click:s.onClick,auxclick:s.onClick}},attributes:{href:s.sourceLink.url,target:"_blank"},children:[s.sourceLink.title,{type:"div",classNames:["mynah-source-link-expand-icon"],children:[new a.Icon({icon:a.MynahIcons.EXTERNAL}).render]}]},{type:"a",classNames:["mynah-source-link-url"],events:{...s.onClick!==void 0&&{click:s.onClick,auxclick:s.onClick}},attributes:{href:s.sourceLink.url,target:"_blank"},innerHTML:i.map(o=>`<span>${o}</span>`).join("")},...s.sourceLink.metadata!=null?[this.getSourceMetaBlock(s.sourceLink.metadata)]:[]]}]})}}},4862:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SourceLinkCard=void 0;const l=e(4977),c=e(3304),A=e(8948);t.SourceLinkCard=class{constructor(a){this.sourceLink=a.sourceLink,this.render=new l.Card({border:!1,background:!1,children:[new A.SourceLinkHeader({sourceLink:this.sourceLink}).render,...this.sourceLink.body!==void 0?[new c.SourceLinkBody({suggestion:this.sourceLink}).render]:[]]}).render}}},8990:function(v,t,e){"use strict";var l=this&&this.__importDefault||function(f){return f&&f.__esModule?f:{default:f}};Object.defineProperty(t,"__esModule",{value:!0}),t.SyntaxHighlighter=t.ellipsis=t.highlighters=void 0;const c=e(4769),A=e(5660);e(4060),e(9883),e(2247),e(8080),e(235),e(6456),e(1233),e(2734),e(4833),e(3047),e(7706),e(8674),e(47),e(5584),e(6551),e(7013),e(3229),e(1637),e(9208),e(4297),e(7239),e(9578),e(4006),e(8759),e(6488),e(3954);const a=e(1407),d=e(7067),m=e(9275),s=e(4601),i=e(9456),o=e(7853),n=l(e(5573)),h=l(e(5937));e(3249);const g=["markup","xml","css","clike","diff","javascript","typescript","jsx","tsx","lua","java","json","markdown","mongodb","c","bash","csharp","objectivec","python","regex","scala","scss","less","diff-markup","diff-xml","diff-css","diff-clike","diff-diff","diff-javascript","diff-typescript","diff-jsx","diff-tsx","diff-lua","diff-java","diff-json","diff-markdown","diff-mongodb","diff-c","diff-bash","diff-csharp","diff-objectivec","diff-python","diff-regex","diff-scala","diff-scss","diff-less"];t.highlighters={start:{markup:'<span class="amzn-mynah-search-result-highlight">',textReplacement:"__mynahhighlighterstart__"},end:{markup:"</span>",textReplacement:"__mynahhighlighterend__"}},t.ellipsis={start:{markup:'<span class="amzn-mynah-search-result-ellipsis">',textReplacement:"__mynahcodeellipsisstart__"},end:{markup:"</span>",textReplacement:"__mynahcodeellipsisend__"}},t.SyntaxHighlighter=class{constructor(f){var C,w,u;this.codeBlockButtons=[],this.getSelectedCodeContextMenu=()=>{var b,x;return{code:(x=(b=document.getSelection())===null||b===void 0?void 0:b.toString())!==null&&x!==void 0?x:"",type:"selection"}},this.getSelectedCode=()=>{var b,x;return{code:(x=(b=this.render.querySelector("pre"))===null||b===void 0?void 0:b.innerText)!==null&&x!==void 0?x:"",type:"block"}},this.copyToClipboard=async(b,x,I)=>{var M,T;document.hasFocus()||window.focus();try{await navigator.clipboard.writeText(b)}finally{((M=this.props)===null||M===void 0?void 0:M.onCopiedToClipboard)!=null&&((T=this.props)===null||T===void 0||T.onCopiedToClipboard(x,b,this.props.index)),I!=null&&new d.Notification({content:I,title:i.Config.getInstance().config.texts.copyToClipboard,duration:2e3}).notify()}},this.props=f,f.showCopyOptions===!0&&((C=this.props)===null||C===void 0?void 0:C.onInsertToCursorPosition)!=null&&this.codeBlockButtons.push(new a.Button({icon:new m.Icon({icon:m.MynahIcons.CURSOR_INSERT}).render,label:i.Config.getInstance().config.texts.insertAtCursorLabel,attributes:{title:i.Config.getInstance().config.texts.insertAtCursorLabel},primary:!1,onClick:b=>{var x,I;(0,s.cancelEvent)(b);const M=this.getSelectedCode();((x=this.props)===null||x===void 0?void 0:x.onInsertToCursorPosition)!==void 0&&this.props.onInsertToCursorPosition(M.type,M.code,(I=this.props)===null||I===void 0?void 0:I.index)},additionalEvents:{mousedown:s.cancelEvent}}).render),f.showCopyOptions===!0&&((w=this.props)===null||w===void 0?void 0:w.onCopiedToClipboard)!=null&&this.codeBlockButtons.push(new a.Button({icon:new m.Icon({icon:m.MynahIcons.COPY}).render,label:i.Config.getInstance().config.texts.copy,attributes:{title:i.Config.getInstance().config.texts.copy},primary:!1,onClick:b=>{(0,s.cancelEvent)(b);const x=this.getSelectedCode();this.copyToClipboard(x.code,x.type)},additionalEvents:{mousedown:s.cancelEvent}}).render);let y=(0,h.default)(f.codeStringWithMarkup);f.keepHighlights===!0&&(y=y.replace(new RegExp(t.highlighters.start.markup,"g"),t.highlighters.start.textReplacement).replace(new RegExp(t.highlighters.end.markup,"g"),t.highlighters.end.textReplacement).replace(new RegExp(t.ellipsis.start.markup,"g"),t.ellipsis.start.textReplacement).replace(new RegExp(t.ellipsis.end.markup,"g"),t.ellipsis.end.textReplacement));let r=(0,n.default)(y);r=r.replace(new RegExp((0,n.default)(o.highlightersWithTooltip.start.markupStart),"g"),o.highlightersWithTooltip.start.markupStart).replace(new RegExp((0,n.default)(o.highlightersWithTooltip.start.markupEnd),"g"),o.highlightersWithTooltip.start.markupEnd).replace(new RegExp((0,n.default)(o.highlightersWithTooltip.end.markup),"g"),o.highlightersWithTooltip.end.markup);const p=c.DomBuilder.getInstance().build({type:"pre",classNames:["keep-markup",`language-${f.language!==void 0&&g.includes(f.language)?f.language:"clike"}`,...((u=f.language)===null||u===void 0?void 0:u.match("diff"))!=null?["diff-highlight"]:[],...f.showLineNumbers===!0?["line-numbers"]:[]],children:[{type:"code",innerHTML:r}],events:{copy:b=>{(0,s.cancelEvent)(b);const x=this.getSelectedCodeContextMenu();x.code.length>0&&this.copyToClipboard(x.code,x.type)}}});(0,A.highlightElement)(p),f.keepHighlights===!0&&(p.innerHTML=p.innerHTML.replace(new RegExp(t.highlighters.start.textReplacement,"g"),t.highlighters.start.markup).replace(new RegExp(t.highlighters.end.textReplacement,"g"),t.highlighters.end.markup).replace(new RegExp(t.ellipsis.start.textReplacement,"g"),t.ellipsis.start.markup).replace(new RegExp(t.ellipsis.end.textReplacement,"g"),t.ellipsis.end.markup)),this.render=c.DomBuilder.getInstance().build({type:"div",classNames:["mynah-syntax-highlighter",...f.block!==!0?["mynah-inline-code"]:[]],children:[p,...f.showLineNumbers===!0?[{type:"span",classNames:["line-numbers-rows"],children:p.innerHTML.split(/\n/).slice(0,-1).map((b,x)=>{var I;return{type:"span",innerHTML:String(x+((I=f.startingLineNumber)!==null&&I!==void 0?I:1))}})}]:[]]}),this.codeBlockButtons.length>0&&setTimeout(()=>{this.render.insertAdjacentElement("afterbegin",c.DomBuilder.getInstance().build({type:"div",classNames:["mynah-syntax-highlighter-copy-buttons"],children:[...f.language!==void 0?[{type:"span",classNames:["mynah-syntax-highlighter-language"],children:[f.language]}]:[],...this.codeBlockButtons]}))},1)}}},3392:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Toggle=void 0;const l=e(4769),c=e(4601),A=e(1407),a=e(9275),d=e(4083);e(3883);class m{constructor(i){var o,n;this.props=i,this.render=l.DomBuilder.getInstance().build({type:"span",attributes:{key:`${this.props.name}-${this.props.value}`,title:(o=this.props.label)!==null&&o!==void 0?o:""},events:{...this.props.disabled===!0&&this.props.disabledTooltip!==void 0?{mouseenter:()=>{this.disabledTooltipTimer=setTimeout(()=>{var h;this.disabledTooltip=new d.Overlay({children:[{type:"span",classNames:["mynah-toggle-disabled-tooltip-container"],children:[(h=this.props.disabledTooltip)!==null&&h!==void 0?h:""]}],closeOnOutsideClick:!1,dimOutside:!1,referenceElement:this.render,horizontalDirection:d.OverlayHorizontalDirection.CENTER,verticalDirection:d.OverlayVerticalDirection.TO_TOP})},500)},mouseleave:()=>{clearTimeout(this.disabledTooltipTimer),this.disabledTooltip!==void 0&&(this.disabledTooltip.close(),setTimeout(()=>{this.disabledTooltip=void 0},50))}}:{}},children:[{type:"input",classNames:["mynah-toggle-option"],attributes:{type:"radio",id:`${this.props.name}-${this.props.value}`,value:this.props.value,name:this.props.name,...this.props.selected===!0?{checked:"checked"}:{},...this.props.disabled===!0?{disabled:"disabled"}:{}},events:{change:()=>{this.props.onChange!=null&&this.props.onChange(this.props.value)}}},{type:"label",classNames:["mynah-toggle-option-label"],attributes:{for:`${this.props.name}-${this.props.value}`},events:{dblclick:h=>{(0,c.cancelEvent)(h)},auxclick:()=>{this.props.onRemove!==void 0&&this.props.onRemove(this.props.value,this.render)}},children:[this.props.icon!==void 0?new a.Icon({icon:i.icon}).render:"",{type:"span",classNames:["mynah-toggle-option-label-text"],children:[(n=this.props.label)!==null&&n!==void 0?n:""]},this.props.onRemove!==void 0?new A.Button({classNames:["mynah-toggle-close-button"],onClick:()=>{this.props.onRemove!==void 0&&this.props.onRemove(this.props.value,this.render)},icon:new a.Icon({icon:a.MynahIcons.CANCEL}).render,primary:!1}).render:""]}]})}}t.Toggle=class{constructor(s){this.transformScroll=i=>{i.deltaY!==0&&(this.render.scrollLeft+=i.deltaY)},this.getChildren=i=>[...this.props.options.map(o=>new m({...o,selected:i===o.value,name:this.props.name,onChange:this.updateSelectionRender,onRemove:this.props.onRemove}).render)],this.updateSelectionRender=i=>{this.props.onChange!==void 0&&this.props.onChange(i)},this.setValue=i=>{if(i!==this.getValue()){this.currentValue=i;const o=this.render.querySelector(`#${this.props.name}-${i}`);o!==void 0&&(o.click(),o.checked=!0,o.nextSibling.classList.remove("indication"))}},this.addOption=i=>{this.props.options.push(i),this.render.appendChild(new m({...i,name:this.props.name,onChange:this.updateSelectionRender,onRemove:this.props.onRemove}).render),i.selected===!0&&(this.setValue(i.value),this.snapToOption(i.value))},this.removeOption=i=>{this.props.options=this.props.options.filter(n=>n.value!==i);const o=this.render.querySelector(`span[key="${this.props.name}-${i}"]`);o!==void 0&&o?.remove()},this.updateOptionTitle=(i,o)=>{this.props.options=this.props.options.filter(h=>h.value!==i);const n=this.render.querySelector(`span[key="${this.props.name}-${i}"] .mynah-toggle-option-label-text`);n!==void 0&&(n.innerHTML=o)},this.updateOptionIndicator=(i,o)=>{this.props.options=this.props.options.filter(h=>h.value!==i);const n=this.render.querySelector(`label[for="${this.props.name}-${i}"]`);n!==null&&(o&&i!==this.getValue()?n.classList.add("indication"):n.classList.remove("indication"))},this.snapToOption=i=>{const o=this.render.querySelector(`#${this.props.name}-${i}`);o!==void 0&&(this.render.scrollLeft=(o?.parentNode).offsetLeft)},this.getValue=()=>this.currentValue,this.props={direction:"horizontal",...s},this.currentValue=this.props.value,this.render=l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-toggle-container","mynah-toggle-type-tabs",`mynah-toggle-direction-${this.props.direction}`],attributes:{disabled:s.disabled===!0?"disabled":""},children:this.getChildren(s.value),events:{wheel:{handler:this.transformScroll,options:{passive:!0}}}})}}},6855:(v,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.chatItemHasContent=void 0,t.chatItemHasContent=e=>e.body!=null&&e.body!==""||e.fileList!=null||e.formItems!=null||e.customRenderer!=null||e.buttons!=null},9456:(v,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Config=void 0;const e={componentClasses:{},maxTabs:1e3,maxUserInput:4096,showPromptField:!0,autoFocus:!0,tabBarButtons:[],feedbackOptions:[{value:"inaccurate-response",label:"Inaccurate response"},{value:"harmful-content",label:"Harmful content"},{value:"overlap",label:"Overlaps with existing content"},{value:"incorrect-syntax",label:"Incorrect syntax"},{value:"buggy-code",label:"Buggy code"},{value:"low-quality",label:"Low quality"},{value:"other",label:"Other"}],texts:{mainTitle:"AWS Q",copy:"Copy",insertAtCursorLabel:"Insert at cursor",feedbackFormTitle:"Report an issue",feedbackFormOptionsLabel:"What type of issue would you like to report?",feedbackFormCommentLabel:"Description of issue (optional):",feedbackThanks:"Thanks!",feedbackReportButtonLabel:"Report an issue",codeSuggestions:"Files",files:"file(s)",changes:"Changes",clickFileToViewDiff:"Click on a file to view diff.",showMore:"Show more",save:"Save",cancel:"Cancel",submit:"Submit",pleaseSelect:"Please select...",stopGenerating:"Stop generating",copyToClipboard:"Copied to clipboard",noMoreTabsTooltip:"You've reached maximum number of tabs you can simultaneously use.",codeSuggestionWithReferenceTitle:"Some suggestions contain code with references.",spinnerText:"Amazon Q is generating your answer...",tabCloseConfirmationMessage:"Are you sure want to close the tab? Closing the tab would mean that your running job will stop.",tabCloseConfirmationCloseButton:"Close tab",tabCloseConfirmationKeepButton:"Keep tab",noTabsOpen:"### Open a tab to chat with Q",openNewTab:"New tab"}};class l{constructor(A){this.config={...e,...A,texts:{...e.texts,...A?.texts},componentClasses:{...e.componentClasses,...A?.componentOverrides}}}static getInstance(A){return l.instance===void 0&&(l.instance=new l(A)),l.instance}}t.Config=l},160:(v,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTimeDiff=void 0,t.getTimeDiff=(e,l,c)=>{let A=Math.abs(e)/1e3;const a=Math.floor(A/31104e3);A-=31104e3*a;const d=Math.floor(A/2592e3);A-=2592e3*d;const m=Math.floor(A/604800);A-=604800*m;const s=Math.floor(A/86400);A-=86400*s;const i=Math.floor(A/3600)%24;A-=3600*i;const o=Math.floor(A/60)%60;A-=60*o;const n=[];return a===0||l!==void 0&&typeof l=="object"&&l.years===!1||n.push(`${a}yr`),d===0||l!==void 0&&typeof l=="object"&&l.months===!1||n.push(`${d}mo`),m===0||l!==void 0&&typeof l=="object"&&l.weeks===!1||n.push(`${m}we`),s===0||l!==void 0&&typeof l=="object"&&l.days===!1||n.push(`${s}da`),i===0||l!==void 0&&typeof l=="object"&&l.hours===!1||n.push(`${i}hr`),o===0||l!==void 0&&typeof l=="object"&&l.minutes===!1||n.push(`${o}min`),a+d+m+s+i+o===0?"1min":(l!==void 0&&typeof l=="number"&&n.splice(l,n.length),n.join(c??" "))}},4769:(v,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTypewriterPartsCss=t.htmlDecode=t.DomBuilder=t.DS=void 0,t.DS=document.querySelectorAll.bind(document);const e={type:"div",attributes:{},classNames:[],events:{},children:[],innerHTML:void 0,persistent:!1};class l{constructor(A){this.portals={},this.setRoot=a=>{var d;this.root=this.extendDomFunctionality((d=(0,t.DS)(a??"body")[0])!==null&&d!==void 0?d:document.body)},this.addClass=function(a){var d;return a!==""&&(this.classList.add(a),((d=this.builderObject.classNames)===null||d===void 0?void 0:d.indexOf(a))===-1&&(this.builderObject.classNames=[...this.builderObject.classNames,a])),this},this.removeClass=function(a){return this.classList.remove(a),this.builderObject.classNames!==void 0&&this.builderObject.classNames.includes(a)&&this.builderObject.classNames.splice(this.builderObject.classNames.indexOf(a),1),this},this.toggleClass=function(a){return this.classList.contains(a)?this.removeClass(a):this.addClass(a),this},this.hasClass=function(a){return this.classList.contains(a)},this.insertChild=function(a,d){return d&&(d instanceof Array?d.forEach(m=>{m instanceof Element?this.insertAdjacentElement(a,m):typeof m=="string"&&this.insertAdjacentText(a,m)}):d instanceof Element?this.insertAdjacentElement(a,d):typeof d=="string"&&this.insertAdjacentText(a,d)),this},this.clearChildren=function(a){return Array.from(this.childNodes).forEach(d=>{!a&&d.builderObject&&d.builderObject.persistent===!0||d.remove()}),this},this.extendDomFunctionality=function(a){const d=a;return d.addClass=this.addClass.bind(d),d.removeClass=this.removeClass.bind(d),d.toggleClass=this.toggleClass.bind(d),d.hasClass=this.hasClass.bind(d),d.insertChild=this.insertChild.bind(d),d.clear=this.clearChildren.bind(d),d},this.build=a=>{var d,m,s,i;const o={...e,...a},n=document.createElement(o.type);return n.classList.add(...((d=o.classNames)===null||d===void 0?void 0:d.filter(h=>h!==""))||[]),Object.keys((m=o.events)!==null&&m!==void 0?m:{}).forEach(h=>{var g;o?.events!==void 0&&(typeof o?.events[h]=="function"?n.addEventListener(h,o.events[h]):typeof o?.events[h]=="object"&&n.addEventListener(h,o.events[h].handler,(g=o.events[h].options)!==null&&g!==void 0?g:void 0),h!=="dblclick"&&h!=="click"||n.classList.add("mynah-ui-clickable-item"))}),Object.keys((s=o.attributes)!==null&&s!==void 0?s:{}).forEach(h=>n.setAttribute(h,o.attributes!==void 0?o.attributes[h].toString():"")),typeof o.innerHTML=="string"?n.innerHTML=o.innerHTML:o.children!==void 0&&((i=o.children)===null||i===void 0?void 0:i.length)>0&&this.insertChild.apply(n,["beforeend",[...o.children.map(h=>typeof h=="string"||h instanceof HTMLElement?h:this.build(h))]]),n.builderObject=o,n.update=h=>this.update(n,h),this.extendDomFunctionality(n),n},this.update=function(a,d){var m,s;return a.builderObject?(d.classNames!==void 0&&(a.classList.remove(...a.builderObject.classNames),a.classList.add(...d.classNames.filter(i=>i!==""))),Object.keys((m=d.events)!==null&&m!==void 0?m:{}).forEach(i=>{var o;a.builderObject.events!==void 0&&a.builderObject.events[i]&&a.removeEventListener(i,(o=a.builderObject.events[i].handler)!==null&&o!==void 0?o:a.builderObject.events[i]),d.events!==void 0&&d.events[i]!==void 0&&a.addEventListener(i,d.events[i])}),Object.keys((s=d.attributes)!==null&&s!==void 0?s:{}).forEach(i=>{d.attributes!==void 0&&d.attributes[i]===void 0?a.removeAttribute(i):d.attributes!==void 0&&a.setAttribute(i,d.attributes[i])}),typeof d.innerHTML=="string"?a.innerHTML=d.innerHTML:d.children!==void 0&&d.children.length>0&&(a.clear(),a.insertChild("beforeend",d.children)),a.builderObject={...e,...d}):console.warn("element was not created with dom builder"),a},this.createPortal=(a,d,m)=>{const s=this.build(d);return this.root.insertChild(m||"beforeend",s),this.portals[a]=s,s},this.getPortal=a=>this.portals[a],this.removePortal=a=>{var d;return(d=this.portals[a])===null||d===void 0?void 0:d.remove()},this.removeAllPortals=a=>{Object.keys(this.portals).forEach(d=>{d.match(a)!==null&&(this.portals[d].remove(),delete this.portals[d])})},this.root=(0,t.DS)(A)[0],this.extendDomFunctionality(this.root)}static getInstance(A){return l.instance||(l.instance=new l(A??"body")),A!=null&&l.instance.setRoot(A),l.instance}}t.DomBuilder=l,t.htmlDecode=c=>{var A;const a=document.createElement("textarea");return a.innerHTML=c,a.childNodes.length===0?"":(A=a.childNodes[0].nodeValue)!==null&&A!==void 0?A:c},t.getTypewriterPartsCss=(c,A,a,d)=>l.getInstance().build({type:"style",attributes:{type:"text/css"},persistent:!0,innerHTML:`
    root:{
    --mynah-typewriter-bottom-pull: max(-100%, calc(-5 * var(--mynah-line-height, 1.5rem)));
    }
    @keyframes typewriter-${c} {
      0% {
          opacity: 0;
          margin-bottom: var(--mynah-typewriter-bottom-pull, -1.5rem);
          visibility: visible;
      }
      99% {
          opacity: 1;
          margin-bottom: 0px;
          visibility: visible;
      }
      100% {
          opacity: 1;
          margin-bottom: initial;
          visibility: visible;
      }
  }
  ${new Array(Math.max(0,a)).fill(null).map((m,s)=>s<A?`
      .${c} .typewriter-part[index="${s}"] {
        visibility: visible !important;
        opacity: 1 !important;
        margin-bottom: inherit;
        animation: none;
      }
      `:`
      .${c} .typewriter-part[index="${s}"] {
        visibility: hidden;
        opacity: 0;
        margin-bottom: var(--mynah-typewriter-bottom-pull, -1.5rem);
        animation: typewriter-${c} ${150+d}ms ease-out forwards;
        animation-delay: ${(s-A)*d}ms;
      }
      `).join("")}
  `})},4601:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MynahUIGlobalEvents=t.cancelEvent=void 0;const l=e(7019);t.cancelEvent=A=>{var a,d,m;return(a=A.preventDefault)===null||a===void 0||a.call(A),(d=A.stopPropagation)===null||d===void 0||d.call(A),(m=A.stopImmediatePropagation)===null||m===void 0||m.call(A),!1};class c{constructor(){this.addListener=(a,d)=>{const m=(0,l.generateUID)();return this.listeners[a]===void 0&&(this.listeners[a]={}),this.listeners[a][m]=d,m},this.removeListener=(a,d)=>{var m;((m=this.listeners[a])===null||m===void 0?void 0:m[d])!==void 0&&delete this.listeners[a][d]},this.dispatch=(a,d)=>{this.listeners[a]!==void 0&&Object.keys(this.listeners[a]).forEach(m=>{this.listeners[a][m](d)})},this.listeners={...this.listeners}}}t.MynahUIGlobalEvents=c,c.getInstance=()=>(c.instance===void 0&&(c.instance=new c),c.instance)},7831:(v,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fileListToTree=void 0;const l=e(9456);t.fileListToTree=(A,a=[],d,m,s)=>[...c(A,!1),...c(a,!0)].reduce((i,{originalFilePath:o,filePath:n,deleted:h})=>{let g=i;for(let f=0;f<n.length;f++){const C=n[f];if(f===n.length-1){const w=n.join("/");g.children.push({type:"file",name:C,filePath:w,deleted:h,originalFilePath:o,actions:d!==void 0?d[o]:void 0,details:m!==void 0?m[o]:void 0});break}{const w=g.children.find(({name:u})=>u===C);if(w!=null)g=w;else{const u={name:C,type:"folder",children:[]};g.children.push(u),g=u}}}return i},{name:s??l.Config.getInstance().config.texts.changes,type:"folder",children:[]});const c=(A,a)=>A.map(d=>({originalFilePath:d,filePath:d.split("/").filter(m=>m!==void 0&&m!=="."),deleted:a}))},7019:(v,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateUID=void 0,t.generateUID=()=>{const e=46656*Math.random()|0,l=46656*Math.random()|0;return`000${e.toString(36)}`.slice(-3)+`000${l.toString(36)}`.slice(-3)}},1434:function(v,t,e){"use strict";var l=this&&this.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(t,"__esModule",{value:!0}),t.cleanHtml=t.AllowedAttributes=t.AllowedTags=void 0;const c=l(e(1036));t.AllowedTags=["a","audio","b","blockquote","br","hr","canvas","code","col","colgroup","data","div","em","embed","figcaption","figure","h1","h2","h3","h4","h5","h6","i","iframe","img","li","map","mark","object","ol","p","pre","q","s","small","source","span","strong","sub","sup","table","tbody","td","tfoot","th","thead","tr","track","u","ul","video"],t.AllowedAttributes=["accept","accept-charset","accesskey","align","allow","allowfullscreen","alt","as","async","autocapitalize","autoplay","charset","class","cols","colspan","controls","crossorigin","data","data-*","datetime","decoding","default","dir","download","headers","hidden","high","href","hreflang","id","ismap","itemprop","kind","lang","language","loop","low","media","muted","optimum","ping","playsinline","poster","preload","referrerpolicy","rel","reversed","role","rowspan","sandbox","scope","shape","size","sizes","slot","span","spellcheck","src","srcdoc","srclang","srcset","start","style","target","title","translate","usemap","wrap","aspect-ratio"],t.cleanHtml=A=>(0,c.default)(A,{allowedTags:[...t.AllowedTags],allowedAttributes:{"*":[...t.AllowedAttributes]}})},4511:function(v,t,e){"use strict";var l=this&&this.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(t,"__esModule",{value:!0}),t.MynahUIDataStore=t.EmptyMynahUIDataModel=void 0;const c=e(7609),A=e(9456),a=e(4601),d=e(7019),m=l(e(7207)),s=["string","number","boolean"];class i{constructor(n){this.data={tabTitle:A.Config.getInstance().config.texts.mainTitle,loadingChat:!1,tabCloseConfirmationCloseButton:null,tabCloseConfirmationKeepButton:null,tabCloseConfirmationMessage:null,cancelButtonWhenLoading:!0,showChatAvatars:!1,quickActionCommands:[],contextCommands:[],promptInputPlaceholder:"",promptInputInfo:"",promptInputStickyCard:null,promptInputDisabledState:!1,chatItems:[],selectedCodeSnippet:"",tabBarButtons:[],...n}}}t.EmptyMynahUIDataModel=i,t.MynahUIDataStore=class{constructor(o,n){this.store=new i().data,this.defaults=null,this.setDefaults=h=>{this.defaults=h},this.getDefaults=()=>this.defaults,this.getStore=()=>this.store,this.subscribe=(h,g)=>{const f=(0,d.generateUID)();return this.subscriptions[h][f]=g,f},this.unsubscribe=(h,g)=>{var f;((f=this.subscriptions[h])===null||f===void 0?void 0:f[g])!==void 0&&delete this.subscriptions[h][g]},this.getValue=h=>(0,m.default)(this.store[h]),this.getDefaultValue=h=>new i(this.defaults).data[h],this.updateStore=(h,g)=>{g!==!0&&Object.keys(h).forEach(f=>{Object.keys(this.subscriptions[f]).forEach(C=>{s.includes(typeof h[f])&&h[f]===this.store[f]||this.subscriptions[f][C](h[f],this.store[f])})}),this.store=Object.assign((0,m.default)(this.store),h)},this.resetStore=()=>{this.updateStore(new i((0,m.default)(this.defaults)).data),a.MynahUIGlobalEvents.getInstance().dispatch(c.MynahEventNames.RESET_STORE,{tabId:this.tabId})},this.tabId=o,this.store=Object.assign(this.store,n),this.subscriptions=Object.create({}),Object.keys(this.store).forEach(h=>{Object.assign(this.subscriptions,{[h]:{}})})}}},6508:function(v,t,e){"use strict";var l=this&&this.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(t,"__esModule",{value:!0}),t.MynahUITabsStore=t.EmptyMynahUITabsStoreModel=void 0;const c=l(e(7207)),A=e(9456),a=e(7019),d=e(4511);t.EmptyMynahUITabsStoreModel=class{constructor(){const s=(0,a.generateUID)();this.data={[s]:{isSelected:!0,store:{}}}}};class m{constructor(i,o){this.subscriptions={add:{},remove:{},update:{},selectedTabChange:{}},this.tabDefaults={},this.tabsStore={},this.tabsDataStore={},this.deselectAllTabs=()=>{Object.keys(this.tabsStore).forEach(n=>{this.tabsStore[n].isSelected=!1})},this.addTab=n=>{var h;if(Object.keys(this.tabsStore).length<A.Config.getInstance().config.maxTabs){const g=(0,a.generateUID)();return this.deselectAllTabs(),this.tabsStore[g]={...this.tabDefaults,...n,isSelected:!0},this.tabsDataStore[g]=new d.MynahUIDataStore(g,(h=this.tabsStore[g].store)!==null&&h!==void 0?h:{}),this.informSubscribers("add",g,this.tabsStore[g]),this.informSubscribers("selectedTabChange",g,this.tabsStore[g]),g}},this.removeTab=n=>{var h;const g=(h=this.tabsStore[n].isSelected)!==null&&h!==void 0&&h;let f;if(delete this.tabsStore[n],this.tabsDataStore[n].resetStore(),delete this.tabsDataStore[n],g){const C=Object.keys(this.tabsStore);C.length>0&&(this.deselectAllTabs(),this.selectTab(C[C.length-1]),f=this.tabsStore[this.getSelectedTabId()])}return this.informSubscribers("remove",n,f),n},this.selectTab=n=>{this.deselectAllTabs(),this.tabsStore[n].isSelected=!0,this.informSubscribers("selectedTabChange",n,this.tabsStore[n])},this.updateTab=(n,h,g)=>{this.tabsStore[n]!==void 0&&(h?.isSelected===!0&&this.getSelectedTabId()!==n&&(this.deselectAllTabs(),this.informSubscribers("selectedTabChange",n)),this.tabsStore[n]={...this.tabsStore[n],...h},h?.store!==void 0&&(this.tabsDataStore[n]===void 0&&(this.tabsDataStore[n]=new d.MynahUIDataStore(n)),this.tabsDataStore[n].updateStore(h?.store)),g!==!0&&this.informSubscribers("update",n,this.tabsStore[n]))},this.addListener=(n,h)=>{const g=(0,a.generateUID)();return this.subscriptions[n][g]=h,g},this.addListenerToDataStore=(n,h,g)=>this.tabsDataStore[n]!==void 0?this.tabsDataStore[n].subscribe(h,g):null,this.removeListenerFromDataStore=(n,h,g)=>{this.tabsDataStore[n]!==void 0&&this.tabsDataStore[n].unsubscribe(g,h)},this.removeListener=(n,h)=>{this.subscriptions[n][h]!==void 0&&delete this.subscriptions[n][h]},this.informSubscribers=(n,h,g)=>{Object.keys(this.subscriptions[n]).forEach(f=>{this.subscriptions[n][f](h,g)})},this.getTab=n=>{var h;return(h=this.tabsStore[n])!==null&&h!==void 0?h:null},this.getAllTabs=()=>{const n=(0,c.default)(this.tabsStore);return Object.keys(n).forEach(h=>{var g;n[h].store=(g=(0,c.default)(this.getTabDataStore(h).getStore()))!==null&&g!==void 0?g:{}}),n},this.getTabDataStore=n=>this.tabsDataStore[n],this.getSelectedTabId=()=>{var n;return(n=Object.keys(this.tabsStore).find(h=>this.tabsStore[h].isSelected===!0))!==null&&n!==void 0?n:""},this.removeAllTabs=()=>{Object.keys(this.tabsStore).forEach(n=>{this.removeTab(n)})},this.tabsLength=()=>Object.keys(this.tabsStore).length,this.tabsStore=Object.assign(this.tabsStore,i),o!=null&&(this.tabDefaults=o),i!=null&&Object.keys(i).length>0&&Object.keys(i).forEach(n=>{var h;this.tabsDataStore[n]=new d.MynahUIDataStore(n,(h=i[n].store)!==null&&h!==void 0?h:{})})}}t.MynahUITabsStore=m,m.getInstance=(s,i)=>(m.instance===void 0&&(m.instance=new m(s,i)),m.instance)},827:(v,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOrigin=void 0,t.getOrigin=e=>{let l="";try{l=new URL(e).origin}catch{l="unknown"}return l}},8519:function(v,t,e){"use strict";var l=this&&this.__createBinding||(Object.create?function(T,z,O,P){P===void 0&&(P=O);var L=Object.getOwnPropertyDescriptor(z,O);L&&!("get"in L?!z.__esModule:L.writable||L.configurable)||(L={enumerable:!0,get:function(){return z[O]}}),Object.defineProperty(T,P,L)}:function(T,z,O,P){P===void 0&&(P=O),T[P]=z[O]}),c=this&&this.__exportStar||function(T,z){for(var O in T)O==="default"||Object.prototype.hasOwnProperty.call(z,O)||l(z,T,O)};Object.defineProperty(t,"__esModule",{value:!0}),t.MynahUI=t.ChatItemCardContent=t.TextAreaAbstract=t.TextInputAbstract=t.SelectAbstract=t.RadioGroupAbstract=t.ButtonAbstract=t.DomBuilder=t.MynahIcons=t.generateUID=void 0;const A=e(7067),a=e(4769),d=e(7609),m=e(4601),s=e(6446),i=e(8347),o=e(8054),n=e(6508),h=e(9456),g=e(970);e(7159);const f=e(7019),C=e(6075);var w=e(7019);Object.defineProperty(t,"generateUID",{enumerable:!0,get:function(){return w.generateUID}}),c(e(7609),t);var u=e(9275);Object.defineProperty(t,"MynahIcons",{enumerable:!0,get:function(){return u.MynahIcons}});var y=e(4769);Object.defineProperty(t,"DomBuilder",{enumerable:!0,get:function(){return y.DomBuilder}});var r=e(1407);Object.defineProperty(t,"ButtonAbstract",{enumerable:!0,get:function(){return r.ButtonAbstract}});var p=e(4432);Object.defineProperty(t,"RadioGroupAbstract",{enumerable:!0,get:function(){return p.RadioGroupAbstract}});var b=e(2010);Object.defineProperty(t,"SelectAbstract",{enumerable:!0,get:function(){return b.SelectAbstract}});var x=e(9897);Object.defineProperty(t,"TextInputAbstract",{enumerable:!0,get:function(){return x.TextInputAbstract}});var I=e(626);Object.defineProperty(t,"TextAreaAbstract",{enumerable:!0,get:function(){return I.TextAreaAbstract}});var M=e(5056);Object.defineProperty(t,"ChatItemCardContent",{enumerable:!0,get:function(){return M.ChatItemCardContent}}),t.MynahUI=class{constructor(T){var z,O;this.lastEventId="",this.chatWrappers={},this.getUserEventId=()=>(this.lastEventId=(0,f.generateUID)(),this.lastEventId),this.focusToInput=D=>{h.Config.getInstance().config.autoFocus&&m.MynahUIGlobalEvents.getInstance().dispatch(d.MynahEventNames.TAB_FOCUS,{tabId:D})},this.addGlobalListeners=()=>{m.MynahUIGlobalEvents.getInstance().addListener(d.MynahEventNames.CHAT_PROMPT,D=>{this.props.onChatPrompt!==void 0&&this.props.onChatPrompt(D.tabId,D.prompt,this.getUserEventId())}),m.MynahUIGlobalEvents.getInstance().addListener(d.MynahEventNames.FOLLOW_UP_CLICKED,D=>{this.props.onFollowUpClicked!==void 0&&this.props.onFollowUpClicked(D.tabId,D.messageId,D.followUpOption,this.getUserEventId())}),m.MynahUIGlobalEvents.getInstance().addListener(d.MynahEventNames.BODY_ACTION_CLICKED,D=>{this.props.onInBodyButtonClicked!==void 0&&this.props.onInBodyButtonClicked(D.tabId,D.messageId,{id:D.actionId,text:D.actionText,formItemValues:D.formItemValues},this.getUserEventId())}),m.MynahUIGlobalEvents.getInstance().addListener(d.MynahEventNames.SHOW_MORE_WEB_RESULTS_CLICK,D=>{this.props.onShowMoreWebResultsClick!==void 0&&this.props.onShowMoreWebResultsClick(n.MynahUITabsStore.getInstance().getSelectedTabId(),D.messageId,this.getUserEventId())}),m.MynahUIGlobalEvents.getInstance().addListener(d.MynahEventNames.FEEDBACK_SET,D=>{this.props.onSendFeedback!==void 0&&this.props.onSendFeedback(n.MynahUITabsStore.getInstance().getSelectedTabId(),D,this.getUserEventId())}),m.MynahUIGlobalEvents.getInstance().addListener(d.MynahEventNames.CHAT_ITEM_ENGAGEMENT,D=>{this.props.onChatItemEngagement!==void 0&&this.props.onChatItemEngagement(n.MynahUITabsStore.getInstance().getSelectedTabId(),D.messageId,D.engagement)}),m.MynahUIGlobalEvents.getInstance().addListener(d.MynahEventNames.COPY_CODE_TO_CLIPBOARD,D=>{this.props.onCopyCodeToClipboard!==void 0&&this.props.onCopyCodeToClipboard(n.MynahUITabsStore.getInstance().getSelectedTabId(),D.messageId,D.text,D.type,D.referenceTrackerInformation,this.getUserEventId(),D.codeBlockIndex,D.totalCodeBlocks)}),m.MynahUIGlobalEvents.getInstance().addListener(d.MynahEventNames.INSERT_CODE_TO_CURSOR_POSITION,D=>{this.props.onCodeInsertToCursorPosition!==void 0&&this.props.onCodeInsertToCursorPosition(n.MynahUITabsStore.getInstance().getSelectedTabId(),D.messageId,D.text,D.type,D.referenceTrackerInformation,this.getUserEventId(),D.codeBlockIndex,D.totalCodeBlocks)}),m.MynahUIGlobalEvents.getInstance().addListener(d.MynahEventNames.SOURCE_LINK_CLICK,D=>{this.props.onSourceLinkClick!==void 0&&this.props.onSourceLinkClick(n.MynahUITabsStore.getInstance().getSelectedTabId(),D.messageId,D.link,D.event,this.getUserEventId())}),m.MynahUIGlobalEvents.getInstance().addListener(d.MynahEventNames.LINK_CLICK,D=>{this.props.onLinkClick!==void 0&&this.props.onLinkClick(n.MynahUITabsStore.getInstance().getSelectedTabId(),D.messageId,D.link,D.event,this.getUserEventId())}),m.MynahUIGlobalEvents.getInstance().addListener(d.MynahEventNames.INFO_LINK_CLICK,D=>{this.props.onInfoLinkClick!==void 0&&this.props.onInfoLinkClick(n.MynahUITabsStore.getInstance().getSelectedTabId(),D.link,D.event,this.getUserEventId())}),m.MynahUIGlobalEvents.getInstance().addListener(d.MynahEventNames.CARD_VOTE,D=>{this.props.onVote!==void 0&&this.props.onVote(D.tabId,D.messageId,D.vote,this.getUserEventId())}),m.MynahUIGlobalEvents.getInstance().addListener(d.MynahEventNames.RESET_STORE,D=>{this.props.onResetStore!==void 0&&this.props.onResetStore(D.tabId)}),m.MynahUIGlobalEvents.getInstance().addListener(d.MynahEventNames.FILE_CLICK,D=>{this.props.onFileClick!==void 0&&this.props.onFileClick(D.tabId,D.filePath,D.deleted,D.messageId,this.getUserEventId()),this.props.onOpenDiff!==void 0&&(console.warn("onOpenDiff will be deprecated after v5.x.x. Please use MynahUIProps.onFileClick instead"),this.props.onOpenDiff(D.tabId,D.filePath,D.deleted,D.messageId,this.getUserEventId()))}),m.MynahUIGlobalEvents.getInstance().addListener(d.MynahEventNames.FILE_ACTION_CLICK,D=>{this.props.onFileActionClick!==void 0&&this.props.onFileActionClick(D.tabId,D.messageId,D.filePath,D.actionName,this.getUserEventId())}),m.MynahUIGlobalEvents.getInstance().addListener(d.MynahEventNames.CUSTOM_FORM_ACTION_CLICK,D=>{this.props.onCustomFormAction!==void 0&&this.props.onCustomFormAction(D.tabId,D,this.getUserEventId())}),m.MynahUIGlobalEvents.getInstance().addListener(d.MynahEventNames.TAB_BAR_BUTTON_CLICK,D=>{this.props.onTabBarButtonClick!==void 0&&this.props.onTabBarButtonClick(D.tabId,D.buttonId,this.getUserEventId())})},this.addToUserPrompt=(D,U,G)=>{h.Config.getInstance().config.showPromptField&&n.MynahUITabsStore.getInstance().getTab(D)!==null&&this.chatWrappers[D].addAttachmentToPrompt(U,G)},this.addChatItem=(D,U)=>{n.MynahUITabsStore.getInstance().getTab(D)!==null&&(m.MynahUIGlobalEvents.getInstance().dispatch(d.MynahEventNames.CHAT_ITEM_ADD,{tabId:D,chatItem:U}),n.MynahUITabsStore.getInstance().getTabDataStore(D).updateStore({chatItems:[...n.MynahUITabsStore.getInstance().getTabDataStore(D).getValue("chatItems"),U]}))},this.updateLastChatAnswer=(D,U)=>{n.MynahUITabsStore.getInstance().getTab(D)!==null&&this.chatWrappers[D].updateLastChatAnswer(U)},this.updateChatAnswerWithMessageId=(D,U,G)=>{n.MynahUITabsStore.getInstance().getTab(D)!==null&&this.chatWrappers[D].updateChatAnswerWithMessageId(U,G)},this.endMessageStream=(D,U,G)=>{if(n.MynahUITabsStore.getInstance().getTab(D)!==null){const q=this.chatWrappers[D].getChatItem(U);if(q!=null&&![d.ChatItemType.AI_PROMPT,d.ChatItemType.PROMPT,d.ChatItemType.SYSTEM_PROMPT].includes(q.chatItem.type))return this.chatWrappers[D].endStreamWithMessageId(U,{type:d.ChatItemType.ANSWER,...G}),q.renderDetails}return{totalNumberOfCodeBlocks:0}},this.selectTab=(D,U)=>{U===this.lastEventId&&n.MynahUITabsStore.getInstance().getTab(D)!==null&&n.MynahUITabsStore.getInstance().selectTab(D)},this.removeTab=(D,U)=>{U===this.lastEventId&&n.MynahUITabsStore.getInstance().getTab(D)!==null&&n.MynahUITabsStore.getInstance().removeTab(D)},this.updateStore=(D,U)=>D===""?n.MynahUITabsStore.getInstance().addTab({store:{...U}}):(n.MynahUITabsStore.getInstance().getTab(D)!==null&&n.MynahUITabsStore.getInstance().updateTab(D,{store:{...U}}),D),this.getSelectedTabId=()=>{const D=n.MynahUITabsStore.getInstance().getSelectedTabId();return D===""?void 0:D},this.getAllTabs=()=>n.MynahUITabsStore.getInstance().getAllTabs(),this.notify=D=>{new A.Notification({...D,onNotificationClick:D.onNotificationClick!=null?()=>{D.onNotificationClick!=null&&D.onNotificationClick(this.getUserEventId())}:void 0,onNotificationHide:D.onNotificationHide!=null?()=>{D.onNotificationHide!=null&&D.onNotificationHide(this.getUserEventId())}:void 0}).notify()},this.showCustomForm=(D,U,G,q,J)=>{m.MynahUIGlobalEvents.getInstance().dispatch(d.MynahEventNames.SHOW_FEEDBACK_FORM,{tabId:D,customFormData:{title:q,description:J,buttons:G,formItems:U}})},g.marked.use({renderer:{listitem:D=>`<li>${g.marked.parse(D,{breaks:!1})}</li>`}}),this.props=T,h.Config.getInstance(T.config),a.DomBuilder.getInstance(T.rootSelector),n.MynahUITabsStore.getInstance(this.props.tabs,this.props.defaults),m.MynahUIGlobalEvents.getInstance();const P=n.MynahUITabsStore.getInstance().getAllTabs();this.tabContentsWrapper=a.DomBuilder.getInstance().build({type:"div",classNames:["mynah-ui-tab-contents-wrapper"],children:Object.keys(P).slice(0,h.Config.getInstance().config.maxTabs).map(D=>(this.chatWrappers[D]=new i.ChatWrapper({tabId:D,onStopChatResponse:T.onStopChatResponse!=null?U=>{T.onStopChatResponse!=null&&T.onStopChatResponse(U,this.getUserEventId())}:void 0}),this.chatWrappers[D].render))}),T.onSendFeedback!==void 0&&(this.feedbackForm=new o.FeedbackForm),h.Config.getInstance().config.maxTabs>1&&(this.tabsWrapper=new s.Tabs({onChange:D=>{this.focusToInput(D),this.props.onTabChange!==void 0&&this.props.onTabChange(D,this.getUserEventId())},onBeforeTabRemove:D=>T.onBeforeTabRemove===void 0||T.onBeforeTabRemove(D,this.getUserEventId())}).render,this.tabsWrapper.setAttribute("selected-tab",n.MynahUITabsStore.getInstance().getSelectedTabId())),this.render=a.DomBuilder.getInstance().createPortal(d.MynahPortalNames.WRAPPER,{type:"div",attributes:{id:"mynah-wrapper"},children:[(z=this.tabsWrapper)!==null&&z!==void 0?z:"",...h.Config.getInstance().config.maxTabs>1?[new C.NoTabs().render]:[],this.tabContentsWrapper]},"afterbegin"),n.MynahUITabsStore.getInstance().addListener("add",D=>{this.chatWrappers[D]=new i.ChatWrapper({tabId:D,onStopChatResponse:T.onStopChatResponse!=null?U=>{T.onStopChatResponse!=null&&T.onStopChatResponse(U,this.getUserEventId())}:void 0}),this.tabContentsWrapper.appendChild(this.chatWrappers[D].render),this.focusToInput(D),this.props.onTabAdd!==void 0&&this.props.onTabAdd(D,this.getUserEventId())}),n.MynahUITabsStore.getInstance().addListener("remove",D=>{this.chatWrappers[D].render.remove(),delete this.chatWrappers[D],this.props.onTabRemove!==void 0&&this.props.onTabRemove(D,this.getUserEventId())}),this.addGlobalListeners();const L=(O=n.MynahUITabsStore.getInstance().getSelectedTabId())!==null&&O!==void 0?O:"";window.addEventListener("focus",()=>{this.focusToInput(L)},!1),this.focusToInput(L),this.props.onReady!==void 0&&this.props.onReady()}}},7609:(v,t)=>{"use strict";var e,l,c,A,a,d,m;Object.defineProperty(t,"__esModule",{value:!0}),t.NotificationType=t.EngagementType=t.RelevancyVoteType=t.KeyMap=t.ChatItemType=t.MynahPortalNames=t.MynahEventNames=void 0,function(s){s.RESET_STORE="resetStore",s.FEEDBACK_SET="feedbackSet",s.CARD_VOTE="cardVote",s.SOURCE_LINK_CLICK="sourceLinkClick",s.INFO_LINK_CLICK="infoLinkClick",s.LINK_CLICK="linkClick",s.CHAT_ITEM_ENGAGEMENT="chatItemEngagement",s.COPY_CODE_TO_CLIPBOARD="copyCodeToClipboard",s.INSERT_CODE_TO_CURSOR_POSITION="insertCodeToCursorPosition",s.CHAT_PROMPT="chatPrompt",s.CHAT_ITEM_ADD="chatItemAdd",s.FOLLOW_UP_CLICKED="followUpClicked",s.BODY_ACTION_CLICKED="bodyActionClicked",s.SHOW_MORE_WEB_RESULTS_CLICK="showMoreWebResultsClick",s.SHOW_FEEDBACK_FORM="showFeedbackForm",s.FILE_CLICK="fileClick",s.FILE_ACTION_CLICK="fileActionClick",s.TAB_FOCUS="tabFocus",s.CUSTOM_FORM_ACTION_CLICK="customFormActionClick",s.ADD_ATTACHMENT="addAttachment",s.REMOVE_ATTACHMENT="removeAttachment",s.TAB_BAR_BUTTON_CLICK="tabBarButtonClick"}(e||(t.MynahEventNames=e={})),function(s){s.WRAPPER="wrapper",s.SIDE_NAV="sideNav",s.OVERLAY="overlay",s.FEEDBACK_FORM="feedbackForm"}(l||(t.MynahPortalNames=l={})),function(s){s.PROMPT="prompt",s.SYSTEM_PROMPT="system-prompt",s.AI_PROMPT="ai-prompt",s.ANSWER="answer",s.ANSWER_STREAM="answer-stream",s.ANSWER_PART="answer-part",s.CODE_RESULT="code-result"}(c||(t.ChatItemType=c={})),function(s){s.ESCAPE="Escape",s.ENTER="Enter",s.BACKSPACE="Backspace",s.SPACE=" ",s.DELETE="Delete",s.ARROW_UP="ArrowUp",s.ARROW_DOWN="ArrowDown",s.ARROW_LEFT="ArrowLeft",s.ARROW_RIGHT="ArrowRight",s.PAGE_UP="PageUp",s.PAGED_OWN="PageDown",s.HOME="Home",s.END="End",s.META="Meta",s.TAB="Tab",s.SHIFT="Shift",s.CONTROL="Control",s.ALT="Alt",s.AT="@",s.SLASH="/",s.BACK_SLASH="\\"}(A||(t.KeyMap=A={})),function(s){s.UP="upvote",s.DOWN="downvote"}(a||(t.RelevancyVoteType=a={})),function(s){s.INTERACTION="interaction",s.TIME="timespend"}(d||(t.EngagementType=d={})),function(s){s.INFO="info",s.SUCCESS="ok-circled",s.WARNING="warning",s.ERROR="error"}(m||(t.NotificationType=m={}))},5937:v=>{"use strict";v.exports=function(t){return String(t).replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&#x3A;/g,":").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")}},2868:()=>{},4777:()=>{},9830:()=>{},209:()=>{},7414:()=>{},7207:v=>{v.exports=function t(e){let l=e;var c={}.toString.call(e).slice(8,-1);if(c=="Set")return new Set([...e].map(a=>t(a)));if(c=="Map")return new Map([...e].map(a=>[t(a[0]),t(a[1])]));if(c=="Date")return new Date(e.getTime());if(c=="RegExp")return RegExp(e.source,function(a){if(typeof a.source.flags=="string")return a.source.flags;var d=[];return a.global&&d.push("g"),a.ignoreCase&&d.push("i"),a.multiline&&d.push("m"),a.sticky&&d.push("y"),a.unicode&&d.push("u"),d.join("")}(e));if(c=="Array"||c=="Object")for(var A in l=Array.isArray(e)?[]:{},e)l[A]=t(e[A]);return l}},970:(v,t)=>{var Ue,He,Pe,Qe;"use strict";function e(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}function l(re){t.defaults=re}t.defaults={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null};const c=/[&<>"']/,A=new RegExp(c.source,"g"),a=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,d=new RegExp(a.source,"g"),m={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},s=re=>m[re];function i(re,N){if(N){if(c.test(re))return re.replace(A,s)}else if(a.test(re))return re.replace(d,s);return re}const o=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function n(re){return re.replace(o,(N,k)=>(k=k.toLowerCase())==="colon"?":":k.charAt(0)==="#"?k.charAt(1)==="x"?String.fromCharCode(parseInt(k.substring(2),16)):String.fromCharCode(+k.substring(1)):"")}const h=/(^|[^\[])\^/g;function g(re,N){let k=typeof re=="string"?re:re.source;N=N||"";const E={replace:(B,j)=>{let S=typeof j=="string"?j:j.source;return S=S.replace(h,"$1"),k=k.replace(B,S),E},getRegex:()=>new RegExp(k,N)};return E}function f(re){try{re=encodeURI(re).replace(/%25/g,"%")}catch{return null}return re}const C={exec:()=>null};function w(re,N){const k=re.replace(/\|/g,(B,j,S)=>{let R=!1,F=j;for(;--F>=0&&S[F]==="\\";)R=!R;return R?"|":" |"}).split(/ \|/);let E=0;if(k[0].trim()||k.shift(),k.length>0&&!k[k.length-1].trim()&&k.pop(),N)if(k.length>N)k.splice(N);else for(;k.length<N;)k.push("");for(;E<k.length;E++)k[E]=k[E].trim().replace(/\\\|/g,"|");return k}function u(re,N,k){const E=re.length;if(E===0)return"";let B=0;for(;B<E;){const j=re.charAt(E-B-1);if(j!==N||k){if(j===N||!k)break;B++}else B++}return re.slice(0,E-B)}function y(re,N,k,E){const B=N.href,j=N.title?i(N.title):null,S=re[1].replace(/\\([\[\]])/g,"$1");if(re[0].charAt(0)!=="!"){E.state.inLink=!0;const R={type:"link",raw:k,href:B,title:j,text:S,tokens:E.inlineTokens(S)};return E.state.inLink=!1,R}return{type:"image",raw:k,href:B,title:j,text:i(S)}}class r{constructor(N){pe(this,"options");pe(this,"rules");pe(this,"lexer");this.options=N||t.defaults}space(N){const k=this.rules.block.newline.exec(N);if(k&&k[0].length>0)return{type:"space",raw:k[0]}}code(N){const k=this.rules.block.code.exec(N);if(k){const E=k[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:k[0],codeBlockStyle:"indented",text:this.options.pedantic?E:u(E,`
`)}}}fences(N){const k=this.rules.block.fences.exec(N);if(k){const E=k[0],B=function(j,S){const R=j.match(/^(\s+)(?:```)/);if(R===null)return S;const F=R[1];return S.split(`
`).map(X=>{const Z=X.match(/^\s+/);if(Z===null)return X;const[ie]=Z;return ie.length>=F.length?X.slice(F.length):X}).join(`
`)}(E,k[3]||"");return{type:"code",raw:E,lang:k[2]?k[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):k[2],text:B}}}heading(N){const k=this.rules.block.heading.exec(N);if(k){let E=k[2].trim();if(/#$/.test(E)){const B=u(E,"#");this.options.pedantic?E=B.trim():B&&!/ $/.test(B)||(E=B.trim())}return{type:"heading",raw:k[0],depth:k[1].length,text:E,tokens:this.lexer.inline(E)}}}hr(N){const k=this.rules.block.hr.exec(N);if(k)return{type:"hr",raw:k[0]}}blockquote(N){const k=this.rules.block.blockquote.exec(N);if(k){let E=k[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);E=u(E.replace(/^ *>[ \t]?/gm,""),`
`);const B=this.lexer.state.top;this.lexer.state.top=!0;const j=this.lexer.blockTokens(E);return this.lexer.state.top=B,{type:"blockquote",raw:k[0],tokens:j,text:E}}}list(N){let k=this.rules.block.list.exec(N);if(k){let E=k[1].trim();const B=E.length>1,j={type:"list",raw:"",ordered:B,start:B?+E.slice(0,-1):"",loose:!1,items:[]};E=B?`\\d{1,9}\\${E.slice(-1)}`:`\\${E}`,this.options.pedantic&&(E=B?E:"[*+-]");const S=new RegExp(`^( {0,3}${E})((?:[	 ][^\\n]*)?(?:\\n|$))`);let R="",F="",X=!1;for(;N;){let Z=!1;if(!(k=S.exec(N))||this.rules.block.hr.test(N))break;R=k[0],N=N.substring(R.length);let ie=k[2].split(`
`,1)[0].replace(/^\t+/,$e=>" ".repeat(3*$e.length)),te=N.split(`
`,1)[0],Ae=0;this.options.pedantic?(Ae=2,F=ie.trimStart()):(Ae=k[2].search(/[^ ]/),Ae=Ae>4?1:Ae,F=ie.slice(Ae),Ae+=k[1].length);let je=!1;if(!ie&&/^ *$/.test(te)&&(R+=te+`
`,N=N.substring(te.length+1),Z=!0),!Z){const $e=new RegExp(`^ {0,${Math.min(3,Ae-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),We=new RegExp(`^ {0,${Math.min(3,Ae-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),Ye=new RegExp(`^ {0,${Math.min(3,Ae-1)}}(?:\`\`\`|~~~)`),Ve=new RegExp(`^ {0,${Math.min(3,Ae-1)}}#`);for(;N;){const Fe=N.split(`
`,1)[0];if(te=Fe,this.options.pedantic&&(te=te.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),Ye.test(te)||Ve.test(te)||$e.test(te)||We.test(N))break;if(te.search(/[^ ]/)>=Ae||!te.trim())F+=`
`+te.slice(Ae);else{if(je||ie.search(/[^ ]/)>=4||Ye.test(ie)||Ve.test(ie)||We.test(ie))break;F+=`
`+te}je||te.trim()||(je=!0),R+=Fe+`
`,N=N.substring(Fe.length+1),ie=te.slice(Ae)}}j.loose||(X?j.loose=!0:/\n *\n *$/.test(R)&&(X=!0));let Oe,Le=null;this.options.gfm&&(Le=/^\[[ xX]\] /.exec(F),Le&&(Oe=Le[0]!=="[ ] ",F=F.replace(/^\[[ xX]\] +/,""))),j.items.push({type:"list_item",raw:R,task:!!Le,checked:Oe,loose:!1,text:F,tokens:[]}),j.raw+=R}j.items[j.items.length-1].raw=R.trimEnd(),j.items[j.items.length-1].text=F.trimEnd(),j.raw=j.raw.trimEnd();for(let Z=0;Z<j.items.length;Z++)if(this.lexer.state.top=!1,j.items[Z].tokens=this.lexer.blockTokens(j.items[Z].text,[]),!j.loose){const ie=j.items[Z].tokens.filter(Ae=>Ae.type==="space"),te=ie.length>0&&ie.some(Ae=>/\n.*\n/.test(Ae.raw));j.loose=te}if(j.loose)for(let Z=0;Z<j.items.length;Z++)j.items[Z].loose=!0;return j}}html(N){const k=this.rules.block.html.exec(N);if(k)return{type:"html",block:!0,raw:k[0],pre:k[1]==="pre"||k[1]==="script"||k[1]==="style",text:k[0]}}def(N){const k=this.rules.block.def.exec(N);if(k){const E=k[1].toLowerCase().replace(/\s+/g," "),B=k[2]?k[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",j=k[3]?k[3].substring(1,k[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):k[3];return{type:"def",tag:E,raw:k[0],href:B,title:j}}}table(N){const k=this.rules.block.table.exec(N);if(!k||!/[:|]/.test(k[2]))return;const E=w(k[1]),B=k[2].replace(/^\||\| *$/g,"").split("|"),j=k[3]&&k[3].trim()?k[3].replace(/\n[ \t]*$/,"").split(`
`):[],S={type:"table",raw:k[0],header:[],align:[],rows:[]};if(E.length===B.length){for(const R of B)/^ *-+: *$/.test(R)?S.align.push("right"):/^ *:-+: *$/.test(R)?S.align.push("center"):/^ *:-+ *$/.test(R)?S.align.push("left"):S.align.push(null);for(const R of E)S.header.push({text:R,tokens:this.lexer.inline(R)});for(const R of j)S.rows.push(w(R,S.header.length).map(F=>({text:F,tokens:this.lexer.inline(F)})));return S}}lheading(N){const k=this.rules.block.lheading.exec(N);if(k)return{type:"heading",raw:k[0],depth:k[2].charAt(0)==="="?1:2,text:k[1],tokens:this.lexer.inline(k[1])}}paragraph(N){const k=this.rules.block.paragraph.exec(N);if(k){const E=k[1].charAt(k[1].length-1)===`
`?k[1].slice(0,-1):k[1];return{type:"paragraph",raw:k[0],text:E,tokens:this.lexer.inline(E)}}}text(N){const k=this.rules.block.text.exec(N);if(k)return{type:"text",raw:k[0],text:k[0],tokens:this.lexer.inline(k[0])}}escape(N){const k=this.rules.inline.escape.exec(N);if(k)return{type:"escape",raw:k[0],text:i(k[1])}}tag(N){const k=this.rules.inline.tag.exec(N);if(k)return!this.lexer.state.inLink&&/^<a /i.test(k[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(k[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(k[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(k[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:k[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:k[0]}}link(N){const k=this.rules.inline.link.exec(N);if(k){const E=k[2].trim();if(!this.options.pedantic&&/^</.test(E)){if(!/>$/.test(E))return;const S=u(E.slice(0,-1),"\\");if((E.length-S.length)%2==0)return}else{const S=function(R,F){if(R.indexOf(F[1])===-1)return-1;let X=0;for(let Z=0;Z<R.length;Z++)if(R[Z]==="\\")Z++;else if(R[Z]===F[0])X++;else if(R[Z]===F[1]&&(X--,X<0))return Z;return-1}(k[2],"()");if(S>-1){const R=(k[0].indexOf("!")===0?5:4)+k[1].length+S;k[2]=k[2].substring(0,S),k[0]=k[0].substring(0,R).trim(),k[3]=""}}let B=k[2],j="";if(this.options.pedantic){const S=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(B);S&&(B=S[1],j=S[3])}else j=k[3]?k[3].slice(1,-1):"";return B=B.trim(),/^</.test(B)&&(B=this.options.pedantic&&!/>$/.test(E)?B.slice(1):B.slice(1,-1)),y(k,{href:B&&B.replace(this.rules.inline.anyPunctuation,"$1"),title:j&&j.replace(this.rules.inline.anyPunctuation,"$1")},k[0],this.lexer)}}reflink(N,k){let E;if((E=this.rules.inline.reflink.exec(N))||(E=this.rules.inline.nolink.exec(N))){const B=k[(E[2]||E[1]).replace(/\s+/g," ").toLowerCase()];if(!B){const j=E[0].charAt(0);return{type:"text",raw:j,text:j}}return y(E,B,E[0],this.lexer)}}emStrong(N,k,E=""){let B=this.rules.inline.emStrongLDelim.exec(N);if(B&&(!B[3]||!E.match(/[\p{L}\p{N}]/u))&&(!B[1]&&!B[2]||!E||this.rules.inline.punctuation.exec(E))){const j=[...B[0]].length-1;let S,R,F=j,X=0;const Z=B[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(Z.lastIndex=0,k=k.slice(-1*N.length+j);(B=Z.exec(k))!=null;){if(S=B[1]||B[2]||B[3]||B[4]||B[5]||B[6],!S)continue;if(R=[...S].length,B[3]||B[4]){F+=R;continue}if((B[5]||B[6])&&j%3&&!((j+R)%3)){X+=R;continue}if(F-=R,F>0)continue;R=Math.min(R,R+F+X);const ie=[...B[0]][0].length,te=N.slice(0,j+B.index+ie+R);if(Math.min(j,R)%2){const je=te.slice(1,-1);return{type:"em",raw:te,text:je,tokens:this.lexer.inlineTokens(je)}}const Ae=te.slice(2,-2);return{type:"strong",raw:te,text:Ae,tokens:this.lexer.inlineTokens(Ae)}}}}codespan(N){const k=this.rules.inline.code.exec(N);if(k){let E=k[2].replace(/\n/g," ");const B=/[^ ]/.test(E),j=/^ /.test(E)&&/ $/.test(E);return B&&j&&(E=E.substring(1,E.length-1)),E=i(E,!0),{type:"codespan",raw:k[0],text:E}}}br(N){const k=this.rules.inline.br.exec(N);if(k)return{type:"br",raw:k[0]}}del(N){const k=this.rules.inline.del.exec(N);if(k)return{type:"del",raw:k[0],text:k[2],tokens:this.lexer.inlineTokens(k[2])}}autolink(N){const k=this.rules.inline.autolink.exec(N);if(k){let E,B;return k[2]==="@"?(E=i(k[1]),B="mailto:"+E):(E=i(k[1]),B=E),{type:"link",raw:k[0],text:E,href:B,tokens:[{type:"text",raw:E,text:E}]}}}url(N){let k;if(k=this.rules.inline.url.exec(N)){let E,B;if(k[2]==="@")E=i(k[0]),B="mailto:"+E;else{let j;do j=k[0],k[0]=this.rules.inline._backpedal.exec(k[0])?.[0]??"";while(j!==k[0]);E=i(k[0]),B=k[1]==="www."?"http://"+k[0]:k[0]}return{type:"link",raw:k[0],text:E,href:B,tokens:[{type:"text",raw:E,text:E}]}}}inlineText(N){const k=this.rules.inline.text.exec(N);if(k){let E;return E=this.lexer.state.inRawBlock?k[0]:i(k[0]),{type:"text",raw:k[0],text:E}}}}const p=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,b=/(?:[*+-]|\d{1,9}[.)])/,x=g(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,b).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),I=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,M=/(?!\s*\])(?:\\.|[^\[\]\\])+/,T=g(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",M).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),z=g(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,b).getRegex(),O="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",P=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,L=g("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",P).replace("tag",O).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),D=g(I).replace("hr",p).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",O).getRegex(),U={blockquote:g(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",D).getRegex(),code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,def:T,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:p,html:L,lheading:x,list:z,newline:/^(?: *(?:\n|$))+/,paragraph:D,table:C,text:/^[^\n]+/},G=g("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",p).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",O).getRegex(),q={...U,table:G,paragraph:g(I).replace("hr",p).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",G).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",O).getRegex()},J={...U,html:g(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",P).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:C,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:g(I).replace("hr",p).replace("heading",` *#{1,6} *[^
]`).replace("lheading",x).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Y=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,ee=/^( {2,}|\\)\n(?!\s*$)/,se="\\p{P}\\p{S}",W=g(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,se).getRegex(),fe=g(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,se).getRegex(),de=g("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,se).getRegex(),ge=g("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,se).getRegex(),ue=g(/\\([punct])/,"gu").replace(/punct/g,se).getRegex(),$=g(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),H=g(P).replace("(?:-->|$)","-->").getRegex(),_=g("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",H).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),K=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Ce=g(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",K).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ce=g(/^!?\[(label)\]\[(ref)\]/).replace("label",K).replace("ref",M).getRegex(),oe=g(/^!?\[(ref)\](?:\[\])?/).replace("ref",M).getRegex(),ne={_backpedal:C,anyPunctuation:ue,autolink:$,blockSkip:/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,br:ee,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:C,emStrongLDelim:fe,emStrongRDelimAst:de,emStrongRDelimUnd:ge,escape:Y,link:Ce,nolink:oe,punctuation:W,reflink:ce,reflinkSearch:g("reflink|nolink(?!\\()","g").replace("reflink",ce).replace("nolink",oe).getRegex(),tag:_,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:C},Me={...ne,link:g(/^!?\[(label)\]\((.*?)\)/).replace("label",K).getRegex(),reflink:g(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",K).getRegex()},Ee={...ne,escape:g(Y).replace("])","~|])").getRegex(),url:g(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Ne={...Ee,br:g(ee).replace("{2,}","*").getRegex(),text:g(Ee.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},De={normal:U,gfm:q,pedantic:J},ae={normal:ne,gfm:Ee,breaks:Ne,pedantic:Me};class V{constructor(N){pe(this,"tokens");pe(this,"options");pe(this,"state");pe(this,"tokenizer");pe(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=N||t.defaults,this.options.tokenizer=this.options.tokenizer||new r,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const k={block:De.normal,inline:ae.normal};this.options.pedantic?(k.block=De.pedantic,k.inline=ae.pedantic):this.options.gfm&&(k.block=De.gfm,this.options.breaks?k.inline=ae.breaks:k.inline=ae.gfm),this.tokenizer.rules=k}static get rules(){return{block:De,inline:ae}}static lex(N,k){return new V(k).lex(N)}static lexInline(N,k){return new V(k).inlineTokens(N)}lex(N){N=N.replace(/\r\n|\r/g,`
`),this.blockTokens(N,this.tokens);for(let k=0;k<this.inlineQueue.length;k++){const E=this.inlineQueue[k];this.inlineTokens(E.src,E.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(N,k=[]){let E,B,j,S;for(N=this.options.pedantic?N.replace(/\t/g,"    ").replace(/^ +$/gm,""):N.replace(/^( *)(\t+)/gm,(R,F,X)=>F+"    ".repeat(X.length));N;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(R=>!!(E=R.call({lexer:this},N,k))&&(N=N.substring(E.raw.length),k.push(E),!0))))if(E=this.tokenizer.space(N))N=N.substring(E.raw.length),E.raw.length===1&&k.length>0?k[k.length-1].raw+=`
`:k.push(E);else if(E=this.tokenizer.code(N))N=N.substring(E.raw.length),B=k[k.length-1],!B||B.type!=="paragraph"&&B.type!=="text"?k.push(E):(B.raw+=`
`+E.raw,B.text+=`
`+E.text,this.inlineQueue[this.inlineQueue.length-1].src=B.text);else if(E=this.tokenizer.fences(N))N=N.substring(E.raw.length),k.push(E);else if(E=this.tokenizer.heading(N))N=N.substring(E.raw.length),k.push(E);else if(E=this.tokenizer.hr(N))N=N.substring(E.raw.length),k.push(E);else if(E=this.tokenizer.blockquote(N))N=N.substring(E.raw.length),k.push(E);else if(E=this.tokenizer.list(N))N=N.substring(E.raw.length),k.push(E);else if(E=this.tokenizer.html(N))N=N.substring(E.raw.length),k.push(E);else if(E=this.tokenizer.def(N))N=N.substring(E.raw.length),B=k[k.length-1],!B||B.type!=="paragraph"&&B.type!=="text"?this.tokens.links[E.tag]||(this.tokens.links[E.tag]={href:E.href,title:E.title}):(B.raw+=`
`+E.raw,B.text+=`
`+E.raw,this.inlineQueue[this.inlineQueue.length-1].src=B.text);else if(E=this.tokenizer.table(N))N=N.substring(E.raw.length),k.push(E);else if(E=this.tokenizer.lheading(N))N=N.substring(E.raw.length),k.push(E);else{if(j=N,this.options.extensions&&this.options.extensions.startBlock){let R=1/0;const F=N.slice(1);let X;this.options.extensions.startBlock.forEach(Z=>{X=Z.call({lexer:this},F),typeof X=="number"&&X>=0&&(R=Math.min(R,X))}),R<1/0&&R>=0&&(j=N.substring(0,R+1))}if(this.state.top&&(E=this.tokenizer.paragraph(j)))B=k[k.length-1],S&&B.type==="paragraph"?(B.raw+=`
`+E.raw,B.text+=`
`+E.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=B.text):k.push(E),S=j.length!==N.length,N=N.substring(E.raw.length);else if(E=this.tokenizer.text(N))N=N.substring(E.raw.length),B=k[k.length-1],B&&B.type==="text"?(B.raw+=`
`+E.raw,B.text+=`
`+E.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=B.text):k.push(E);else if(N){const R="Infinite loop on byte: "+N.charCodeAt(0);if(this.options.silent){console.error(R);break}throw new Error(R)}}return this.state.top=!0,k}inline(N,k=[]){return this.inlineQueue.push({src:N,tokens:k}),k}inlineTokens(N,k=[]){let E,B,j,S,R,F,X=N;if(this.tokens.links){const Z=Object.keys(this.tokens.links);if(Z.length>0)for(;(S=this.tokenizer.rules.inline.reflinkSearch.exec(X))!=null;)Z.includes(S[0].slice(S[0].lastIndexOf("[")+1,-1))&&(X=X.slice(0,S.index)+"["+"a".repeat(S[0].length-2)+"]"+X.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(S=this.tokenizer.rules.inline.blockSkip.exec(X))!=null;)X=X.slice(0,S.index)+"["+"a".repeat(S[0].length-2)+"]"+X.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(S=this.tokenizer.rules.inline.anyPunctuation.exec(X))!=null;)X=X.slice(0,S.index)+"++"+X.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;N;)if(R||(F=""),R=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(Z=>!!(E=Z.call({lexer:this},N,k))&&(N=N.substring(E.raw.length),k.push(E),!0))))if(E=this.tokenizer.escape(N))N=N.substring(E.raw.length),k.push(E);else if(E=this.tokenizer.tag(N))N=N.substring(E.raw.length),B=k[k.length-1],B&&E.type==="text"&&B.type==="text"?(B.raw+=E.raw,B.text+=E.text):k.push(E);else if(E=this.tokenizer.link(N))N=N.substring(E.raw.length),k.push(E);else if(E=this.tokenizer.reflink(N,this.tokens.links))N=N.substring(E.raw.length),B=k[k.length-1],B&&E.type==="text"&&B.type==="text"?(B.raw+=E.raw,B.text+=E.text):k.push(E);else if(E=this.tokenizer.emStrong(N,X,F))N=N.substring(E.raw.length),k.push(E);else if(E=this.tokenizer.codespan(N))N=N.substring(E.raw.length),k.push(E);else if(E=this.tokenizer.br(N))N=N.substring(E.raw.length),k.push(E);else if(E=this.tokenizer.del(N))N=N.substring(E.raw.length),k.push(E);else if(E=this.tokenizer.autolink(N))N=N.substring(E.raw.length),k.push(E);else if(this.state.inLink||!(E=this.tokenizer.url(N))){if(j=N,this.options.extensions&&this.options.extensions.startInline){let Z=1/0;const ie=N.slice(1);let te;this.options.extensions.startInline.forEach(Ae=>{te=Ae.call({lexer:this},ie),typeof te=="number"&&te>=0&&(Z=Math.min(Z,te))}),Z<1/0&&Z>=0&&(j=N.substring(0,Z+1))}if(E=this.tokenizer.inlineText(j))N=N.substring(E.raw.length),E.raw.slice(-1)!=="_"&&(F=E.raw.slice(-1)),R=!0,B=k[k.length-1],B&&B.type==="text"?(B.raw+=E.raw,B.text+=E.text):k.push(E);else if(N){const Z="Infinite loop on byte: "+N.charCodeAt(0);if(this.options.silent){console.error(Z);break}throw new Error(Z)}}else N=N.substring(E.raw.length),k.push(E);return k}}class he{constructor(N){pe(this,"options");this.options=N||t.defaults}code(N,k,E){const B=(k||"").match(/^\S*/)?.[0];return N=N.replace(/\n$/,"")+`
`,B?'<pre><code class="language-'+i(B)+'">'+(E?N:i(N,!0))+`</code></pre>
`:"<pre><code>"+(E?N:i(N,!0))+`</code></pre>
`}blockquote(N){return`<blockquote>
${N}</blockquote>
`}html(N,k){return N}heading(N,k,E){return`<h${k}>${N}</h${k}>
`}hr(){return`<hr>
`}list(N,k,E){const B=k?"ol":"ul";return"<"+B+(k&&E!==1?' start="'+E+'"':"")+`>
`+N+"</"+B+`>
`}listitem(N,k,E){return`<li>${N}</li>
`}checkbox(N){return"<input "+(N?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(N){return`<p>${N}</p>
`}table(N,k){return k&&(k=`<tbody>${k}</tbody>`),`<table>
<thead>
`+N+`</thead>
`+k+`</table>
`}tablerow(N){return`<tr>
${N}</tr>
`}tablecell(N,k){const E=k.header?"th":"td";return(k.align?`<${E} align="${k.align}">`:`<${E}>`)+N+`</${E}>
`}strong(N){return`<strong>${N}</strong>`}em(N){return`<em>${N}</em>`}codespan(N){return`<code>${N}</code>`}br(){return"<br>"}del(N){return`<del>${N}</del>`}link(N,k,E){const B=f(N);if(B===null)return E;let j='<a href="'+(N=B)+'"';return k&&(j+=' title="'+k+'"'),j+=">"+E+"</a>",j}image(N,k,E){const B=f(N);if(B===null)return E;let j=`<img src="${N=B}" alt="${E}"`;return k&&(j+=` title="${k}"`),j+=">",j}text(N){return N}}class ve{strong(N){return N}em(N){return N}codespan(N){return N}del(N){return N}html(N){return N}text(N){return N}link(N,k,E){return""+E}image(N,k,E){return""+E}br(){return""}}class me{constructor(N){pe(this,"options");pe(this,"renderer");pe(this,"textRenderer");this.options=N||t.defaults,this.options.renderer=this.options.renderer||new he,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ve}static parse(N,k){return new me(k).parse(N)}static parseInline(N,k){return new me(k).parseInline(N)}parse(N,k=!0){let E="";for(let B=0;B<N.length;B++){const j=N[B];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[j.type]){const S=j,R=this.options.extensions.renderers[S.type].call({parser:this},S);if(R!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(S.type)){E+=R||"";continue}}switch(j.type){case"space":continue;case"hr":E+=this.renderer.hr();continue;case"heading":{const S=j;E+=this.renderer.heading(this.parseInline(S.tokens),S.depth,n(this.parseInline(S.tokens,this.textRenderer)));continue}case"code":{const S=j;E+=this.renderer.code(S.text,S.lang,!!S.escaped);continue}case"table":{const S=j;let R="",F="";for(let Z=0;Z<S.header.length;Z++)F+=this.renderer.tablecell(this.parseInline(S.header[Z].tokens),{header:!0,align:S.align[Z]});R+=this.renderer.tablerow(F);let X="";for(let Z=0;Z<S.rows.length;Z++){const ie=S.rows[Z];F="";for(let te=0;te<ie.length;te++)F+=this.renderer.tablecell(this.parseInline(ie[te].tokens),{header:!1,align:S.align[te]});X+=this.renderer.tablerow(F)}E+=this.renderer.table(R,X);continue}case"blockquote":{const S=j,R=this.parse(S.tokens);E+=this.renderer.blockquote(R);continue}case"list":{const S=j,R=S.ordered,F=S.start,X=S.loose;let Z="";for(let ie=0;ie<S.items.length;ie++){const te=S.items[ie],Ae=te.checked,je=te.task;let Oe="";if(te.task){const Le=this.renderer.checkbox(!!Ae);X?te.tokens.length>0&&te.tokens[0].type==="paragraph"?(te.tokens[0].text=Le+" "+te.tokens[0].text,te.tokens[0].tokens&&te.tokens[0].tokens.length>0&&te.tokens[0].tokens[0].type==="text"&&(te.tokens[0].tokens[0].text=Le+" "+te.tokens[0].tokens[0].text)):te.tokens.unshift({type:"text",text:Le+" "}):Oe+=Le+" "}Oe+=this.parse(te.tokens,X),Z+=this.renderer.listitem(Oe,je,!!Ae)}E+=this.renderer.list(Z,R,F);continue}case"html":{const S=j;E+=this.renderer.html(S.text,S.block);continue}case"paragraph":{const S=j;E+=this.renderer.paragraph(this.parseInline(S.tokens));continue}case"text":{let S=j,R=S.tokens?this.parseInline(S.tokens):S.text;for(;B+1<N.length&&N[B+1].type==="text";)S=N[++B],R+=`
`+(S.tokens?this.parseInline(S.tokens):S.text);E+=k?this.renderer.paragraph(R):R;continue}default:{const S='Token with "'+j.type+'" type was not found.';if(this.options.silent)return console.error(S),"";throw new Error(S)}}}return E}parseInline(N,k){k=k||this.renderer;let E="";for(let B=0;B<N.length;B++){const j=N[B];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[j.type]){const S=this.options.extensions.renderers[j.type].call({parser:this},j);if(S!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(j.type)){E+=S||"";continue}}switch(j.type){case"escape":{const S=j;E+=k.text(S.text);break}case"html":{const S=j;E+=k.html(S.text);break}case"link":{const S=j;E+=k.link(S.href,S.title,this.parseInline(S.tokens,k));break}case"image":{const S=j;E+=k.image(S.href,S.title,S.text);break}case"strong":{const S=j;E+=k.strong(this.parseInline(S.tokens,k));break}case"em":{const S=j;E+=k.em(this.parseInline(S.tokens,k));break}case"codespan":{const S=j;E+=k.codespan(S.text);break}case"br":E+=k.br();break;case"del":{const S=j;E+=k.del(this.parseInline(S.tokens,k));break}case"text":{const S=j;E+=k.text(S.text);break}default:{const S='Token with "'+j.type+'" type was not found.';if(this.options.silent)return console.error(S),"";throw new Error(S)}}}return E}}class ke{constructor(N){pe(this,"options");this.options=N||t.defaults}preprocess(N){return N}postprocess(N){return N}processAllTokens(N){return N}}pe(ke,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class ze{constructor(...N){_e(this,Ue);_e(this,Pe);pe(this,"defaults",{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null});pe(this,"options",this.setOptions);pe(this,"parse",Re(this,Ue,He).call(this,V.lex,me.parse));pe(this,"parseInline",Re(this,Ue,He).call(this,V.lexInline,me.parseInline));pe(this,"Parser",me);pe(this,"Renderer",he);pe(this,"TextRenderer",ve);pe(this,"Lexer",V);pe(this,"Tokenizer",r);pe(this,"Hooks",ke);this.use(...N)}walkTokens(N,k){let E=[];for(const B of N)switch(E=E.concat(k.call(this,B)),B.type){case"table":{const j=B;for(const S of j.header)E=E.concat(this.walkTokens(S.tokens,k));for(const S of j.rows)for(const R of S)E=E.concat(this.walkTokens(R.tokens,k));break}case"list":{const j=B;E=E.concat(this.walkTokens(j.items,k));break}default:{const j=B;this.defaults.extensions?.childTokens?.[j.type]?this.defaults.extensions.childTokens[j.type].forEach(S=>{const R=j[S].flat(1/0);E=E.concat(this.walkTokens(R,k))}):j.tokens&&(E=E.concat(this.walkTokens(j.tokens,k)))}}return E}use(...N){const k=this.defaults.extensions||{renderers:{},childTokens:{}};return N.forEach(E=>{const B={...E};if(B.async=this.defaults.async||B.async||!1,E.extensions&&(E.extensions.forEach(j=>{if(!j.name)throw new Error("extension name required");if("renderer"in j){const S=k.renderers[j.name];k.renderers[j.name]=S?function(...R){let F=j.renderer.apply(this,R);return F===!1&&(F=S.apply(this,R)),F}:j.renderer}if("tokenizer"in j){if(!j.level||j.level!=="block"&&j.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const S=k[j.level];S?S.unshift(j.tokenizer):k[j.level]=[j.tokenizer],j.start&&(j.level==="block"?k.startBlock?k.startBlock.push(j.start):k.startBlock=[j.start]:j.level==="inline"&&(k.startInline?k.startInline.push(j.start):k.startInline=[j.start]))}"childTokens"in j&&j.childTokens&&(k.childTokens[j.name]=j.childTokens)}),B.extensions=k),E.renderer){const j=this.defaults.renderer||new he(this.defaults);for(const S in E.renderer){if(!(S in j))throw new Error(`renderer '${S}' does not exist`);if(S==="options")continue;const R=S,F=E.renderer[R],X=j[R];j[R]=(...Z)=>{let ie=F.apply(j,Z);return ie===!1&&(ie=X.apply(j,Z)),ie||""}}B.renderer=j}if(E.tokenizer){const j=this.defaults.tokenizer||new r(this.defaults);for(const S in E.tokenizer){if(!(S in j))throw new Error(`tokenizer '${S}' does not exist`);if(["options","rules","lexer"].includes(S))continue;const R=S,F=E.tokenizer[R],X=j[R];j[R]=(...Z)=>{let ie=F.apply(j,Z);return ie===!1&&(ie=X.apply(j,Z)),ie}}B.tokenizer=j}if(E.hooks){const j=this.defaults.hooks||new ke;for(const S in E.hooks){if(!(S in j))throw new Error(`hook '${S}' does not exist`);if(S==="options")continue;const R=S,F=E.hooks[R],X=j[R];ke.passThroughHooks.has(S)?j[R]=Z=>{if(this.defaults.async)return Promise.resolve(F.call(j,Z)).then(te=>X.call(j,te));const ie=F.call(j,Z);return X.call(j,ie)}:j[R]=(...Z)=>{let ie=F.apply(j,Z);return ie===!1&&(ie=X.apply(j,Z)),ie}}B.hooks=j}if(E.walkTokens){const j=this.defaults.walkTokens,S=E.walkTokens;B.walkTokens=function(R){let F=[];return F.push(S.call(this,R)),j&&(F=F.concat(j.call(this,R))),F}}this.defaults={...this.defaults,...B}}),this}setOptions(N){return this.defaults={...this.defaults,...N},this}lexer(N,k){return V.lex(N,k??this.defaults)}parser(N,k){return me.parse(N,k??this.defaults)}}Ue=new WeakSet,He=function(N,k){return(E,B)=>{const j={...B},S={...this.defaults,...j};this.defaults.async===!0&&j.async===!1&&(S.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),S.async=!0);const R=Re(this,Pe,Qe).call(this,!!S.silent,!!S.async);if(E==null)return R(new Error("marked(): input parameter is undefined or null"));if(typeof E!="string")return R(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(E)+", string expected"));if(S.hooks&&(S.hooks.options=S),S.async)return Promise.resolve(S.hooks?S.hooks.preprocess(E):E).then(F=>N(F,S)).then(F=>S.hooks?S.hooks.processAllTokens(F):F).then(F=>S.walkTokens?Promise.all(this.walkTokens(F,S.walkTokens)).then(()=>F):F).then(F=>k(F,S)).then(F=>S.hooks?S.hooks.postprocess(F):F).catch(R);try{S.hooks&&(E=S.hooks.preprocess(E));let F=N(E,S);S.hooks&&(F=S.hooks.processAllTokens(F)),S.walkTokens&&this.walkTokens(F,S.walkTokens);let X=k(F,S);return S.hooks&&(X=S.hooks.postprocess(X)),X}catch(F){return R(F)}}},Pe=new WeakSet,Qe=function(N,k){return E=>{if(E.message+=`
Please report this to https://github.com/markedjs/marked.`,N){const B="<p>An error occurred:</p><pre>"+i(E.message+"",!0)+"</pre>";return k?Promise.resolve(B):B}if(k)return Promise.reject(E);throw E}};const Se=new ze;function le(re,N){return Se.parse(re,N)}le.options=le.setOptions=function(re){return Se.setOptions(re),le.defaults=Se.defaults,l(le.defaults),le},le.getDefaults=e,le.defaults=t.defaults,le.use=function(...re){return Se.use(...re),le.defaults=Se.defaults,l(le.defaults),le},le.walkTokens=function(re,N){return Se.walkTokens(re,N)},le.parseInline=Se.parseInline,le.Parser=me,le.parser=me.parse,le.Renderer=he,le.TextRenderer=ve,le.Lexer=V,le.lexer=V.lex,le.Tokenizer=r,le.Hooks=ke,le.parse=le;const qe=le.options,Je=le.setOptions,Xe=le.use,Ke=le.walkTokens,et=le.parseInline,tt=le,nt=me.parse,at=V.lex;t.Hooks=ke,t.Lexer=V,t.Marked=ze,t.Parser=me,t.Renderer=he,t.TextRenderer=ve,t.Tokenizer=r,t.getDefaults=e,t.lexer=at,t.marked=le,t.options=qe,t.parse=tt,t.parseInline=et,t.parser=nt,t.setOptions=Je,t.use=Xe,t.walkTokens=Ke},2961:v=>{v.exports={nanoid:(t=21)=>{let e="",l=t;for(;l--;)e+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64*Math.random()|0];return e},customAlphabet:(t,e=21)=>(l=e)=>{let c="",A=l;for(;A--;)c+=t[Math.random()*t.length|0];return c}}}},xe={};function Te(v){var t=xe[v];if(t!==void 0)return t.exports;var e=xe[v]={id:v,exports:{}};return Ie[v].call(e.exports,e,e.exports,Te),e.exports}return Te.n=v=>{var t=v&&v.__esModule?()=>v.default:()=>v;return Te.d(t,{a:t}),t},Te.d=(v,t)=>{for(var e in t)Te.o(t,e)&&!Te.o(v,e)&&Object.defineProperty(v,e,{enumerable:!0,get:t[e]})},Te.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),Te.o=(v,t)=>Object.prototype.hasOwnProperty.call(v,t),Te.r=v=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(v,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(v,"__esModule",{value:!0})},Te.nc=void 0,Te(8519)})())}},be={};function ye(Q){var Ie=be[Q];if(Ie!==void 0)return Ie.exports;var xe=be[Q]={exports:{}};return we[Q](xe,xe.exports,ye),xe.exports}ye.d=(Q,Ie)=>{for(var xe in Ie)ye.o(Ie,xe)&&!ye.o(Q,xe)&&Object.defineProperty(Q,xe,{enumerable:!0,get:Ie[xe]})},ye.o=(Q,Ie)=>Object.prototype.hasOwnProperty.call(Q,Ie),ye.r=Q=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})};var Be={};(()=>{"use strict";ye.r(Be),ye.d(Be,{createMynahUI:()=>w});var Q=ye(7592);class Ie{generateAuthFollowUps(y,r){let p;switch(r){case"full-auth":p="Authenticate";break;case"use-supported-auth":case"missing_scopes":p="Enable Amazon Q";break;case"re-auth":p="Re-authenticate";break}switch(y){default:return{text:"",options:[{pillText:p,type:r,status:"info",icon:"refresh"}]}}}generateWelcomeBlockForTab(y){switch(y){case"featuredev":return{text:"Would you like to follow up with",options:[{pillText:"What are some examples of tasks?",type:"DevExamples"}]};default:return{text:"Try Examples:",options:[{pillText:"Explain selected code",prompt:"Explain selected code",type:"init-prompt"},{pillText:"How can Amazon Q help me?",type:"help"}]}}}}class xe{constructor(y){this.onSourceLinkClick=(r,p,b)=>{this.sendMessageToExtension({command:"source-link-click",tabID:r,messageId:p,link:b,tabType:"cwc"})},this.onResponseBodyLinkClick=(r,p,b)=>{this.sendMessageToExtension({command:"response-body-link-click",tabID:r,messageId:p,link:b,tabType:"cwc"})},this.onInfoLinkClick=(r,p)=>{this.sendMessageToExtension({command:"footer-info-link-click",tabID:r,link:p,tabType:"cwc"})},this.followUpClicked=(r,p,b)=>{this.sendMessageToExtension({command:"follow-up-was-clicked",followUp:b,tabID:r,messageId:p,tabType:"cwc"})},this.onTabAdd=(r,p)=>{this.sendMessageToExtension({tabID:r,command:"new-tab-was-created",tabType:"cwc",tabOpenInteractionType:p})},this.onCodeInsertToCursorPosition=(r,p,b,x,I,M,T,z)=>{this.sendMessageToExtension({tabID:r,messageId:p,code:b,command:"insert_code_at_cursor_position",tabType:"cwc",insertionTargetType:x,codeReference:I,eventId:M,codeBlockIndex:T,totalCodeBlocks:z})},this.onCopyCodeToClipboard=(r,p,b,x,I,M,T,z)=>{this.sendMessageToExtension({tabID:r,messageId:p,code:b,command:"code_was_copied_to_clipboard",tabType:"cwc",insertionTargetType:x,codeReference:I,eventId:M,codeBlockIndex:T,totalCodeBlocks:z})},this.onTabRemove=r=>{this.sendMessageToExtension({tabID:r,command:"tab-was-removed",tabType:"cwc"})},this.onTabChange=(r,p)=>{this.sendMessageToExtension({tabID:r,command:"tab-was-changed",tabType:"cwc",prevTabID:p})},this.onStopChatResponse=r=>{this.sendMessageToExtension({tabID:r,command:"stop-response",tabType:"cwc"})},this.onChatItemVoted=(r,p,b)=>{this.sendMessageToExtension({tabID:r,command:"chat-item-voted",messageId:p,vote:b,tabType:"cwc"})},this.onSendFeedback=(r,p)=>{this.sendMessageToExtension({command:"chat-item-feedback",...p,tabType:"cwc",tabID:r})},this.requestGenerativeAIAnswer=(r,p)=>new Promise((b,x)=>{this.sendMessageToExtension({tabID:r,command:"chat-prompt",chatMessage:p.chatMessage,chatCommand:p.chatCommand,tabType:"cwc"})}),this.clearChat=r=>{this.sendMessageToExtension({tabID:r,command:"clear",chatMessage:"",tabType:"cwc"})},this.help=r=>{this.sendMessageToExtension({tabID:r,command:"help",chatMessage:"",tabType:"cwc"})},this.sendTriggerMessageProcessed=async r=>{this.sendMessageToExtension({command:"trigger-message-processed",requestID:r,tabType:"cwc"})},this.processEditorContextCommandMessage=async r=>{const p=this.onCWCContextCommandMessage({body:r.message,type:Q.ChatItemType.PROMPT},r.command);await this.sendTriggerTabIDReceived(r.triggerID,p!==void 0?p:"no-available-tabs")},this.sendTriggerTabIDReceived=async(r,p)=>{this.sendMessageToExtension({command:"trigger-tabID-received",triggerID:r,tabID:p,tabType:"cwc"})},this.processChatMessage=async r=>{if(this.onChatAnswerReceived!==void 0){if(r.message!==void 0||r.relatedSuggestions!==void 0||r.codeReference!==void 0){const p=r.followUps!==void 0&&r.followUps.length>0?{text:r.followUpsHeader??"Suggested follow up questions:",options:r.followUps}:void 0,b={type:r.messageType,messageId:r.messageID??r.triggerID,body:r.message,followUp:p,canBeVoted:!0,codeReference:r.codeReference};(r.messageType==="answer-part"||r.messageType==="answer")&&(b.canBeVoted=!0),r.relatedSuggestions!==void 0&&(b.relatedContent={title:"Sources",content:r.relatedSuggestions}),this.onChatAnswerReceived(r.tabID,b),(r.messageType===Q.ChatItemType.SYSTEM_PROMPT||r.messageType===Q.ChatItemType.AI_PROMPT)&&await this.sendTriggerMessageProcessed(r.requestID);return}if(r.messageType===Q.ChatItemType.ANSWER){const p={type:r.messageType,body:void 0,relatedContent:void 0,messageId:r.messageID,codeReference:r.codeReference,followUp:r.followUps!==void 0&&r.followUps.length>0?{text:"Suggested follow up questions:",options:r.followUps}:void 0};this.onChatAnswerReceived(r.tabID,p);return}}},this.processAuthNeededException=async r=>{this.onChatAnswerReceived!==void 0&&this.onChatAnswerReceived(r.tabID,{type:Q.ChatItemType.ANSWER,messageId:r.triggerID,body:r.message,followUp:this.followUpGenerator.generateAuthFollowUps("cwc",r.authType),canBeVoted:!1})},this.handleMessageReceive=async r=>{if(r.type==="errorMessage"){this.onError(r.tabID,r.message,r.title);return}if(r.type==="showInvalidTokenNotification"){this.onWarning(r.tabID,r.message,r.title);return}if(r.type==="chatMessage"){await this.processChatMessage(r);return}if(r.type==="editorContextCommandMessage"){await this.processEditorContextCommandMessage(r);return}if(r.type==="authNeededException"){await this.processAuthNeededException(r);return}},this.sendMessageToExtension=y.sendMessageToExtension,this.onChatAnswerReceived=y.onChatAnswerReceived,this.onWarning=y.onWarning,this.onError=y.onError,this.onCWCContextCommandMessage=y.onCWCContextCommandMessage,this.followUpGenerator=new Ie}}function Te(u){const y={};for(const r of u)r.rejected&&(y[r.relativePath]={status:"error",label:"File rejected",icon:Q.MynahIcons.CANCEL_CIRCLE});return y}function v(u){const y={};for(const r of u)switch(r.rejected){case!0:y[r.relativePath]=[{icon:Q.MynahIcons.REVERT,name:"revert-rejection",description:"Revert rejection"}];break;case!1:y[r.relativePath]=[{icon:Q.MynahIcons.CANCEL_CIRCLE,status:"error",name:"reject-change",description:"Reject change"}];break}return y}class t{constructor(y){this.onCodeInsertToCursorPosition=(r,p,b,x)=>{this.sendMessageToExtension({tabID:r,code:p,command:"insert_code_at_cursor_position",codeReference:x,tabType:"featuredev"})},this.onCopyCodeToClipboard=(r,p,b,x)=>{this.sendMessageToExtension({tabID:r,code:p,command:"code_was_copied_to_clipboard",codeReference:x,tabType:"featuredev"})},this.onOpenDiff=(r,p,b)=>{this.sendMessageToExtension({command:"open-diff",tabID:r,filePath:p,deleted:b,tabType:"featuredev"})},this.onFileActionClick=(r,p,b,x)=>{this.sendMessageToExtension({command:"file-click",tabID:r,messageId:p,filePath:b,actionName:x,tabType:"featuredev"})},this.followUpClicked=(r,p)=>{this.sendMessageToExtension({command:"follow-up-was-clicked",followUp:p,tabID:r,tabType:"featuredev"})},this.requestGenerativeAIAnswer=(r,p)=>new Promise((b,x)=>{this.sendMessageToExtension({tabID:r,command:"chat-prompt",chatMessage:p.chatMessage,tabType:"featuredev"})}),this.processChatMessage=async r=>{if(this.onChatAnswerReceived!==void 0){const p={type:r.messageType,body:r.message??void 0,messageId:r.messageID??r.triggerID??"",relatedContent:void 0,canBeVoted:r.canBeVoted,snapToTop:r.snapToTop,followUp:r.followUps!==void 0&&r.followUps.length>0?{text:r.messageType===Q.ChatItemType.SYSTEM_PROMPT?"":"Please follow up with one of these",options:r.followUps}:void 0};this.onChatAnswerReceived(r.tabID,p)}},this.processCodeResultMessage=async r=>{if(this.onChatAnswerReceived!==void 0){const p=v([...r.filePaths,...r.deletedFiles]),b={type:Q.ChatItemType.ANSWER,relatedContent:void 0,followUp:void 0,canBeVoted:!0,codeReference:r.references,messageId:r.messageID??r.triggerID??r.conversationID,fileList:{rootFolderTitle:"Changes",filePaths:r.filePaths.map(x=>x.zipFilePath),deletedFiles:r.deletedFiles.map(x=>x.zipFilePath),actions:p},body:""};this.onChatAnswerReceived(r.tabID,b)}},this.processAuthNeededException=async r=>{this.onChatAnswerReceived!==void 0&&(this.onChatAnswerReceived(r.tabID,{type:Q.ChatItemType.ANSWER,body:r.message,followUp:void 0,canBeVoted:!1}),this.onChatAnswerReceived(r.tabID,{type:Q.ChatItemType.SYSTEM_PROMPT,body:void 0,followUp:this.followUpGenerator.generateAuthFollowUps("featuredev",r.authType),canBeVoted:!1}))},this.handleMessageReceive=async r=>{if(r.type==="updateFileComponent"){this.onFileComponentUpdate(r.tabID,r.filePaths,r.deletedFiles,r.messageId);return}if(r.type==="errorMessage"){this.onError(r.tabID,r.message,r.title);return}if(r.type==="showInvalidTokenNotification"){this.onWarning(r.tabID,r.message,r.title);return}if(r.type==="chatMessage"){await this.processChatMessage(r);return}if(r.type==="codeResultMessage"){await this.processCodeResultMessage(r);return}if(r.type==="asyncEventProgressMessage"){this.onAsyncEventProgress(r.tabID,r.inProgress,r.message??void 0);return}if(r.type==="updatePlaceholderMessage"){this.updatePlaceholder(r.tabID,r.newPlaceholder);return}if(r.type==="chatInputEnabledMessage"){this.chatInputEnabled(r.tabID,r.enabled);return}if(r.type==="authenticationUpdateMessage"){this.onUpdateAuthentication(r.featureDevEnabled,r.authenticatingTabIDs);return}if(r.type==="authNeededException"){await this.processAuthNeededException(r);return}if(r.type==="openNewTabMessage"){this.onNewTab("featuredev");return}},this.onStopChatResponse=r=>{this.sendMessageToExtension({tabID:r,command:"stop-response"})},this.onTabOpen=r=>{this.sendMessageToExtension({tabID:r,command:"new-tab-was-created",tabType:"featuredev"})},this.onTabRemove=r=>{this.sendMessageToExtension({tabID:r,command:"tab-was-removed",tabType:"featuredev"})},this.sendFeedback=(r,p)=>{},this.onChatItemVoted=(r,p,b)=>{this.sendMessageToExtension({tabID:r,messageId:p,vote:b,command:"chat-item-voted",tabType:"featuredev"})},this.onResponseBodyLinkClick=(r,p,b)=>{this.sendMessageToExtension({command:"response-body-link-click",tabID:r,messageId:p,link:b,tabType:"featuredev"})},this.sendMessageToExtension=y.sendMessageToExtension,this.onChatAnswerReceived=y.onChatAnswerReceived,this.onWarning=y.onWarning,this.onFileComponentUpdate=y.onFileComponentUpdate,this.onError=y.onError,this.onAsyncEventProgress=y.onAsyncEventProgress,this.updatePlaceholder=y.onUpdatePlaceholder,this.chatInputEnabled=y.onChatInputEnabled,this.onUpdateAuthentication=y.onUpdateAuthentication,this.followUpGenerator=new Ie,this.onNewTab=y.onNewTab}}class e{constructor(y){this.followUpClicked=(r,p)=>{p.type!==void 0&&p.type==="continue-to-chat"&&this.onWelcomeFollowUpClicked(r,p.type)},this.authFollowUpClicked=(r,p,b)=>{this.sendMessageToExtension({command:"auth-follow-up-was-clicked",authType:b,tabID:r,tabType:p})},this.sendMessageToExtension=y.sendMessageToExtension,this.onWelcomeFollowUpClicked=y.onWelcomeFollowUpClicked}}class l{constructor(y){this.onTabAdd=(r,p)=>{this.sendMessageToExtension({tabID:r,command:"new-tab-was-created",tabType:"gumby",tabOpenInteractionType:p})},this.processChatPrompt=async(r,p)=>{if(this.onChatAnswerReceived===void 0)return;const b={type:Q.ChatItemType.AI_PROMPT,body:r.message,formItems:r.formItems,buttons:r.formButtons,followUp:void 0,status:"info",canBeVoted:!1};this.onChatAnswerReceived(p,b)},this.processChatMessage=async r=>{if(!(this.onChatAnswerReceived===void 0||this.onChatAnswerUpdated===void 0)&&r.message!==void 0){const p={type:r.messageType,messageId:r.messageId??r.triggerID,body:r.message,buttons:r.buttons??[],canBeVoted:!1};if(r.messageId!==void 0){this.onChatAnswerUpdated(r.tabID,p);return}this.onChatAnswerReceived(r.tabID,p)}},this.transform=r=>{this.sendMessageToExtension({tabID:r,command:"transform",chatMessage:"transform",tabType:"gumby"})},this.requestAnswer=(r,p)=>{this.tabStorage.updateTabStatus(r,"busy"),this.sendMessageToExtension({tabID:r,command:"chat-prompt",chatMessage:p.chatMessage,chatCommand:p.chatCommand,tabType:"gumby"})},this.processAuthNeededException=async r=>{this.onChatAnswerReceived!==void 0&&this.onChatAnswerReceived(r.tabID,{type:Q.ChatItemType.SYSTEM_PROMPT,body:r.message})},this.onResponseBodyLinkClick=(r,p,b)=>{this.sendMessageToExtension({command:"response-body-link-click",tabID:r,messageId:p,link:b,tabType:"gumby"})},this.processExecuteCommand=async r=>{this.onQuickHandlerCommand(r.tabID,r.command,r.eventId)},this.handleMessageReceive=async r=>{switch(r.type){case"asyncEventProgressMessage":this.onAsyncEventProgress(r.tabID,r.inProgress,r.message,r.messageId);break;case"authNeededException":await this.processAuthNeededException(r);break;case"authenticationUpdateMessage":this.onAuthenticationUpdate(r.gumbyEnabled,r.authenticatingTabIDs);break;case"chatInputEnabledMessage":this.chatInputEnabled(r.tabID,r.enabled);break;case"chatMessage":await this.processChatMessage(r);break;case"chatPrompt":await this.processChatPrompt(r,r.tabID);break;case"errorMessage":this.onError(r.tabID,r.message,r.title);break;case"sendCommandMessage":await this.processExecuteCommand(r);break;case"updatePlaceholderMessage":this.updatePlaceholder(r.tabID,r.newPlaceholder);break}},this.sendMessageToExtension=y.sendMessageToExtension,this.onChatAnswerReceived=y.onChatAnswerReceived,this.onChatAnswerUpdated=y.onChatAnswerUpdated,this.onError=y.onError,this.chatInputEnabled=y.onChatInputEnabled,this.onAsyncEventProgress=y.onAsyncEventProgress,this.updatePlaceholder=y.onUpdatePlaceholder,this.onQuickHandlerCommand=y.onQuickHandlerCommand,this.onAuthenticationUpdate=y.onUpdateAuthentication,this.tabStorage=y.tabsStorage}onTabRemove(y){this.sendMessageToExtension({tabID:y,command:"tab-was-removed",tabType:"gumby"})}onCustomFormAction(y,r){r!==void 0&&this.sendMessageToExtension({command:"form-action-click",action:r.id,formSelectedValues:r.formItemValues,tabType:"gumby",tabID:y})}}class c{constructor(y){this.isUIReady=!1,this.onSourceLinkClick=(r,p,b)=>{switch(this.tabsStorage.getTab(r)?.type){case"cwc":this.cwChatConnector.onSourceLinkClick(r,p,b);break}},this.onResponseBodyLinkClick=(r,p,b)=>{switch(this.tabsStorage.getTab(r)?.type){case"cwc":this.cwChatConnector.onResponseBodyLinkClick(r,p,b);break;case"featuredev":this.featureDevChatConnector.onResponseBodyLinkClick(r,p,b);break;case"gumby":this.gumbyChatConnector.onResponseBodyLinkClick(r,p,b)}},this.onInfoLinkClick=(r,p)=>{switch(this.tabsStorage.getTab(r)?.type){default:this.cwChatConnector.onInfoLinkClick(r,p);break}},this.requestAnswer=(r,p)=>{switch(this.tabsStorage.getTab(r)?.type){case"gumby":return this.gumbyChatConnector.requestAnswer(r,p)}},this.requestGenerativeAIAnswer=(r,p)=>new Promise((b,x)=>{if(this.isUIReady)switch(this.tabsStorage.getTab(r)?.type){case"featuredev":return this.featureDevChatConnector.requestGenerativeAIAnswer(r,p);default:return this.cwChatConnector.requestGenerativeAIAnswer(r,p)}else return setTimeout(()=>this.requestGenerativeAIAnswer(r,p),2e3)}),this.clearChat=r=>{switch(this.tabsStorage.getTab(r)?.type){case"cwc":this.cwChatConnector.clearChat(r);break}},this.help=r=>{switch(this.tabsStorage.getTab(r)?.type){case"cwc":this.cwChatConnector.help(r);break}},this.transform=r=>{this.gumbyChatConnector.transform(r)},this.handleMessageReceive=async r=>{if(r.data===void 0)return;const p=JSON.parse(r.data);p!==void 0&&(p.sender==="CWChat"?await this.cwChatConnector.handleMessageReceive(p):p.sender==="featureDevChat"?await this.featureDevChatConnector.handleMessageReceive(p):p.sender==="gumbyChat"&&await this.gumbyChatConnector.handleMessageReceive(p))},this.onTabAdd=r=>{this.tabsStorage.addTab({id:r,type:"unknown",status:"free",isSelected:!0})},this.onUpdateTabType=r=>{const p=this.tabsStorage.getTab(r);switch(p?.type){case"cwc":this.cwChatConnector.onTabAdd(r,p.openInteractionType);break;case"gumby":this.gumbyChatConnector.onTabAdd(r);break}},this.onKnownTabOpen=r=>{switch(this.tabsStorage.getTab(r)?.type){case"featuredev":this.featureDevChatConnector.onTabOpen(r);break}},this.onTabChange=r=>{const p=this.tabsStorage.setSelectedTab(r);this.cwChatConnector.onTabChange(r,p)},this.onCodeInsertToCursorPosition=(r,p,b,x,I,M,T,z)=>{switch(this.tabsStorage.getTab(r)?.type){case"cwc":this.cwChatConnector.onCodeInsertToCursorPosition(r,p,b,x,I,M,T,z);break;case"featuredev":this.featureDevChatConnector.onCodeInsertToCursorPosition(r,b,x,I);break}},this.onCopyCodeToClipboard=(r,p,b,x,I,M,T,z)=>{switch(this.tabsStorage.getTab(r)?.type){case"cwc":this.cwChatConnector.onCopyCodeToClipboard(r,p,b,x,I,M,T,z);break;case"featuredev":this.featureDevChatConnector.onCopyCodeToClipboard(r,b,x,I);break}},this.onTabRemove=r=>{const p=this.tabsStorage.getTab(r);switch(this.tabsStorage.deleteTab(r),p?.type){case"cwc":this.cwChatConnector.onTabRemove(r);break;case"featuredev":this.featureDevChatConnector.onTabRemove(r);break;case"gumby":this.gumbyChatConnector.onTabRemove(r);break}},this.uiReady=()=>{this.isUIReady=!0,this.sendMessageToExtension({command:"ui-is-ready"}),this.onMessageReceived!==void 0&&window.addEventListener("message",this.handleMessageReceive.bind(this)),window.addEventListener("focus",this.handleApplicationFocus),window.addEventListener("blur",this.handleApplicationFocus)},this.handleApplicationFocus=async r=>{this.sendMessageToExtension({command:"ui-focus",type:r.type,tabType:"cwc"})},this.triggerSuggestionEngagement=(r,p,b)=>{},this.onAuthFollowUpClicked=(r,p)=>{const b=this.tabsStorage.getTab(r)?.type;switch(b){case"cwc":case"featuredev":this.amazonqCommonsConnector.authFollowUpClicked(r,b,p)}},this.onFollowUpClicked=(r,p,b)=>{switch(this.tabsStorage.getTab(r)?.type){case"unknown":this.amazonqCommonsConnector.followUpClicked(r,b);break;case"featuredev":this.featureDevChatConnector.followUpClicked(r,b);break;default:this.cwChatConnector.followUpClicked(r,p,b);break}},this.onFileActionClick=(r,p,b,x)=>{switch(this.tabsStorage.getTab(r)?.type){case"featuredev":this.featureDevChatConnector.onFileActionClick(r,p,b,x);break}},this.onOpenDiff=(r,p,b)=>{switch(this.tabsStorage.getTab(r)?.type){case"featuredev":this.featureDevChatConnector.onOpenDiff(r,p,b);break}},this.onStopChatResponse=r=>{switch(this.tabsStorage.getTab(r)?.type){case"featuredev":this.featureDevChatConnector.onStopChatResponse(r);break;case"cwc":this.cwChatConnector.onStopChatResponse(r);break}},this.sendFeedback=(r,p)=>{switch(this.tabsStorage.getTab(r)?.type){case"featuredev":this.featureDevChatConnector.sendFeedback(r,p);break;case"cwc":this.cwChatConnector.onSendFeedback(r,p);break}},this.onChatItemVoted=(r,p,b)=>{switch(this.tabsStorage.getTab(r)?.type){case"cwc":this.cwChatConnector.onChatItemVoted(r,p,b);break;case"featuredev":this.featureDevChatConnector.onChatItemVoted(r,p,b);break}},this.onCustomFormAction=(r,p,b,x=void 0)=>{switch(this.tabsStorage.getTab(r)?.type){case"gumby":this.gumbyChatConnector.onCustomFormAction(r,b);break}},this.sendMessageToExtension=y.sendMessageToExtension,this.onMessageReceived=y.onMessageReceived,this.cwChatConnector=new xe(y),this.featureDevChatConnector=new t(y),this.gumbyChatConnector=new l(y),this.amazonqCommonsConnector=new e({sendMessageToExtension:this.sendMessageToExtension,onWelcomeFollowUpClicked:y.onWelcomeFollowUpClicked}),this.tabsStorage=y.tabsStorage}}const A=1728e5;class a{constructor(y){this.tabs=new Map,this.lastCreatedTabByType=new Map,this.lastSelectedTab=void 0,this.tabActivityTimers={},this.onTabTimeout=y?.onTabTimeout}addTab(y){this.tabs.has(y.id)||(this.tabs.set(y.id,y),this.lastCreatedTabByType.set(y.type,y.id),y.isSelected&&this.setSelectedTab(y.id))}deleteTab(y){this.tabActivityTimers[y]!==void 0&&(clearTimeout(this.tabActivityTimers[y]),delete this.tabActivityTimers[y]),y===this.lastSelectedTab?.id&&(this.lastSelectedTab=void 0),this.tabs.delete(y)}getTab(y){return this.tabs.get(y)}getTabs(){return Array.from(this.tabs.values())}isTabDead(y){return this.tabs.get(y)?.status==="dead"}updateTabStatus(y,r){const p=this.tabs.get(y);p===void 0||p.status==="dead"||(p.status=r,this.tabs.set(y,p))}updateTabTypeFromUnknown(y,r){const p=this.tabs.get(y);p===void 0||p.type!=="unknown"||(p.type=r,this.tabs.set(y,p),this.lastCreatedTabByType.set(r,y))}resetTabTimer(y){this.onTabTimeout!==void 0&&(this.tabActivityTimers[y]!==void 0&&clearTimeout(this.tabActivityTimers[y]),this.tabActivityTimers[y]=setTimeout(()=>{this.onTabTimeout!==void 0&&(this.updateTabStatus(y,"dead"),this.onTabTimeout(y))},A))}setSelectedTab(y){const r=this.lastSelectedTab,p=this.lastSelectedTab?.id;r!==void 0&&(r.isSelected=!1,this.tabs.set(r.id,r));const b=this.tabs.get(y);return b===void 0||(b.isSelected=!0,this.tabs.set(b.id,b),this.lastSelectedTab=b),p}getSelectedTab(){return this.lastSelectedTab}}class d{constructor(y){this.isFeatureDevEnabled=y.isFeatureDevEnabled,this.isGumbyEnabled=y.isGumbyEnabled}generateForTab(y){const r=[{commands:[...this.isFeatureDevEnabled?[{command:"/dev",placeholder:"Describe your task or issue in as much detail as possible",description:"Plan and implement new functionality across multiple files in your workspace."}]:[],...this.isGumbyEnabled?[{command:"/transform",description:"Transform your Java 8 or 11 Maven project to Java 17"}]:[]]},{commands:[{command:"/help",description:"Learn more about Amazon Q"},{command:"/clear",description:"Clear this session"}]}],p={cwc:{description:"",unavailableItems:[]},featuredev:{description:"This command isn't available in /dev",unavailableItems:["/dev","/transform","/help","/clear"]},gumby:{description:"This command isn't available in /transform",unavailableItems:["/dev","/transform"]},unknown:{description:"",unavailableItems:[]}};return r.map(b=>({commands:b.commands.map(x=>{const I=p[y].unavailableItems.includes(x.command);return{...x,disabled:I,description:I?p[y].description:x.description}})}))}}class m{constructor(y){this.tabTitle=new Map([["unknown","Chat"],["cwc","Chat"],["featuredev","Q - Dev"],["gumby","Q - Code Transformation"]]),this.tabInputPlaceholder=new Map([["unknown",'Ask a question or enter "/" for quick actions'],["cwc",'Ask a question or enter "/" for quick actions'],["featuredev","Describe your task or issue in as much detail as possible"],["gumby","Open a new tab to chat with Q"]]),this.tabWelcomeMessage=new Map([["unknown","Hi, I'm Amazon Q. I can answer your software development questions. \n        Ask me to explain, debug, or optimize your code. \n        You can enter `/` to see a list of quick actions."],["cwc","Hi, I'm Amazon Q. I can answer your software development questions. \n        Ask me to explain, debug, or optimize your code. \n        You can enter `/` to see a list of quick actions."],["featuredev",`Hi, I'm the Amazon Q Developer Agent for software development.

I can generate code to implement new functionality across your workspace. We'll start by discussing an implementation plan, and then we can review and regenerate code based on your feedback. 
            
To get started, describe the task you are trying to accomplish.
`],["gumby",`Welcome to Code Transformation!

I can help you upgrade your Java 8 and 11 codebases to Java 17.`]]),this.followUpsGenerator=new Ie,this.quickActionsGenerator=new d({isFeatureDevEnabled:y.isFeatureDevEnabled,isGumbyEnabled:y.isGumbyEnabled})}getTabData(y,r,p){return{tabTitle:p??this.tabTitle.get(y),promptInputInfo:"Use of Amazon Q is subject to the [AWS Responsible AI Policy](https://aws.amazon.com/machine-learning/responsible-ai/policy/).",quickActionCommands:this.quickActionsGenerator.generateForTab(y),promptInputPlaceholder:this.tabInputPlaceholder.get(y),chatItems:r?[{type:Q.ChatItemType.ANSWER,body:this.tabWelcomeMessage.get(y)},{type:Q.ChatItemType.ANSWER,followUp:this.followUpsGenerator.generateWelcomeBlockForTab(y)}]:[]}}}const s=[{value:"inaccurate-response",label:"Inaccurate response"},{value:"harmful-content",label:"Harmful content"},{value:"incorrect-syntax",label:"Incorrect syntax"},{value:"buggy-code",label:"Buggy code"},{value:"low-quality",label:"Low quality"},{value:"other",label:"Other"}];const i={mainTitle:"Amazon Q",copy:"Copy",insertAtCursorLabel:"Insert at cursor",feedbackFormTitle:"Report an issue",feedbackFormOptionsLabel:"What type of issue would you like to report?",feedbackFormCommentLabel:"Description of issue (optional):",feedbackThanks:"Thanks for your feedback!",feedbackReportButtonLabel:"Report an issue",codeSuggestions:"Code suggestions",files:"file(s)",clickFileToViewDiff:"Click on a file to view diff.",showMore:"Show more",save:"Save",cancel:"Cancel",submit:"Submit",stopGenerating:"Stop generating",copyToClipboard:"Copied to clipboard",noMoreTabsTooltip:"You can only open ten conversation tabs at a time.",codeSuggestionWithReferenceTitle:"Some suggestions contain code with references.",spinnerText:"Generating your answer..."},o="https://docs.aws.amazon.com/amazonq/latest/aws-builder-use-ug/getting-started.html",n="https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html";class h{constructor(y){this.mynahUI=y.mynahUI,this.connector=y.connector,this.tabsStorage=y.tabsStorage}onFollowUpClicked(y,r,p){if(p.type!==void 0&&["full-auth","re-auth","missing_scopes","use-supported-auth"].includes(p.type)){this.connector.onAuthFollowUpClicked(y,p.type);return}if(p.type!==void 0&&p.type==="help"){this.tabsStorage.updateTabTypeFromUnknown(y,"cwc"),this.connector.onUpdateTabType(y),this.connector.help(y);return}if(p.prompt!==void 0&&(this.mynahUI.updateStore(y,{loadingChat:!0,promptInputDisabledState:!0}),this.mynahUI.addChatItem(y,{type:Q.ChatItemType.PROMPT,body:p.prompt}),this.mynahUI.addChatItem(y,{type:Q.ChatItemType.ANSWER_STREAM,body:""}),this.tabsStorage.updateTabStatus(y,"busy"),this.tabsStorage.resetTabTimer(y),p.type!==void 0&&p.type==="init-prompt")){this.connector.requestGenerativeAIAnswer(y,{chatMessage:p.prompt});return}this.connector.onFollowUpClicked(y,r,p)}onWelcomeFollowUpClicked(y,r){if(r==="continue-to-chat"){this.mynahUI.addChatItem(y,{type:Q.ChatItemType.ANSWER,body:"Ok, please write your question below."}),this.tabsStorage.updateTabTypeFromUnknown(y,"cwc"),this.connector.onUpdateTabType(y);return}}}class g{constructor(y){this.mynahUI=y.mynahUI,this.connector=y.connector,this.tabsStorage=y.tabsStorage,this.tabDataGenerator=new m({isFeatureDevEnabled:y.isFeatureDevEnabled,isGumbyEnabled:y.isGumbyEnabled}),this.isFeatureDevEnabled=y.isFeatureDevEnabled,this.isGumbyEnabled=y.isGumbyEnabled}handle(y,r,p){switch(this.tabsStorage.resetTabTimer(r),y.command){case"/dev":this.handleFeatureDevCommand(y,r,"Q - Dev");break;case"/help":this.handleHelpCommand(r);break;case"/transform":this.handleGumbyCommand(r,p);break;case"/clear":this.handleClearCommand(r);break}}handleGumbyCommand(y,r){if(!this.isGumbyEnabled)return;let p;if(this.tabsStorage.getTabs().forEach(x=>{x.type==="gumby"&&(p=x.id)}),p!==void 0){this.mynahUI.selectTab(p,r||""),this.connector.onTabChange(p);return}let b=y;if(this.tabsStorage.getTab(b)?.type!=="unknown"&&(b=this.mynahUI.updateStore("",{loadingChat:!0})),b===void 0){this.mynahUI.notify({content:i.noMoreTabsTooltip,type:Q.NotificationType.WARNING});return}else this.tabsStorage.updateTabTypeFromUnknown(b,"gumby"),this.connector.onKnownTabOpen(b),this.connector.onUpdateTabType(b),this.mynahUI.updateStore(b,{chatItems:[]}),this.mynahUI.updateStore(b,this.tabDataGenerator.getTabData("gumby",!0,void 0)),this.mynahUI.updateStore(b,{loadingChat:!0}),this.connector.transform(b)}handleClearCommand(y){this.mynahUI.updateStore(y,{chatItems:[]}),this.connector.clearChat(y)}handleHelpCommand(y){this.tabsStorage.getTab(y)?.type==="unknown"&&this.tabsStorage.updateTabTypeFromUnknown(y,"cwc"),this.connector.help(y)}handleFeatureDevCommand(y,r,p){if(!this.isFeatureDevEnabled)return;let b=r;const x=y.escapedPrompt?.trim()??"";if(this.tabsStorage.getTab(b)?.type!=="unknown"&&(b=this.mynahUI.updateStore("",{})),b===void 0){this.mynahUI.notify({content:i.noMoreTabsTooltip,type:Q.NotificationType.WARNING});return}else this.tabsStorage.updateTabTypeFromUnknown(b,"featuredev"),this.connector.onKnownTabOpen(b),this.connector.onUpdateTabType(b),this.mynahUI.updateStore(b,{chatItems:[]}),this.mynahUI.updateStore(b,this.tabDataGenerator.getTabData("featuredev",x==="",p)),x!==""&&(this.mynahUI.addChatItem(b,{type:Q.ChatItemType.PROMPT,body:x}),this.mynahUI.updateStore(b,{loadingChat:!0,promptInputDisabledState:!0}),this.connector.requestGenerativeAIAnswer(b,{chatMessage:x}))}}class f{constructor(y){this.mynahUI=y.mynahUI,this.connector=y.connector,this.tabsStorage=y.tabsStorage}handle(y,r){this.tabsStorage.updateTabTypeFromUnknown(r,"cwc"),this.tabsStorage.resetTabTimer(r),this.connector.onUpdateTabType(r),this.mynahUI.addChatItem(r,{type:Q.ChatItemType.PROMPT,body:y.escapedPrompt}),this.mynahUI.updateStore(r,{loadingChat:!0,promptInputDisabledState:!0}),this.tabsStorage.updateTabStatus(r,"busy"),this.connector.requestGenerativeAIAnswer(r,{chatMessage:y.prompt??"",chatCommand:y.command}).then(()=>{})}}class C{constructor(y){this.mynahUI=y.mynahUI,this.connector=y.connector,this.tabsStorage=y.tabsStorage,this.tabDataGenerator=new m({isFeatureDevEnabled:y.isFeatureDevEnabled,isGumbyEnabled:y.isGumbyEnabled})}sendSelectedCodeToTab(y){const r={...this.tabsStorage.getSelectedTab()};if(r?.id===void 0||r?.type==="featuredev"){const p=this.mynahUI.updateStore("",this.tabDataGenerator.getTabData("cwc",!1));if(p===void 0){this.mynahUI.notify({content:i.noMoreTabsTooltip,type:Q.NotificationType.WARNING});return}this.tabsStorage.addTab({id:p,type:"cwc",status:"free",isSelected:!0}),r.id=p}return this.mynahUI.addToUserPrompt(r.id,y.body),r.id}sendMessageToTab(y,r){const p=this.tabsStorage.getSelectedTab();if(p!==void 0&&[r,"unknown"].includes(p.type)&&p.status==="free")return this.tabsStorage.updateTabStatus(p.id,"busy"),this.tabsStorage.updateTabTypeFromUnknown(p.id,r),this.mynahUI.updateStore(p.id,{loadingChat:!0,promptInputDisabledState:!0}),this.mynahUI.addChatItem(p.id,y),this.mynahUI.addChatItem(p.id,{type:Q.ChatItemType.ANSWER_STREAM,body:""}),p.id;const b=this.mynahUI.updateStore("",this.tabDataGenerator.getTabData("cwc",!1));if(b===void 0){this.mynahUI.notify({content:i.noMoreTabsTooltip,type:Q.NotificationType.WARNING});return}else return this.mynahUI.addChatItem(b,y),this.mynahUI.addChatItem(b,{type:Q.ChatItemType.ANSWER_STREAM,body:""}),this.mynahUI.updateStore(b,{loadingChat:!0,promptInputDisabledState:!0}),this.tabsStorage.addTab({id:b,type:"cwc",status:"busy",isSelected:!0,openInteractionType:"contextMenu"}),this.tabsStorage.updateTabTypeFromUnknown(b,"cwc"),this.connector.onUpdateTabType(b),this.tabsStorage.updateTabStatus(b,"busy"),b}}const w=(u,y)=>{let r,p;const b=new a({onTabTimeout:L=>{r.addChatItem(L,{type:Q.ChatItemType.ANSWER,body:"This conversation has timed out after 48 hours. It will not be saved. Start a new conversation."}),r.updateStore(L,{promptInputDisabledState:!0,promptInputPlaceholder:"Session ended."})}});b.addTab({id:"tab-1",status:"free",type:"cwc",isSelected:!0});let x=y,I=y,M=new m({isFeatureDevEnabled:x,isGumbyEnabled:I}),T,z,O,P;return p=new c({tabsStorage:b,onUpdateAuthentication:(L,D)=>{x=L,I=L,z=new g({mynahUI:r,connector:p,tabsStorage:b,isFeatureDevEnabled:x,isGumbyEnabled:I}),M=new m({isFeatureDevEnabled:x,isGumbyEnabled:I});for(const U of b.getTabs())r.updateStore(U.id,{quickActionCommands:M.quickActionsGenerator.generateForTab(U.type)});if(L)for(const U of D)r.addChatItem(U,{type:Q.ChatItemType.ANSWER,body:"Authentication successful. Connected to Amazon Q."}),b.getTab(U)?.type==="gumby"&&r.updateStore(U,{promptInputDisabledState:!1})},onFileActionClick:(L,D,U,G)=>{},onQuickHandlerCommand:(L,D,U)=>{D==="aws.awsq.transform"?z.handle({command:"/transform"},L,U):D==="aws.awsq.clearchat"&&z.handle({command:"/clear"},L)},onCWCContextCommandMessage:(L,D)=>D==="aws.amazonq.sendToPrompt"?P.sendSelectedCodeToTab(L):P.sendMessageToTab(L,"cwc"),onWelcomeFollowUpClicked:(L,D)=>{T.onWelcomeFollowUpClicked(L,D)},onChatInputEnabled:(L,D)=>{r.updateStore(L,{promptInputDisabledState:b.isTabDead(L)||!D})},onAsyncEventProgress:(L,D,U,G=void 0)=>{if(D){r.updateStore(L,{loadingChat:!0,promptInputDisabledState:!0}),U&&G?r.updateChatAnswerWithMessageId(L,G,{body:U}):U?r.updateLastChatAnswer(L,{body:U}):r.addChatItem(L,{type:Q.ChatItemType.ANSWER_STREAM,body:"",messageId:G}),b.updateTabStatus(L,"busy");return}r.updateStore(L,{loadingChat:!1,promptInputDisabledState:b.isTabDead(L)}),b.updateTabStatus(L,"free")},sendMessageToExtension:L=>{u.postMessage(L)},onChatAnswerUpdated:(L,D)=>{D.messageId!==void 0?r.updateChatAnswerWithMessageId(L,D.messageId,{...D.body!==void 0?{body:D.body}:{},...D.buttons!==void 0?{buttons:D.buttons}:{}}):r.updateLastChatAnswer(L,{...D.body!==void 0?{body:D.body}:{},...D.buttons!==void 0?{buttons:D.buttons}:{}})},onChatAnswerReceived:(L,D)=>{if(D.type===Q.ChatItemType.ANSWER_PART||D.type===Q.ChatItemType.CODE_RESULT){r.updateLastChatAnswer(L,{...D.messageId!==void 0?{messageId:D.messageId}:{},...D.canBeVoted!==void 0?{canBeVoted:D.canBeVoted}:{},...D.codeReference!==void 0?{codeReference:D.codeReference}:{},...D.body!==void 0?{body:D.body}:{},...D.relatedContent!==void 0?{relatedContent:D.relatedContent}:{},...D.type===Q.ChatItemType.CODE_RESULT?{type:Q.ChatItemType.CODE_RESULT,fileList:D.fileList}:{}});return}if((D.body!==void 0||D.relatedContent!==void 0||D.followUp!==void 0||D.formItems!==void 0||D.buttons!==void 0)&&r.addChatItem(L,D),D.type===Q.ChatItemType.PROMPT||D.type===Q.ChatItemType.SYSTEM_PROMPT||D.type===Q.ChatItemType.AI_PROMPT){r.updateStore(L,{loadingChat:!0,promptInputDisabledState:!0}),b.updateTabStatus(L,"busy");return}D.type===Q.ChatItemType.ANSWER&&(r.updateStore(L,{loadingChat:!1,promptInputDisabledState:b.isTabDead(L)}),b.updateTabStatus(L,"free"))},onMessageReceived:(L,D)=>{r.updateStore(L,D)},onFileComponentUpdate:(L,D,U,G)=>{const q={type:Q.ChatItemType.ANSWER,fileList:{rootFolderTitle:"Changes",filePaths:D.map(J=>J.zipFilePath),deletedFiles:U.map(J=>J.zipFilePath),details:Te(D),actions:v([...D,...U])}};r.updateChatAnswerWithMessageId(L,G,q)},onWarning:(L,D,U)=>{r.notify({title:U,content:D,type:Q.NotificationType.WARNING}),r.updateStore(L,{loadingChat:!1,promptInputDisabledState:b.isTabDead(L)}),b.updateTabStatus(L,"free")},onError:(L,D,U)=>{const G={type:Q.ChatItemType.ANSWER,body:`**${U}** 
 ${D}`};if(L!=="")r.updateStore(L,{loadingChat:!1,promptInputDisabledState:b.isTabDead(L)}),b.updateTabStatus(L,"free"),r.addChatItem(L,G);else{const q=r.updateStore("",{tabTitle:"Error",quickActionCommands:[],promptInputPlaceholder:"",chatItems:[G]});if(q===void 0){r.notify({content:i.noMoreTabsTooltip,type:Q.NotificationType.WARNING});return}else b.addTab({id:q,status:"busy",type:"cwc",isSelected:!0})}},onUpdatePlaceholder(L,D){r.updateStore(L,{promptInputPlaceholder:D})},onNewTab(L){const D=r.updateStore("",{});!D||(b.updateTabTypeFromUnknown(D,L),p.onKnownTabOpen(D),p.onUpdateTabType(D),r.updateStore(D,M.getTabData(L,!0)))}}),r=new Q.MynahUI({onReady:p.uiReady,onTabAdd:L=>{r.updateStore(L,{quickActionCommands:M.quickActionsGenerator.generateForTab("unknown")}),p.onTabAdd(L)},onTabRemove:p.onTabRemove,onTabChange:p.onTabChange,onChatPrompt:(L,D,U)=>{if(!((D.prompt??"")===""&&(D.command??"")==="")){if(b.getTab(L)?.type==="featuredev")r.addChatItem(L,{type:Q.ChatItemType.ANSWER_STREAM});else if(b.getTab(L)?.type==="gumby"){p.requestAnswer(L,{chatMessage:D.prompt??""});return}if(D.command!==void 0&&D.command.trim()!==""){z.handle(D,L,U);return}O.handle(D,L)}},onVote:p.onChatItemVoted,onInBodyButtonClicked:(L,D,U,G)=>{p.onCustomFormAction(L,D,U,G)},onCustomFormAction:(L,D,U)=>{p.onCustomFormAction(L,void 0,D,U)},onSendFeedback:(L,D)=>{p.sendFeedback(L,D),r.notify({type:Q.NotificationType.INFO,title:"Your feedback is sent",content:"Thanks for your feedback."})},onCodeInsertToCursorPosition:p.onCodeInsertToCursorPosition,onCopyCodeToClipboard:(L,D,U,G,q,J,Y,ee)=>{p.onCopyCodeToClipboard(L,D,U,G,q,J,Y,ee),r.notify({type:Q.NotificationType.SUCCESS,content:"Selected code is copied to clipboard"})},onChatItemEngagement:p.triggerSuggestionEngagement,onSourceLinkClick:(L,D,U,G)=>{G?.preventDefault(),G?.stopPropagation(),G?.stopImmediatePropagation(),p.onSourceLinkClick(L,D,U)},onLinkClick:(L,D,U,G)=>{G?.preventDefault(),G?.stopPropagation(),G?.stopImmediatePropagation(),p.onResponseBodyLinkClick(L,D,U)},onInfoLinkClick:(L,D,U)=>{U?.preventDefault(),U?.stopPropagation(),U?.stopImmediatePropagation(),p.onInfoLinkClick(L,D)},onResetStore:()=>{},onFollowUpClicked:(L,D,U)=>{T.onFollowUpClicked(L,D,U)},onFileActionClick:async(L,D,U,G)=>{p.onFileActionClick(L,D,U,G)},onOpenDiff:p.onOpenDiff,tabs:{"tab-1":{isSelected:!0,store:M.getTabData("cwc",!0)}},defaults:{store:M.getTabData("cwc",!0)},config:{maxTabs:10,feedbackOptions:s,texts:i}}),T=new h({mynahUI:r,connector:p,tabsStorage:b}),z=new g({mynahUI:r,connector:p,tabsStorage:b,isFeatureDevEnabled:x,isGumbyEnabled:I}),O=new f({mynahUI:r,connector:p,tabsStorage:b}),P=new C({mynahUI:r,connector:p,tabsStorage:b,isFeatureDevEnabled:x,isGumbyEnabled:I}),{mynahUI:r,messageReceiver:p.handleMessageReceive}}})();var Ge=this;for(var Ze in Be)Ge[Ze]=Be[Ze];Be.__esModule&&Object.defineProperty(Ge,"__esModule",{value:!0})})();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 *
 * This class is responsible for listening to and processing events
 * from the webview and translating them into events to be handled by the extension,
 * and events from the extension and translating them into events to be handled by the webview.
 */
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
/*! For license information please see main.js.LICENSE.txt */
