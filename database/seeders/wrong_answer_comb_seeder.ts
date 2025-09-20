import {BaseSeeder} from '@adonisjs/lucid/seeders'
import Answer from '#models/answer'

export default class combAnswersWrongSeeder extends BaseSeeder {
  public async run() {
    const englishWrongAnswers = [
      "Completely removed from the trailer.",
      "With the fifth wheel directly under the kingpin",
      "20",
      "30",
      "Keep both hands firmly on the steering wheel.",
      "Make sure the brakes are properly adjusted.",
      "1",
      "1/2",
      "You should not turn; move to another location where you can turn without interfering with another lane of traffic.",
      "Turn wide as you turn.",
      "This makes it easier to navigate curves.",
      "This makes it easier to roll over.",
      "The trailer emergency brake will engage.",
      "The trailer air tank will be emptied via the open line.",
      "Electrical lines from the tractor to the trailer.",
      "The kingpin and fifth wheel mounting location.",
      "The manual valve will activate the tractor brakes instead of the trailer brakes.",
      "The brake light does not work when you press the brake pedal.",
      "To test trailer brakes.",
      "As a parking brake",
      "Front valve.",
      "Center section valve.",
      "The trailer's supply valve will open.",
      "The air compressor will blow air instead of pumping it.",
      "Check the electrical cables.",
      "Connect the air lines.",
      "Usually, you'll need an adapter for the hoses between the tractor and trailer.",
      "Cannot be operated legally on interstate highways.",
      "Keep both hands firmly on the steering wheel.",
      "Make sure the brakes are balanced.",
      "Make sure the trailer brakes are off.",
      "Walk around the tractor and trailer to ensure there are no obstructions.",
      "Base.",
      "Head.",
      "Just enough to fit them.",
      "1/4 in.",
      "Empty.",
      "Between 60 and 80 PSI (unit of air pressure).",
      "Pull forward to test the connection of the air hose handles.",
      "Make sure the trailer brakes are off.",
      "Electrical cable for the main brake.",
      "Nothing, back up and lock the fifth wheel.",
      "Partially loaded.",
      "Empty.",
      "Middle gear.",
      "High gear.",
      "Pull the trailer air valve.",
      "Tighten the handles on the main brake hoses.",
      "Keep the fifth wheel's travel space as small as possible.",
      "Ensure the brakes are balanced.",
      "To reduce heat and noise.",
      "To ensure a good electrical connection.",
      "The air tank will fill with air instead of compressing air.",
      "The tractor will supply air to the trailer via the service air line.",
      "45 degrees.",
      "180 degrees.",
      "The brakes and suspension systems on a tractor with a trailer work best with light loads.",
      "Light vehicles need more braking power to stop than heavier vehicles.",
      "If you don't, you won't be able to build up the pressure system.",
      "The brake circuit connected to the air becomes a reserve tank.",
      "Do this quickly to ensure the master bolt is secure in the fifth wheel.",
      "Always approach the trailer at a slight angle.",
      "Up position.",
      "Down position.",
      "The parking brake is released, and you can begin driving.",
      "The trailer will not roll on the fifth wheel.",
      "53-foot tail.",
      "Tractor pulling a 45-foot trailer.",
      "There is enough space between the upper and lower fifth wheels.",
      "Safety hinge in the open position.",
      "Reach to the ground and disconnect the trailer from the fifth wheel.",
      "Reach to the ground.",
      "Brake lights will turn on when the brake pedal is depressed.",
      "Manual valve will engage the tractor brakes instead of the trailer brakes.",
      "Momentary steering wheel reverse.",
      "Use trailer hand brakes.",
      "Black, yellow.",
      "Blue, and red.",
      "Only has air service brakes.",
      "Usually requires a hose handle adapter.",
      "3",
      "2",
      "Same number.",
      "Less number.",
      "Neutral.",
      "Normal.",
      "It is the best way to brake and keep the truck straight.",
      "Results in less skidding than using the brake pedal alone.",
      "Fully raised.",
      "Fully lowered.",
      "Secure but with a little extra for turning.",
      "Stable on the tractor frame.",
      "Tractor brake springs will seize.",
      "Trailer tank pressure will be lost.",
      "Fully loaded.",
      "Slightly loaded.",
      "Hold the master bolt with the driver's side jaws.",
      "Left rear double wheel.",
      "Empty.",
      "Between 60 and 80 psi.",
      "Pull forward 50 feet, turn right, then left.",
      "Reverse with the trailer brakes off.",
      "To park on a ramp.",
      "To park cargo in loading docks.",
      "Center the crank and then secure the crank handle in place.",
      "3 upward turns with the crank handle secured in its bracket.",
      "Under the locking lever.",
      "Straight.",
      "Lift the brake pedal.",
      "Check your mirrors to see if the trailer lights are on.",
      "The air supply handle is present.",
      "The tractor's safety valve is in the normal position.",
      "Look at it carefully.",
      "Drive gently forward in low gear in the opposite direction to lock the trailer brakes, then inspect them carefully.",
      "There is sufficient clearance between the tractor frame and the trailer supports.",
      "There is sufficient clearance between the top of the tractor wheel and the front of the trailer.",
      "Lock.",
      "Neutral.",
      "Park.",
      "Service.",
      "Leaned up near the end of the trailer.",
      "Same ground level.",
      "High reverse.",
      "Low reverse.",
      "Activate the tractor parking brake.",
      "Lower the trailer supports.",
      "Keep the trailer supply valve open.",
      "The tractor will lose air pressure.",
    ]

    const arabicWrongAnswers = [
      "تمت ازالته تماماً من المقطورة."
      ,"مع العجلة الخامسة مباشرة تحت المسمار الرئيسي"
      ,"20"
      ,"30"
      ,"حافظ على كلتا يديك بقوة على عجلة القيادة."
      ,"تأكد من تعديل الفرامل بشكل صحيح."
      ,"1"
      ,"1/2"
      ,"عليك ألا تنعطف، انتقل الي مكان اخر حيث يمكنك الانعطاف دون التداخل مع حارة مرورية اخري."
      ,"انعطف بشكل واسع, بينما تقوم بالالتفاف.."
      ,"كان ذلك اسهل في الانعطاف  في المنحنيات."
      ,"كان ذلك  اسهل في الانقلاب."
      ,"فرامل الطوارئ للمقطورة سوف تعمل."
      ,"سوف يستنفد خزان هواء المقطورة عبر الخط المفتوح."
      ,"خطوط كهربائية من الجرار إلى المقطورة."
      ,"المسمار الرئيسي و مكان تثبيت العجلة الخامسة."
      ,"الصمام اليدوي سوف يفعل مكابح الجرار بدلاً من مكابح المقطورة."
      ,"اضاءة المكابح لم تعمل عندما تقوم بالضغط علي دواسة المكابح."
      ,"لاختبار مكابح المقطورة."
      ,"كمكابح لركن السيارات"
      ,"الصمام الأمامي."
      ,"صمام القسم الأوسط."
      ,"سوف يفتح صمام الامداد للمقطورة."
      ,"ضاغط الهواء سوف يفرغ الهواء بدلا من ضخه.."
      ,"تحقق من الكابلات الكهربائية."
      ,"قم بتوصيل خطوط الهواء."
      ,"عادة ما تحتاج محول للخراطيم  بين الجرار والمقطورة."
      ,"لا يمكن تشغيله بشكل قانوني على الطرق السريعة بين الولايات."
      ,"إبقاء كلتا اليدين بأحكام علي عجلة القيادة."
      ,"التأكد من إبقاء المكابح في حالة متوازنة."
      ,"التأكد من توقف مكابح المقطورة."
      ,"تجول حول الجرار والمقطورة للتأكد من عدم وجود عوائق."
      ,"القاعدة."
      ,"الرأس."
      ,"فقط ما يكفي لتركيبهما."
      ,"1/4 بوصة."
      ,"فارغ."
      ,"بين 60 و 80 PSI (وحدة ضغط الهواء)."
      ,"اسحب إلى الأمام لاختبار اتصال مقابض خراطيم الهواء."
      ,"تأكد من توقف فرامل المقطورة."
      ,"الكابل الكهربائي للفرامل الرئيسية."
      ,"لا شيء، ارجع وأغلق العجلة الخامسة."
      ,"محملة جزئيا."
      ,"فارغة."
      ,"غيار متوسط."
      ,"غيار عالي."
      ,"سحب صمام الهواء الخاص بالمقطورة."
      ,"ربط مقابض خراطيم الفرامل الأساسية."
      ,"إبقاء مساحة حركة العجلة الخامسة صغير بقدر المستطاع."
      ,"التأكد من إبقاء المكابح في حالة متوازنة."
      ,"لتقليل الحرارة والضوضاء."
      ,"لضمان اتصال كهربائي جيد."
      ,"سوف يقوم خزان الهواء بتعبئة الهواء بدلاً من ضغط الهواء."
      ,"سوف يقوم الجرار بضخ الهواء الي المقطورة عبر خط هواء الخدمة."
      ,"45 درجة."
      ,"180 درجة."
      ,"الفرامل وأنظمة التعليق في الجرار مع المقطورة يعملوا بشكل أفضل مع الحمولات الخفيفة."
      ,"المركبات الخفيفة تحتاج قوة فرامل اكبر للتوقف مقارنة بالسيارات الثقيلة."
      ,"ان لم تفعل فلن تتمكن من بناء نظام الضغط."
      ,"دائرة الفرامل المتصلة الهواء تصبح خزان احتياطي."
      ,"افعل ذلك بسرعة للتأكد من أن المسمار الرئيسي محكم في العجلة الخامسة."
      ,"اقترب دائمًا من المقطورة بزاوية صغيرة."
      ,"الوضع العلوي."
      ,"الوضع السفلي."
      ,"تم تحرير فرامل الركن، ويمكنك البدء في القيادة."
      ,"لن تدور المقطورة على العجلة الخامسة."
      ,"ذيل بطول 53 قدمًا."
      ,"جرار يسحب مقطورة بطول 45 قدمًا."
      ,"هناك ما يكفي من المساحة بين العجلات الخامسة العلوية والسفلية"
      ,"مفصلة الأمان في وضع مفتوح."
      ,"تصل إلي الأرض وأفصل المقطورة عن العجلة الخامسة."
      ,"يصل إلى الأرض."
      ,"اضاءة المكابح سوف تعمل عند الضغط على دواسة المكابح."
      ,"الصمام اليدوي سوف يجعل مكابح الجرار تعمل بدلاً من مكابح المقطورة."
      ,"التوجيه العكسي اللحظي لعجلة القيادة."
      ,"استخدم مكابح اليد المقطورة."
      ,"أسود، اصفر."
      ,"الأزرق, والأحمر."
      ,"لديها فقط مكابح الخدمة الهوائية."
      ,"عادة ما تحتاج إلى محول مقابض الخراطيم."
      ," 3"
      ," 2"
      ,"نفس الرقم."
      ,"عدد أقل."
      ,"محايد."
      ,"طبيعي."
      ,"إنها أفضل طريقة للفرملة وإبقاء الشاحنة في خط مستقيم."
      ,"ينتج عنه انزلاق أقل من استخدام دواسة الفرامل وحدها."
      ,"مرفوعة بالكامل."
      ,"منخفضة بالكامل."
      ,"مؤمنة ولكن بها زيادة قليلة من اجل للالتفاف."
      ,"مستقرة علي إطار الجرار."
      ,"نوابض المكابح للجرار سوف تعلق."
      ,"سوف يُفقد ضغط خزان المقطورة."
      ,"محملة بالكامل."
      ,"محملة قليلاً."
      ,"اشبك المسمار الرئيسي مع الفكوك من جهة السائق."
      ,"العجلة الخلفية المزدوجة التي توجد علي اليسار ."
      ,"فارغ."
      ,"بين 60 و 80 psi."
      ,"السحب إلى الأمام 50 قدمًا، الاستدارة يمينًا ثم يسارًا."
      ,"الرجوع إلي الخلف مع تحرير فرامل المقطورة."
      ,"لركن الشاحنة علي منحدر"
      ,"لركن الشحنة في أرصفة التحميل."
      ,"رفعهم إلي المنتصف بالكرنك ثم تأمين مقبض الكرنك في مكانه."
      ,"مقدار 3 لفات لأعلي بالكرنك مع تأمين مقبض الكرنك في قوسه."
      ,"تحت رافعة القفل."
      ,"مستقيم."
      ,"رفع دواسة المكابح."
      ,"مشاهدة مراياك لمعرفة ما إذا كانت أضواء المقطورة مضاءة."
      ,"وجود مقبض امداد الهواء."
      ,"صمام حماية الجرار في وضع طبيعي."
      ,"انظر إليها بعناية."
      ,"قُد إلى الأمام بلطف بغيار منخفض في اتجاه معاكس لقفل مكابح المقطورة ثم انظر إليها بعناية."
      ,"هناك مساحة كافية بين إطار الجرار ومساند المقطورة."
      ,"هناك مساحة كافية بين اعلي نقطة لعجل الجرار و مقدمة المقطورة."
      ,"غلق."
      ,"محايدة."
      ,"الركن."
      ,"الخدمة."
      ,"مائل لأعلي قرب نهاية المقطورة."
      ,"نفس مستوى الأرض."
      ,"غيار عالي للخلف."
      ,"غيار منخفض للخلف."
      ,"تفعيل فرامل ركن الجرار"
      ,"تنزيل مساند المقطورة."
      ,"يبقي صمام إمداد المقطورة مفتوحا."
      ,"سوف يخسر الجرار ضغط الهواء."

    ]

    if (englishWrongAnswers.length !== arabicWrongAnswers.length) {
      throw new Error("Mismatch between English and Arabic wrong answers")
    }


    const answers = englishWrongAnswers.map((eng, i) => ({
      questionId: null,
      answerText: eng,
      answerTextAr: arabicWrongAnswers[i],
    }))

    // @ts-ignore
    await Answer.createMany(answers)
    console.log(`Inserted ${answers.length} wrong answers (unlinked).`)
  }
}
