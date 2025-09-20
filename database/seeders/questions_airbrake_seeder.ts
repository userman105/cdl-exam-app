import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Question from "#models/question"
export default class questionAirBrakesSeeder extends BaseSeeder {

  async run() {

    const englishQuestions = [
      "The application pressure gauge shows how much air pressure you:",
      "The spring brakes used on the chambers in a straight truck will bring you to a stop when air pressure drops below _ psi.",
      "Some air brake systems have an alcohol evaporator. What may happen if you dont keep the proper level of alcohol?",
      "(our truck or bus has a dual air brake system. If a low-pressure warning comes on for only one system, what should you do?",
      "Why drain water from compressed air tanks?",
      "The safety valve is set automatically when pressure is:",
      "Your truck has a dual air system and one of the systems loses its pressure, What will happen?",
      "Parking or emergency brakes of trucks and buses can be legally held on by Pressure.",
      "If your truck or bus has dual parking control valves, you can use pressure from a separate tank to",
      "If your truck has a properly functioning dual air brake system and minimum size air tanks. the air pressure should build up from 85 to 100 psi Within how many seconds?",
      "How should you check that your service brakes are working properly?",
      "straight truck or bus air brake system should not leak at the rate of more than _ psi per minute with the engine off and the brakes released,",
      "During normal driving, spring brakes are usually held back by:",
      "the air compressor stops pumping air at what PSI?",
      "driver must be able to see a low air pressure warning which comes on before pressure in the service air tanks fall below _ psi",
      "Excessive use of the service brakes results in overheating which can lead to:",
      "The most common type of foundation brake found on heavy vehicles is the:",
      "If you must make an emergency stop, you should brake so you:",
      "your truck or bus has a dual air brake system. If a low air pressure warning comes on for only one system, what should you do?",
      "If your vehicle has an alcohol evaporator, every day during cold weather you should:",
      "The air loss rate for a straight truck or bus with the engine off and the brakes on should not be more than",
      "The driver must be able to see a low air pressure warning which comes on before pressure in the service air tanks falls _ psi.",
      "the braking power of the spring brakes:",
      "The air brake lag distance at 55 mph on dry pavement adds about Feet.",
      "The total stopping distance for air brakes is longer than that for hydraulic brakes due to Distance.",
      "It is known that too much heat caused by using your brakes too often can also cause:",
      "Repeatedly partially increasing and pressing the brake pedal may result in:",
      "brake system that applies and releases the brakes when the driver uses the brake pedal is the brake system.",
      "slack adjuster's free play needs to be adjusted if it is more than about when you pull hard on it.",
      "air brake system is fully charged at what psi?",
      "The brake pedal in an air brake system:",
      "The scam:",
      "Under normal conditions, in order to engage the parking brakes the driver should:",
      "All brake equipped vehicles have: ",
      "With air brake vehicles, the parking brake should be used:",
      "If the air compressor should develop a leak. what keeps the air in the tanks?",
      "Which Of these is NOT a proper time to apply the parking brakes?",
      "With air brake vehicles, the parking brakes should used:",
      "Why should you drain water from compressed air tanks?",
      "If the spring brakes are on. when should you push the brake pedal?",
      "if check the free play of manual slack adjusters of S-cam brakes, you should park on:",
      "excessive heat caused by using your brakes too often can also cause:",
      "If you must make an emergency stop, you should brake so you can:",
      "The use of brakes on a long and steep downgrade under normal conditions is only a supplement to:",
      "The most important thing to do when a low air pressure waming comes on is:",
      "The parking or brake on a heavy vehicle can only held in position by something that cannot leak away. like:",
      "Air braking takes more time than hydraulic braking",
      "When brakes are applied. the brake shoes will press against the:",
      "The safety valve discharges automatically at the pressure of:",
      "Stab braking is:",
      "If air pressure is not built up within the correct amount of time. Then:",
      "safety valve reduces pressure at _ psi.",
      "What can legally hold a parking or emergency brake in position for a truck. truck tractor, or bus?",
      "The supply pressure gauge shows how much pressure:",
      "The braking power of the spring brakes:",
      "It is not safe to drive a vehicle that has brake drums with cracks that are longer than  ……. of the width of the friction area.",
      "Your brakes are fading when:",
      "If your vehicle has an alcohol evaporator, it is there to:",
      "The air compressor governor controls:",
      "Modern air brakes combine three different systems. They are the service. the parking and the Brakes.",
      "If you do not have automatic tank drains, how often should you drain the oil and water from the bottom of air storage tanks?",
      "The proper use of the brakes when going down a long steep grade after selecting a proper gear is to brake until your speed is about ____ Below the posted speed and release of your brake",
      "In ideal conditions a truck or bus with air brakes going at 55 mph would require the stopping distance of how many feet?",
      "When is it oK to leave your truck unattended without applying the parking brakes and choking the wheels?",
      "the stop light switch",
      "The ____ shows how much pressure is in the air tanks",
      "To test air service brakes you should:",
      "if you are down a steep downgrade and have reached your safe of 40 mph, you would the service brake until your dropped to _ mph.",
      "If your truck has a dual air brake system. and one of the systems is low on pressure:",
      "What happens when your brake drums get very hot",
      "What is a 'Wig Wag' ?",
    ]


    const arabicQuestions = [
      "مؤشر ضغط الهواء يظهر, كمية الهواء المضغوط لديك"
      ,"نوابض المكابح المستخدمة في غرف المكابح, في مركبة مستقيمة سوف توقفك عندما يكون ضغط المكابح اقل من ---- باوند لكل بوصة مربعة"
      ,"بعض أنظمة المكابح الهوائية, لديها مبخر يعمل بالكحول, ماذا من الممكن ان يحدث اذا لم تقوم بإبقاء مستوي مناسب من الكحول؟"
      ,"الشاحنة الخاصة بك او الباص لديها نظام مكابح مزدوج, اذا ظهر تحذير خاص بانخفاض ضغط الهواء في احد أنظمة المكابح, ماذا يجب عليك ان تفعل؟"
      ,"لماذا نقوم بتفريغ الهواء من أسطوانة الهواء المضغوط؟"
      ,"صمام الأمان يتم تفعيله بشكل اوتوماتيكي عندما يكو الضغط"
      ,"الشاحنة الخاصة بك لديها نظام هواء مزدوج, و احد هذه الأنظمة فقد الضغط الخاص به, ماذا سوف يحدث"
      ,"مكابح الركن او الطوارئ الخاصة بالشاحنة او الباص تضغط بواسطة"
      ,"اذا كانت الشاحنة او الباص الخاص بك لديها صمامين تحكم,  يمكنك استخدام الضغط من احدي خزنات الضغط علي حدي"
      ,"اذا كانت الشاحنة الخاصة بك لديها مكابح هوائية مزدوجة و خزانين هواء صغار الحجم من المفترض ان يزداد ضغط الهواء من 85 الي  100 باوند لكل بوصة مربعة خلال كم من الثواني؟  "
      ,"كيف ينبغي عليك فحص المكابح التي تستخدمها بشكل صحيح؟"
      ,"في شاحنة بمقطورة صغيرة او باص نظام المكابح لا ينبغي ان يسرب ضغط هواء ازيد من ---- باوند لكل بوصة مربعة وحدة ضغط لكل دقيقة عندما يكون المحرك مطفئ و المكابح غير مستخدمة"
      ,"اثناء القيادة العادية, نوابض المكابح مضغوطة بوسطة:"
      ,"تتوقف مضخة الهواء عن ضخ الهواء, علي أي وحدة ضغط؟"
      ,"السائق ينبغي ان يري تحذير ضغط الهواء المنخفض, الذي يظهر عندما يكون مستوي الضغط في أسطوانة الهواء المضغوط اقل من ---- باوند لكل بوصة مربعة"
      ,"الاستخدام المتواصل لمكابح الخدمة يتسبب في زيادة درجة الحرارة, و هذا من الممكن ان يتسبب في"
      ,"اكثر نوع مكابح مستخدم في مركبات النقل الثقيل هو"
      ,"اذا وجب عليك التوقف من اجل حالة طوارئ, يجب عليك التوقف بشكل يسمح لك"
      ,"الشاحنة او المركبة الخاصة بك لديها نظام مكابح مزدوج, اذا ظهر تحذير ضغط الهواء المنخفض في احد نظامي المكابح, ماذا ينبغي عليك ان تفعل؟"
      ,"اذا كان في المركبة مبخر كحول, كل يوم في الأجواء الباردة ينبغي عليك:"
      ,"مستوي فقد ضغط الهواء في شاحنة بمقطورة صغيرة او باص عندما يكون المحرك مطفئ, و المكابح مفعلة لا ينبغي ان يكون اكثر من"
      ,"ينبغي علي السائق ان يتمكن من رؤية مستوي ضغط الهواء المنخفض, الذي يظهر عندما يكون الضغط في المكابح المستخدمة اقل من.......(PSI) وحدة ضغط"
      ,"قوة الكبح الخاصة بنوابض المكابح"
      ,"مسافة تأخر مكابح الهواء علي سرعة 55 ميل في الساعة علي سطح جاف, تضيف الي مسافة التوقف....... قدم؟"
      ,"مسافة التوقف الاجمالية للمكابح الهوائية, اكبر من مسافة التوقف الاجمالية للمكابح الهيدروليكية, بسبب مسافة ----"
      ,"من المعروف انه اذا كان هناك سخونة مرتفعة بسبب استخدام المكابح, من الممكن ان يتسبب ذلك في:"
      ,"الضغط علي المكابح مراراً وتكراراً مع زيادة قوة الضغط, من الممكن ان يتسبب في:"
      ,"نظام المكابح الذي يطبق الضغط او يرفعه, عندما يقوم السائق بالضغط علي دواسة المكابح يسمي نظام ---- المكابح"
      ,"معدل تيل المكابح, يحتاج الي التعديل اذا كان اكثر من.......عندما تقوم بسحبه بقوة"
      ,"نظام ضغط هواء المكابح يكون مشحون بشكل كامل علي (PSI) وحدة ضغط؟"
      ,"دواسة المكابح في نظام مكابح تعمل بضغط الهواء:"
      ,"تعريف مكابح الscam"
      ,"في الأوضاع العادية, من اجل استخدام مكابح الركن يجب علي السائق:"
      ,"كل المركبات المزودة بنظام مكابح ضغط الهواء لديها:"
      ,"مع المركبات المزودة بنظام مكابح هوائية, مكابح الركن يجب ان تستخدم في:"
      ,"اذا كان هناك تسريب في جهاز ضغط الهواء, ما الذي يبقي الهواء في خزان الهواء؟"
      ,"أي هذه الأوقات ليس الوقت الأمثل من اجل استخدام مكابح الركن؟"
      ,"مع المركبات المزودة بنظام مكابح تعمل بضغط الهواء, يجب استخدام مكابح الركن في:"
      ,"لماذا يجب عليك تجفيف الماء من خزان الهواء المضغوط؟"
      ,"نوابض المكابح مفعلة, متي يجب عليك الضغط علي دواسة المكابح؟"
      ,"من اجل تفقد كتيب تعديل مستوي تيل المكابح (Slack adjusters of the scam) يجب عليك ان تركن علي:"
      ,"الحرارة المرتفعة الناتجة عن استخدام المكابح بشكل متكرر, من الممكن اضاً ان تتسبب في"
      ,"اذا وجب عليك التوقف من اجل طارئ مروري, يجب عليك التوقف حتي يمكنك؟"
      ,"استخدام المكابح علي طريق طويل منحدر, في الأوضاع العادية, يتبع الي؟"
      ,"ما هو اهم شيء يجب عليك القيام به, عندما يظهر امامك تحذير ضغط الهواء المنخفض:"
      ,"مكابح الركن او مكابح الطوارئ علي المركبات الثقيلة, فقط يمكن وضعها عن طريق شيء لا يمكن ان يسرب, مثل:"
      ,"مكابح الهواء تستغرق وقت اكثر من اجل التوقف اكثر من الوقت التي تستهلكه المكابح الهيدروليكية, بسبب:"
      ,"عندما يتم استخدام المكابح, تيل المكابح سوف يضغط علي:"
      ,"صمام الأمان يفرغ الهواء بشكل تلقائي علي ضغط:"
      ,"الضغط علي المكابح بقوة لفطرة صغيرة مع التكرار(STAB BRAKING):"
      ,"اذا لم يتكون ضغط هواء خلال الفطرة الزمنية المعروفة, بعد ذلك:"
      ,"صمام الأمان يقلل ضغط الهواء علي........وحدة ضغط(PSI) وحدة ضغط."
      ,"ما هو الشيء القانوني الذي يمكنه السيطرة علي مكابح الركن, و مكابح الخدمة في كلاً من, الشاحنات و المركبات ذات المقطورة, و الحافلات؟"
      ,"يظهر مؤشر ضغط الهواء كمية الهواء المضغوط:"
      ,"قوة الكبح لنوابض المكابح:"
      ,"انه ليس من الامن قيادة مركبة لديها تشققات في طنبورة المكابح اكبر من.......عرض مساحة الاحتكاك."
      ,"المكابح تتأكل عندما:"
      ,"اذا كانت مركبتك لديها مبخر يعمل بالكحول, هو هناك من اجل:"
      ,"صمام خزان الهواء يتحكم في:"
      ,"نظم المكابح الحديثة تجمع بين ثلاثة انظمة مختلفة, هم مكابح الخدمة, مكابح الركن, و مكابح....…"
      ,"اذا كان ليس لديك ميزة تفريغ الخزنات الاوتوماتيكية, كم تحتاج عادة من الوقت من اجل تفريغ خزنات الهواء من الزيت, و الماء؟"
      ,"الاستخدام الأمثل للمكابح عند القيادة علي منحدر طويل بعد استخدام الغيار المنساب, هو الكبح حتي تكون سرعتك اقل......من السرعة المنشورة علي الطريق, و من ثم اترك المكابح."
      ,"في الأوضاع الاعتيادية, مركبة او حافلة تستخدم مكابح هوائية, تسير بسرعة 55 ميل في الساعة سوف تتطلب مسافة توقف بحجم كم عدد من الاقدام؟"
      ,"متي يكون من الامن ان تترك شاحنتك غير مأهولة بدون استخدام مكابح الركن, وتفقد العجلات؟"
      ,"مفتاح اضاءة التوقف:"
      ,"  ____ يظهر كمية الهواء المضغوط في خزنات الهواء."
      ,"من اجل اختبار مكابح الخدمة يجب عليك:"
      ,"اذا كنت تقود في منحدر متجه الي الأسفل وقد وسلت الي سرعتك الامنة 40 ميل في الساعة, سوف تستخدم مكابح الخدمة من اجل خفض سرعتك الي..... ميل في الساعة."
      ,"اذا كنت الشاحنة الخاصة بك لديها نظام مكابح مزدوج, واحد هذه الأنظمة ضغطه منخفض:"
      ,"ماذا يحدث عندما تزيد درجة حرارة طنبورة المكابح؟"
      ,"ما هو المصطلح (wig wag)؟"

    ]

    if(englishQuestions.length !==arabicQuestions.length) {
      throw new Error("mismatch between question arrays")
    }

    const question = englishQuestions.map((text, i)=> ({
      questionCate: "AIRBRAKES",
      questionText: text,
      questionTextAr: arabicQuestions[i],
      }))

    await Question.createMany(question)
    console.log(`Inserted ${question.length} air brakes questions.`)
  }
}
