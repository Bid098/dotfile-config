"use strict";exports.id=513,exports.ids=[513],exports.modules={37513:($,m,n)=>{n.d(m,{fromIni:()=>O});var l=n(43598),d=n(68924);const g=(e,o)=>{const s={EcsContainer:r=>n.e(176).then(n.bind(n,94176)).then(({fromContainerMetadata:t})=>t(r)),Ec2InstanceMetadata:r=>n.e(176).then(n.bind(n,94176)).then(({fromInstanceMetadata:t})=>t(r)),Environment:r=>Promise.resolve().then(n.bind(n,47990)).then(({fromEnv:t})=>t(r))};if(e in s)return s[e];throw new d.mV(`Unsupported credential source in profile ${o}. Got ${e}, expected EcsContainer or Ec2InstanceMetadata or Environment.`)},v=e=>Boolean(e)&&typeof e=="object"&&typeof e.role_arn=="string"&&["undefined","string"].indexOf(typeof e.role_session_name)>-1&&["undefined","string"].indexOf(typeof e.external_id)>-1&&["undefined","string"].indexOf(typeof e.mfa_serial)>-1&&(C(e)||h(e)),C=e=>typeof e.source_profile=="string"&&typeof e.credential_source>"u",h=e=>typeof e.credential_source=="string"&&typeof e.source_profile>"u",P=async(e,o,s,r={})=>{s.logger?.debug("@aws-sdk/credential-provider-ini","resolveAssumeRoleCredentials (STS)");const t=o[e];if(!s.roleAssumer){const{getDefaultRoleAssumer:E}=await Promise.all([n.e(653),n.e(989)]).then(n.bind(n,31989));s.roleAssumer=E({...s.clientConfig,credentialProviderLogger:s.logger,parentClientConfig:s?.parentClientConfig},s.clientPlugins)}const{source_profile:i}=t;if(i&&i in r)throw new d.mV(`Detected a cycle attempting to resolve credentials for profile ${(0,l.Jl)(s)}. Profiles visited: `+Object.keys(r).join(", "),!1);const R=i?u(i,o,s,{...r,[i]:!0}):(await g(t.credential_source,e)(s))(),c={RoleArn:t.role_arn,RoleSessionName:t.role_session_name||`aws-sdk-js-${Date.now()}`,ExternalId:t.external_id,DurationSeconds:parseInt(t.duration_seconds||"3600",10)},{mfa_serial:a}=t;if(a){if(!s.mfaCodeProvider)throw new d.mV(`Profile ${e} requires multi-factor authentication, but no MFA code callback was provided.`,!1);c.SerialNumber=a,c.TokenCode=await s.mfaCodeProvider(a)}const W=await R;return s.roleAssumer(W,c)},A=e=>Boolean(e)&&typeof e=="object"&&typeof e.credential_process=="string",S=async(e,o)=>n.e(754).then(n.bind(n,58754)).then(({fromProcess:s})=>s({...e,profile:o})()),I=async(e,o={})=>{const{fromSSO:s}=await n.e(131).then(n.bind(n,47131));return s({profile:e,logger:o.logger})()},x=e=>e&&(typeof e.sso_start_url=="string"||typeof e.sso_account_id=="string"||typeof e.sso_session=="string"||typeof e.sso_region=="string"||typeof e.sso_role_name=="string"),f=e=>Boolean(e)&&typeof e=="object"&&typeof e.aws_access_key_id=="string"&&typeof e.aws_secret_access_key=="string"&&["undefined","string"].indexOf(typeof e.aws_session_token)>-1,y=(e,o)=>(o?.logger?.debug("@aws-sdk/credential-provider-ini","resolveStaticCredentials"),Promise.resolve({accessKeyId:e.aws_access_key_id,secretAccessKey:e.aws_secret_access_key,sessionToken:e.aws_session_token,credentialScope:e.aws_credential_scope})),w=e=>Boolean(e)&&typeof e=="object"&&typeof e.web_identity_token_file=="string"&&typeof e.role_arn=="string"&&["undefined","string"].indexOf(typeof e.role_session_name)>-1,j=async(e,o)=>n.e(12).then(n.bind(n,79012)).then(({fromTokenFile:s})=>s({webIdentityTokenFile:e.web_identity_token_file,roleArn:e.role_arn,roleSessionName:e.role_session_name,roleAssumerWithWebIdentity:o.roleAssumerWithWebIdentity,logger:o.logger,parentClientConfig:o.parentClientConfig})()),u=async(e,o,s,r={})=>{const t=o[e];if(Object.keys(r).length>0&&f(t))return y(t,s);if(v(t))return P(e,o,s,r);if(f(t))return y(t,s);if(w(t))return j(t,s);if(A(t))return S(s,e);if(x(t))return await I(e,s);throw new d.mV(`Profile ${e} could not be found or parsed in shared credentials file.`)},O=(e={})=>async()=>{e.logger?.debug("@aws-sdk/credential-provider-ini","fromIni");const o=await(0,l.MX)(e);return u((0,l.Jl)(e),o,e)}}};
