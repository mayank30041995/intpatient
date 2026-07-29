The Bangladesh-specific URL:
https://apollo-delhi.hosplan.com

is currently redirecting users to the non-Bangladesh page:
https://www.hosplan.com/hospital/indraprastha-apollo-hospital-new-delhi/603931521338ee777603f270

Please update the redirect so that the Bangladesh URL points to the appropriate
Bangladesh-specific destination instead of the global/non-Bangladesh page.



const ALLOWED_COUNTRIES = [
"BD","NP","MM","LK","MV","BT",
"AE","SA","QA","KW","BH","OM",
"ET","KE","TZ","UG","RW","BI","DJ","SO","ER","SS","SD",
"EG","LY","TN","DZ","MA",
"NG","GH","CI","SN","ML","BF","TG","BJ","NE","GM","GN","GW","SL","LR","MR","CV",
"CM","TD","CF","CG","CD","GA","GQ","ST","AO",
"ZA","NA","BW","ZM","ZW","MW","MZ","LS","SZ","MG","MU","SC","KM","RE","YT", "SG"
];

BD  Bangladesh
NP  Nepal
MM  Myanmar
LK  Sri Lanka
MV  Maldives
BT  Bhutan
[08/07, 4:10 pm] Kapil Munjal: AE  United Arab Emirates
SA  Saudi Arabia
QA  Qatar
KW  Kuwait
BH  Bahrain
OM  Oman

User Request
      |
      ↓
CloudFront
      |
      ↓
Check viewer country
      |
      ├── Allowed countries
      |        |
      |        ↓
      |   Serve landing page
      |
      └── Other countries
               |
               ↓
          HTTP 302 Redirect
               |
               ↓
        https://www.hosplan.com/hospital/indraprastha-apollo-hospital-new-delhi/603931521338ee777603f270

