import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Answer from '#models/answer'
export default class extends BaseSeeder {
  async run() {
    const englishAnswers =[
      "Start using the emergency brakes.",
      "Use the brakes lightly.",

      "A higher gear than the one used to climb the slope.",
      "The same gear used to climb the slope.",

      "The vehicle can be driven safely if one wheel lug nut is missing.",
      "Incompatible lug nuts can be used on the same vehicle.",

      "Bias-ply and radial tires can be used together on the same vehicle.",
      "2/32-inch tires can be used safely on the front wheels.",

      "They will go straight ahead but will turn if the steering wheel is turned.",
      "They will slide sideways and turn outward.",

      "Avoid the emergency lane as it is not designed for heavy vehicles.",
      "Shift all wheels off the curb.",

      "Large loads can be transported without a special permit when the roads are not congested.",
      "When transporting liquids, the tank must always be completely full.",

      "You must always hold the steering wheel firmly with both hands.",
      "The horn is not a good way to alert others to your presence.",

      "Load the cargo to the nearest location where there is a driver with a permit to handle hazardous materials.",
      "Load the cargo but make a DOT report after the trip.",

      "If you must stop for a nap, you must be at a truck stop or other rest area and not on the side of the road.",
      "A half-hour coffee break will be more beneficial than a half-hour nap.",

      "Shifting the transmission into neutral will help stop the vehicle.",
      "The parking brakes also did not work because they are part of the same hydraulic system.",

      "Poor vehicle space.",
      "Half the size of a football field.",

      "Leaks in the exhaust system are less dangerous in cold weather.",
      "The engine cannot overheat in cold weather.",

      "Look to the left side of the road when a vehicle is coming towards you.",
      "Adjust your speed to keep the stopping distance within your field of vision.",

      "When using double clutching, you should let the engine speed drop while releasing the clutch, with the gear lever in neutral.",
      "When downshifting for a hill, you should do so when starting at the bottom of the hill.",

      "Turn on the headlights.",
      "Stay out of sight while walking to the location where you will place it.",

      "The user clearly sees the effect of the kohl on them.",
      "The effect of the kohl diminishes.",

      "1) A convex mirror makes objects appear larger and closer than they actually are.",
      "3) You should look in the mirror for at least a few seconds.",

      "It Only happens when there is a lot of water.",
      "It Can not happen when driving through a puddle.",

      "Turn on your brake lights.",
      "Signal to those behind you when it is safe to pass you.",

      "In the rear.",
      "In the front.",

      "5-8 seconds.",
      "18-21 seconds.",

      "Add more power to the wheels.",
      "Shift the transmission down.",

      "Add extra braking force to the non-drive axle.",
      "To help prevent skidding.",

      "It Includes looking at the wheels for a brief moment.",
      "It Can be used when turning at a sharp angle.",

      "After 9 hours.",
      "After 5 hours.",

      "If a qualified person is assisting them, do not do anything unless asked.",
      "Move seriously injured people if there is a risk of fire or traffic.",

      "Press both the brake and accelerator pedals after getting out of the water.",
      "Turn on the brake heater.",

      "Drivers can use prescription drugs while driving.",
      "Amphetamines can be used to keep drivers alert.",

      "Because heavy vehicles are easy to see, you can rely on other drivers to get out of the way or slow down for you.",
      "The best way to get through traffic is to try to change lanes constantly.",

      "Lower the clutch while slowly pressing the gas pedal.",
      "Let the vehicle roll back a few feet before using the clutch, but turn the steering wheel so that the rear of the vehicle can get out of the way.",

      "Slow down to the speed posted on the curved downhill exit.",
      "Wait until you reach the curve before shifting down.",

      "Move to the left side of the road.",
      "Press hard on the brakes.",

      "This can be corrected by releasing the brakes for 1-2 seconds and repeating the process.",
      "This problem only occurs with drum brakes.",

      "There is no need for antifreeze when the weather is warm.",
      "Never turn off a hot engine until it has cooled down.",

      "You should assume that the elevation signs posted on the road are correct.",
      "If the road surface causes your vehicle to veer toward the edge of the road, you should drive closer to the edge.",

      "If the load in a truck or trailer catches fire, you should open the cargo door as quickly as possible.",
      "If your engine is on fire, you should open the hood as quickly as possible.",

      "Use smaller distances between you and other drivers.",
      "Use the brakes when turning.",

      "You will feel a jolt if the vehicle's acceleration is correct.",
      "When torque is weak, more power must be added to the acceleration.",

      "Drum brakes cool quickly if the vehicle is moving fast.",
      "The brakes have greater stopping power than when they are hot.",

      "A single missing layer on the paper spring can be dangerous.",
      "A broken drum must be replaced.",

      "Press the horn lightly.",
      "Assume that the other driver cannot see you.",

      "Shift into low gear.",
      "Take your foot off the accelerator and put it on the brakes.",

      "Do not use it without shifting into low gear.",
      "Disengaging the steering axle brakes will help keep the vehicle straight during an emergency stop.",

      "You should check your tires every two hours or 100 miles if you are driving in hot weather.",
      "Tire pressure decreases as the temperature of the tire increases.",

      "Stopping is always the best option in traffic emergencies.",
      "Leaving the road is always more dangerous than colliding with another vehicle.",

      "Electrical fire.",
      "Gasoline fire.",

      "Schedule trips for times when you are usually awake.",
      "Take cold medicine if you have a cold.",

      "Press hard on the brakes to slow the vehicle, then turn sharply onto the road.",
      "Turn sharply onto the road, then press the brakes while correcting the direction.",

      "The lighter your vehicle, the fewer problems you will have with wind.",
      "You should drive alongside other vehicles to reduce the force of the wind.",

      "Look directly at the oncoming lights for a short time.",
      "Keep your speed low enough to be able to stop within the range of the lights.",

      "3 seconds.",
      "5 seconds.",

      "Both hands close together, near the top of the steering wheel.",
      "Both hands close together, near the bottom of the steering wheel.",

      "Open up to 100 feet from another vehicle.",
      "It is activated when an oncoming driver does not turn on their headlights.",

      "The vehicle is carrying hazardous materials.",
      "The vehicle is being driven by a learner driver.",

      "Insulate worn electrical wires.",
      "Engine oil level.",

      "Shift the transmission down to stop.",
      "Keep your speed variable between moving and stopping.",

      "45 miles per hour.",
      "55 miles per hour.",

      "Use the steering wheel brakes to avoid over steering.",
      "Turn the steering wheel counterclockwise.",

      "It is safer to support the right side of the vehicle than the driver's side.",
      "Assistants must remain out of the driver's field of vision and use only audible signals to communicate with the driver.",

      "Lift the pedal slightly.",
      "Press firmly and then release the brakes.",

      "You do not need to use your turn signal when changing lanes in traffic on a four-lane highway.",
      "You must use your signals to indicate your vehicle when leaving the lane you are traveling in.",

      "Double braking should only be used for heavy loads.",
      "Double braking should not be used when the road is slippery.",

      "Empty trucks always stop at less distance than fully loaded trucks.",
      "You must determine your speed so that you can stop in the distance you see ahead of you.",

      "It works when you press the brake pedal.",
      "It causes brake wear.",

      "Double the pressure on the brakes.",
      "Double the pressure on the brakes, while quickly turning in the opposite direction.",

      "Slow down to at least 50% of the official speed limit posted on the road.",
      "Maintain the same speed as posted on the road.",

      "Loaded truck.",
      "Truck without tailgate.",

      "4",
      "2",

      "150",
      "100",

      "Trailer.",
      "Tractor.",

      "0.01",
      "0.10",

      "At the place of operation.",
      "In the driver's seat.",

      "The wheel will stop turning.",
      "Damage to the steering column.",

      "Talk to law enforcement.",
      "Talk on the citizen radio.",

      "One-year probation.",
      "$250 fine.",

      "You will be in big trouble with your distributor.",
      "You will be out of service for 72 hours.",

      "Empty and loaded trucks will have the same stopping distance.",
      "If you double your speed, the stopping distance will double.",

      "Shift the transmission down and lift the brake pedal.",
      "Do both.",

      "It should be as high as possible.",
      "The only problem is if the vehicle is overloaded.",

      "20",
      "15",

      "Continue driving and turn on the ice melt.",
      "Continue driving and spray the windshield with washer fluid.",

      "Put the vehicle in neutral and use the parking brake.",
      "Press the brake pedal as hard as you can.",

      "The wheel slips.",
      "An annoying squeaking sound.",

      "Drive downhill if the slope is not too steep.",
      "Apply continuous pressure to the brakes while driving downhill.",

      "No flagman, worn signs, or dilapidated crossing gates.",
      "Crossing in a city or town where trains frequently pass.",

      "400",
      "300",

      "Not dangerous if you have an assistant.",
      "Not dangerous if you don't have to turn.",

      "Place emergency lights within 30 minutes.",
      "Use tail lights to signal danger to other drivers.",

      "Place them at the rear so that other drivers can see you.",
      "200 feet behind you.",

      "Trailer.",
      "Hazardous materials.",

      "You may not be able to get back on the road due to the gravel used on the side of the road.",
      "Most roadsides are not strong enough to support a heavy vehicle.",

      "Fishtailing.",
      "Steering wheel lockup.",

      "It Does not occur if you have radial tires.",
      "It Occurs in snow.",

      "Press the brakes lightly to warn drivers behind you to back up.",
      "Increase your speed to increase the distance between you and those behind you.",

    ]


    const arabicAnswers=[
      'البدء في استخدام مكابح الطوارئ.'
      ,'استخدام المكابح بخفة.'

      ,'غيار اعلي مما استخدمته من اجل تسلق المنحدر.'
      ,'نفس الغيار الذي استخدمته من اجل تسلق المنحدر.'

      ,'يمكن قيادة المركبة بأمان في حالة نقص مسمار واحد من مسامير تثبيت العجلة.'
      ,'يمكن استخدام حلقات غلق غير متوافقة علي نفس المركبة.'

      ,'الاطارات المتحيزة , الإشعاعيه يمكن استخدامها معاٌ في نفس المركبة.'
      ,'يمكن استخدام اطارات مقاس 2/32انش بشكل أمان في العجلات الامامية.'

      ,'سوف تذهب الي الامام مباشرة ولكن سوف تلتف اذا تم لف عجلة القيادة.'
      ,'سوف تنزلق الي الجانبين و تلتف الي الخارج.'

      ,'تجنب حارة الطوارئ لأنها غير مصممة للمركبات الثقيلة.'
      ,'محوله انزال جميع العجلات من علي  الرصيف.'

      ,'يمكن نقل حمولة كبيرة الحجم بدون تصريح خاص في الاوقات التي تكون فيها الطرق غير مزدحمة.'
      ,'عندما يتم تحميل سوائل, يجب ملئ الخزان بشكل كامل دائماً.'

      ,'يجب عليك دائما احكام الإمساك بعجلة القيادة بكلتا اليدين.'
      ,'البوق ليس طريقة جيدة من اجل اعلام الاخرين انك موجود.'

      ,'تحميل الحمولة الي اقرب مكان حيث يوجد السائق الذي يحمل تصريح التعامل مع المواد الخطرة.'
      ,'قم بتحميل الحمولة ولكن قم بعمل ابلاغ (DOT) بعد الرحلة.'

      ,'اذا وجب عليك التوقف من اجل اخذ قيلولة, يجب ان تكون في مكان لتوقف شاحنات النقل او مكان استراحة اخر ولا يجوز فعل ذلك علي جانب الطريق.'
      ,'نصف ساعة استراحة من اجل القهوة سوف تكون اكثر افادة من قيلولة مدتها نصف ساعة.'

      ,'تغير ناقل الحركة الي الوضع المحايد سوف يساعد علي اقاف المركبة .'
      ,'المكابح الخاصة بالركن لم تعمل هي الأخري لأنها جزء من نفس النظام الهيدروليكي.'

      ,'ضعف مساحة المركبة .'
      ,'نصف مساحة ملعب كرة قدم.'

      ,'التسريب في نظام العادم اقل خطورة في الاجواء الباردة.'
      ,'لا يمكن ان ترتفع درجة حرارة المحرك في الاجواء الباردة.'

      ,'انظر الي الجانب الايسر من الطريق عندما يكون هناك مركبة قادمة في اتجاهك.'
      ,'عدل سرعتك من اجل ابقاء مسافة التوقف داخل نطاق الرؤية الخاص بك.'

      ,'عند استخدام الدبرياج المزدوج, يجب عليك ان تترك عدد لفات المحرك لينخفض بينما تقوم بترك الدبرياج, و ذراع ناقل الحركة علي الوضع المحايد.'
      ,'عندما تقوم بخفض ناقل الحركة من اجل تلة, يجب عليك فعل ذلك عند البدء اسفل التلة.'

      ,'تشغيل اضاءة المصابيح.'
      ,'بقائه خارج نطاق الرؤية بينما تسير الي موقع الذي سوف تضعه فيه.'

      ,'يري المتعاطي تأثير الكحل عليه بوضوح.'
      ,'تأثير الكحل يتناقص.'

      ,'1) المرآة المحدبة تجعل الاشياء تبدو اكبر و اقرب مما هي عليه في الواقع.'
      ,'3) يجب ان تنظر الي المرآة بضع ثواني علي الأقل.'

      ,'يحدث فقط عندما يكون هناك الكثير من الماء.'
      ,'لا يمكن ان يحدث عند القيادة مروراً ببركة ماء.'

      ,'اشعال إضاءة المكابح.'
      ,'اشر الي من يتبعك عندما يكون من الامن ان يتخطاك.'

      ,'في الخلف.'
      ,'في الامام.'

      ,'5-8 ثانية.'
      ,'18-21 ثانية.'

      ,'ضافة المزيد من القوة الي العجلات.'
      ,'نقل ناقل الحركة الي الأسفل.'

      ,'اضافة قوة كبح اضافية الي محور غير محور القيادة.'
      ,'من اجل المساعدة في تجنب الانزلاق.'

      ,'يشمل النظر الي العجلات لفطرة قصيرة من الزمن.'
      ,'يمكن استخدام اثناء الانعطاف بزاوية حادة.'

      ,'بعد 9 ساعات.'
      ,'بعد 5 ساعات.'

      ,'اذا قام شخص مؤهل بمساعدتهم, لا تقم بأي شيء الا اذا طلب منك ذلك.'
      ,'قم بنقل الاشخاص المصابين بشدة اذا كان هناك خطر نشوب حريق او عبور مرور.'

      ,'الضغط علي كلاً من دواسة المكابح و البنزين بعد الخروج من الماء.'
      ,'تشغيل مدفئة المكابح.'

      ,'يمكن للسائق استخدام وصفات طبية اثناء القيادة.'
      ,'يمكن استخدام "  الأمفيتامين " من اجل ابقاء السائق يقظاً.'

      ,'لان المركبات الثقيلة من السهل رؤيتها, يمكنك الاعتماد علي السائقين الاخرين من اجل الخروج من الطريق او الابطاء من اجلك.'
      ,'افضل طريقة من اجل العبور من الزحام هي محاولة تغيير المسار باستمرار'

      ,'قم بخفض الدبرياج بينما تضغط ببطء علي البنزين.'
      ,'اترك المركبة ترجع الي الخاف بضع اقدام قبل استخدام الدبرياج ولكن ادر عجلة القيادة حتي يمكن لمؤخرة المركبة الخروج من الطريق.'

      ,'ابطئ الي السرعة التي تم نشرها علي المخرج المنحدر المنحني.'
      ,'انتظر حتي تصل الي المنحني قبل انزال ناقل الحركة الي الأسفل.'

      ,'اتجه الي جانب الطريق الايسر.'
      ,'اضغط علي المكابح بقوة.'

      ,'يمكن تصحيح ذلك عن طرق ترك المكابح لمدة 1-2 ثانية و اعادة تكرار ذلك.'
      ,'انها مشكلة تحدث فقط في نوع مكابح الطبل.'

      ,'لا حاجة الي مضادة التجمد عندما يكون الجو دافئ.'
      ,'لا يمكنك ابداً اطفاء محرك ساخن حتي يبرد.'

      ,'يجب ان تفترض ان علامات الارتفاع المنشورة علي الطريق صحيحة.'
      ,'اذا تسبب سطح الطريق في انا تميل مركبتك الي حافة الطريق, يجب عليك ان تقود بالقرب من الحافة.'

      ,'اذا كانت الحمولة في الشاحنة او مقطورة امسكتها النيران, يجب عليك فتح باب الحمولة في اسرع وقت.'
      ,'اذا كان المحرك الخاص بك مشتعل, يجب عليك فتح غطاء المحرك في اسرع وقت.'

      ,'استخدم مسافات اصغر بينك و بين السائقين الأخرين.'
      ,'استخدم المكابح في المنعطفات.'

      ,'سوف تشعر برجرجة اذا كان تسارع المركبة صحيح.'
      ,'عندما يكون العزم ضعيف, المزيد من القوة يجب اضافتها الي التسارع.'

      ,'مكابح الطبلة تبرد سريعةً اذا كانت المركبة تتحرك بسرعة'
      ,'المكابح لديها قوة اقاف اكبر مما هي عليه عندما تسخن'

      ,'طبقة واحدة مفقودة علي الزنبرك الورقي من الممكن ان تكون خطيرة.'
      ,'الطبلة المكسورة يجب ان تستبدل.'

      ,'الضغط بخفة علي البوق.'
      ,'افترض ان السائق الأخر لا يراك.'

      ,'قم بخفض ناقل الحركة.'
      ,'قم برفع قدمك من علي دواسة الوقود و ضعها علي المكابح.'

      ,'لا تستخدمها بدون نقل ناقل الحركة الي الاسفل.'
      ,'فصل مكابح محور التحكم سوف يساعد علي إبقاء المركبة في خط مستقيم اثناء توقف الطوارئ.'

      ,'يجب عليك تفقد الاطارات كل ساعتين او 100 ميل اذا كنت تقود في مناخ حار.'
      ,'ضغط هواء الاطار ينخفض كلما زادت درجة حرارة الاطار.'

      ,'التوقف هو دائماً الخيار الانسب في حالات الطوارئ المرورية.'
      ,'مغادرة الطريق دأماً اكثر خطورة من التصادم بمركبة اخري.'

      ,'حريق ناشب عن كهرباء.'
      ,'حريق البنزين.'

      ,'جدولة الرحلات لسعات انت تكون فيها عادةً نائم.'
      ,'خذ دواء الزكام اذا كنت تعاني الزكام.'

      ,'اضغط علي المكابح بقوة من اجل ابطاء المركبة, ثم انعطف بحدة الي الطريق.'
      ,'اتجه بحدة الي الطريق, ثم اضغط علي المكابح بينما تقوم بتصحيح الاتجاه.'

      ,'كلما كانت مركبتك اخف كلما واجهتك مشاكل اقل فيما يخص الرياح.'
      ,'يجب عليك القيادة بجانب مركبات اخري من اجل التخفيض من قوة الرياح.'

      ,'انظر مباشرة علي الاضاءة القادمة لفطرة قصيرة من الزمن'
      ,'ابقي سرعتك منخفضة بما يناسب القدرة علي التوقف في نطاق الاضاءة'

      ,'3 ثواني.'
      ,'5 ثواني.'

      ,'بكلتا اليدين قربين لبعضهما البعض, بالقرب الي اعلي عجلة القيادة.'
      ,'بكلتا اليدين قريبتين من بعضهما اسفل عجلة القيادة.'

      ,'تفتح نقترب بمسافة 100 قدم من مركبة اخري.'
      ,'يتم تشغيلها عندما يكون سائق قادم لا يقوم بفتح انواره.'

      ,'المركبة تقوم بتحميل مواد خطرة.'
      ,'ان المركبة يتم قيادتها بوسطة طالب قيادة.'

      ,'عزل الاسلاك الكهربائية البالية.'
      ,'مستوي زيت المحرك.'

      ,'نقل ناقل الحركة الي الاسفل من اجل التوقف.'
      ,'ابقي سرعتك متفاوتة بين الحركة و التوقف.'

      ,'45 ميل في الساعة.'
      ,'55 ميل في الساعة.'

      ,'استخدام فرامل عجلة القيادة من اجل تجنب افراط التوجيه'
      ,'لف عجلة القيادة في عكس اتجاه الساعة'

      ,'انه من الآمن ان تدعم في الاتجاه الايمن من المركبة مما هو عليه في اتجاه السائق.'
      ,'المساعدون يجب عليهم ان يكونوا خارج نطاق رؤية السائق و يستخدمه الاشرات الصوتية فقط من اجل التواصل مع السائق.'

      ,'رفع الدواسة قليلاً.'
      ,'الضغط القوي المتتالي ثم تحرير المكابح.'

      ,'انت لست بحاجة الي استخدام إشارة الانعطاف عند تغير  الحارة في الزحام علي طريق اربع حارات سريع.'
      ,'يجب عليك استخدام الاشرات من اجل تميز مركبتك عند ترك الحارة التي تسير فيها.'

      ,'استخدام الدبرياج المزدوج يجب ان يستخدم فقط في الحمولات الثقيلة.'
      ,'الدبرياج المزدوج لا يجب ان يستخدم عندما يكو الطريق زلق.'

      ,'الشاحنات الفارغة داماً تتوقف في مسافة اقل من الشاحنات المحملة بالكامل.'
      ,'يجب عليك تحديد سرعتك التي تمكنك من التوقف في المسافة التي تراها امامك.'

      ,'تعمل عندما تضغط علي دواسة المكابح.'
      ,'يتسبب في تآكل المكابح.'

      ,'ضاعف الضغط علي المكابح.'
      ,'ضاعف الضغط علي المكابح, مع الالتفاف سريعاً في عكس الاتجاه.'

      ,'ابطئ علي الاقل 50% من السرعة الرسمية المشار اليها علي الطريق.'
      ,'حافظ علي نفس السرعة المشار اليها علي الطريق.'

      ,'الشاحنة المحملة.'
      ,'الشاحنة بدون ذيل.'

      ,'4'
      ,'2'

      ,'150'
      ,'100'

      ,'المقطورة.'
      ,'الجرار.'

      ,'0.01'
      ,'0.10'

      ,'في مكان التشغيل.'
      ,'في مقعد السائق.'

      ,'العجلة سوف تتوقف عن الدوران.'
      ,'ضرر لعمود التوجيه.'

      ,'التحدث الي قوة تنفيذ القانون.'
      ,'لتحدث في راديو المواطنين.'

      ,'فطرة احترازية لمدة عام واحد.'
      ,'غرامة 250 دولار.'

      ,'سوف تكون في مشكلة كبيرة مع الموزع الخاص بك.'
      ,'سوف تكون خارج الخدمة لمدة 72 ساعة.'

      ,'الشاحنات الفارغة و المحملة سوف يكون لها نفس مسافة التوقف.'
      ,'اذا قمت بمضاعفة سرعتك, مسافة التوقف سوف تتضاعف الضعف.'

      ,'قم بنقل ناقل الحرقة الي الاسفل و ارفع دواسة المكابح.'
      ,'افعل الامرين.'

      ,'يجب ان يكون مرتفعاً قدر الامكان.'
      ,'المشكلة الوحيدة اذا كانت المركبة ممحلة اكثر مما ينبغي.'

      ,'20'
      ,'15'

      ,'تابع القيادة و قم بتشغيل مذيب الجليد.'
      ,'تابع القيضة و قم برش الزجاج الامامي بسائل الغسيل.'

      ,'قم بوضع المركبة علي وضع الحياد و استخدم مكابح الركن.'
      ,'قم بالضغط علي دواسة المكابح بقدر المستطاع.'

      ,'العجلة تنزلق.'
      ,'صوت صرير مزعج.'

      ,'القيادة الي الاسفل اذا لم يكن المنحدر شديد.'
      ,'قم بإضافة ضغط متواصل علي المكابح اثناء القيادة اسفل المنحدر.'

      ,'لا يوجد رجل العلم, علامات بالية او بوابة عبور متهالكة.'
      ,'العبور في مدينة او بلدة في مكان يتكرر فيه عبور القطار.'

      ,'400'
      ,'300'

      ,'ليس خطيراً اذا كان لديك مساعد.'
      ,'ليس خطيراً اذا كان ليس عليك الانعطاف.'

      ,'وضع علامات الطوارئ المضيئة خلال 30 دقيقة.'
      ,'استخدم اضاءة الذيل من اجل اعطاء السائقين الاخرين اشارة خطر.'

      ,'وضعها في الخلف كما ينبغي أن يكون لكي يراك السائقين الاخرين.'
      ,'في مسافة 200 قدم خلفك.'

      ,'مقطورة.'
      ,'مواد خطرة.'

      ,'من الممكن ان لا تتمكن من دخول الطريق مجدداً بسب الحصي المستخدمة علي جانب الطريق.'
      ,'معظم جانب الطريق ليس قوي بما فيه الكفاية من اجل تحمل مركبة ثقيلة.'

      ,'انزلاق الذيل(ذيل السمكة).'
      ,'التفاف عجلة القيادة.'

      ,'لا تحدث اذا كان لديك اطار اشعاعي.'
      ,'تحدث علي الثلج.'

      ,'اضغط علي المكابح بشكل خفيف من اجل تحذير السائقين خلفك ليذهبوا الي الخلف.'
      ,'قم بزيادة السرعة من اجل زيادة المسافة بينك و بين من يسير خلفك.'


    ]




    if(englishAnswers.length!==arabicAnswers.length){
      console.log(englishAnswers.length,arabicAnswers.length)
      throw new Error("mismatch between arrays")
    }

    const answers = englishAnswers.map((text,i)=>({
      questionId: null,
      answerText:text,
      answerTextAr:arabicAnswers[i],
    }))

    // @ts-ignore
    await Answer.createMany(answers)
  }
}
