KIRIM-CHIQIM — o'rnatish

1) INTERNETSIZ ISHLASHI uchun: 4 ta fayl + 2 ta icon (index.html, sw.js, manifest.webmanifest, icon-192.png, icon-512.png) ni
   HTTPS hostingga joylang (GitHub Pages bepul: yangi repo -> fayllarni yuklang -> Settings > Pages).
   Telefonda Chrome da oching -> ⋮ -> "Ilovani o'rnatish". Keyin internetsiz ham ochiladi.

2) BULUTDA SAQLASH (telefon almashsa tiklash) — Firebase (bepul):
   a) console.firebase.google.com -> Add project
   b) Build > Authentication > Get started > "Email/Password" ni yoqing
   c) Build > Firestore Database > Create database (production mode)
   d) Firestore > Rules ga shuni qo'ying va Publish:
        rules_version = '2';
        service cloud.firestore {
          match /databases/{db}/documents {
            match /users/{uid}/e/{id} {
              allow read, write: if request.auth != null && request.auth.uid == uid;
            }
          }
        }
   e) Project settings > Your apps > Web (</>) -> ilova qo'shing -> chiqqan firebaseConfig ichidan
      apiKey, authDomain, projectId, appId ni index.html dagi FB={...} qatoriga yozing.
   f) Authentication > Settings > Authorized domains ga hosting domeningizni (masalan ism.github.io) qo'shing.

3) Ilovada "Hisob" bo'limida email + parol bilan ro'yxatdan o'ting. Yangi telefonda shu email bilan kirsangiz hammasi tiklanadi.

Eslatma: ovozli yozish Chrome da ishlaydi va odatda internet talab qiladi; internetsiz bo'lsa matn bilan yozing.
