import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Answer from "#models/answer"
export default class airBrakesAnswerSeeder extends BaseSeeder {
  async run() {
    const englishAnswers = [
      "Are applying to the brakes.",
      "20",
      "Ice may form in the air brake valves and cause brake failure,",
      "Bring your vehicle to a complete stop right away and safely park. Continue only after the system is fixed",
      "Water can freeze in cold weather and cause brake failure.",
      "150 psi",
      "Either the front or back brake will not be fully operational",
      "Spring",
      "Release the spring emergency/parking brakes to move a short distance.",
      "45",
      "Park on level ground, wait until normal air is reached, release the parking brake and move forward slowly at about 5 mph. Then apply the brakes firmly",
      "2",
      "Air pressure.",
      "125 PSI",
      "60",
      "Expansion of the brake drums.",
      "S-cam drum.",
      "Can keep your vehicle in a straight line.",
      "Stop right away and safely park. Continue only after the system is fixed.",
      "Check and fill the alcohol level.",
      "3 psi in one minute.",
      "60",
      "Depends on the service brakes being in adjustment.",
      "32",
      "Brake lag",
      "Brake to fade or fail.",
      "A loss of brake air pressure.",
      "Service",
      "1 inch",
      "125",
      "Controls the air pressure applied to the brakes.",
      "Forces the brake shoes against the inside of the brake drum.",
      "Apply brakes by pulling the parking brake control knob out.",
      "supply pressure gauge.",
      "Whenever you leave the vehicle unattended.",
      "The one-way check valve.",
      "If the brakes are very hot (e.g. Just after coming down a steep grade).",
      "Any time when vehicle is 'Med.",
      "water can freeze in cold weather and cause brake failure.",
      "Never",
      "Level ground, chock the wheels and release the parking brakes.",
      "Brake to fade or fail.",
      "Can steer and keep your vehicle in a straight line.",
      "The braking effect of the engine.",
      "Stop and safely park as soon as possible.",
      "Spring pressure.",
      "Air brakes take more time to flow through the lines than hydraulic fluid,",
      "Brake drum or disc.",
      "150 psi",
      "Appingly your brakes all the way. Release the brakes when wheels læk up. As som as the wheels start rolling am'ly the brakes fully",
      "Air pressure may drop to a low point while driving. requiring an emergency stop.",
      "150psi",
      "spring pressure.",
      "Is in the air tanks.",
      "Depends on the brakes being in adjustment.",
      "1/2",
      "You have to push harder on a brake pedal to control your speed on a downgrade.",
      "Reduce the risk of icing in air brake valves in cold weather.",
      "When air is pumped into the air tanks",
      "Emergency",
      "at the end of each day of driving",
      "5mph",
      "More than 300 feet",
      "Never",
      "Turns on the brake lights when you put on the air brakes.",
      "The supply pressure gauge",
      "Brake firmly while slowly moving forward",
      "35",
      "Either the front or rear brakes will not be fully functional.",
      "They expand",
      "A mechanical arm that signals low air pressure.",
    ]


    const arabicAnswers = [
      "الكمية التي يتم الضغط بها علي المكابح."
      ,"20"
      ," من الممكن ان يتشكل جليد علي صرة المكابح, و يتلفها."
      ," قم بإيقاف المركبة الخاصة بك بشكل كامل, و اركنها, ثم اكمل الرحلة بعد اصلاح المركبة."
      ,"من الممكن ان يتجمد الماء في درجات الحرارة المنخفضة, و يتسبب في فشل المكابح."
      ,"150 psi"
      ," أي من المكابح الامامية او الخلفية, سوف لا يعمل بشكل كامل."
      ,"النوابض"
      ,"قوم بإزالة نابض الطوارئ من علي المكابح من اجل الانتقال الي مسافات قصيرة."
      ,"45"
      ,"اركن علي مستوي الأرض, انتظر حتي يعود مستوي ضغط الهواء الي المستوي الطبيعي, قوم بأنزال مكابح الركن, و انطلق الي الامام بسرعة 5 ميل في الساعة, وبعد ذلك قوم بأحكام الضغط علي المكابح."
      ,"2"
      ,"ضغط الهواء."
      ,"PSI 125"
      ,"60"
      ,"تمدد اسطوانة المكابح."
      ,"مكابح S-cam drum"
      ,"يمكنك ان تبقي المركبة بشكل مستقيم"
      ," توقف علي الفور, و قوم بالركن بشكل امن, اكمل الرحلة بعد اصلح النظام."
      ,"تفقد مستوي الكحول, و قم بزيادة مستوي الكحول."
      ,"3(PSI) وحدة ضغط لكل دقيقة"
      ,"60"
      ,"يعتمد علي التعديل مستوي المكابح الخاصة بالخدمة"
      ,"32"
      ," استجابة المكابح"
      ," سوف تتأكل المكابح او تفشل في أداء وظيفتها"
      ,"تناقص ضغط هواء المكابح"
      ,"خدمة"
      ,"1 انش."
      ,"125"
      ," يتحكم في مستوي الضغط علي المكابح."
      ,"يضغط علي حذاء المكابح في الاتجاه الداخلي لأسطوانة المكابح."
      ,"استخدام المكابح عن طريق سحب مقبض مكابح الركن"
      ,"مؤشر ضغط الهواء"
      ,"عندما تقوم بترك المركبة غير مأهولة"
      ,"صمام الفحص احادي الاتجاه."
      ,"اذا كانت المكابح ساخنة للغاية(علي سبيل المثال: اذا كنت قد نزلت من اعلي منحدر"
      ,"في أي وقت تكو فيه المركبة مركونة"
      ," من الممكن ان يتجمد الماء في درجات الحرارة المنخفضة و يتسبب في فشل المكابح."
      ,"ابداً."
      ,"علي مستوي الأرض, تفقد العجلات و اطفئ مكابح الركن."
      ,"المكابح سوف تتأكل او تفشل"
      ," من الممكن التوجيه, و إبقاء المركبة في خط مستقيم"
      ," قوة الكبح الخاصة بالمحرك"
      ," توقف و قم بالركن بأقصي سرعة"
      ,"ضغط النوابض"
      ,"مكابح الهواء تستغرق وقت اكثر من اجل نقل الهواء دخل الخطوط اكثر من الوقت الذي يستهلكه السائل الهيدروليكي"
      ," اسطوانة المكابح, او دسك المكابح"
      ,"150 psi"
      ," اضغط علي المكابح بشكل كامل, ارفع قدمك من علي دواسة المكابح عندما تتوقف العجلات عن الدوران, عندما تبدء العجلة بالدوران مجدداً, اضغط علي المكابح بشكل كامل."
      ,"من المرجح ان ينخفض ضغط الهواء الي درجة منخفضة اثناء القيادة, يتطلب توقف طوارئ"
      ,"150 psi"
      ,"ضغط النوابض."
      ,"في خزنات الهواء"
      ," يعتمد علي وضع تعديل تيل المكابح."
      ,"1/2"
      ,"عليك الضغط عليها بقوة من اجل التحكم بسرعة المركبة عند النزول من منحدر"
      ," يقلل من خطر تجمد صمام المكابح في الأجواء الباردة"
      ,"عندما يتم ضخ الهواء الي خزنات الهواء"
      ," الطوارئ"
      ,"بعد نهاية كل يوم من القيادة."
      ,"5 ميل في الساعة."
      ,"اكثر من 300 قدم."
      ,"ابداً."
      ,"يقوم بفتح اضاءة المكابح عندما تقوم باستخدام المكابح"
      ,"مؤشر ضغط الهواء."
      ,"اضغط علي المكابح بأحكام بينما تتحرك ببطء الي الامام."
      ,"35"
      ,"أياً من المكابح الامامية او الخلفية, سوف لا تعمل بشكل كامل."
      ," يبدؤا في التمدد."
      ," ذراع الي يشير مستوي ضغط المنخفض."
    ]


    if(englishAnswers.length !== arabicAnswers.length) {
      throw new Error("mismatch between arrays")
    }

    const answers = englishAnswers.map((text,i)=>({
      questionId: i + 65,
      answerText: text,
      answerTextAr: arabicAnswers[i],
    }))

    await Answer.createMany(answers)
  }
}
