//component
import { Text } from '@components/UIKit'
function LoginDescription() {
  return (
    <div className="flex w-1/2 flex-col items-start px-4">
      <Text htmlTag="h5" variant="h5" className="mb-3 text-base">
        ملاحظات امنیتی
      </Text>
      <ul className="list-none text-[13px]">
        <li className="text-justify">
          <Text variant="body2" htmlTag="span">
            <span className="ml-1 text-2xl">&#x2022;</span>
            سامانه معاملات برخط شرکت کارگزاری ملل پویا با استفاده از پروتکل امن
            SSL به مشتریان خود ارائه خدمت نموده و با آدرس
          </Text>
          <Text variant="body2">
            شروع می شود. لطفا پیش از ورود هر گونه اطلاعات، آدرس موجود در بخش
            مرورگر وب خود را با آدرس فوق مقایسه نمایید و در صورت مشاهده هر نوع
            مغایرت احتمالی، از ادامه کار منصرف شده و موضوع را با ما در میان
            بگذارید.
          </Text>
          <Text variant="body2">
            شروع می شود. لطفا پیش از ورود هر گونه اطلاعات، آدرس موجود در بخش
            مرورگر وب خود را با آدرس فوق مقایسه نمایید و در صورت مشاهده هر نوع
            مغایرت احتمالی، از ادامه کار منصرف شده و موضوع را با ما در میان
            بگذارید.
          </Text>
          <Text variant="body2">
            شروع می شود. لطفا پیش از ورود هر گونه اطلاعات، آدرس موجود در بخش
            مرورگر وب خود را با آدرس فوق مقایسه نمایید و در صورت مشاهده هر نوع
            مغایرت احتمالی، از ادامه کار منصرف شده و موضوع را با ما در میان
            بگذارید.
          </Text>
        </li>
      </ul>
    </div>
  )
}
export default LoginDescription
