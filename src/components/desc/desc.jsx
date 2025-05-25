import styles from './desc.module.css';
import './desc.css'

export default function Desc({enLan}) {
    return <section id="desc">
        <h2>
            {enLan ? 'Company information!' :
                'Данные о компании!'}
        </h2>
            <p className="p" id={styles.p}>
                {enLan ? 
                    <>
                    Limited Liability Company "Intelligent Robotic Technologies" INN 6320083494
                                        <br></br>
                                        <br></br>
                    Legal address - 445043, Samara Region, Togliatti, Togliatti, Okrainnaya St., bld. 24, room 202 
                    Actual address - 445043, Samara Region, Togliatti, Togliatti, Okrainnaya St., bld. 24, room 202
                    Main OKVED code 62.01 Development of computer software
                    Information on types of IT activities according to the Order of the Ministry of Digital Development of Russia dated 11.05.2023 N 449 "On approval of the list of types of activities in the field of information technology" (Registered in the Ministry of Justice of Russia on 14.08.2023 N 74778)
                    <br></br>
                    <br></br>
                    Code 1.03 Design and (or) other activities, as well as the provision of services in relation to robotics and sensorics technologies,
                    including in the field of sensorimotor coordination and spatial positioning,
                    sensors and processing of sensory information, intelligent control systems for robotic systems,
                    automation control systems, including unmanned aerial vehicles and highly automated vehicles' 
                    </>
                :
                    <>
                    Общество с ограниченной ответственностью "Интеллектуальные Роботизированные Технологии"  ИНН 6320083494  
                    <br></br>
                    <br></br>
                    Юридический адрес - 445043, Самарская область, г.о. Тольятти, г Тольятти, ул Окраинная, влд. 24, помещ. 202
                    Фактический адрес - 445043, Самарская область, г.о. Тольятти, г Тольятти, ул Окраинная, влд. 24, помещ. 202
                    Основной код ОКВЭД 62.01 Разработка компьютерного программного обеспечения
                    Информация о видах ИТ-деятельности согласно Приказу Минцифры России от 11.05.2023 N 449 "Об утверждении перечня видов деятельности в области информационных технологий" (Зарегистрировано в Минюсте России 14.08.2023 N 74778)
                    <br></br>
                    <br></br>
                    Код 1.03 Проектирование и (или) иная деятельность, а также оказание услуг в отношении технологий робототехники и сенсорики,
                    в том числе в области сенсоромоторной координации и пространственного позиционирования,
                    сенсоров и обработки сенсорной информации, интеллектуальных систем управления робототехническими системами,
                    систем автоматизации управления, включая беспилотные воздушные судна и высокоавтоматизированные транспортные средства
                    </>}
                <br/>
                <br/>
            </p>
    </section>
}