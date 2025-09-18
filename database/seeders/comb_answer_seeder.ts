import {BaseSeeder} from '@adonisjs/lucid/seeders'
import Answer from '#models/answer'

export default class combAnswerSeeder extends BaseSeeder {
  public async run() {
    const englishAnswers = [
      "With the tractor frame under the trailer.",
      "10",
      "Drive slowly through turns.",
      "3",
      "Turn wide before turning.",
      "This will make turning more stable.",
      "Nothing will happen until you apply the brakes.",
      "Air brake lines and emergency lines from the tractor to the trailer.",
      "If there are no brake springs, you can drive but will rely on the trailer brakes.",
      "Only with the foot brake (service brake)",
      "Rear valve",
      "The trailer's emergency brakes will be activated.",
      "Check the air line connection.",
      "Brake springs are not required.",
      "Keep the load as close to ground level as possible.",
      "Bring air to the trailer system, then pull the air supply handle.",
      "Legs.",
      "Nothing will happen until you apply the brakes.",
      "At normal pressure",
      "Bring air to the trailer system, then pull the air supply handle.",
      "Emergency and main brake air hoses.",
      "Fully loaded.",
      "Low gear",
      "Press the trailer air valve",
      "Keep the load as close to ground level as possible",
      "To prevent steering problems",
      "The emergency brake will engage",
      "90 degrees",
      "The tractor may take longer to stop than if it is connected to a trailer loaded to the maximum gross weight.",
      "This will keep dirt or water out of the hoses.",
      "Always use the lowest gear to reverse",
      "Normal.",
      "The coupling is incorrect and must be repaired before driving the coupled unit.",
      "Tractor with two 27-foot trailers",
      "There is enough space between the tractor frame and the shims",
      "Connecting firmly to the ground, shift into a lower gear for a few extra turns.",
      "If the trailer does not have brake springs, you can start driving, but the trailer will not have brakes.",
      " Stop applying the brakes",
      "Red, Blue",
      "Usually no brake springs",
      "4",
      "More",
      "Emergency",
      "Should not be performed",
      "Slightly raised",
      "Secure but with enough lift to turn",
      "Trailer emergency brakes will engage",
      "Empty",
      "Directly in front of the trailer",
      "At normal pressure",
      "Gently pull the tractor forward with the trailer brakes locked",
      "Not recommended",
      "Fully raised with the crank handle secured in place",
      "Over the locking lever",
      "Apply and release the trailer brakes and listen for brake sound",
      "Trailer brakes locked",
      "Drive the trailer forward and backward with the trailer brakes locked",
      "Either position is correct",
      "Open",
      "Emergency",
      "Leaned down at the end of the trailer",
      "Neutral",
      "Gently pull back to relieve pressure on the fifth wheel",
      "Tractor safety valve closes",
    ]

    const arabicAnswers = [
      "مع اطار الجرار تحت المقطورة."
      ,"10"
      ,"القيادة ببطء علي المنعطفات."
      ,"3"
      ,"انعطف بشكل واسع, قبل الالتفاف"
      ,"كان ذلك اكثر استقرارا اثناء الانعطاف."
      ,"لا شيء سوف يحدث, حتي تضغط علي الفرامل."
      ,"خطوط الفرامل الهوائية و خطوط الطوارئ من الجرار إلى المقطورة."
      ,"اذا لم يكن هناك نوابض للمكابح, يمكن القيادة ولكن سوف تعتمد علي مكابح المقطورة."
      ,"فقط مع فرامل القدم (فرامل الخدمة)"
      ,"الصمام الخلفي"
      ,"سوف تُفعل مكابح الطوارئ للمقطورة"
      ," تحقق من اتصال خطوط الهواء"
      ,"ليس من المطلوب وجود نوابض للمكابح"
      ,"إبقاء الحمولة قريبة الي مستوي الأرض علي قدر المستطاع"
      ," تزويد نظام المقطورة بالهواء، ثم سحب مقبض إمداد الهواء."
      ,"الساق."
      ,"لا شيء سوف يحدث, حتي تضغط علي الفرامل."
      ,"عند الضغط الطبيعي"
      ,"تزويد نظام المقطورة بالهواء، ثم سحب مقبض إمداد الهواء."
      ,"خراطيم الطوارئ وهواء الفرامل الرئيسية."
      ,"محملة بالكامل."
      ," غيار منخفض"
      ,"الضغط علي صمام الهواء الخاص بالمقطورة"
      ,"إبقاء الحمولة قريبة من مستوي الأرض بقدر المستطاع"
      ,"لمنع مشاكل التوجيه"
      ," سوف تقوم مكابح الطوارئ بالعمل"
      ,"90 درجة"
      ,"يمكن أن تستغرق الجرار وقتًا أطول للتوقف مقارنة بتوقف الجرار متصلا بمقطورة محملة بأقصى وزن إجمالي."
      ,"سيبقي الأوساخ أو الماء خارج الخراطيم"
      ,"استخدم دائمًا أدنى غيار للرجوع"
      ,"الوضع الطبيعي."
      ,"الاقتران ليس صحيحًا ويجب إصلاحه قبل قيادة الوحدة المقترنة."
      ,"جرار بمقطورتين بطول 27 قدمًا"
      ,"هناك ما يكفي من المساحة بين إطار الجرار والسندات"
      ,"تتصل بالأرض بأحكام ،و انتقل الي غيار اقل من اجل بضع لفات إضافية."
      ,"إذا لم يكن للمقطورة نوابض مكابح، فأنت يمكن أن تبدأ القيادة ولكن المقطورة لن يصبح بها فرامل."
      ,"توقف عن الضغط علي الفرامل"
      ,"لأحمر, والأزرق"
      ,"غالبًا لا تحتوي على نوابض للمكابح"
      ,"4"
      ,"المزيد"
      ,"حالة الطوارئ"
      ,"لا ينبغي القيام بذلك الإجراء"
      ,"مرفوعة قليلاً"
      ,"مؤمنة ولكن بها زيادة كافية للالتفاف"
      ," مكابح الطوارئ للمقطورة سوف تعمل"
      ,"فارغة"
      ,"مباشرة أمام المقطورة"
      ,"عند الضغط الطبيعي"
      ,"سحب الجرار للأمام برفق مع قفل فرامل المقطورة"
      ,"لا ينصح به"
      ,"رفعهم بالكامل مع تأمين مقبض الكرنك في مكانه"
      ,"فوق رافعة القفل"
      ,"ضغط و تحرير مكابح المقطورة والاستماع إلى صوت الفرامل"
      ,"فرامل المقطورة مغلقة"
      ,"قُد المقطورة للأمام وللخلف مع إغلاق فرامل المقطورة"
      ,"كل من الوضعين صحيحين"
      ,"فتح"
      ," الطوارئ"
      ,"مائل لأسفل في نهاية المقطورة"
      ,"محايد"
      ,"تراجع بلطف لتخفيف الضغط من على العجلة الخامسة"
      ,"ينغلق صمام حماية الجرار"

    ]

    if (englishAnswers.length !== 64 || arabicAnswers.length !== 64) {
      throw new Error("You must provide exactly 64 English and 64 Arabic answers")
    }

    const answers = englishAnswers.map((eng, i) => ({
      questionId: i + 1,            // auto-fill from 1 → 64
      answerText: eng,
      answerTextAr: arabicAnswers[i],
    }))

    await Answer.createMany(answers)
    console.log(`Inserted ${answers.length} correct answers (1 per question).`)
  }
}
