import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Answer from "#models/answer"
export default class extends BaseSeeder {
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
