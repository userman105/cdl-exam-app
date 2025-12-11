import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Answer from "#models/answer"
export default class generalAnswerSeeder extends  BaseSeeder {
  async run() {
    const englishAnswers = [
      "Do not use the brakes to slow down the vehicle.",
      "Use fewer gears than you used to climb the hill.",
      "Rust around the wheel mounting bolts may mean that they are not properly secured. ",
      "Tires of different sizes should not be used together on the same vehicle.",
      "You will go straight ahead even if you turn the steering wheel. ",
      "Avoid using the brakes until your speed drops to 20 mph. ",
      "Unstable loads such as hanging meat or livestock require extra caution when turning.",
      "This is because they can startle other drivers.",
      "Refuse to load the cargo.",
      "Sleep is the only thing that can overcome fatigue.",
      "Lifting the brake pedal will help bring some pressure so that the vehicle can be stopped.",
      "A football field.",
      "Wash the windshield with antifreeze.",
      "Lower the lights for 300 feet from oncoming vehicles.",
      "When shifting down for a curve, you must do so before entering the curve. ",
      "Place the triangle between you and oncoming traffic.",
      "Your judgment and decision-making will be affected.",
      "There are blind spots that mirrors cannot cover.",
      " Increase the distance between you and the vehicle behind you.",
      " Increase the distance between you and the vehicle behind you.",
      "Be balanced in the cargo area.",
      "12-15 seconds.",
      "Stop accelerating.",
      "Helps slow down the vehicle while driving Slows down brake wear",
      "Used to keep the vehicle in a straight line while braking.",
      "When you feel sleepy.",
      "Keep injured people calm.",
      "Press the brake pedal gently while driving in water.",
      "Drug use can lead to an accident or arrest.",
      "Heavy vehicles need more distance than normal vehicles.",
      "Use the parking brake to stabilize the vehicle until the brakes work.",
      "Slow down to a safe speed before crossing a curve.",
      "Move to the right side.",
      "This is caused by the brakes overheating.",
      "Never remove the cooling system cap on a pressurized system until the system has cooled down.",
      "The weight of the vehicle changes the height.",
      "A burning tire must be extinguished with water.",
      "Slow down gradually.",
      "Violent acceleration can cause mechanical damage.",
      "Heavy or fast-moving vehicles will absorb more heat from the brakes in order to stop.",
      "Brake discs must contain brake fluid.",
      "At night, turn on your high beams before you start passing and keep them on until you have passed the vehicle.",
      "Take your foot off the accelerator.",
      "If the wheels are spinning, you cannot control the vehicle.",
      "If the tires are too hot to touch, applying five or ten pounds of pressure will cool them down.",
      "You can always turn to avoid an obstacle faster than you can stop.",
      "Tire blowout.",
      "Take regular breaks.",
      "If there is nothing on the side of the road, stay to the right until your vehicle stops, then return to the road when it is safe to do so.",
      "Wind is a particular problem when exiting a tunnel.",
      "Keep your dashboard lights on at all times.",
      "4 seconds.",
      "Both hands on either side of the steering wheel.",
      "Use when it is safe and legal to do so.",
      "It may be a slow-moving vehicle.",
      "The space around the ignition column.",
      "Stop driving at the earliest opportunity when it is safe to do so.",
      "35 miles per hour.",
      " Turn the steering wheel in the opposite direction to avoid a traffic emergency.",
      " You should avoid using the brake when you can.",
      "Release the brake when you are 5 miles per hour below the safe speed, then let your speed return to the safe speed and repeat this again. (Reduce your speed to 5 mph below the safe speed).",
      "When turning, you should signal early.",
      "You can use the engine rev counter to tell you when to change gear.",
      "When you double your speed, you will need twice the distance to stop.",
      "This can cause the front wheels to skid when they have low traction.",
      "Stop using the brakes and turn quickly in the opposite direction.",
      "Maintain a speed 5-10 mph below the posted speed limit.",
      "Empty truck.",
      "3",
      "50",
      "Both the trailer and the tractor.",
      "0.04",
      "In your pocket.",
      "Low pressure in the front wheels.",
      "Talking to other drivers about what you want.",
      "One-year suspension of your commercial driver's license (CDL).",
      "You will be out of service for 24 hours.",
      "If you double your speed, your stopping distance will quadruple.",
      " Look for an emergency exit on the road or escape routes.",
      "It can cause the truck to roll over in turns.",
      "10",
      "Stop safely and fix the problem.",
      "Lift the brake pedal to generate more pressure.",
      "Vibration.",
      "Select a gear that keeps your vehicle at a safe speed on the slope.",
      "The nature of the load requires you to stop under state or federal law.",
      "500",
      "Always dangerous.",
      "Turn on your hazard lights to warn other drivers.",
      "Within 500 feet behind you.",
      "Anti-lock brakes.",
      "It is less dangerous to skid off the side of the road than to cause a collision.",
      " Car heating.",
      "Occurs when you drive fast or stop quickly.",
      " Increase the distance between you and them.",
      "Exhaust.",
      "It bleeds making the road surface slippery",
      "Park the truck until the fog clears.",
      "Tire thread's depth.",
      "Learn escape ramp locations on your way.",
      "Should be used by any driver who loses braking power.",
      "If you have a cellular phone or CB radio yous should notify the authorities before exiting",
      "Wait for fire fighters.",
      "Tire damage.",
      "Turn signals and four way flashers.",
      "Not move.",
      "10",
      "Parking brakes.",
      "Empty trucks take longer to stop than if loaded, but this is not the normal case for buses.",
      "Release the parking brakes as you apply engine power.",
      "When driving in winter weather, you should check that the heater is working properly before starting your trip.",
      "Poisonous fumes can enter the cab or sleeping compartment.",
      "A loss of steering control.",
      "The eyes see a hazard to the time the brain knows that this is a hazard.",
      "Are often wider than other vehicles.",
      "You are about to exit the road and need to slow down.",
      "Wait for a large enough gap in the traffic to enter the road.",
      "Leave on your high beams.",
      "Because you cannot see, you should back slowly until you slightly bump into the dock.",
      "1 block",
      "In order to turn quickly you must have a firm grip on the steering wheel.",
      "Responding to a hazard by slowing the vehicle.",
      "Provide enough traction to push the rig over wet pavement and through snow.",
      "The tank must be labeled with a four-inch diamond-shaped hazard symbol",
      "A double with an empty trailer.",
      "Gravity.",
      "Battery fluid level.",
      "Before the fire happens.",
      "Safety.",
      "Steering wheel play of more than 10 degrees (2 inches on 20 inches steering Wheel).",
      "They show a wider area than flat mirrors show.",
      "To keep control of the vehicle.",
      "Perception distance, reaction distance, and braking distance.",
      "Start at the inside lane and swing right as you turn.",
      "They may be moving to your traffic lane.",
      "Use your mirrors to make sure the gap in traffic is large enough for you to enter safely.",
      "Signal early and change lane slowly and smoothly.",
      "Use your high beams when legal and keep your interior lights off.",
      "Driving too fast for conditions.",
      "Short term or daily rental truck drivers are often not use to the limited vision, which makes these drivers a hazard.",
      "When the temperature drops, the bridges freeze before the road.",
      "Poor cargo ventilation may cause cargo to catch on fire.",
      "All the time.",
      "Amount of fuel on a vehicle.",
      "If you need to tilt a cab, secure loose things so that they could not fall or break anything.",
      "Yes and they can put you out of service if unsafe.",
      "A state law dictates legal weight limit.",
      "Basic chemistry.",
      "Their weight",
      "You are giving your consent to be tested for alcohol in your blood.",
      "Near, lower",
      "5 seconds",
      "Look to the right lane or edge markings of the road.",
      "Watch for  oncoming traffic.",
      "There may be strong winds when exiting.",
      "If it helps to avoid a crash.",
      "Not less than 4/32 inch.",
      "1/4",
      "1/10",
      "Is any road condition or other road user that is possible danger.",
      "Slow down to a safe speed before the turn.",
      "Tractor with two 27-feet trailers.",
      "1 second for each 10 feet of vehicle length.",
      "Often makes you sleepy and should not be used while driving.",
      "It is not important how you brake in an emergency situation.",
      "Driving too fast.",
      "Honk your horn and stay close behind the car.",
      "Use your four-way flashers or brake lights to warn others.",
      "Look outside your vehicle for another means of slowing you.",
      "Park on the side of the road.",
      "Yes, because the brakes can get out of adjustment when they are used a lot.",
      "You should adjust your mirrors before starting the trip.",
      "1/2",
      "Permits less maximum axle weight for axles that are closer together.",
      "Where the rear of your vehicle is while you make turns.",
      "Prescription drugs are allowed if a doctor says they will not affect the driving ability.",
      "If you do not hold a wheel with both hands it could pull away from you.",
      "Whenever you have to back.",
      "Using mirrors and turn signals, turn sharply to get back to the road.",
      "Dust brush.",
      "Signal other drivers when it is safe to pass you.",
      "They may move slowly, unexpectedly change lanes or stop.",
      "Enough engine oil level.",
      "Should be performed after every break you take while driving.",
      "Poor traction.",
      "Park in an open area.",
      "If a hill or curve keeps drivers behind you from seeing the vehicle within 500 feet, the reflective triangle should be moved back to give adequate warning.",
      "Generally are used when freight is carried part way by rail or ship.",
      "You can check the coolant level of a hot engine.",
      "While the vehicle is parked.",
      "Use the braking effect of the engine.",
      "Squeezing the brakes firmly without locking them up.",
      "Brake adjustment.",
      "Labels",
      "Robotic",
      "Gross combination weight",
      "Below the posted speed limit.",
      "Most heavy vehicle accidents occur between midnight and 6 a.m.",
      "Front of",
      "Trailer jack-knife.",
      "Axles' mounts should be checked at each point where they are secured on the vehicle frame and axles.",
      "Brake shoes should not have oil,grease, or brake fluid on them.",
      "If The vehicle does not require placards.",
      "1 year",
      "All trucks carrying hazardous materials pose a threat to public safety and health.",
      "Any detectable amount.",
      "Responding to a hazard by slowing the vehicle.",
      "You can pull forward when you leave.",
      "Total weight of a single vehicle plus its load.",
      "The coolant temperature gauge should begin a gradual rise to normal.",
      "4",
      "Protect the area.",
      "Shift to lower gear.",
      "You need both hands on the wheel to turn safely.",
      "Hydraulic brakes.",
      "A drinker can control how fast his or her body absorbs alcohol.",
      "Require special permits.",
      "The faster or heavier the vehicle is, the more heat the brakes have to absorb to stop it.",
      "Warning signal for parked vehicles.",
      "When any defects are noted whether they are certified to be repaired or not.",
      "In the pouch of the driver door.",
      "On a vehicle with a trailer, the trailer can push the towing vehicle sideways.",
      "Defensive",
      "Off-tracking.",
      "The tracks have a steep approach.",
      "Ice should be removed from the radiator shutter.",
      "Within 10 minutes.",
      "Automatic transmission.",
      "Air pressure in tires increases with the temperature.",
      "Find another route that will not require driving under the object.",
      "You should inspect your tires every two hours or every 100 miles when driving in very hot weather.",
      "The value specified by the manufacturer as the loaded weight of a single vehicle.",
      "Gross Combination Weight Rating",
      "Stay on shoulder until your vehicle has come to a stop.",

    ]

    const arabicAnswers =[
      'عدم استخدام المكابح حتي تبطئ المركبة.'
      ,'غيار اقل مما استخدمته من اجل تسلق المنحدر'
      ,'الصدأ حول مسامير تثبيت العجلات ربما يعني انهم غير مثبتين جيداٌ. '
      ,'الاطارات ذات الاحجام المختلفة يجب ان لا تستخدم معاٌ علي نفس المركبة.'
      ,'سوف تذهب الي الامام مباشرة حتي اذا  تم ادارة عجلة القيادة. '
      ,'تجنب استخدام الفرامل حتي تنخفض السرعة الي 20 ميل. '
      ,'الحمولة الغير مستقرة مثل اللحم المعلق او الماشية تتطلب حرص اكبر اثناء المنعطفات.'
      ,'لأنه من الممكن ان يفزع السائقين الاخرين.'
      ,'ارفض تحميل الحمولة.'
      ,'النوم هو الشيء الوحيد الذي يمكنه التغلب علي الإرهاق.'
      ,'رفع دواسة المكابح سوف يساعد علي جلب بعض الضغط حتي يمكن اقاف المركبة.'
      ,'مساحة ملعب كرة قدم .'
      ,'غسل الزجاج الامامي بمضاد التجمد.'
      ,'خفض الإضاءة لمسافة 300 قدم من المركبات القادمة.'
      ,'عندما تقوم بنقل الحركة الي الاسفل من اجل منحني, يجب عليك ذلك قبل دخول المنحني '
      ,'وضع المثلث بينك و بين المرور القادم.'
      ,'مركز الحكم و أتخاذ القرار سوف يتأثر.'
      ,'هناك بقع عمياء لا يمكن للمرآة ان تغطيها.'
      ,' زيادة المسافة بينك و بين من يتبعك.'
      ,' زيادة المسافة بينك و بين من يتبعك.'
      ,'متزنة في مكان تحميل البضاعة.'
      ,'12-15 ثانية.'
      ,'اقاف التسارع.'
      ,'يساعد في ابطاء المركبة اثناء القيادة يبطئ من تأكل المكابح'
      ,'يستخدم من اجل ابقاء المركبة في خط مستقيم اثناء الكبح.'
      ,'عندما تشعر بالنعاس.'
      ,'ابقي الاشخاص المصابين هادئين.'
      ,' الضغط علي دواسة المكابح برفق اثناء القيادة في الماء.'
      ,'استخدام المخدرات من الممكن ان يؤدي الي حادث او القبض علي المتعاطي.'
      ,' المركبات الثقيلة تحتاج الي مسافات اكبر من التي تحتاج اليها المركبات العادية.'
      ,'استخدم مكابح الركن من اجل تثبيت المركبة حتي يعمل الدبرياج.'
      ,'أبطأ الي سرعة امنة قبل عبور المنحني.'
      ,'اتجه الي الجانب الأيمن.'
      ,'يحدث بسبب سخونة المكابح.'
      ,'لا يجوز لك ابداً ازالة غطاء دورة التبريد في نظام مضغوط حتي يبرود النظام.'
      ,'وزن المركبة يغير الارتفاع.'
      ,'اطار مشتعل يجب ان يطفئ بالماء.'
      ,'الابطاء بالتدريج.'
      ,'التسارع العنيف من الممكن ان يأدي الي ضرر ميكانيك'
      ,'المركبة الثقيلة او التي تتحرق بسرعة, سوف تمتص المكابح حرارة اكثر من اجل إيقافه'
      ,'أقراص المكابح يجب انا يكون فيها سائل المكابح.'
      ,'في الليل, قم بفتح الاضاءة العالية قبل ان تبدء في التخطي و اتركهم مفتوحين حتي تقوم بتخطي المركبة.'
      ,'ارفع قدمك من علي دواسة الوقود.'
      ,' اذا كانت العجلات تنزلق فلا يمكنك التحكم في المركبة.'
      ,'اذا كانت الإطارات ساخنة جداً للمس, وضع خمسة او عشرة جنيهات من الضغط سوف يبردهم.'
      ,'يمكنك دائماً الانعطاف من اجل تجنب عقبة اسرع مما يمكنك التوقف.'
      ,'اشتعال اطار.'
      ,'خذ فترات راحة دورية'
      ,'اذا كان لا يوجد شيء بجانب الطريق, ابقي علي اليمين حتي تقوم المركبة الخاصة بك بالتوقف بعد ذلك قم بالعودة الي الطريق عندما يكون من الامن فعل ذلك'
      ,'الرياح تكون مشكلة خاصة عند الخروج من نفق.'
      ,'ابقي اضاءة لوحة المعطيات ساطع دائماً.'
      ,'4 ثواني.'
      ,'بكلتا اليدين علي جانبي عجلة القيادة.'
      ,'تستخدم عندما يكون من الامن و القانوني فعل ذلك.'
      ,'ربما تكون مركبة بطيئة الحركة.'
      ,'الفسحة حول عمود الاشعال.'
      ,'التوقف عن القيادة في أقرب فرصة ممكنة عندما يكون من الامن القيام بذلك.'
      ,'35 ميل في الساعة.'
      ,' لف عجلة القيادة الي الاتجاه الاخر من اجل تجنب طارئ مروري.'
      ,' يجب عليك تجنب المساعدة متي يمكنك ذلك.'
      ,'حرر المكابح عندما تكون 5 ميل في الساعة اقل من السرعة الآمنة, ثم اترك سرعتك لتعود الي السرعة الآمنة و كرر هذا مجدداً,(قم بتخفيض السرعة 5 ميل اقل من السرعة الآمنة).'
      ,' عند الاستدارة يجب عليك الاشارة مبكراً.'
      ,'يمكنك استخدام مؤشر عدد لفات المحرك من اجل اخبارك متي تقوم بنقل ناقل الحركة.'
      ,'عندما تقوم بزيادة سرعتك الي الضعف, سوف يتطلب ذلك ضعف المسافة من اجل التوقف.'
      ,'من الممكن ان تتسبب في انزلاق العجلات الامامية عندما يكون لديهم عزم ضعيف.'
      ,'توقف عن استخدام المكابح, و انعطف سرعياً في عكس الاتجاه.'
      ,'حافظ علي سرعة 5-10 اقل من السرعة المشار ايها علي الطريق.'
      ,'الشاحن الفارغة.'
      ,'3'
      ,'50'
      ,' كلاً من المقطورة و الجرار.'
      ,'0.04'
      ,'في جيبك.'
      ,'عذم منخفض عند العجلات الامامية.'
      ,'التحدث بما تريد للسائقين الاخرين.'
      ,'حظر لمدة عام من الرخصة التجارية(CDL).'
      ,'سوف تكون خارج الخدمة لمد 24 ساعة.'
      ,'اذا قمت بمضاعفة سعرتك, مسافة التوقف سوف تتضاعف اربع مرات.'
      ,' ابحث عن مخرج طوارئ علي الطريق او طرق للهروب.'
      ,'من الممكن ان يجعل الشاحنة تنقلب في المنعطفات.'
      ,'10'
      ,' توقف بأمان و أصلح المشكلة.'
      ,'قم برفع دواسة المكابح من اجل توليد المزيد من الضغط.'
      ,'الاهتزاز.'
      ,'اختر غيار, يبقي مركبتك في سرعة امنة علي المنحدر.'
      ,'طبيعة البضعة توجب الزامية الوقوف تحت قانون الولاية او القانون الفدرالي.'
      ,'500'
      ,' دائماً خطير.'
      ,' قم بإشعال اضاءة الانتظار من اجل تحذير السائقين الاخرين.'
      ,'في مسافة 500 قدم في الخلف.'
      ,'فرامل مضادة للغلق.'
      ,'انه من الاقل خطورة ان تقوض في جانب الطريق من ان تتسبب في تصادم.'
      ,' تسخين السيارة.'
      ,'تحدث عندما تقود بسرعة او تتوقف بسرعة.'
      ,'قم بزيادة المسافة بينك و بينهم.'
      ,"العادم."
      ," تذوب مما يجعل سطح الطريق زلق."
      ," اركن الشاحنة حتي تنتهي الشبورة."
      ," عمق المسرات التي في الاطار."
      ," قم بمعرفة أماكن مخارج الهروب في الطريق الذي سوف تسير عليه."
      ," يجب استخدامها من قبل السائقين الذين فقدو المكابح."
      ," اذا كان لديك هاتف خلوي او مذياع المواطنين, يجب عليك اخبار السلطات قبل الخروج من المركبة."
      ," انتظر رجال الاطفاء."
      ,"تضرر الإطارات."
      ," اضاءة الانعطاف, اضاءة المكابح, اضاءة الانتظار."
      ," لا تتحرك"
      ," 50"
      ," مكابح الركن."
      ," الشاحنات الفارغة تتطلب مسافة اكبر من اجل التوقف اكثر من الشاحنات المحملة, لكن ليس هذا الوضع الطبيعي للحافلات."
      ," قم برفع مكابح الركن بينما تقوم بالضغط علي دواسة الوقود."
      ," عندما تقود في الشتاء يجب عليك التأكد, من ان المدفأة تعمل كما ينبغي ان يكون قبل بدأ الرحلة."
      ,"الغازات السامة من الممكن ان تدخل الي كابينة القيادة او الي الجزء الخاص بالنوم."
      ," فقدان القدرة علي التوجيه."
      ,"هو الوقت الذي تري فيه العين الخطر, الي الوقت الذي يستوعب فيه الدماغ الخطر."
      ," لأنها عادة اكثر عرضاً من المركبات الأخرى."
      ," انت تقترب من الخروج من الطريق, وبحاجة الي أبطأ ."
      ," الانتظار من اجل مسافة فارغة في المرور تكون مناسبة لدخول المركبة الي الطريق."
      ," ترك الإضاءة المرتفعة تعمل."
      ," لأنه لا يمكنك الرؤية, يجب عليك ان تقوم بالرجوع ببطء حتي تشعر انك اصطدمت بالرصيف."
      ,"1 المسافة."
      ," من اجل الانعطاف سريعاً يجب ان تكون ممسك جيداً بعجلة القيادة."
      ,"الاستجابة لأمر طارئ عن طريق أبطأ المركبة."
      ," ان توفر عزم كافي من اجل دفع المركبة علي الاسطح المبللة و المثلجة."
      ," يجب ان يتم التعليم علي الخزان, بعلامة حجما اربع انشات علها علامة الخطر علي شكل الماس."
      ,"مركبة مزودة بمقطورتين فارغتاً."
      ,"الجاذبية."
      ,"مستوي سائل البطارية."
      ,"قبل وقوع الحريق."
      ,"الأمان."
      ,"انحراف عجلة القيادة اكثر من 10 درجات (2 انش في عجلة القيادة ذات ال20 انش)"
      ,"تقوم بإظهار مساحة اكبر من التي تظهرها المرآة المسطحة."
      ,"من اجل إبقاء المركبة تحت السيطرة."
      ," مسافة الادراك, مسافة رد الفعل, و مسافة ضغط المكابح."
      ," ابدأ من الحارة الداخلية ثم ميل الي اليمين بينما تنعطف."
      ," من المرجح ان يتجه الي الحارة المرورية التي انت فيها."
      ," استخدم المرآة من اجل التأكد ان المسافة في المرور كبيرة بما فيه الكفاية من اجل ان تتمكن من الدخول بسلام."
      ," قم بالإشارة مبكراً و انتقل الي الحارة الجديدة ببطء."
      ,"استخدم الاضاءة المرتفعة عندما يكون من القانوني فعل ذلك و ابقي اضاءة الكابينة الداخلية مغلقة."
      ,"القيادة بسرعة مع عدم مراعة الظروف."
      ," السائقين المؤقتين او سائقي الشاحنات المستأجرين بشكل يومي, عادة ليسوا معتادين علي الرؤية المحدودة, مما يجعل هؤلاء مصدر خطر"
      ," عندما تنخفض درجات الحرارة الكباري تتجمد اسرع من الطرق."
      ," التهوية السيئة للحمولة من المرجح ان تتسبب في حريق."
      ," طول الوقت."
      ," كمية الوقود في المركبة."
      ," اذا كنت تحتاج الي رفع الكابينة من اجل, ربط شيء ما كان غير مثبت جيداً حتي لا يقع او يتحطم."
      ," اجل يمكنهم فعل ذلك و يمكنهم وضعك خارج الخدمة اذا كانت المركبة غير امانة."
      ," قانون الولاية هو الذي يحدد الوزن المسموح به؟"
      ," المبادئ الأساسية للكمياء."
      ," وزنهم."
      ," انت تعطي الموافقة علي ان يتم اختبارك , اختبار نسبة الكحل في الدم."
      ," قريب. اقل."
      ," 5 ثواني من المساحة."
      ,"انظر الي الجانب الأيمن او العلامات التي علي حافة الطريق."
      ,"النظر في اتجاه المرور القادم."
      ,"من المحتمل ان يكون هناك رياح شديدة عند الخروج."
      ,"اذا كنت سوف تساعد علي تجنب وقوع حادث."
      ,"ليس اقل من 4/32 انش."
      ,"1/4"
      ,"1/10"
      ,"هي أي أوضاع طريق ,او سائقين اخرين من المحتمل ان يكله خطر."
      ,"ابطء الي سرعة امنة قبل الانعطاف."
      ,"جرار مع مقطورتان حجمها 27 قدم."
      ,"ثانية 1 لكل  10 قدم."
      ,"عادة ما يجعلك تشعر بالنعاس لذلك لا يجب استخدامه اثناء القيادة."
      ,"ليس من المهم كيفية استخدام المكابح في حالات الطوارئ."
      ,"القيادة سريعاً."
      ,"اضغط علي البوق و ابقي قريباً خلف السيارة."
      ,"استخدم اضاءة الانتظار و اضاءة المكابح من اجل تحذير الاخرين."
      ,"انظر خارج المركبة من اجل طريقة اخري من اجل ابطاء المركبة."
      ,"عندما تقوم بالركن علي جانب الطريق."
      ,"نعم, لان المكابح يمكنها الخروج عن التعديل اذا تم استخدامها بكثرة."
      ,"يجب عليك تعديل المرايا قبل بدء الرحلة."
      ,"1/2"
      ,"تسمح بوزن اقصي اقل لكل المحاور القريبة من بعضها"
      ,"مكان مؤخرة المركبة اثناء الانعطاف."
      ,"يسمح باستخدام الوصفات الطبية اذا قال الطبيب انها لا تأثر علي القدرة علي القيادة."
      ,"اذا لم تمسك بعجلة القيادة جيداً بكلتا اليدين يمكن لعجلة القيادة ان تنزلق منك."
      ,"في أي وقت يجب عليك ان تقوم بالرجوع."
      ,"باستخدام المرايا و اشرات الالتفاف, انعطف بحدة من اجل الرجوع مجدداً الي الطريق."
      ,"فرشة الغبار."
      ,"قم بالإشارة الي السائقين الاخرين اذا كان من الامن التخطي."
      ,"من المحتمل ان يقودوا ببطء, او يقوموا بتغير المسار او التوقف بشكل غير متوقع."
      ,"مستوي زيت المحرك."
      ,"يجب ان يتم بعد كل استراحة تحصل عليها اثناء القيادة."
      ,"عزم ضعيف."
      ,"الركن في مكان مفتوح."
      ,"اذا كان هناك مرتفع او منحني يمنع السائقين القادمين من الخلف من رؤيتك خلال 500 قدم, يجب عليك وضع المثلث العاكس في الخلف من اجل اعطاء تحذير منساب."
      ,"بشكل عام هذا يعني انه تم شحنها في جزء من الطريق بواسطة خطوط السكة الحديد او السفن."
      ,"يمكنك تفقد مستوي سائل التبريد لمحرك ساخن."
      ,"بينما المركبة مركونة."
      ,"استخدم كبح المحرك."
      ,"الضغط علي المكابح برفق, بدون احكام الضغط عليها بالكامل."
      ,"تعديل المكابح."
      ,"الاشرات."
      ,"الآلية."
      ,"الوزن الإجمالي لمجموع الاوزان."
      ,"اقل من السرعة المشار اليها علي الطريق."
      ,"معظم حوادث المركبات الثقيلة تحدث بين منتصف الليل و الساعة ال6 صباحاً."
      ,"امام مركبتك."
      ,"سوف تنزلق المقطورة."
      ,"يجب فحص تثبيت المحور في كل مكان يتم تثبيته بهيكل المركبة و بقية المحاور."
      ,"طنبورة المكابح لا يجب ان يكون عليها بقع زيت, او سائل المكابح."
      ,"اذا كانت المركبة لا تتطلب لافتات."
      ,"1 سنة."
      ,"كل الشاحنات التي تحمل مواد خطيرة تشكل خطر علي الامن و الصحة العامة."
      ,"أي كمية قابلة للقياس."
      ,"الاستجابة لأمر طارئ عن طريق ابطاء المركبة."
      ,"يمكن الانطلاق بالمركبة الي الامام مباشرةً عند المغادرة."
      ,"الوزن الإجمالي لمركبة واحدة بالإضافة الي الحمولة الخاصة بها."
      ,"مؤشر سائل تبريد المحرك يجب ان يبدأ بالارتفاع الي المستوي الطبيعي."
      ,"4 اضعاف."
      ,"حماية المنطقة."
      ,"انتقل الي غيارات اقل."
      ,"انت تحتاج الي كلا اليدين من اجل الانعطاف بشكل امن."
      ,"المكابح الهيدروليكية."
      ,"يمكن لمن يشرب ان يتحكم في سرعة امتصاص اجسامهم للكحل."
      ,"يتطلب تصريح خاص."
      ,"كلما كانت المركبة اسرع او اثقل, كلما ذادت كمية الحرارة التي سوف تمتصها المكابح من اجل ابطاء المركبة."
      ,"إشارة التحذير الخاصة بالمركبات المتوقفة."
      ,"عندما يتم ملاحظة أي عيب سواء كان هذا العيب قابل للصيانة او لا."
      ,"في الجعبة التي في باب السائق."
      ,"علي المركبات ذات المقطورة, يمكن للمقطور ان تدفع المركبة الي الجانب."
      ,"القيادة الدفاعية."
      ,"الخروج عن المسار."
      ,"اذا كان خط السكة الحديد لديه حدة اثناء الاقتراب منه."
      ,"يجب ان يتم ازالة الجليد من غطاء الردياتير."
      ,"خلال 10 دقائق."
      ,"ناقل الحركة الاوتوماتيكي."
      ,"ضغط هواء الاطار يزداد مع زيادة درجة الحرارة."
      ,"اعثر علي طريق اخر لا يتطلب القيادة اسفل شيءً ما."
      ,"يجب عليك تفقد ضغط هواء الاطار كل ساعتين او كل 100 ميل, اثناء القيادة في الأجواء الساخنة."
      ,"القيمة المحددة بواسطة المصنع لوزن الحمولة التي يمكن حملها علي مركبة واحدة."
      ,"تصنيف مجموع اجمالي الحمولة لكلاً من المركبة و الحمولة."
      ,"استمر علي جانب الطريق حتي تتوقف المركبة الخاصة بك."

    ]

    console.log(arabicAnswers.length)
    console.log(englishAnswers.length)

    if(englishAnswers.length !== arabicAnswers.length){
      throw new Error("array mismatch")
    }


    const answers = englishAnswers.map((text,i) =>({
      questionId: i + 136,
      answerText: text,
      answerTextAr:arabicAnswers[i],
    }))

    await Answer.createMany(answers)

  }

}
