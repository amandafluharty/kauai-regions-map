(function(){
// NOTE: this script is written without the "and" operator (two ampersands) and without a less-than sign
// directly before a letter in comparisons: WordPress mangles those inside Custom HTML blocks.
const D = {"mode":"happyhour","pageTitle":"Happy Hour on Kauaʻi","eyebrow":"Pau hana","title":"Happy hour around the island","lead":"Drink and pūpū specials at bars, breweries and restaurants from Hanalei to Waimea. Pick a day, tap “Right now”, or tap a dot on the map.","facts":[["23","Places with happy hour"],["18","Every day of the week"],["11:30 am","Earliest start"]],"note":"Times are from each business’s Google listing and are updated whenever we refresh our places data. Specials vary, so ask your server.","mapLabel":"Map of Kauaʻi showing happy hour locations","filterLabel":"When?","filters":[{"key":"all","label":"Any day"},{"key":"now","label":"Right now"},{"key":"today","label":"Today"},{"key":"Mon","label":"Monday"},{"key":"Tue","label":"Tuesday"},{"key":"Wed","label":"Wednesday"},{"key":"Thu","label":"Thursday"},{"key":"Fri","label":"Friday"},{"key":"Sat","label":"Saturday"},{"key":"Sun","label":"Sunday"}],"defaultFilter":"all","defaultSort":"next","sorts":[["next","Next happy hour first"],["region","By region"],["az","A to Z"],["near","Nearest"]],"kinds":{"bar":{"label":"Bar \u0026 grill","icon":"drink"},"brewery":{"label":"Brewery","icon":"beer"},"restaurant":{"label":"Restaurant","icon":"fork"}},"empty":"No happy hours match. Try another day or region.","credit":"Happy hour times come from Google business listings and can change without notice, so call ahead if you’re making a trip of it. Know a happy hour we’re missing? \u003ca href=\"/contact/\"\u003eLet us know\u003c/a\u003e. Your location is only used in your browser to sort the list.","spots":[{"id":"ChIJFRe0mUIfB3wRj8QUtVwscLo","name":"The Naughty Rooster Irish Pub","kind":"bar","region":"Lihue","city":"Lihue","address":"Kauai,United States, 3416 Rice St Unit 306, Lihue","lat":21.9595431,"lon":-159.3530311,"maps":"https://maps.google.com/?cid=13434286465132840079","phone":"(808) 212-3718","website":"http://www.naughtyroosterkauai.com/","post":"https://kauaiconnect.com/the-naughty-rooster-irish-pub/","kamaaina":false,"rating":"4.4","reviews":"290","sched":{"Mon":[840,1020],"Tue":[840,1020],"Wed":[840,1020],"Thu":[840,1020],"Fri":[840,1020],"Sat":[840,1020],"Sun":[840,1020]},"week":[["Every day","2–5 pm"]],"notes":"","sources":[["Google Maps listing","https://maps.google.com/?cid=13434286465132840079"]],"img":"https://kauaiconnect.com/wp-content/uploads/ChIJFRe0mUIfB3wRj8QUtVwscLo.jpg"},{"id":"ChIJa6ldrfTlBnwRKW_KbQVBNA0","name":"The Bistro","kind":"bar","region":"North","city":"Kilauea","address":"2484 Keneke St, Kilauea","lat":22.212112,"lon":-159.4067823,"maps":"https://maps.google.com/?cid=951456912854642473","phone":"(808) 828-0480","website":"http://www.thebistrohawaii.com/","post":"https://kauaiconnect.com/the-bistro/","kamaaina":false,"rating":"4.4","reviews":"660","sched":{"Mon":[900,1080],"Tue":[900,1080],"Wed":[900,1080],"Thu":[900,1080],"Fri":[900,1080],"Sat":[900,1080],"Sun":[900,1080]},"week":[["Every day","3–6 pm"]],"notes":"","sources":[["Google Maps listing","https://maps.google.com/?cid=951456912854642473"]],"img":"https://kauaiconnect.com/wp-content/uploads/ChIJa6ldrfTlBnwRKW_KbQVBNA0_1.jpg"},{"id":"ChIJ5_53_xCpB3wRwlsFHfNSiZg","name":"The Barrel Taps Waimea","kind":"bar","region":"West","city":"Waimea","address":"X85C+43, 9400 Kaumualii Hwy, Waimea","lat":21.9585628,"lon":-159.6756813,"maps":"https://maps.google.com/?cid=10991407569691827138","phone":"(808) 320-8397","website":"http://instagram.com/thebarreltaps","post":"https://kauaiconnect.com/the-barrel-taps-waimea/","kamaaina":false,"rating":"4.5","reviews":"23","sched":{"Mon":[900,1020],"Tue":[900,1020],"Wed":[900,1020],"Thu":[900,1020],"Fri":[900,1020],"Sat":[900,1020],"Sun":[900,1020]},"week":[["Every day","3–5 pm"]],"notes":"","sources":[["Google Maps listing","https://maps.google.com/?cid=10991407569691827138"]],"img":"https://kauaiconnect.com/wp-content/uploads/ChIJ5_53_xCpB3wRwlsFHfNSiZg.jpg"},{"id":"ChIJ_xN2Fe_lBnwRMd6YACVgNYo","name":"Sunset Lanai at Anaina Hou","kind":"bar","region":"North","city":"Kilauea","address":"5-2723A Kuhio Hwy, Kilauea","lat":22.2109763,"lon":-159.4160471,"maps":"https://maps.google.com/?cid=9958971863039794737","phone":"(808) 828-2118","website":"https://anainahou.org/lanai/","post":"https://kauaiconnect.com/sunset-lanai-at-anaina-hou/","kamaaina":false,"rating":"4.6","reviews":"23","sched":{"Mon":[960,1050],"Wed":[960,1050]},"week":[["Mon, Wed","4–5:30 pm"]],"notes":"","sources":[["Google Maps listing","https://maps.google.com/?cid=9958971863039794737"]],"img":"https://kauaiconnect.com/wp-content/uploads/ChIJ_xN2Fe_lBnwRMd6YACVgNYo.jpg"},{"id":"ChIJ0Vc975EeB3wRKZNCnadpmRU","x":{"2026-11-26":["Thanksgiving","Closed"]},"name":"Rob's Good Times Grill","kind":"bar","region":"Lihue","city":"Lihue","address":"4303 Rice St, Lihue","lat":21.9725533,"lon":-159.3659773,"maps":"https://maps.google.com/?cid=1556391314852057897","phone":"(808) 246-0311","website":"https://www.kauaisportsbarandgrill.com/?utm_source=google\u0026utm_medium=organic\u0026utm_campaign=gbp-listing","post":"https://kauaiconnect.com/robs-good-times-grill/","kamaaina":false,"rating":"4.5","reviews":"2,153","sched":{"Mon":[900,1080],"Wed":[900,1080],"Thu":[900,1080],"Fri":[900,1080],"Sat":[900,1080],"Sun":[900,1080]},"week":[["Mon, Wed–Sun","3–6 pm"]],"notes":"","sources":[["Google Maps listing","https://maps.google.com/?cid=1556391314852057897"]],"img":"https://kauaiconnect.com/wp-content/uploads/ChIJ0Vc975EeB3wRKZNCnadpmRU_1.jpg"},{"id":"ChIJWSy3tL0aB3wRkWdt32AT79o","name":"Red Salt","kind":"restaurant","region":"South","city":"Koloa","address":"2251 Poipu Rd, Koloa","lat":21.8754918,"lon":-159.4575452,"maps":"https://maps.google.com/?cid=15775849326488414097","phone":"(808) 742-4288","website":"https://www.koakea.com/red-salt","post":"https://kauaiconnect.com/red-salt/","kamaaina":false,"rating":"4.3","reviews":"766","sched":{"Mon":[1020,1080],"Tue":[1020,1080],"Wed":[1020,1080],"Thu":[1020,1080],"Fri":[1020,1080],"Sat":[1020,1080],"Sun":[1020,1080]},"week":[["Every day","5–6 pm"]],"notes":"","sources":[["Google Maps listing","https://maps.google.com/?cid=15775849326488414097"]],"img":"https://kauaiconnect.com/wp-content/uploads/ChIJWSy3tL0aB3wRkWdt32AT79o-2.jpg"},{"id":"ChIJpQOHwr4aB3wRNtlot8rSEns","name":"Poipu Rock n' Roll Sushi","kind":"restaurant","region":"South","city":"Koloa","address":"2360 Kiahuna Plantation Dr A10, #40, Koloa","lat":21.8795089,"lon":-159.4585522,"maps":"https://maps.google.com/?cid=8868382384348256566","phone":"(808) 742-9888","website":"http://sushikauai.com/?y_source=1_MTQzOTIzMDUtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D","post":"https://kauaiconnect.com/poipu-rock-n-roll-sushi/","kamaaina":false,"rating":"3.3","reviews":"230","sched":{"Mon":[960,1080],"Tue":[960,1080],"Wed":[960,1080],"Thu":[960,1080],"Fri":[960,1080],"Sat":[960,1080],"Sun":[960,1080]},"week":[["Every day","4–6 pm"]],"notes":"","sources":[["Google Maps listing","https://maps.google.com/?cid=8868382384348256566"]],"img":"https://kauaiconnect.com/wp-content/uploads/ChIJpQOHwr4aB3wRNtlot8rSEns-2.jpg"},{"id":"ChIJUwNbAmPhBnwRweKMWu0_pdg","name":"Nāmaka | Restaurant N Bar","kind":"bar","region":"East","city":"Kapaʻa","address":"4-831 Kuhio Hwy Ste 420, Kapaʻa","lat":22.0631846,"lon":-159.3207105,"maps":"https://maps.google.com/?cid=15610953972008673985","phone":"(808) 320-3303","website":"https://www.namakarestaurantbar.com/","post":"https://kauaiconnect.com/namaka-restaurant-n-bar/","kamaaina":false,"rating":"4.3","reviews":"107","sched":{"Tue":[840,1020],"Wed":[840,1020],"Thu":[840,1020],"Fri":[840,1020],"Sat":[840,1020]},"week":[["Tue–Sat","2–5 pm"]],"notes":"","sources":[["Google Maps listing","https://maps.google.com/?cid=15610953972008673985"]],"img":"https://kauaiconnect.com/wp-content/uploads/ChIJUwNbAmPhBnwRweKMWu0_pdg.jpg"},{"id":"ChIJ0SjMf58bB3wRsw2GrW8yEfw","name":"Mucho Aloha Brewhouse","kind":"brewery","region":"South","city":"Koloa","address":"5330 Koloa Rd, Koloa","lat":21.9034856,"lon":-159.4660701,"maps":"https://maps.google.com/?cid=18163354227395923379","phone":"(808) 378-2020","website":"https://muchoalohabrewhouse.com/","post":"https://kauaiconnect.com/mucho-aloha-brewhouse/","kamaaina":false,"rating":"4.5","reviews":"343","sched":{"Mon":[840,1020],"Tue":[840,1020],"Wed":[840,1020],"Thu":[840,1020],"Fri":[840,1020],"Sat":[840,1020],"Sun":[840,1020]},"week":[["Every day","2–5 pm"]],"notes":"","sources":[["Google Maps listing","https://maps.google.com/?cid=18163354227395923379"]],"img":"https://kauaiconnect.com/wp-content/uploads/ChIJ0SjMf58bB3wRsw2GrW8yEfw-1.jpg"},{"id":"ChIJ8cqY9ekeB3wREpcY_S_1PcQ","name":"Mariachi's Mexican Cuisine","kind":"bar","region":"Lihue","city":"Lihue","address":"3501 Rice St #2006, Lihue","lat":21.9614591,"lon":-159.3530252,"maps":"https://maps.google.com/?cid=14140727991471740690","phone":"(808) 246-1570","website":"http://www.mariachis-hawaii.com/","post":"https://kauaiconnect.com/mariachis-mexican-cuisine/","kamaaina":false,"rating":"4.1","reviews":"1,235","sched":{"Mon":[840,1020],"Tue":[840,1020],"Wed":[840,1020],"Thu":[840,1020],"Fri":[840,1020],"Sat":[840,1020],"Sun":[840,1020]},"week":[["Every day","2–5 pm"]],"notes":"","sources":[["Google Maps listing","https://maps.google.com/?cid=14140727991471740690"]],"img":"https://kauaiconnect.com/wp-content/uploads/ChIJ8cqY9ekeB3wREpcY_S_1PcQ-1.jpg"},{"id":"ChIJQX8odyQcB3wRa7gT1fCAZCs","name":"Mahiko Lounge","kind":"bar","region":"Lihue","city":"Lihue","address":"3-2087 Kaumualii Hwy, Lihue","lat":21.9711336,"lon":-159.3911263,"maps":"https://maps.google.com/?cid=3126765813157312619","phone":"(808) 245-9593","website":"http://www.kilohanakauai.com/","post":"https://kauaiconnect.com/mahiko-lounge/","kamaaina":false,"rating":"4.5","reviews":"59","sched":{"Mon":[900,1020],"Tue":[900,1020],"Wed":[900,1020],"Thu":[900,1020],"Fri":[900,1020],"Sat":[900,1020]},"week":[["Mon–Sat","3–5 pm"]],"notes":"","sources":[["Google Maps listing","https://maps.google.com/?cid=3126765813157312619"]],"img":"https://kauaiconnect.com/wp-content/uploads/ChIJQX8odyQcB3wRa7gT1fCAZCs-1.jpg"},{"id":"ChIJB7Ud3LcaB3wRpgBrO8FTE8g","name":"Living Foods","kind":"restaurant","region":"South","city":"Koloa","address":"2829 Ala Kalanikaumaka St Suite 124, Koloa","lat":21.8845999,"lon":-159.4695623,"maps":"https://maps.google.com/?cid=14416958921533751462","phone":"(808) 320-7642","website":"https://www.livingfoodshawaii.com/?utm_medium=Click\u0026utm_source=GoogleMyBusiness","post":"https://kauaiconnect.com/living-foods/","kamaaina":false,"rating":"4.1","reviews":"1,127","sched":{"Mon":[900,1020],"Tue":[900,1020],"Wed":[900,1020],"Thu":[900,1020],"Fri":[900,1020],"Sat":[900,1020],"Sun":[900,1020]},"week":[["Every day","3–5 pm"]],"notes":"","sources":[["Google Maps listing","https://maps.google.com/?cid=14416958921533751462"]],"img":"https://kauaiconnect.com/wp-content/uploads/ChIJB7Ud3LcaB3wRpgBrO8FTE8g_1.jpg"},{"id":"ChIJ1bBAD3IfB3wRTEB5R22U41Y","name":"Lilikoi Bar and Grill","kind":"bar","region":"Lihue","city":"Lihue","address":"3501 Rice St #2009, Lihue","lat":21.9613433,"lon":-159.3531658,"maps":"https://maps.google.com/?cid=6261011104046596172","phone":"(808) 207-7897","website":"https://lilikoikauai.com/","post":"https://kauaiconnect.com/lilikoi-bar-and-grill/","kamaaina":false,"rating":"4.3","reviews":"1,669","sched":{"Mon":[900,1050],"Tue":[900,1050],"Wed":[900,1050],"Thu":[900,1050],"Fri":[900,1050],"Sat":[900,1050],"Sun":[900,1050]},"week":[["Every day","3–5:30 pm"]],"notes":"","sources":[["Google Maps listing","https://maps.google.com/?cid=6261011104046596172"]],"img":"https://kauaiconnect.com/wp-content/uploads/ChIJ1bBAD3IfB3wRTEB5R22U41Y-1.jpg"},{"id":"ChIJz_RDqkrgBnwRHWccDTuA6t8","name":"Lemongrass Grill - Kauai","kind":"bar","region":"East","city":"Kapaʻa","address":"4-871 Kuhio Hwy, Kapaʻa","lat":22.0626575,"lon":-159.3201716,"maps":"https://maps.google.com/?cid=16134849606119614237","phone":"(808) 821-2888","website":"","post":"https://kauaiconnect.com/lemongrass-grill-kauai/","kamaaina":false,"rating":"4.1","reviews":"1,206","sched":{"Mon":[960,1080],"Wed":[960,1080],"Thu":[960,1080],"Fri":[960,1080],"Sat":[960,1080],"Sun":[960,1080]},"week":[["Mon, Wed–Sun","4–6 pm"]],"notes":"","sources":[["Google Maps listing","https://maps.google.com/?cid=16134849606119614237"]],"img":"https://kauaiconnect.com/wp-content/uploads/ChIJz_RDqkrgBnwRHWccDTuA6t8.jpg"},{"id":"ChIJxbz0_UvgBnwRuv8oBcS1YpA","name":"Lava Lava Beach Club","kind":"restaurant","region":"East","city":"Kapaʻa","address":"420 Papaloa Rd, Kapaʻa","lat":22.051991,"lon":-159.328966,"maps":"https://maps.google.com/?cid=10404077942684057530","phone":"(808) 241-5282","website":"http://lavalavabeachclub.com/kauai","post":"https://kauaiconnect.com/lava-lava-beach-club/","kamaaina":false,"rating":"4.4","reviews":"4,661","sched":{"Mon":[900,990],"Tue":[900,990],"Wed":[900,990],"Thu":[900,990],"Fri":[900,990],"Sat":[900,990],"Sun":[900,990]},"week":[["Every day","3–4:30 pm"]],"notes":"","sources":[["Google Maps listing","https://maps.google.com/?cid=10404077942684057530"]],"img":"https://kauaiconnect.com/wp-content/uploads/ChIJxbz0_UvgBnwRuv8oBcS1YpA-1.jpg"},{"id":"ChIJVVUxW9gaB3wRjvUv23NhBAs","name":"Koloa Thai Bistro","kind":"bar","region":"South","city":"Koloa","address":"5460 Koloa Rd, Koloa","lat":21.9043003,"lon":-159.4640948,"maps":"https://maps.google.com/?cid=793866584550536590","phone":"(808) 359-7878","website":"https://koloathai.com/","post":"https://kauaiconnect.com/koloa-thai-bistro/","kamaaina":false,"rating":"4.5","reviews":"419","sched":{"Mon":[930,1050],"Tue":[930,1050],"Wed":[930,1050],"Thu":[930,1050],"Fri":[930,1050],"Sat":[930,1050],"Sun":[930,1050]},"week":[["Every day","3:30–5:30 pm"]],"notes":"","sources":[["Google Maps listing","https://maps.google.com/?cid=793866584550536590"]],"img":"https://kauaiconnect.com/wp-content/uploads/ChIJVVUxW9gaB3wRjvUv23NhBAs.jpg"},{"id":"ChIJI9Zb8H8bB3wRexlb4x5AlSk","name":"Kauai Island Brewing Company - Koloa","kind":"brewery","region":"South","city":"Koloa","address":"5460 Koloa Rd, Koloa","lat":21.9038971,"lon":-159.4638739,"maps":"https://maps.google.com/?cid=2996371628492527995","phone":"(808) 320-7979","website":"http://www.kauaiislandbrewing.com/","post":"https://kauaiconnect.com/kauai-island-brewing-company-koloa/","kamaaina":false,"rating":"4.4","reviews":"445","sched":{"Mon":[900,1020],"Tue":[900,1020],"Wed":[900,1020],"Thu":[900,1020],"Fri":[900,1020],"Sat":[900,1020],"Sun":[900,1020]},"week":[["Every day","3–5 pm"]],"notes":"","sources":[["Google Maps listing","https://maps.google.com/?cid=2996371628492527995"]],"img":""},{"id":"ChIJQ0jBa20GB3wRrK75r_Zelms","name":"Kauai Island Brewing Company","kind":"brewery","region":"West","city":"Eleele","address":"4350 Waialo Rd, Eleele","lat":21.9014044,"lon":-159.5865921,"maps":"https://maps.google.com/?cid=7752488222172229292","phone":"(808) 335-0006","website":"http://www.kauaiislandbrewing.com/","post":"https://kauaiconnect.com/kauai-island-brewing-company/","kamaaina":false,"rating":"4.4","reviews":"2,260","sched":{"Mon":[900,1020],"Tue":[900,1020],"Wed":[900,1020],"Thu":[900,1020],"Fri":[900,1020],"Sat":[900,1020],"Sun":[900,1020]},"week":[["Every day","3–5 pm"]],"notes":"","sources":[["Google Maps listing","https://maps.google.com/?cid=7752488222172229292"]],"img":"https://kauaiconnect.com/wp-content/uploads/ChIJQ0jBa20GB3wRrK75r_Zelms_2.jpg"},{"id":"ChIJ5_Ofo5YaB3wRX-lM1zvYUs0","name":"Kalapaki Joe's Poipu","kind":"bar","region":"South","city":"Koloa","address":"1941 Poipu Rd, Koloa","lat":21.8754573,"lon":-159.4500052,"maps":"https://maps.google.com/?cid=14795125477392312671","phone":"(808) 742-6366","website":"http://kalapakijoes.com/","post":"https://kauaiconnect.com/kalapaki-joes-poipu/","kamaaina":false,"rating":"4.0","reviews":"1,563","sched":{"Mon":[900,1080],"Tue":[900,1080],"Wed":[900,1080],"Thu":[900,1080],"Fri":[900,1080],"Sat":[900,1080],"Sun":[900,1080]},"week":[["Every day","3–6 pm"]],"notes":"","sources":[["Google Maps listing","https://maps.google.com/?cid=14795125477392312671"]],"img":"https://kauaiconnect.com/wp-content/uploads/ChIJ5_Ofo5YaB3wRX-lM1zvYUs0-1.jpg"},{"id":"ChIJa3b78iwbB3wRWChRdx-IsIo","name":"Kala Kai Bar","kind":"bar","region":"South","city":"Koloa","address":"2251 Poipu Rd, Koloa","lat":21.8750307,"lon":-159.4574235,"maps":"https://maps.google.com/?cid=9993637241862301784","phone":"(808) 742-4200","website":"https://www.koakea.com/savor/kala-kai-pool-bar/","post":"https://kauaiconnect.com/kala-kai-bar/","kamaaina":false,"rating":"4.2","reviews":"6","sched":{"Mon":[690,750],"Tue":[690,750],"Wed":[690,750],"Thu":[690,750],"Fri":[690,750],"Sat":[690,750],"Sun":[690,750]},"week":[["Every day","11:30 am–12:30 pm"]],"notes":"","sources":[["Google Maps listing","https://maps.google.com/?cid=9993637241862301784"]],"img":"https://kauaiconnect.com/wp-content/uploads/ChIJa3b78iwbB3wRWChRdx-IsIo.jpg"},{"id":"ChIJ4eIbSwAbB3wRDo2JkfEPnBE","name":"Isola Cucina","kind":"restaurant","region":"South","city":"Koloa","address":"2360 Kiahuna Plantation Dr, Koloa","lat":21.8792885,"lon":-159.4592618,"maps":"https://maps.google.com/?cid=1268906725214883086","phone":"(808) 320-7100","website":"http://isolacucina.com/","post":"https://kauaiconnect.com/isola-cucina/","kamaaina":false,"rating":"4.5","reviews":"41","sched":{"Mon":[900,1020],"Tue":[900,1020],"Wed":[900,1020],"Thu":[900,1020],"Fri":[900,1020],"Sat":[900,1020],"Sun":[900,1020]},"week":[["Every day","3–5 pm"]],"notes":"","sources":[["Google Maps listing","https://maps.google.com/?cid=1268906725214883086"]],"img":"https://kauaiconnect.com/wp-content/uploads/ChIJ4eIbSwAbB3wRDo2JkfEPnBE-1.jpg"},{"id":"ChIJDcXGn4geB3wRBZG7kdOGimE","name":"Hualani's","kind":"restaurant","region":"Lihue","city":"Lihue","address":"3770 Ala’oli Way Suite 2, Lihue","lat":21.9580078,"lon":-159.3446035,"maps":"https://maps.google.com/?cid=7028578411706290437","phone":"(808) 320-7399","website":"https://www.timberskauai.com/eat-drink/hualanis/?utm_source=Google-Business","post":"https://kauaiconnect.com/hualanis/","kamaaina":false,"rating":"4.5","reviews":"685","sched":{"Mon":[900,1020],"Tue":[900,1020],"Wed":[900,1020],"Thu":[900,1020],"Fri":[900,1020],"Sat":[900,1020],"Sun":[900,1020]},"week":[["Every day","3–5 pm"]],"notes":"","sources":[["Google Maps listing","https://maps.google.com/?cid=7028578411706290437"]],"img":"https://kauaiconnect.com/wp-content/uploads/ChIJDcXGn4geB3wRBZG7kdOGimE-1.jpg"},{"id":"ChIJxWQczeCpB3wR9TgKDVHjkns","name":"Chicken In a Barrel BBQ \u0026 Da Pizza Place","kind":"restaurant","region":"West","city":"Waimea","address":"X85C+43, 9400 Kaumualii Hwy, Waimea","lat":21.9586905,"lon":-159.6756059,"maps":"https://maps.google.com/?cid=8904429350515521781","phone":"(808) 320-8397","website":"http://waimeapizzabbqbar.com/","post":"https://kauaiconnect.com/chicken-in-a-barrel-bbq-da-pizza-place/","kamaaina":false,"rating":"4.2","reviews":"817","sched":{"Mon":[900,1020],"Tue":[900,1020],"Wed":[900,1020],"Thu":[900,1020],"Fri":[900,1020],"Sat":[900,1020],"Sun":[900,1020]},"week":[["Every day","3–5 pm"]],"notes":"","sources":[["Google Maps listing","https://maps.google.com/?cid=8904429350515521781"]],"img":"https://kauaiconnect.com/wp-content/uploads/ChIJxWQczeCpB3wR9TgKDVHjkns.jpg"}],"checked":"November 2026","sourceList":[["Google Maps business listings (via Kauaʻi Connect places data)","https://www.google.com/maps/search/happy+hour+kauai"]],"regions":["North","East","Lihue","South","West"],"bounds":{"w":-159.86,"e":-159.2,"s":21.8,"n":22.3},"coast":[[-159.585,22.224],[-159.56,22.229],[-159.53,22.219],[-159.505,22.222],[-159.495,22.212],[-159.48,22.219],[-159.44,22.226],[-159.4,22.234],[-159.36,22.212],[-159.31,22.165],[-159.3,22.12],[-159.305,22.08],[-159.318,22.045],[-159.333,22.0],[-159.343,21.96],[-159.38,21.922],[-159.42,21.887],[-159.455,21.866],[-159.5,21.878],[-159.55,21.888],[-159.585,21.893],[-159.62,21.918],[-159.665,21.945],[-159.72,21.961],[-159.755,21.98],[-159.785,22.03],[-159.775,22.08],[-159.745,22.13],[-159.7,22.17],[-159.65,22.2],[-159.61,22.215]]};
const root = document.getElementById('kcp-' + D.mode);
const $ = k => root.querySelector('[data-k="' + k + '"]');
const MARKETS = D.mode === 'markets';
const HH = D.mode === 'happyhour';          // happy hour: each spot has its own time per day in s.sched
const KAMA = D.mode === 'kamaaina';        // kamaʻāina discounts: s.deal, regular opening hours in s.sched
const TIMED = MARKETS || HH;
const REGIONS = D.regions;
const REGION_LABEL = {North:'North',East:'East',Lihue:'Līhuʻe',South:'South',West:'West'};
const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const DAY_LONG = {Sun:'Sunday',Mon:'Monday',Tue:'Tuesday',Wed:'Wednesday',Thu:'Thursday',Fri:'Friday',Sat:'Saturday'};
const ICON = {
  produce:'<path d="M12 7c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7z"/><path d="M12 7c0-2 1-4 3-5M12 7c-1-2-3-3-5-3"/>',
  market:'<path d="M3 9h18l-1.5-5h-15z"/><path d="M4 9v11h16V9"/><path d="M9 20v-6h6v6"/><path d="M3 9c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3"/>',
  bins:'<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/><path d="m10 11 2 2 2-2M12 13v4"/>',
  station:'<path d="M2 17h13V7H2zM15 10h4l3 3v4h-7"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
  hi5:'<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 12h.01M18 12h.01"/>',
  center:'<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/>',
  cans:'<path d="M7 4h10v16H7z"/><path d="M7 8h10M7 16h10"/>',
  plastic:'<path d="M10 2h4v3l2 3v12a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8l2-3z"/>',
  glass:'<path d="M10 2h4v5c2 1 3 2.5 3 5v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-8c0-2.5 1-4 3-5z"/>',
  cardboard:'<path d="m3 7 9-4 9 4-9 4z"/><path d="M3 7v10l9 4 9-4V7M12 11v10"/>',
  paper:'<path d="M6 2h9l4 4v16H6z"/><path d="M14 2v5h5M9 12h7M9 16h7"/>',
  green:'<path d="M5 21c0-9 5-15 15-16-1 10-7 15-15 16z"/><path d="M5 21 14 12"/>',
  metal:'<path d="M14 4l6 6-10 10-6-6z"/><path d="m11 7 6 6"/>',
  appliances:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M5 9h14M8 5h.01M8 12v3"/>',
  tires:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/>',
  oil:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  propane:'<path d="M8 6h8a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3zM10 6V3h4v3"/>',
  bulky:'<path d="M4 18v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M2 18h20M4 14h16M6 10V7h12v3"/>',
  batteries:'<rect x="3" y="7" width="16" height="10" rx="2"/><path d="M22 11v2M8 12h4M10 10v4"/>',
  bulbs:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V18h8v-3.3A7 7 0 0 0 12 2z"/>',
  reuse:'<path d="M7 19H4l3-5M17 5h3l-3 5M4 14l4-7h8M20 10l-4 7H8"/>',
  drink:'<path d="M4 4h16l-8 9z"/><path d="M12 13v7M8 21h8M15 4l3-2"/>',
  beer:'<path d="M5 8h10v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"/><path d="M15 11h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2M5 8c0-2 1.5-4 5-4s5 2 5 4M8 12v6M11 12v6"/>',
  fork:'<path d="M7 2v9M4 2v5a3 3 0 0 0 6 0V2M7 11v11M17 2c-2 0-3 3-3 6s1 4 3 4v10"/>',
  spa:'<path d="M12 21c-5 0-9-3-9-8 3 0 6 1.5 9 5 3-3.5 6-5 9-5 0 5-4 8-9 8z"/><path d="M12 18c-2-3-2-7 0-11 2 4 2 8 0 11z"/>',
  shop:'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>',
  ticket:'<path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4z"/><path d="M13 5v14"/>',
  tag:'<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
  star:'<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  phone:'<path d="M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2z"/>',
  pin:'<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  all:'<circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>'
};
const svgIcon = (k, w) => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + (w||2) + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICON[k]||ICON.pin) + '</svg>';
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

// ---- Hawaiʻi time (no daylight saving, always UTC-10)
const hst = new Date(Date.now() - 10*3600e3);
const TODAY = DAYS[hst.getUTCDay()], NOW_MIN = hst.getUTCHours()*60 + hst.getUTCMinutes();
const dayOffset = d => (DAYS.indexOf(d) - DAYS.indexOf(TODAY) + 7) % 7;      // 0 = today
// win(s, day) = [start, end] in minutes, or null. Markets share one time for all their days; happy hours have s.sched.
/* holiday-aware v1 */
const TODAY_KEY = hst.toISOString().slice(0, 10);                       // Hawaii date, e.g. 2026-11-26
const holToday = s => s.x ? (s.x[TODAY_KEY] || null) : null;            // ['Thanksgiving', 'Closed' or '8:00 AM - 2:00 PM']
const holClosed = s => { const h = holToday(s); return h ? /closed/i.test(h[1]) : false; };
const holWin = v => { const m = /(\d{1,2}):(\d{2})\s*([AP]M)\s*[-–]\s*(\d{1,2}):(\d{2})\s*([AP]M)/i.exec(v || ''); if (!m) return null;
  const t = (h, mm, ap) => ((+h) % 12 + (/p/i.test(ap) ? 12 : 0)) * 60 + (+mm); return [t(m[1], m[2], m[3]), t(m[4], m[5], m[6])]; };
const baseWin = (s, d) => s.sched ? (s.sched[d] || null) : (s.days.indexOf(d) !== -1 ? [s.start, s.end] : null);
const win = (s, d) => { if (d === TODAY) { const h = holToday(s); if (h) { if (/closed/i.test(h[1])) return null;
  if (KAMA) { const hw = holWin(h[1]); if (hw) return hw; } } } return baseWin(s, d); };
const isToday = s => !!win(s, TODAY);
const openNow = s => { const w = win(s, TODAY); return w ? (NOW_MIN >= w[0] ? w[1] > NOW_MIN : false) : false; };
const laterToday = s => { const w = win(s, TODAY); return w ? w[0] > NOW_MIN : false; };
const spotDays = s => s.sched ? Object.keys(s.sched) : s.days;
const nextOffset = s => Math.min.apply(null, spotDays(s).map(d => { const o = dayOffset(d); return (o === 0 ? (win(s, d) ? (NOW_MIN >= win(s, d)[1] ? 7 : 0) : 7) : o); }));
const nextStart = s => { let best = null; spotDays(s).forEach(d => { const o = dayOffset(d), hw = win(s, d), w = hw || baseWin(s, d), k = (o === 0 ? (hw ? (NOW_MIN >= w[1] ? 7 : 0) : 7) : o) * 1440 + w[0]; if (best === null ? true : best > k) best = k; }); return best; };
const clock = (m, ap) => { const h = Math.floor(m / 60), mm = m % 60; if (h === 12 ? mm === 0 : false) return 'noon';
  return ((h + 11) % 12 + 1) + (mm ? ':' + String(mm).padStart(2, '0') : '') + (ap === false ? '' : (h >= 12 ? ' pm' : ' am')); };
const span = w => { const same = (w[0] >= 720) === (w[1] >= 720) ? w[1] !== 720 : false; return clock(w[0], !same) + '–' + clock(w[1]); };

// ---- island projection (lon/lat -> svg units)
const B = D.bounds, K = Math.cos(22.05*Math.PI/180);
const W = Math.round((B.e-B.w)*K*1000), H = Math.round((B.n-B.s)*1000);
const px = (lon, lat) => [((lon-B.w)*K*1000).toFixed(1), ((B.n-lat)*1000).toFixed(1)];
const landPath = 'M' + D.coast.map(p => px(p[0], p[1]).join(',')).join('L') + 'Z';

let region = 'All', filter = D.defaultFilter, sort = D.defaultSort, me = null;

// ---- intro text
$('eyebrow').textContent = D.eyebrow;
$('title').textContent = D.title;
$('lead').textContent = D.lead;
$('note').textContent = D.note;
$('credit').innerHTML = D.credit;
$('facts').innerHTML = D.facts.map(f => '<li><b>' + esc(f[0]) + '</b><span>' + esc(f[1]) + '</span></li>').join('');
$('filterLabel').textContent = D.filterLabel;
$('filters').setAttribute('aria-label', D.filterLabel);
$('sort').innerHTML = D.sorts.map(s => '<option value="' + s[0] + '"' + (s[0] === 'near' ? ' disabled' : '') + '>' + esc(s[1]) + '</option>').join('');
$('sort').value = sort;
const extLink = (u, t) => '<a href="' + esc(u) + '" target="_blank" rel="noopener">' + esc(t) + '</a>';
$('sources').innerHTML = '<h4>Sources (checked ' + esc(D.checked) + ')</h4><ol>' +
  D.sourceList.map(x => '<li>' + extLink(x[1], x[0]) + '</li>').join('') + '</ol>';

if (D.guide) {
  $('guide').innerHTML = '<details class="kcp-guide"><summary>' + esc(D.guide.title) + '</summary><div class="kcp-guide-grid">' +
    D.guide.items.map(g => '<div class="kcp-g"><h4>' + svgIcon(g.icon) + esc(g.name) + '</h4><p>' + esc(g.yes) + '</p>' + (g.no ? '<p class="no">Not: ' + esc(g.no) + '</p>' : '') + '</div>').join('') +
    '</div></details>';
}

// ---- big island map
const isl = $('island');
isl.setAttribute('aria-label', D.mapLabel);
isl.setAttribute('viewBox', '-20 -20 ' + (W+40) + ' ' + (H+40));
isl.innerHTML = '<path class="land" d="' + landPath + '"/>' +
  [['North',-159.47,22.29],['East',-159.24,22.10],['Lihue',-159.27,21.94],['South',-159.47,21.82],['West',-159.83,21.93]]
    .map(r => { const xy = px(r[1], r[2]); return '<text class="rl" x="' + xy[0] + '" y="' + xy[1] + '" text-anchor="middle">' + REGION_LABEL[r[0]] + '</text>'; }).join('') +
  '<g data-k="me"></g>' +
  D.spots.map(s => { const xy = px(s.lon, s.lat); return '<circle class="dot" data-id="' + s.id + '" cx="' + xy[0] + '" cy="' + xy[1] + '" r="8" fill="var(--' + s.region + ')" tabindex="0" role="button" aria-label="' + esc(s.name) + ', ' + esc(s.city) + '"><title>' + esc(s.name) + ' · ' + esc(s.city) + '</title></circle>'; }).join('');
isl.querySelectorAll('.dot').forEach(d => {
  const go = () => jump(d.dataset.id);
  d.addEventListener('click', go);
  d.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
});
function jump(id){
  let c = root.querySelector('[data-card="' + id + '"]');
  if (!c) { region = 'All'; filter = D.defaultFilter; render(); c = root.querySelector('[data-card="' + id + '"]'); }
  if (!c) return;
  c.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block:'center'});
  root.querySelectorAll('.kcp-card.flash').forEach(x => x.classList.remove('flash'));
  c.classList.add('flash'); setTimeout(() => c.classList.remove('flash'), 1800);
}

