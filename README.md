# 🎸 Individuell Examination – Where It's @

Dags att rocka koden!  
Din mission är att bygga **frontenden** till **Where it’s @** – en app där lokala musikevent får stå i rampljuset.  

Med **React** som ditt instrument ska du komponera en upplevelse som får användarna att klicka vidare till nästa spelning med ett leende.  
**Komponenter, props och state** – tänk modulärt, tänk snyggt, tänk *"det här skulle jag själv vilja använda"*.  

Du bygger alltså inte bara ett gränssnitt – du bygger **pulsen i stadens musikscen**. 🎶

---

## ✅ Tekniska krav för Godkänt

Du skall i denna uppgift visa att du behärskar följande tekniker och delar inom **React**:

- 📄 **Pages & Components**
- 🎛️ **useState** & **useEffect**
- 📦 **Props**
- 🌐 **API-hantering**
- 🗺️ **Routing** mellan Pages
- ⚡ Avancerad **state-hantering** med Zustand

---

## ✅ Krav för Väl Godkänt

- Välj ut **ytterligare 3 st externa bibliotek** (som vi inte gått igenom i klassen) som du lär dig och implementerar i din applikation.  
- Beskriv i din `README.md` **hur dessa hookar/bibliotek fungerar**, samt **varför** de passar just din applikation.
- Ha en **god struktur** på din applikation med bra uppdelning i **Pages** och **Komponenter**.  
- Det är inte krav på att dela upp koden i egna custom hooks (men det är tillåtet om man vill).

 **Observera:**  
Om du väljer lite "tyngre" bibliotek (inte bara ikonbibliotek) kan **2 st** räcka – kontrollera med läraren.

---

##  Tips på externa bibliotek

-  Material UI  
-  Chakra UI  
-  Swiper  
-  Fontawesome  
-  Icons8  
-  Framer Motion  
-  Redux *(kan användas istället för Zustand)*  
-  TanStack React Query  
-  react-confetti  
-  UUID  

> ❌ **Räknas inte:** React-router-dom, axios osv.

---

## 📋 Övriga krav

- Appen **måste inte vara pixel-perfekt** mot skissen, men ska ha en **enhetlig och responsiv design**.  
- Designen ska se bra ut på alla skärmstorlekar mellan **375px - 500px**.  
- **Tillgänglighetskontroll/anpassning** ska göras innan inlämning.  
- Sidan får **aldrig** krascha.  

---

##  Biljettgenerering

När en beställning görs ska en **biljett** skapas med:

-  **BiljettID** på 5 tecken (endast **STORA BOKSTÄVER** och siffror tillåtna)  
-  **Sektion**  
-  **Sittplats**  

Vid köp av flera biljetter till samma evenemang:
- Alla biljetter ska ha **samma sektion**.  
- Sittplatserna ska ligga **bredvid varandra**.
