import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Answer from '#models/answer'
export default class extends BaseSeeder {
  async run() {
    const englishAnswers =[
      "Have in a modulating control valve.",
      "Have in the air tanks.",

      "100",
      "60",

      "The S-cam may not take back when you release the brake",
      "Ice may form on the brake drums and wear them out.",

      "Reduce your speed and test the remaining system while under way.",
      "Reduce your speed and drive to the nearest for repairs.",

      "Water cools the compressor too much.",
      "Water low boiling point reduces braking power.",

      "50",
      "100",

      "The manual slack adjusters of the S-cam brakes will not be set properly.",
      "Brake drums will not be fully pressurized.",

      "Fluid",
      "Air",

      "Balance the service brake system when you are parked.",
      "Stay parked twice as long without using up service air pressure.",

      "60",
      "30",

      "Park slight grade. drain off-air pressure. set parking and check to the movement.",
      "Park on level ground, chock the wheels, engage the parking brakes when you the Correct amount of air pressure to do so and Shut the engine off",

      "1",
      "3",

      "Bolts or clamps.",
      "Spring pressure.",


      "150",
      "100",


      "80",
      "40",

      "Increase contact between the brake drums and linings",
      "Proper adjustment of S-cam",

      "Disc.",
      "Wedge drum.",


      "Use the full power of the brakes to lock them,",
      "Use the hand brake before the brake pedal.",


      "Reduce your speed and drive to the nearest garage for repairs",
      "Reduce your speed and test the remaining system while under way.",

      "Change the alcohol from a bottle.",
      "Check the oil for alcohol content.",

      "1 psi in 30 seconds.",
      "2 psi in 45 seconds.",

      "80",
      "50",


      "Is not affected by the condition of the service brakes,",
      "Increases when the service brakes are hot.",

      "12",
      "52",


      "effective braking",
      "Reaction",

      "Modulated control valve to wear out.",
      "Brake linings to split up.",

      "A buildup of brake air pressure,",
      "No Change Of brake air pressure.",

      "Emergency",
      "Parking",

      "1/4 inch",
      "1/2 inch",

      "75",
      "100",

      "Controls the speed of the air compressor.",
      "Is connected to slack adjusters by a series of rods and linkages",

      "Controls the air flow to each of the brakes chambers",
      "Pulls the brake shoes away from the drum and allow the wheels to roll freely.",

      "Turn off the engine.",
      "Be sure air brakes system is fully pressurized",

      "An air usage gauge.",
      "A backup hydraulic system.",

      "Only during pre-trip inspections.",
      "As little as possible.",

      "The tractor protection valve.",
      "The emergency relay valve.",

      "If you are going to test the parking brake to make sure that it holds the vehicle.",
      "If you will be stopping for only one hour.",

      "As little as possible.",
      "To hold your speed When going downhill.",

      "To keep from fowling the air compressor oil.",
      "Water low boiling point reduces braking power.",

      "Only on a slippery road.",
      "Only when driving downhill.",

      "Level ground and parking brakes. then apply service brakes.",
      "Level ground and drain off-air pressure before checking the adjustment.",

      "Modulated control valve to wear out.",
      "Brake linings to split up.",

      "Use the hand brake first.",
      "Can steer hard while braking hard.",

      "Use of spring brakes.",
      "The use of the front brakes limiting valve.",

      "Up-shift.",
      "Downshift.",

      "Air pressure.",
      "Hydraulic pressure.",

      "Air brakes require heavier return springs.",
      "Air brakes use different brake drums.",

      "S-cam.",
      "Slack adjuster.",

      "100 psi.",
      "50 psi.",

      "Use light steady pressure on the brake pedal.",
      "Press hard on brake pedal and apply the hand valve you stop.",

      "The alcohol container may be low.",
      "You should ready to use your parking brakes to stop.",

      "50",
      "150",

      "Fluid pressure.",
      "Air pressure.",

      "You have used in this trip.",
      "Is going to the brake chamber.",

      "Is not affected by the condition of the service brakes.",
      "Can only be tested by highly trained brake service people",

      "1/8",
      "1/4",

      "The brake pedal feels spongy when you apply pressure.",
      "Less pressure is needed on the brake pedal for each stop.",

      "Boost tank pressure, the same way that turbocharges boost engine.",
      "Eliminate the need for daily tank draining.",

      "Air pressure applied to the brakes.",
      "The speed of the air compressor.",

      "Drum",
      "Foot",

      "After every four hours of service.",
      "once a week",

      "10 mph",
      "15 mph",

      "Less than 100 feet.",
      "From 100 to 300 feet.",

      "If you are only away for a few minutes.",
      "If you are conducting a pre-trip inspection.",

      "Tells you when you need to use your emergency brakes.",
      "Tells you when the air brake system is low on air pressure.",

      "air usage gauge",
      "oil gauge",

      "Sop the vehicle. brake in a low gear. depress the service brakes, and then gently pull the brakes.",
      "Brake slowly while moving backward.",

      "25",
      "35",

      "The manual slack adjusters on S-Cam brakes are not set.",
      "The brake drums will not fully operational.",

      "They start to smoke.",
      "They contract.",

      "A spring mount for hairpieces.",
      "Part of the stop light system.",

    ]


    const arabicAnswers=[
      " لديك في صمام التحكم."
      ," لديك في خزان الهواء"

      ," 100"
      ," 60"

      ," من الممكن ان يتشكل جليد علي صمام المكابح, يتسبب في فشل المكابح."
      ," ال(S-cam) ربما لا يعود الي الخلف عندما تقوم برفع قدمك من علي دواسة المكابح."

      ," اخفض سرعتك, و قم بالقيادة الي اقرب جراج من اجل الاصلاحات."
      ," اخفض سرعتك, واختبر ما تبقي من النظام بينما انت في الطريق."

      ," درجة غليان الماء المنخفضة تقلل من قوة المكابح."
      ," الماء يبرد مضخة الهواء الي درجة كبيرة."

      ," 50"
      ," 100"

      ," ناقل الحركة الخاص بالمكابح (S-cam) سوف لا يعمل كما ينبغي."
      ," طنبورة المكابح سوف تكون غير مضغوطة بشكل كامل."


      ," الهواء"
      ," السائل"


      ," استمر بالتوقف بالتوقف ضعف المدة بدون استخدام ضغط الهواء الأساسي."
      ," قوم بموازنة نظام المكابح عندما تقوم بالتوقف."


      ," 30"
      ," 60"

      ," اركن علي مستوي الأرض, تفقد العجلات, استخدم مكابح الركن عندما يكون لديك مستوي مناسب من ضغط الهواء لفعل ذلك, و اغلق المحرك عندما تقوم بفعل ذلك."
      ," اركن علي أرضية مرتفعة قليلاً, استهلك ضغط الهواء, فعل مكابح الركن و حاول التحرك."


      ," 1"
      ," 3"


      ," مسامير او كلبسات."
      ,"  ضغط النوابض"

      ,"100"
      ,"150"

      ," 40"
      ," 80"

      ," زيادة الاحتكاك بين أسطوانة المكابح و تيل المكابح."

      ,"  التعديل المناسب ل(S-CAM)"


      ," مكابح اسطوانية."

      ,"  مكابح(Wedge drum)"


      ," استخدام قوة المكابح الكاملة من اجل التوقف."
      ,"  استخدم مكابح اليد, قبل استخدام دواسة المكابح."



      ," اخفض سرعتك, و تفقد باقي نظام المكابح بينما تقود"
      ," اخفض سرعتك و توجه الي اقرب جراج من اجل اجراء الصيانة."

      ," تفقد الزيت من وجود كحل فيه."
      ,"  غير الكحول من الزجاجة"



      ," 1 (PSI) وحدة ضغط لكل 30 ثانية."
      ,"  2 (PSI) وحدة ضغط لكل 45 ثانية"


      ," 80"
      ," 50"



      ," يتضاعف عندما تكون مكابح الخدمة ساخنة."
      ," لا يتأثر بحالة مكابح الخدمة."



      ," 52"
      ," 12"



      ," رد الفعل."
      ," الإيقاف الفعال."


      ," تيل المكابح سوف تنقسم."
      ," سوف يتأكل صمام التحكم."



      ," تزايد ضغط المكابح."
      ," لا تغير في ضغط هواء المكابح."



      ," الركن"
      ,"  الطوارئ"



      ," 1/2 انش."
      ," 1/4 انش."



      ," 75"
      ," 100"



      ," يتحكم في سرعة جهاز ضغط الهواء."
      ," يتصل بنظام تعديل المكابح, عن طريق مجموعة من الطرق و التوصيلات."



      ," يسحب حذاء المكابح بعيداً عن أسطوانة المكابح, ويسمح للعجلة ان تدور بشكل حر."
      ," يتحكم في تدفق الهواء لكل غرفة مكابح."


      ," اطفئ المحرك."
      ," تأكد من ان نظام المكابح مضغوط بشكل كامل."


      ," مؤشر استخدام الهواء."
      ,"  نظام مكابح هيدروليكي احتياطي."


      ," علي اقل قدر مستطاع"
      ," فقط في فحص ما قبل الرحلة."



      ," صمام حماية الجرار."
      ," صمام تناوب الطوارئ."


      ," اذا كنت بصدد فحص مكابح الركن, من اجل التأكد من ان المكابح يمكنها اقاف المركبة."
      ," فقط اذا كنت سوف تتوقف لمدة ساعة واحدة."

      ," اقل قدر مستطاع."
      ," من اجل تثبيت سرعتك عندما تكون نازلاً من منحدر."



      ," من اجل الحفاظ علي زيت جهاز ضغط الهواء ضغط الهواء."
      ," نقطة الغليان المنخفضة الخاصة بالماء تقلل من قوة المكابح.."


      ," فقط علي الطرق الزلقة."
      ," فقط عند القيادة اسفل منحدر."



      ," عي مستوي الأرض, افرغ ضغط الهواء قبل تفقد التعديل."
      ,"3) علي مستوي الأرض, ثم استخدم مكابح الخدمة."



      ," صمام التعديل سوف يتأكل."
      ," تيل المكابح سوف يتشقق."



      ," استخدم المكابح اليدوية قبل."
      ," حيث يمكنك التوجيه بقوة, مع الكبح بقوة."


      ," استخدام نوابض المكابح."
      ," استخدام صمام الكبح الامامي.."



      ," انتقل الي غيار اقل."
      ," انتقل الي غيار أعلي."



      ," الضغط الهيدروليكي."
      ," الضغط الهوائي."


      ," مكابح الهواء تتطلب نوابض التفاف اثقل."
      ," مكابح الهواء تستخدم طنابير مكابح مختلفة."


      ," (S-CAM)"
      ," معدل مستوي المكابح."



      ," 100 psi"
      ," 50 psi"

      ," اضغط بقوة علي دواسة المكابح, و استخدم مكابح اليد بينما انت تتوقف."
      ," استخدم ضغط قليل متواصل علي دواسة المكابح."



      ,"1 يجب عليك ان تكون مستعد من اجل استخدام مكابح الركن من اجل التوقف."
      ," خزان الكحول من المرجح ان يكون منخفض."



      ," 50"
      ," 100"


      ," ضغط السائل."
      ," ضغط الهواء."


      ," الذاهبة الي حجرة المكابح."
      ," الكمية التي استخدمتها خلال الرحلة."




      ," تفحص فقط بواسطة اشخاص مدربين تدريباً عالياً في خدمة الفرامل."
      ," لا يتأثر بوضع المكابح التي في الخدمة."



      ," 1/8"
      ," 1/4"


      ," تشعر ان دواسة المكابح اسفنجية عندما تقوم بالضغط عليها."
      ," في حاجة الي ضغط اقل في كل مرة تتوقف."



      ," زيادة ضغط خزان الهواء, بنفس الطريقة التي يقوم بها التربو بزيادة كمية الهواء الذاهبة الي المحرك."
      ," يقضي علي الحاجة اليومية الي تفرغ خزانات الهواء."


      ," سرعة خزان الهواء."
      ," ضغط الهواء الذي يوضع علي المكابح."



      ," الصرة."
      ," القدم."



      ," بعد كل اربع سعات من الخدمة."
      ,"  مرة كل أسبوع"


      ," 10 ميل في الساعة."
      ,"  15 ميل في الساعة."



      ," اقل من 100 قدم."
      ,"  من 100 قدم الي 300 قدم."


      ," اذا كنت انت ذاهب الي مكاناً ما لبضع دقائق."
      ," اذا كنت تقوم بأجراء فحص ما قبل الرحلة."


      ," يخبرك عندما يكون نظام المكابح منخفض الضغط."
      ,"  يخبرك عندما تكون في حاجة الي استخدام مكابح الطوارئ."



      ," مؤشر استخدام الهواء."
      ," مؤشر الزيت."


      ," استخدم المكابح بخفة بينما تتحرك الي الخلف"
      ," أوقف المركبة, اكبح عن طريق المحرك, عن طريق تعشيق المحرك علي غيار منخفض, اضغط علي مكابح الخدمة, و من ثم اسحب المكابح في عكس الاتجاه برفق."


      ," 30"
      ," 25"

      ," مستوي تعديل تيل المكابح و(S-CAM) ليسوا علي مستوي مناسب."
      ," طنبورة المكابح سوف لا تعمل بشكل كامل."


      ," يبدؤا في الانقباض."
      ," يبدؤا في التدخين."

      ," جزء من نظام اضاءة المكابح."
      ," شعيرات مثبتة علي شكل نابض."

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