// ---- filters
function matches(s, f){
  if (f === 'all') return true;
  if (f === 'now') return openNow(s);
  if (TIMED) return f === 'today' ? isToday(s) : !!win(s, f);
  const keys = D.filters.find(x => x.key === f).accepts;
  return s.accepts.some(a => keys.indexOf(a) !== -1);
}
const fchips = $('filters');
fchips.innerHTML = D.filters.map(f => {
  const n = D.spots.filter(s => matches(s, f.key)).length;
  const label = f.key === 'today' ? 'Today (' + DAY_LONG[TODAY] + ')' : f.label;
  if (TIMED ? f.key === TODAY : false) return '';          // today's weekday is already the "Today" chip
  if (n ? false : f.key !== 'now') { if (f.key === filter) filter = 'all'; return ''; }   // "Right now" always shows
  return '<button type="button" class="kcp-chip" data-f="' + f.key + '" aria-pressed="false">' + (f.icon ? svgIcon(f.icon, 2.1) : '') + esc(label) + ' <small>' + n + '</small></button>';
}).join('');
fchips.addEventListener('click', e => { const b = e.target.closest('.kcp-chip'); if (!b) return; filter = b.dataset.f; render(); });

const rchips = $('regions');
const counts = REGIONS.reduce((o,r) => (o[r] = D.spots.filter(s => s.region === r).length, o), {});
rchips.innerHTML = [['All', D.spots.length]].concat(REGIONS.filter(r => counts[r]).map(r => [r, counts[r]]))
  .map(rn => '<button type="button" class="kcp-chip" data-r="' + rn[0] + '" aria-pressed="false">' + (rn[0] === 'All' ? 'All regions' : '<i style="background:var(--' + rn[0] + ')"></i>' + REGION_LABEL[rn[0]]) + ' <small>' + rn[1] + '</small></button>').join('');
