"use strict";exports.id=989,exports.ids=[989],exports.modules={31989:(ln,$t,d)=>{d.d($t,{getDefaultRoleAssumer:()=>Wt});var Ve=d(75795),Mt=d(43080),c=d(27929);const kt=e=>({...e,useDualstackEndpoint:e.useDualstackEndpoint??!1,useFipsEndpoint:e.useFipsEndpoint??!1,useGlobalEndpoint:e.useGlobalEndpoint??!1,defaultSigningName:"sts"}),Gt={UseGlobalEndpoint:{type:"builtInParams",name:"useGlobalEndpoint"},UseFIPS:{type:"builtInParams",name:"useFipsEndpoint"},Endpoint:{type:"builtInParams",name:"endpoint"},Region:{type:"builtInParams",name:"region"},UseDualStack:{type:"builtInParams",name:"useDualstackEndpoint"}};class _ extends c.sI{constructor(s){super(s),Object.setPrototypeOf(this,_.prototype)}}class re extends _{constructor(s){super({name:"ExpiredTokenException",$fault:"client",...s}),this.name="ExpiredTokenException",this.$fault="client",Object.setPrototypeOf(this,re.prototype)}}class ie extends _{constructor(s){super({name:"MalformedPolicyDocumentException",$fault:"client",...s}),this.name="MalformedPolicyDocumentException",this.$fault="client",Object.setPrototypeOf(this,ie.prototype)}}class ce extends _{constructor(s){super({name:"PackedPolicyTooLargeException",$fault:"client",...s}),this.name="PackedPolicyTooLargeException",this.$fault="client",Object.setPrototypeOf(this,ce.prototype)}}class ae extends _{constructor(s){super({name:"RegionDisabledException",$fault:"client",...s}),this.name="RegionDisabledException",this.$fault="client",Object.setPrototypeOf(this,ae.prototype)}}class de extends _{constructor(s){super({name:"IDPRejectedClaimException",$fault:"client",...s}),this.name="IDPRejectedClaimException",this.$fault="client",Object.setPrototypeOf(this,de.prototype)}}class le extends _{constructor(s){super({name:"InvalidIdentityTokenException",$fault:"client",...s}),this.name="InvalidIdentityTokenException",this.$fault="client",Object.setPrototypeOf(this,le.prototype)}}class me extends _{constructor(s){super({name:"IDPCommunicationErrorException",$fault:"client",...s}),this.name="IDPCommunicationErrorException",this.$fault="client",Object.setPrototypeOf(this,me.prototype)}}class he extends _{constructor(s){super({name:"InvalidAuthorizationMessageException",$fault:"client",...s}),this.name="InvalidAuthorizationMessageException",this.$fault="client",Object.setPrototypeOf(this,he.prototype)}}const X=e=>({...e,...e.SecretAccessKey&&{SecretAccessKey:c.oc}}),Ft=e=>({...e,...e.Credentials&&{Credentials:X(e.Credentials)}}),mn=e=>({...e,...e.SAMLAssertion&&{SAMLAssertion:SENSITIVE_STRING}}),hn=e=>({...e,...e.Credentials&&{Credentials:X(e.Credentials)}}),fn=e=>({...e,...e.WebIdentityToken&&{WebIdentityToken:SENSITIVE_STRING}}),un=e=>({...e,...e.Credentials&&{Credentials:X(e.Credentials)}}),yn=e=>({...e,...e.Credentials&&{Credentials:X(e.Credentials)}}),gn=e=>({...e,...e.Credentials&&{Credentials:X(e.Credentials)}});var Ye=d(99653),fe=d(97781);const zt=async(e,s)=>{const t=k;let n;return n=L({...Bt(e,s),[F]:Cs,[z]:G}),M(s,t,"/",void 0,n)},Sn=async(e,s)=>{const t=k;let n;return n=L({...Qt(e,s),[F]:_s,[z]:G}),M(s,t,"/",void 0,n)},An=async(e,s)=>{const t=k;let n;return n=L({...Xt(e,s),[F]:xs,[z]:G}),M(s,t,"/",void 0,n)},En=async(e,s)=>{const t=k;let n;return n=L({...Jt(e,s),[F]:bs,[z]:G}),M(s,t,"/",void 0,n)},pn=async(e,s)=>{const t=k;let n;return n=L({...Zt(e,s),[F]:Ts,[z]:G}),M(s,t,"/",void 0,n)},Pn=async(e,s)=>{const t=k;let n;return n=L({...qt(e,s),[F]:ws,[z]:G}),M(s,t,"/",void 0,n)},Rn=async(e,s)=>{const t=k;let n;return n=L({...es(e,s),[F]:Ds,[z]:G}),M(s,t,"/",void 0,n)},In=async(e,s)=>{const t=k;let n;return n=L({...ts(e,s),[F]:Ws,[z]:G}),M(s,t,"/",void 0,n)},Lt=async(e,s)=>{if(e.statusCode>=300)return $(e,s);const t=await(0,Ye.he)(e.body,s);let n={};return n=cs(t.AssumeRoleResult,s),{$metadata:g(e),...n}},vn=async(e,s)=>{if(e.statusCode>=300)return $(e,s);const t=await parseBody(e.body,s);let n={};return n=as(t.AssumeRoleWithSAMLResult,s),{$metadata:g(e),...n}},Cn=async(e,s)=>{if(e.statusCode>=300)return $(e,s);const t=await parseBody(e.body,s);let n={};return n=ds(t.AssumeRoleWithWebIdentityResult,s),{$metadata:g(e),...n}},_n=async(e,s)=>{if(e.statusCode>=300)return $(e,s);const t=await parseBody(e.body,s);let n={};return n=ls(t.DecodeAuthorizationMessageResult,s),{$metadata:g(e),...n}},xn=async(e,s)=>{if(e.statusCode>=300)return $(e,s);const t=await parseBody(e.body,s);let n={};return n=fs(t.GetAccessKeyInfoResult,s),{$metadata:g(e),...n}},bn=async(e,s)=>{if(e.statusCode>=300)return $(e,s);const t=await parseBody(e.body,s);let n={};return n=us(t.GetCallerIdentityResult,s),{$metadata:g(e),...n}},Tn=async(e,s)=>{if(e.statusCode>=300)return $(e,s);const t=await parseBody(e.body,s);let n={};return n=ys(t.GetFederationTokenResult,s),{$metadata:g(e),...n}},wn=async(e,s)=>{if(e.statusCode>=300)return $(e,s);const t=await parseBody(e.body,s);let n={};return n=gs(t.GetSessionTokenResult,s),{$metadata:g(e),...n}},$=async(e,s)=>{const t={...e,body:await(0,Ye.OH)(e.body,s)},n=$s(e,t.body);switch(n){case"ExpiredTokenException":case"com.amazonaws.sts#ExpiredTokenException":throw await Ht(t,s);case"MalformedPolicyDocument":case"com.amazonaws.sts#MalformedPolicyDocumentException":throw await jt(t,s);case"PackedPolicyTooLarge":case"com.amazonaws.sts#PackedPolicyTooLargeException":throw await Vt(t,s);case"RegionDisabledException":case"com.amazonaws.sts#RegionDisabledException":throw await Yt(t,s);case"IDPRejectedClaim":case"com.amazonaws.sts#IDPRejectedClaimException":throw await Ot(t,s);case"InvalidIdentityToken":case"com.amazonaws.sts#InvalidIdentityTokenException":throw await Nt(t,s);case"IDPCommunicationError":case"com.amazonaws.sts#IDPCommunicationErrorException":throw await Kt(t,s);case"InvalidAuthorizationMessageException":case"com.amazonaws.sts#InvalidAuthorizationMessageException":throw await Ut(t,s);default:const o=t.body;return vs({output:e,parsedBody:o.Error,errorCode:n})}},Ht=async(e,s)=>{const t=e.body,n=ms(t.Error,s),o=new re({$metadata:g(e),...n});return(0,c.to)(o,t)},Kt=async(e,s)=>{const t=e.body,n=Ss(t.Error,s),o=new me({$metadata:g(e),...n});return(0,c.to)(o,t)},Ot=async(e,s)=>{const t=e.body,n=As(t.Error,s),o=new de({$metadata:g(e),...n});return(0,c.to)(o,t)},Ut=async(e,s)=>{const t=e.body,n=Es(t.Error,s),o=new he({$metadata:g(e),...n});return(0,c.to)(o,t)},Nt=async(e,s)=>{const t=e.body,n=ps(t.Error,s),o=new le({$metadata:g(e),...n});return(0,c.to)(o,t)},jt=async(e,s)=>{const t=e.body,n=Ps(t.Error,s),o=new ie({$metadata:g(e),...n});return(0,c.to)(o,t)},Vt=async(e,s)=>{const t=e.body,n=Rs(t.Error,s),o=new ce({$metadata:g(e),...n});return(0,c.to)(o,t)},Yt=async(e,s)=>{const t=e.body,n=Is(t.Error,s),o=new ae({$metadata:g(e),...n});return(0,c.to)(o,t)},Bt=(e,s)=>{const t={};if(e[w]!=null&&(t[w]=e[w]),e[j]!=null&&(t[j]=e[j]),e[I]!=null){const n=te(e[I],s);e[I]?.length===0&&(t.PolicyArns=[]),Object.entries(n).forEach(([o,a])=>{const i=`PolicyArns.${o}`;t[i]=a})}if(e[R]!=null&&(t[R]=e[R]),e[E]!=null&&(t[E]=e[E]),e[Y]!=null){const n=Be(e[Y],s);e[Y]?.length===0&&(t.Tags=[]),Object.entries(n).forEach(([o,a])=>{const i=`Tags.${o}`;t[i]=a})}if(e[ze]!=null){const n=is(e[ze],s);e[ze]?.length===0&&(t.TransitiveTagKeys=[]),Object.entries(n).forEach(([o,a])=>{const i=`TransitiveTagKeys.${o}`;t[i]=a})}if(e[Ee]!=null&&(t[Ee]=e[Ee]),e[V]!=null&&(t[V]=e[V]),e[B]!=null&&(t[B]=e[B]),e[C]!=null&&(t[C]=e[C]),e[Te]!=null){const n=os(e[Te],s);e[Te]?.length===0&&(t.ProvidedContexts=[]),Object.entries(n).forEach(([o,a])=>{const i=`ProvidedContexts.${o}`;t[i]=a})}return t},Qt=(e,s)=>{const t={};if(e[w]!=null&&(t[w]=e[w]),e[xe]!=null&&(t[xe]=e[xe]),e[Me]!=null&&(t[Me]=e[Me]),e[I]!=null){const n=te(e[I],s);e[I]?.length===0&&(t.PolicyArns=[]),Object.entries(n).forEach(([o,a])=>{const i=`PolicyArns.${o}`;t[i]=a})}return e[R]!=null&&(t[R]=e[R]),e[E]!=null&&(t[E]=e[E]),t},Xt=(e,s)=>{const t={};if(e[w]!=null&&(t[w]=e[w]),e[j]!=null&&(t[j]=e[j]),e[Ke]!=null&&(t[Ke]=e[Ke]),e[we]!=null&&(t[we]=e[we]),e[I]!=null){const n=te(e[I],s);e[I]?.length===0&&(t.PolicyArns=[]),Object.entries(n).forEach(([o,a])=>{const i=`PolicyArns.${o}`;t[i]=a})}return e[R]!=null&&(t[R]=e[R]),e[E]!=null&&(t[E]=e[E]),t},Jt=(e,s)=>{const t={};return e[pe]!=null&&(t[pe]=e[pe]),t},Zt=(e,s)=>{const t={};return e[O]!=null&&(t[O]=e[O]),t},qt=(e,s)=>({}),es=(e,s)=>{const t={};if(e[Ce]!=null&&(t[Ce]=e[Ce]),e[R]!=null&&(t[R]=e[R]),e[I]!=null){const n=te(e[I],s);e[I]?.length===0&&(t.PolicyArns=[]),Object.entries(n).forEach(([o,a])=>{const i=`PolicyArns.${o}`;t[i]=a})}if(e[E]!=null&&(t[E]=e[E]),e[Y]!=null){const n=Be(e[Y],s);e[Y]?.length===0&&(t.Tags=[]),Object.entries(n).forEach(([o,a])=>{const i=`Tags.${o}`;t[i]=a})}return t},ts=(e,s)=>{const t={};return e[E]!=null&&(t[E]=e[E]),e[V]!=null&&(t[V]=e[V]),e[B]!=null&&(t[B]=e[B]),t},te=(e,s)=>{const t={};let n=1;for(const o of e){if(o===null)continue;const a=ss(o,s);Object.entries(a).forEach(([i,P])=>{t[`member.${n}.${i}`]=P}),n++}return t},ss=(e,s)=>{const t={};return e[Oe]!=null&&(t[Oe]=e[Oe]),t},ns=(e,s)=>{const t={};return e[be]!=null&&(t[be]=e[be]),e[ge]!=null&&(t[ge]=e[ge]),t},os=(e,s)=>{const t={};let n=1;for(const o of e){if(o===null)continue;const a=ns(o,s);Object.entries(a).forEach(([i,P])=>{t[`member.${n}.${i}`]=P}),n++}return t},rs=(e,s)=>{const t={};return e[ve]!=null&&(t[ve]=e[ve]),e[He]!=null&&(t[He]=e[He]),t},is=(e,s)=>{const t={};let n=1;for(const o of e)o!==null&&(t[`member.${n}`]=o,n++);return t},Be=(e,s)=>{const t={};let n=1;for(const o of e){if(o===null)continue;const a=rs(o,s);Object.entries(a).forEach(([i,P])=>{t[`member.${n}.${i}`]=P}),n++}return t},ue=(e,s)=>{const t={};return e[ye]!=null&&(t[ye]=(0,c.pY)(e[ye])),e[T]!=null&&(t[T]=(0,c.pY)(e[T])),t},cs=(e,s)=>{const t={};return e[A]!=null&&(t[A]=J(e[A],s)),e[b]!=null&&(t[b]=ue(e[b],s)),e[v]!=null&&(t[v]=(0,c.AF)(e[v])),e[C]!=null&&(t[C]=(0,c.pY)(e[C])),t},as=(e,s)=>{const t={};return e[A]!=null&&(t[A]=J(e[A],s)),e[b]!=null&&(t[b]=ue(e[b],s)),e[v]!=null&&(t[v]=__strictParseInt32(e[v])),e[We]!=null&&(t[We]=__expectString(e[We])),e[Ge]!=null&&(t[Ge]=__expectString(e[Ge])),e[Ie]!=null&&(t[Ie]=__expectString(e[Ie])),e[N]!=null&&(t[N]=__expectString(e[N])),e[_e]!=null&&(t[_e]=__expectString(e[_e])),e[C]!=null&&(t[C]=__expectString(e[C])),t},ds=(e,s)=>{const t={};return e[A]!=null&&(t[A]=J(e[A],s)),e[ke]!=null&&(t[ke]=__expectString(e[ke])),e[b]!=null&&(t[b]=ue(e[b],s)),e[v]!=null&&(t[v]=__strictParseInt32(e[v])),e[De]!=null&&(t[De]=__expectString(e[De])),e[N]!=null&&(t[N]=__expectString(e[N])),e[C]!=null&&(t[C]=__expectString(e[C])),t},J=(e,s)=>{const t={};return e[O]!=null&&(t[O]=(0,c.pY)(e[O])),e[$e]!=null&&(t[$e]=(0,c.pY)(e[$e])),e[Fe]!=null&&(t[Fe]=(0,c.pY)(e[Fe])),e[Ae]!=null&&(t[Ae]=(0,c.CE)((0,c.aH)(e[Ae]))),t},ls=(e,s)=>{const t={};return e[Se]!=null&&(t[Se]=__expectString(e[Se])),t},ms=(e,s)=>{const t={};return e[h]!=null&&(t[h]=(0,c.pY)(e[h])),t},hs=(e,s)=>{const t={};return e[Re]!=null&&(t[Re]=__expectString(e[Re])),e[T]!=null&&(t[T]=__expectString(e[T])),t},fs=(e,s)=>{const t={};return e[U]!=null&&(t[U]=__expectString(e[U])),t},us=(e,s)=>{const t={};return e[Le]!=null&&(t[Le]=__expectString(e[Le])),e[U]!=null&&(t[U]=__expectString(e[U])),e[T]!=null&&(t[T]=__expectString(e[T])),t},ys=(e,s)=>{const t={};return e[A]!=null&&(t[A]=J(e[A],s)),e[Pe]!=null&&(t[Pe]=hs(e[Pe],s)),e[v]!=null&&(t[v]=__strictParseInt32(e[v])),t},gs=(e,s)=>{const t={};return e[A]!=null&&(t[A]=J(e[A],s)),t},Ss=(e,s)=>{const t={};return e[h]!=null&&(t[h]=(0,c.pY)(e[h])),t},As=(e,s)=>{const t={};return e[h]!=null&&(t[h]=(0,c.pY)(e[h])),t},Es=(e,s)=>{const t={};return e[h]!=null&&(t[h]=(0,c.pY)(e[h])),t},ps=(e,s)=>{const t={};return e[h]!=null&&(t[h]=(0,c.pY)(e[h])),t},Ps=(e,s)=>{const t={};return e[h]!=null&&(t[h]=(0,c.pY)(e[h])),t},Rs=(e,s)=>{const t={};return e[h]!=null&&(t[h]=(0,c.pY)(e[h])),t},Is=(e,s)=>{const t={};return e[h]!=null&&(t[h]=(0,c.pY)(e[h])),t},g=e=>({httpStatusCode:e.statusCode,requestId:e.headers["x-amzn-requestid"]??e.headers["x-amzn-request-id"]??e.headers["x-amz-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]}),Dn=(e,s)=>collectBody(e,s).then(t=>s.utf8Encoder(t)),vs=(0,c.PC)(_),M=async(e,s,t,n,o)=>{const{hostname:a,protocol:i="https",port:P,path:D}=await e.endpoint(),W={protocol:i,hostname:a,port:P,method:"POST",path:D.endsWith("/")?D.slice(0,-1)+t:D+t,headers:s};return n!==void 0&&(W.hostname=n),o!==void 0&&(W.body=o),new fe.HttpRequest(W)},k={"content-type":"application/x-www-form-urlencoded"},G="2011-06-15",F="Action",O="AccessKeyId",Cs="AssumeRole",ye="AssumedRoleId",b="AssumedRoleUser",_s="AssumeRoleWithSAML",xs="AssumeRoleWithWebIdentity",U="Account",T="Arn",N="Audience",A="Credentials",ge="ContextAssertion",bs="DecodeAuthorizationMessage",Se="DecodedMessage",E="DurationSeconds",Ae="Expiration",Ee="ExternalId",pe="EncodedMessage",Pe="FederatedUser",Re="FederatedUserId",Ts="GetAccessKeyInfo",ws="GetCallerIdentity",Ds="GetFederationToken",Ws="GetSessionToken",Ie="Issuer",ve="Key",Ce="Name",_e="NameQualifier",R="Policy",I="PolicyArns",xe="PrincipalArn",be="ProviderArn",Te="ProvidedContexts",we="ProviderId",v="PackedPolicySize",De="Provider",w="RoleArn",j="RoleSessionName",We="Subject",$e="SecretAccessKey",Me="SAMLAssertion",ke="SubjectFromWebIdentityToken",C="SourceIdentity",V="SerialNumber",Ge="SubjectType",Fe="SessionToken",Y="Tags",B="TokenCode",ze="TransitiveTagKeys",Le="UserId",z="Version",He="Value",Ke="WebIdentityToken",Oe="arn",h="message",L=e=>Object.entries(e).map(([s,t])=>(0,c.jc)(s)+"="+(0,c.jc)(t)).join("&"),$s=(e,s)=>{if(s.Error?.Code!==void 0)return s.Error.Code;if(e.statusCode==404)return"NotFound"};class Ms extends c.mY.classBuilder().ep({...Gt}).m(function(s,t,n,o){return[(0,Mt.p2)(n,this.serialize,this.deserialize),(0,Ve.a3)(n,s.getEndpointParameterInstructions())]}).s("AWSSecurityTokenServiceV20110615","AssumeRole",{}).n("STSClient","AssumeRoleCommand").f(void 0,Ft).ser(zt).de(Lt).build(){}const Qe="us-east-1",Xe=async(e,s,t)=>{const n=typeof e=="function"?await e():e,o=typeof s=="function"?await s():s;return t?.debug?.("@aws-sdk/client-sts::resolveRegion","accepting first of:",`${n} (provider)`,`${o} (parent client)`,`${Qe} (STS default)`),n??o??Qe},Je=(e,s)=>{let t,n;return async(o,a)=>{if(n=o,!t){const{logger:P=e?.parentClientConfig?.logger,region:D,requestHandler:W=e?.parentClientConfig?.requestHandler,credentialProviderLogger:oe}=e,dn=await Xe(D,e?.parentClientConfig?.region,oe);t=new s({credentialDefaultProvider:()=>async()=>n,region:dn,requestHandler:W,logger:P})}const{Credentials:i}=await t.send(new Ms(a));if(!i||!i.AccessKeyId||!i.SecretAccessKey)throw new Error(`Invalid response from STS.assumeRole call with role ${a.RoleArn}`);return{accessKeyId:i.AccessKeyId,secretAccessKey:i.SecretAccessKey,sessionToken:i.SessionToken,expiration:i.Expiration,credentialScope:i.CredentialScope}}},ks=(e,s)=>{let t;return async n=>{if(!t){const{logger:a=e?.parentClientConfig?.logger,region:i,requestHandler:P=e?.parentClientConfig?.requestHandler,credentialProviderLogger:D}=e,W=await Xe(i,e?.parentClientConfig?.region,D);t=new s({region:W,requestHandler:P,logger:a})}const{Credentials:o}=await t.send(new AssumeRoleWithWebIdentityCommand(n));if(!o||!o.AccessKeyId||!o.SecretAccessKey)throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${n.RoleArn}`);return{accessKeyId:o.AccessKeyId,secretAccessKey:o.SecretAccessKey,sessionToken:o.SessionToken,expiration:o.Expiration,credentialScope:o.CredentialScope}}},Wn=e=>s=>e({roleAssumer:Je(s,s.stsClientCtor),roleAssumerWithWebIdentity:ks(s,s.stsClientCtor),...s});var Ze=d(37493),Gs=d(70183),Fs=d(23703),qe=d(88610),Z=d(50389),q=d(95908),zs=d(89362),se=d(56971),Ls=d(5243),et=d(95773);const Hs=async(e,s,t)=>({operation:(0,et.J)(s).operation,region:await(0,et.$)(e.region)()||(()=>{throw new Error("expected `region` to be configured for `aws.auth#sigv4`")})()});function Ks(e){return{schemeId:"aws.auth#sigv4",signingProperties:{name:"sts",region:e.region},propertiesExtractor:(s,t)=>({signingProperties:{config:s,context:t}})}}function tt(e){return{schemeId:"smithy.api#noAuth"}}const Os=e=>{const s=[];switch(e.operation){case"AssumeRoleWithSAML":{s.push(tt(e));break}case"AssumeRoleWithWebIdentity":{s.push(tt(e));break}default:s.push(Ks(e))}return s},Us=e=>({...e,stsClientCtor:wt}),Ns=e=>{const s=Us(e);return{...(0,Ls.K)(s)}},js={i8:"3.572.0"};var Vs=d(42677),st=d(57383),nt=d(91033),Ys=d(95640),Bs=d(87954),ee=d(46807),ot=d(52759),Qs=d(91743),Xs=d(88383),Js=d(53918),rt=d(76954),it=d(7242),Zs=d(99558),ct=d(92718);const at="required",r="type",l="fn",m="argv",H="ref",dt=!1,Ue=!0,K="booleanEquals",u="stringEquals",lt="sigv4",mt="sts",ht="us-east-1",f="endpoint",ft="https://sts.{Region}.{PartitionResult#dnsSuffix}",x="tree",Q="error",Ne="getAttr",ut={[at]:!1,[r]:"String"},je={[at]:!0,default:!1,[r]:"Boolean"},yt={[H]:"Endpoint"},gt={[l]:"isSet",[m]:[{[H]:"Region"}]},y={[H]:"Region"},St={[l]:"aws.partition",[m]:[y],assign:"PartitionResult"},At={[H]:"UseFIPS"},Et={[H]:"UseDualStack"},S={url:"https://sts.amazonaws.com",properties:{authSchemes:[{name:lt,signingName:mt,signingRegion:ht}]},headers:{}},p={},pt={conditions:[{[l]:u,[m]:[y,"aws-global"]}],[f]:S,[r]:f},Pt={[l]:K,[m]:[At,!0]},Rt={[l]:K,[m]:[Et,!0]},It={[l]:Ne,[m]:[{[H]:"PartitionResult"},"supportsFIPS"]},vt={[H]:"PartitionResult"},Ct={[l]:K,[m]:[!0,{[l]:Ne,[m]:[vt,"supportsDualStack"]}]},_t=[{[l]:"isSet",[m]:[yt]}],xt=[Pt],bt=[Rt],qs={version:"1.0",parameters:{Region:ut,UseDualStack:je,UseFIPS:je,Endpoint:ut,UseGlobalEndpoint:je},rules:[{conditions:[{[l]:K,[m]:[{[H]:"UseGlobalEndpoint"},Ue]},{[l]:"not",[m]:_t},gt,St,{[l]:K,[m]:[At,dt]},{[l]:K,[m]:[Et,dt]}],rules:[{conditions:[{[l]:u,[m]:[y,"ap-northeast-1"]}],endpoint:S,[r]:f},{conditions:[{[l]:u,[m]:[y,"ap-south-1"]}],endpoint:S,[r]:f},{conditions:[{[l]:u,[m]:[y,"ap-southeast-1"]}],endpoint:S,[r]:f},{conditions:[{[l]:u,[m]:[y,"ap-southeast-2"]}],endpoint:S,[r]:f},pt,{conditions:[{[l]:u,[m]:[y,"ca-central-1"]}],endpoint:S,[r]:f},{conditions:[{[l]:u,[m]:[y,"eu-central-1"]}],endpoint:S,[r]:f},{conditions:[{[l]:u,[m]:[y,"eu-north-1"]}],endpoint:S,[r]:f},{conditions:[{[l]:u,[m]:[y,"eu-west-1"]}],endpoint:S,[r]:f},{conditions:[{[l]:u,[m]:[y,"eu-west-2"]}],endpoint:S,[r]:f},{conditions:[{[l]:u,[m]:[y,"eu-west-3"]}],endpoint:S,[r]:f},{conditions:[{[l]:u,[m]:[y,"sa-east-1"]}],endpoint:S,[r]:f},{conditions:[{[l]:u,[m]:[y,ht]}],endpoint:S,[r]:f},{conditions:[{[l]:u,[m]:[y,"us-east-2"]}],endpoint:S,[r]:f},{conditions:[{[l]:u,[m]:[y,"us-west-1"]}],endpoint:S,[r]:f},{conditions:[{[l]:u,[m]:[y,"us-west-2"]}],endpoint:S,[r]:f},{endpoint:{url:ft,properties:{authSchemes:[{name:lt,signingName:mt,signingRegion:"{Region}"}]},headers:p},[r]:f}],[r]:x},{conditions:_t,rules:[{conditions:xt,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[r]:Q},{conditions:bt,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[r]:Q},{endpoint:{url:yt,properties:p,headers:p},[r]:f}],[r]:x},{conditions:[gt],rules:[{conditions:[St],rules:[{conditions:[Pt,Rt],rules:[{conditions:[{[l]:K,[m]:[Ue,It]},Ct],rules:[{endpoint:{url:"https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},[r]:f}],[r]:x},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",[r]:Q}],[r]:x},{conditions:xt,rules:[{conditions:[{[l]:K,[m]:[It,Ue]}],rules:[{conditions:[{[l]:u,[m]:[{[l]:Ne,[m]:[vt,"name"]},"aws-us-gov"]}],endpoint:{url:"https://sts.{Region}.amazonaws.com",properties:p,headers:p},[r]:f},{endpoint:{url:"https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},[r]:f}],[r]:x},{error:"FIPS is enabled but this partition does not support FIPS",[r]:Q}],[r]:x},{conditions:bt,rules:[{conditions:[Ct],rules:[{endpoint:{url:"https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},[r]:f}],[r]:x},{error:"DualStack is enabled but this partition does not support DualStack",[r]:Q}],[r]:x},pt,{endpoint:{url:ft,properties:p,headers:p},[r]:f}],[r]:x}],[r]:x},{error:"Invalid Configuration: Missing Region",[r]:Q}]},en=(e,s={})=>(0,ct.B1)(qs,{endpointParams:e,logger:s.logger});ct.DY.aws=Zs.Iu;const tn=e=>({apiVersion:"2011-06-15",base64Decoder:e?.base64Decoder??rt.G,base64Encoder:e?.base64Encoder??rt.s,disableHostPrefix:e?.disableHostPrefix??!1,endpointProvider:e?.endpointProvider??en,extensions:e?.extensions??[],httpAuthSchemeProvider:e?.httpAuthSchemeProvider??Os,httpAuthSchemes:e?.httpAuthSchemes??[{schemeId:"aws.auth#sigv4",identityProvider:s=>s.getIdentityProvider("aws.auth#sigv4"),signer:new st.V},{schemeId:"smithy.api#noAuth",identityProvider:s=>s.getIdentityProvider("smithy.api#noAuth")||(async()=>({})),signer:new q.oH}],logger:e?.logger??new c.vk,serviceId:e?.serviceId??"STS",urlParser:e?.urlParser??Js.e,utf8Decoder:e?.utf8Decoder??it.$x,utf8Encoder:e?.utf8Encoder??it.GZ});var sn=d(66918);const nn=e=>{(0,c.H_)(process.version);const s=(0,sn.j)(e),t=()=>s().then(c.jv),n=tn(e);return(0,Vs.H)(process.version),{...n,...e,runtime:"node",defaultsMode:s,bodyLengthChecker:e?.bodyLengthChecker??Qs.W,credentialDefaultProvider:e?.credentialDefaultProvider??nt.iw,defaultUserAgentProvider:e?.defaultUserAgentProvider??(0,Ys.fV)({serviceId:n.serviceId,clientVersion:js.i8}),httpAuthSchemes:e?.httpAuthSchemes??[{schemeId:"aws.auth#sigv4",identityProvider:o=>o.getIdentityProvider("aws.auth#sigv4")||(async a=>await(0,nt.iw)(a?.__config||{})()),signer:new st.V},{schemeId:"smithy.api#noAuth",identityProvider:o=>o.getIdentityProvider("smithy.api#noAuth")||(async()=>({})),signer:new q.oH}],maxAttempts:e?.maxAttempts??(0,ee.M)(se.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),region:e?.region??(0,ee.M)(Z._c,Z.zb),requestHandler:ot.NA.create(e?.requestHandler??t),retryMode:e?.retryMode??(0,ee.M)({...se.NODE_RETRY_MODE_CONFIG_OPTIONS,default:async()=>(await t()).retryMode||Xs.DEFAULT_RETRY_MODE}),sha256:e?.sha256??Bs.k.bind(null,"sha256"),streamCollector:e?.streamCollector??ot.CF,useDualstackEndpoint:e?.useDualstackEndpoint??(0,ee.M)(Z.G7),useFipsEndpoint:e?.useFipsEndpoint??(0,ee.M)(Z.NL)}};var Tt=d(94262);const on=e=>{const s=e.httpAuthSchemes;let t=e.httpAuthSchemeProvider,n=e.credentials;return{setHttpAuthScheme(o){const a=s.findIndex(i=>i.schemeId===o.schemeId);a===-1?s.push(o):s.splice(a,1,o)},httpAuthSchemes(){return s},setHttpAuthSchemeProvider(o){t=o},httpAuthSchemeProvider(){return t},setCredentials(o){n=o},credentials(){return n}}},rn=e=>({httpAuthSchemes:e.httpAuthSchemes(),httpAuthSchemeProvider:e.httpAuthSchemeProvider(),credentials:e.credentials()}),ne=e=>e,cn=(e,s)=>{const t={...ne((0,Tt.GW)(e)),...ne((0,c.kE)(e)),...ne((0,fe.getHttpHandlerExtensionConfiguration)(e)),...ne(on(e))};return s.forEach(n=>n.configure(t)),{...e,...(0,Tt.A1)(t),...(0,c.SQ)(t),...(0,fe.resolveHttpHandlerRuntimeConfig)(t),...rn(t)}};class wt extends c.KU{constructor(...[s]){const t=nn(s||{}),n=kt(t),o=(0,Z.Xb)(n),a=(0,Ve.uW)(o),i=(0,se.resolveRetryConfig)(a),P=(0,Ze.S8)(i),D=(0,qe.er)(P),W=Ns(D),oe=cn(W,s?.extensions||[]);super(oe),this.config=oe,this.middlewareStack.use((0,se.getRetryPlugin)(this.config)),this.middlewareStack.use((0,zs.VG)(this.config)),this.middlewareStack.use((0,Ze.G2)(this.config)),this.middlewareStack.use((0,Gs.cV)(this.config)),this.middlewareStack.use((0,Fs.eV)(this.config)),this.middlewareStack.use((0,qe.XJ)(this.config)),this.middlewareStack.use((0,q.tZ)(this.config,{httpAuthSchemeParametersProvider:this.getDefaultHttpAuthSchemeParametersProvider(),identityProviderConfigProvider:this.getIdentityProviderConfigProvider()})),this.middlewareStack.use((0,q.aZ)(this.config))}destroy(){super.destroy()}getDefaultHttpAuthSchemeParametersProvider(){return Hs}getIdentityProviderConfigProvider(){return async s=>new q.K5({"aws.auth#sigv4":s.credentials})}}const Dt=(e,s)=>s?class extends e{constructor(n){super(n);for(const o of s)this.middlewareStack.use(o)}}:e,Wt=(e={},s)=>Je(e,Dt(wt,s)),an=(e={},s)=>StsGetDefaultRoleAssumerWithWebIdentity(e,Dt(STSClient,s)),Mn=e=>s=>e({roleAssumer:Wt(s),roleAssumerWithWebIdentity:an(s),...s})}};