rchips.addEventListener('click', e => { const b = e.target.closest('.kcp-chip'); if (!b) return; region = b.dataset.r; render(); });
$('sort').addEventListener('change', e => { sort = e.target.value; render(); });

// ---- closest to me
function miles(a, b){ const R = 3958.8, r = Math.PI/180, dLa = (b.lat-a.lat)*r, dLo = (b.lon-a.lon)*r;
  const h = Math.sin(dLa/2)**2 + Math.cos(a.lat*r)*Math.cos(b.lat*r)*Math.sin(dLo/2)**2; return 2*R*Math.asin(Math.sqrt(h)); }
const fmt = m => 0.1 > m ? 'Right here' : 10 > m ? m.toFixed(1) + ' mi away' : Math.round(m) + ' mi away';
$('near').addEventListener('click', () => {
  const btn = $('near'), msg = $('msg'), opt = $('sort').querySelector('option[value=near]');
  if (me) { me = null; btn.setAttribute('aria-pressed','false'); opt.disabled = true; if (sort === 'near') { sort = D.defaultSort; $('sort').value = sort; } $('me').innerHTML = ''; msg.textContent = ''; render(); return; }
  if (!navigator.geolocation) { msg.textContent = 'Your browser can’t share its location. Use the map or region buttons instead.'; return; }
  msg.textContent = 'Finding you…';
  navigator.geolocation.getCurrentPosition(p => {
    me = {lat:p.coords.latitude, lon:p.coords.longitude};
    btn.setAttribute('aria-pressed','true'); opt.disabled = false; sort = 'near'; $('sort').value = 'near'; region = 'All';
    const near = D.spots.map(s => [miles(me,s), s]).sort((a,b) => a[0]-b[0])[0];
    msg.textContent = near[0] > 60 ? 'You seem to be off-island, so distances are long. The list is sorted nearest first.'
                                   : 'Closest: ' + near[1].name + ', ' + fmt(near[0]) + '.';
    if ([me.lat-B.s+0.05, B.n+0.05-me.lat, me.lon-B.w+0.05, B.e+0.05-me.lon].every(v => v > 0)) {
      const xy = px(me.lon, me.lat); $('me').innerHTML = '<circle class="mering" cx="' + xy[0] + '" cy="' + xy[1] + '" r="16"/><circle class="me" cx="' + xy[0] + '" cy="' + xy[1] + '" r="6"><title>You</title></circle>';
    }
    render();
  }, () => { msg.textContent = 'Location is off, so we can’t sort by distance. Use the map or region buttons instead.'; },
  {enableHighAccuracy:false, timeout:10000, maximumAge:300000});
});

// ---- cards
function head(s){
  const xy = px(s.lon, s.lat), k = D.kinds[s.kind];
  return '<div class="kcp-top"><span class="kcp-ico">' + svgIcon(k.icon) + '</span>' +
    '<span class="kcp-type"><b>' + esc(k.label) + '</b><span>' + esc(REGION_LABEL[s.region]) + ' · ' + esc(s.city) + '</span></span>' +
    '<svg class="kcp-mini" viewBox="-30 -30 ' + (W+60) + ' ' + (H+60) + '" aria-hidden="true"><path class="land" d="' + landPath + '"/><circle class="pin" cx="' + xy[0] + '" cy="' + xy[1] + '" r="34"/></svg></div>';
}
function card(s){
  const d = me ? miles(me, s) : null, tags = [];
  if (d !== null) tags.push('<span class="kcp-tag dist">' + fmt(d) + '</span>');
  let mid = '';
  if (MARKETS) {
    if (openNow(s)) tags.push('<span class="kcp-tag now">Open now</span>');
    else if (laterToday(s)) tags.push('<span class="kcp-tag today">Today</span>');
    if (s.kind === 'sunshine') tags.push('<span class="kcp-tag">' + svgIcon('produce', 2.2) + 'Produce only</span>');
    mid = '<p class="kcp-when"><b>' + esc(s.dayText) + '</b><span>' + esc(s.timeText) + '</span></p>' +
          '<p class="kcp-line">' + svgIcon('pin') + '<span>' + esc(s.venue) + '<br><span class="town">' + esc(s.address) + ', ' + esc(s.city) + '</span></span></p>';
  } else if (HH) {
    const tw = win(s, TODAY);
    if (openNow(s)) tags.push('<span class="kcp-tag now">Happy hour now · until ' + esc(clock(tw[1])) + '</span>');
    else if (laterToday(s)) tags.push('<span class="kcp-tag today">Today ' + esc(span(tw)) + '</span>');
    if (holClosed(s)) tags.push('<span class="kcp-tag">Closed for ' + esc(holToday(s)[0]) + '</span>');
    if (s.kamaaina) tags.push('<span class="kcp-tag hit">Kamaʻāina discount</span>');
    if (s.rating) tags.push('<span class="kcp-tag">' + svgIcon('star', 2.2) + esc(s.rating) + (s.reviews ? ' <small>(' + esc(s.reviews) + ')</small>' : '') + '</span>');
    mid = s.week.map(w => '<p class="kcp-when"><b>' + esc(w[0]) + '</b><span>' + esc(w[1]) + '</span></p>').join('') +
          '<p class="kcp-line">' + svgIcon('pin') + '<span>' + esc(s.address) + '</span></p>';
  } else if (KAMA) {
    const tw = win(s, TODAY);
    if (openNow(s)) tags.push('<span class="kcp-tag now">Open now · until ' + esc(clock(tw[1])) + '</span>');
    else if (laterToday(s)) tags.push('<span class="kcp-tag today">Opens ' + esc(clock(tw[0])) + ' today</span>');
    if (holClosed(s)) tags.push('<span class="kcp-tag">Closed for ' + esc(holToday(s)[0]) + '</span>');
    if (s.happyhour) tags.push('<span class="kcp-tag">' + svgIcon('drink', 2.2) + 'Happy hour</span>');
    if (s.rating) tags.push('<span class="kcp-tag">' + svgIcon('star', 2.2) + esc(s.rating) + (s.reviews ? ' <small>(' + esc(s.reviews) + ')</small>' : '') + '</span>');
    const hrs = holToday(s) ? (holClosed(s) ? 'Closed today for ' + holToday(s)[0] : holToday(s)[0] + ' hours ' + (tw ? span(tw) : holToday(s)[1])) : !Object.keys(s.sched).length ? 'Call for hours' : tw ? 'Today ' + span(tw) : 'Closed today';
    mid = '<p class="kcp-when kcp-deal">' + svgIcon('tag', 2.2) + '<b>' + esc(s.deal) + '</b></p>' +
          '<p class="kcp-line">' + svgIcon('clock') + '<span>' + esc(hrs) + '</span></p>' +
          '<p class="kcp-line">' + svgIcon('pin') + '<span>' + esc(s.address) + '</span></p>';
  } else {
    const want = filter === 'all' ? [] : D.filters.find(x => x.key === filter).accepts;
    s.accepts.forEach(a => tags.push('<span class="kcp-tag' + (want.indexOf(a) !== -1 ? ' hit' : '') + '">' + svgIcon(a, 2.2) + esc(D.materials[a]) + '</span>'));
    mid = '<p class="kcp-line">' + svgIcon('clock') + '<span>' + esc(s.hours || 'Call for hours') + '</span></p>' +
          '<p class="kcp-line">' + svgIcon('pin') + '<span>' + esc(s.address) + ', ' + esc(s.city) + '</span></p>';
  }
  const links = s.post ? ['<a href="' + esc(s.post) + '">Details</a>'] : [];
  links.push('<a href="' + esc(s.maps) + '" target="_blank" rel="noopener">Directions ↗</a>');
  if (s.phone) links.push('<a href="tel:' + esc(s.phone.replace(/[^0-9+]/g, '')) + '">' + esc(s.phone) + '</a>');
  else if (s.website) links.push('<a href="' + esc(s.website) + '" target="_blank" rel="noopener">Website ↗</a>');
  const photo = s.img ? '<a class="kcp-photo" href="' + esc(s.post || s.maps) + '" tabindex="-1" aria-hidden="true"><img src="' + esc(s.img) + '" alt="" loading="lazy" decoding="async"></a>' : '';
  return '<li class="kcp-card" data-card="' + s.id + '" style="--r:var(--' + s.region + ')">' + photo + head(s) +
    '<div class="kcp-body"><h3>' + esc(s.name) + '</h3>' + mid +
    (s.notes ? '<p class="kcp-memo">' + esc(s.notes) + '</p>' : '') +
    (tags.length ? '<div class="kcp-tags">' + tags.join('') + '</div>' : '') +
    (s.sources.length ? '<p class="kcp-src">Source: ' + s.sources.map(x => extLink(x[1], x[0].replace('County of Kauaʻi: ', 'County: ') + ' ↗')).join(' · ') + '</p>' : '') +
    '<div class="kcp-foot">' + links.join('') + '</div></div></li>';
}
const byRegion = (a,b) => REGIONS.indexOf(a.region) - REGIONS.indexOf(b.region) || a.city.localeCompare(b.city) || a.name.localeCompare(b.name);
const KIND_ORDER = Object.keys(D.kinds);
// "Right now" with nothing on: say what starts next (in the chosen region) instead of an empty list
function nextUp(){
  const pool = D.spots.filter(s => region === 'All' ? true : s.region === region);
  if (!pool.length) return esc(D.empty);
  const k = Math.min.apply(null, pool.map(nextStart));
  const first = pool.filter(s => nextStart(s) === k).sort((a,b) => a.name.localeCompare(b.name));
  const off = Math.floor(k / 1440), when = off === 0 ? 'today' : off === 1 ? 'tomorrow' : DAY_LONG[DAYS[(DAYS.indexOf(TODAY) + off) % 7]];
  const names = first.slice(0, 3).map(s => '<a href="#" data-jump="' + s.id + '">' + esc(s.name) + '</a>').join(', ') + (first.length > 3 ? ' and ' + (first.length - 3) + ' more' : '');
  return 'No happy hours on right now. Next up ' + when + ' at ' + esc(clock(k % 1440)) + ': ' + names + '. ' +
    '<a href="#" data-f-go="' + (off === 0 ? 'today' : DAYS[(DAYS.indexOf(TODAY) + off) % 7]) + '">See all ' + (off === 0 ? 'today' : esc(when)) + ' →</a>';
}
$('grid').addEventListener('click', e => {
  const j = e.target.closest('[data-jump]'), g = e.target.closest('[data-f-go]');
  if (j) { e.preventDefault(); filter = 'all'; render(); jump(j.dataset.jump); }
  else if (g) { e.preventDefault(); filter = g.dataset.fGo; render(); }
});
function render(){
  fchips.querySelectorAll('.kcp-chip').forEach(b => b.setAttribute('aria-pressed', b.dataset.f === filter));
  rchips.querySelectorAll('.kcp-chip').forEach(b => b.setAttribute('aria-pressed', b.dataset.r === region));
  let list = D.spots.filter(s => (region === 'All' || s.region === region) ? matches(s, filter) : false);
  if (sort === 'near' ? me : false) list.sort((a,b) => miles(me,a) - miles(me,b));
  else if (sort === 'az') list.sort((a,b) => a.name.localeCompare(b.name));
  else if (sort === 'next') list.sort((a,b) => nextStart(a) - nextStart(b) || a.name.localeCompare(b.name));
  else if (sort === 'kind') list.sort((a,b) => KIND_ORDER.indexOf(a.kind) - KIND_ORDER.indexOf(b.kind) || byRegion(a,b));
  else list.sort(byRegion);
  $('grid').innerHTML = list.length ? list.map(card).join('') : '<li class="kcp-empty">' + (filter === 'now' ? nextUp() : esc(D.empty)) + '</li>';
  const shown = new Set(list.map(s => s.id));
  isl.querySelectorAll('.dot').forEach(d => d.classList.toggle('dim', !shown.has(d.dataset.id)));
}
render();
})();
