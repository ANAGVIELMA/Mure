document.addEventListener("DOMContentLoaded", function(event) {
    var URLactual = window.location;
    var answersOptions = new Array;
    var answersResult = new Array;
    if (URLactual.href == 'https://haroldmartinezj.com/test/test-de-las-inteligencias/') {
        answersResult = optionButtonListener();
        var nextButton = document.getElementsByClassName('qsm-next');
        nextButton.addEventListener("click", () => {
            addHTML = sendButtonListener(answersResult);
        }, false);
        addHTML = sendButtonListener(answersResult);
        resultSection = document.querySelector("article#post-1820");
        resultSection.insertAdjacentHTML("afterend", addHTML);
    }
});


function sendButtonListener(answersResult) {
    var chainHTML;
    var sendButton = document.getElementsByClassName('qsm-submit-btn');
    if (sendButton != undefined) {
        sendButton.addEventListener("click", () => {
            for (let i = 0; i < answersResul.length; i++) {
                chainHTML = chainHTML + answersResult[i];
            }
        }, false);
        return chainHTML;
    }
}

function optionButtonListener() {
    var resultQ1 = new Array;
    var optionButton = document.querySelectorAll('input[type="radio"]');
    optionButton.forEach(element => {
        element.addEventListener("click", () => {
            //var q1 = document.getElementsByClassName('question-section-id-2');
            resultQ1[0] = checkQ1(optionButton);
            /*********************************************************************************** */
            resultQ1[1] = checkQ2(optionButton);
            /*********************************************************************************** */
            resultQ1[2] = checkQ3(optionButton);
            /*********************************************************************************** */
            resultQ1[3] = checkQ4(optionButton);
            /*********************************************************************************** */
            resultQ1[4] = checkQ5(optionButton);
        }, false);
    });
    return resultQ1;
}

function checkQ1(optionButton) {
    if (optionButton[0].checked) {
        answersResult = '<div class="pregunta1 respuestaA">' +
            '<h2>Pregunta 1 - Respuesta A</h2>' +
            '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Espont??nea es precoz:</h3>' +
            '<p>Usted tiene claro cu??les son sus destrezas innatas; ahora la tarea es mantener cultivadas esas mismas capacidades con base en una optimizaci??n constante que conlleve a un pulimiento de su nivel reconocido. Es por esto importante no dejar de actualizarse constantemente y estimular el oficio que lo caracteriza por su buen desempe??o.</p>' +
            '</div>';
    } else if (optionButton[1].checked) {
        answersResult = '<div class="pregunta1 respuestaB">' +
            '<h2>Pregunta 1 - Respuesta B</h2>' +
            '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Espont??nea es perceptiva:</h3>' +
            '<p>Usted tiene una gran idea de cu??les son sus destrezas y conoce muy bien hasta d??nde puede llegar en su nivel de trabajo, pero a??n hay opciones que no ha experimentado. Se recomienda darle paso a actividades nuevas que le ampl??en a??n m??s su portafolio de posibilidades a tratar</p>' +
            '</div>';
    } else if (optionButton[2].checked) {
        answersResult = '<div class="pregunta1 respuestaC">' +
            '<h2>Pregunta 1 - Respuesta C</h2>' +
            '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Espont??nea es media:</h3>' +
            '<p>Es de reconocer que usted tiene alg??n conocimiento de s?? mismo, pero le falta mucho por investigar sobre la multiplicidad de capacidades que le restan por descubrir. Estos avances se dar??n de forma acelerada de acuerdo al ritmo que le exija el nivel de su ??rea de trabajo. Ning??n esfuerzo debe ser dejado de lado, si se trata de conocer m??s sobre los resultados de sus insospechadas destrezas.</p>' +
            '</div>';
    } else if (optionButton[3].checked) {
        answersResult = '<div class="pregunta1 respuestaD">' +
            '<h2>Pregunta 1 - Respuesta D</h2>' +
            '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Espont??nea es adaptativa:</h3>' +
            '<p>Usted est?? en la etapa de conocimiento sobre s?? mismo y no identifica con claridad sus propias capacidades. No es recomendable detenerse ante el mundo de posibilidades que tiene por delante y no debe dejar atr??s la visi??n que lo lleve a seguir experimentando ni dejar de poner a prueba sus resultados en una gran variedad de materias que a??n est??n por venir a su vida.</p>' +
            '</div>';
    } else if (optionButton[4].checked) {
        answersResult = '<div class="pregunta1 respuestaE">' +
            '<h2>Pregunta 1 - Respuesta E</h2>' +
            '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Espont??nea es desconocida:</h3>' +
            '<p>Usted no conoce sus capacidades reales y posiblemente se pregunte si la tarea que est?? realizando es la adecuada para desarrollarlas. Tiene un mundo por delante, para esto necesita enfrentar con gran detenimiento una a una cada experiencia de vida potencializando resultados y descartando posibilidades.</p>' +
            '</div>';
    }
    return answersResult;
}

function checkQ2(optionButton) {
    if (optionButton[6].checked) {
        answersResult = '<div class="pregunta2 respuestaA">' +
            '<h2>Pregunta 2 - Respuesta A</h2>' +
            '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Instintiva es precoz:</h3>' +
            '<p>Usted es una persona ??gil y vivaz. No se detiene en detalles, sino que obra de acuerdo a su palpitaci??n. Esa perspicacia lo lleva a dar la impresi??n de conocer la mayor??a de temas. Es importante encontrar trabajos o proyectos que le demanden m??s capacidad de reacci??n que de an??lisis, ya que estar?? llamado a destacarse en el campo de la practicidad como su f??rmula para el ??xito.</p>' +
            '</div>';
    } else if (optionButton[7].checked) {
        answersResult = '<div class="pregunta2 respuestaB">' +
            '<h2>Pregunta 2 - Respuesta B</h2>' +
            '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Instintiva es perceptiva:</h3>' +
            '<p>Usted es una persona oportuna y sabe manejar los ambientes de acuerdo a la sensaci??n que experimenta en los lugares que visita o donde desarrolle sus actividades diarias. Esto lo lleva a tener que ser precavido, antes de pensar que ya tiene aprendido lo que se le ha encomendado. Se recomienda implementar su preparaci??n te??rica antes de afrontar cualquier trabajo que implique tensi??n y estr??s.</p>' +
            '</div>';
    } else if (optionButton[8].checked) {
        answersResult = '<div class="pregunta2 respuestaC">' +
            '<h2>Pregunta 2 - Respuesta C</h2>' +
            '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Instintiva es media:</h3>' +
            '<p>Usted tiene algunas acciones improvisadas que le traen positividad y le permiten un conocimiento de s?? mismo, pero no como para saber si sus reacciones en momentos dif??ciles son las m??s apropiadas. El ejercicio de dar una respuesta r??pida y bien dada, tanto en lo deportivo como en lo intelectual u ocasional, est?? en veremos mientras no haya una pre-concepci??n. Las improvisaciones no lo deben asustar si de estar preparado se trata.</p>' +
            '</div>';
    } else if (optionButton[9].checked) {
        answersResult = '<div class="pregunta2 respuestaD">' +
            '<h2>Pregunta 2 - Respuesta D</h2>' +
            '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Instintiva es adaptativa:</h3>' +
            '<p>Usted est?? en la etapa de adaptarse a s?? mismo y le teme a sus propias reacciones. No debe detenerse en la visi??n de auto examinarse para conocer si su instinto mesurado debe estar bajo presi??n en su labor diaria. En este punto, las destrezas podr??an convertirse en sus verdaderas enemigas. El enfrentar los cambios s??bitos es una tarea que a??n est?? por superar, la cual se lograr?? bas??ndose con ejercitaci??n intensa, si se quiere volver un aliado para sus metas.</p>' +
            '</div>';
    } else if (optionButton[10].checked) {
        answersResult = '<div class="pregunta2 respuestaE">' +
            '<h2>Pregunta 2 - Respuesta E</h2>' +
            '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Instintiva es desconocida:</h3>' +
            '<p>Usted no se tiene confianza cuando se enfrenta a lo desconocido o inesperado. Lo s??bito desubica sus planes y prefiere tener la completa organizaci??n que lo lleve a enfrentar los imprevistos. Necesita prepararse con dedicaci??n para evitar las sorpresas de los altibajos por venir. Recomenzar es una tarea obligatoria hasta que encuentre el momento c??modo para fundar algo de forma cierta.</p>' +
            '</div>';
    };
    return answersResult;
}

function checkQ3(optionButton) {
    if (optionButton[12].checked) {
        answersResult = '<div class="pregunta3 respuestaA">' +
            '<h2>Pregunta 3 - Respuesta A</h2>' +
            '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Coordinada es Precoz:</h3>' +
            '<p>Esto indica que usted es una persona anal??tica, l??gica y propositiva. Se detiene en caracterizaciones espec??ficas y necesita confirmar sus palpitaciones. Esa actitud met??dica que lleva en s??, lo invita a evaluar constantemente sus conocimientos. Es importante encontrar trabajos o proyectos que requieran de exigencia puntual, ya que su posici??n cerebral lo lleva a enfrentar retos de delicada precisi??n conceptual.</p>' +
            '</div>';
    } else if (optionButton[13].checked) {
        answersResult = '<div class="pregunta3 respuestaB">' +
            '<h2>Pregunta 3 - Respuesta B</h2>' +
            '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Coordinada es participativa:</h3>' +
            '<p>Eso indica que usted cuenta con las suficientes destrezas como para explicar lo aprendido. Puede ser un gran profesor o representar un producto determinado por su capacidad de observaci??n y de llevar lo aprendido a otros. Se recomienda seguir haciendo pr??cticas aleatorias en nuevas disciplinas sin dejar de auto examinarse constantemente para captar un mayor aprendizaje sobre la evoluci??n que le puede traer lo aprendido.</p>' +
            '</div>';
    } else if (optionButton[14].checked) {
        answersResult = '<div class="pregunta3 respuestaC">' +
            '<h2>Pregunta 3 - Respuesta C</h2>' +
            '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Coordinada es media:</h3>' +
            '<p>Eso indica que usted tiene alg??n conocimiento de s?? mismo, pero le falta mucho por investigar sobre sus cualidades natas. Esto va igual para su nivel intelectual, al enfrentar su carrera para detectar si el ??rea en la que se desarrolla ha sido bien escogida. Ning??n esfuerzo debe ser dejado de lado, si se trata de conocer m??s sobre los resultados de sus insospechadas destrezas.</p>' +
            '</div>';
    } else if (optionButton[15].checked) {
        answersResult = '    <div class="pregunta3 respuestaD">' +
            '<h2>Pregunta 3 - Respuesta D</h2>' +
            '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Coordinada es adaptativa:</h3>' +
            '<p>Eso indica que usted prefiere trabajar en lo que ya est?? previsto y piensa que es m??s ??til organizar algo, que ponerlo a prueba o llevarlo a cabo para no tener que pensar en una planeaci??n previa. Su ??xito radica en encontrar la comunicaci??n adecuada, a??n sin la responsabilidad de un ??rea en particular.</p>' +
            '</div>';
    } else if (optionButton[16].checked) {
        answersResult = '<div class="pregunta3 respuestaE">' +
            '<h2>Pregunta 3 - Respuesta E</h2>'
        '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Coordinada es desconocida:</h3>' +
        '<p>Eso indica que usted est?? en el plano de ejercer labores operativas y manuales, y de alguna manera lo que tenga que ver con el oficio hacia lo log??stico, pues esa destreza en lo experimental es importante si se dedica a estar pendiente del producto final o al ??rea reparativa. Usted es de por s?? el personaje ??til para solucionar lo que en la vida ocasional siempre se presente.</p>' +
        '</div>';
    };
    return answersResult;
}

function checkQ4(optionButton) {
    if (optionButton[18].checked) {
        answersResult = '<div class="pregunta4 respuestaA">' +
            '<h2>Pregunta 4 - Respuesta A</h2>' +
            '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Memor??stica es precoz:</h3>' +
            '<p>Aqu?? vemos que usted mantiene a flor de piel los detalles de lo que vive diariamente. Es h??bil para enfrentar retos de aprendizaje veloz, lo que lo hace dar la impresi??n de ser intelectual. Es importante encontrar trabajos o proyectos que requieran capacidad de retenci??n creativa como la actuaci??n, la historia, el derecho, el script cinematogr??fico o la medicina, ya que usted est?? llamado a destacarse por ser constantemente consultado, siendo esta una de las claves de su ??xito y lo que lo lleva a destacarse ante los dem??s.</p>' +
            '</div>';
    } else if (optionButton[19].checked) {
        answersResult = '<div class="pregunta4 respuestaB">' +
            '<h2>Pregunta 4 - Respuesta B</h2>' +
            '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Memor??stica es participativa:</h3>' +
            '<p>Aqu?? vemos que usted es una persona pr??ctica que se tiene confianza para recordar hechos importantes y logra cometidos cuando se dedica a hacer un an??lisis juicioso o una cr??tica mordaz. Sin embargo, se recomienda no atenerse siempre a su retentiva, sino que se puede ayudar con el cultivo de la percepci??n de la l??gica en los criterios sobre los dem??s, pero sin descartar el auto examen constante que le servir?? para captar los resultados deseados.</p>' +
            '</div>';
    } else if (optionButton[20].checked) {
        answersResult = '<div class="pregunta4 respuestaC">' +
            '<h2>Pregunta 4 - Respuesta C</h2>' +
            '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Memor??stica es media:</h3>' +
            '<p>Aqu?? vemos que usted se ubica en la mitad del rango entre saber y entender. Esta caracter??stica estar?? siempre en la complicaci??n de olvidar o mantener confundida su propia l??gica. En este caso lo apetecible es no dejar cabo suelto, pero en ning??n momento debe confiar en la memoria totalmente. Lo comprensible ayuda a memorizar y la retenci??n de datos colabora con la recordaci??n. Ning??n esfuerzo ser?? en vano si se trata de mejorar lo vivido en el pasado como un ejemplo para el presente.</p>' +
            '</div>';
    } else if (optionButton[21].checked) {
        answersResult = '<div class="pregunta4 respuestaD">' +
            '<h2>Pregunta 4 - Respuesta D</h2>' +
            '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Memor??stica es adaptativa:</h3>' +
            '<p>Aqu?? vemos que usted reconoce que tiene gran dificultad para emprender oficios que le exijan una adaptabilidad veloz, alej??ndolo de materias que dependan de conocimientos t??cnicos en general. Esto le resta seguridad tambi??n en ocasiones, cuando se trata de mantener a flor de piel una terminolog??a especializada muy extensa. Se recomienda no dejar que esto avance por inacci??n, siendo ??til acompa??arse de ayudas de constantes recordaciones pr??cticas para que esto no permita que se afecte su motivaci??n profesional.</p>' +
            '</div>';
    } else if (optionButton[22].checked) {
        answersResult = '<div class="pregunta4 respuestaE">' +
            '<h2>Pregunta 4 - Respuesta E</h2>' +
            '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Memor??stica es desconocida:</h3>' +
            '<p>Aqu?? vemos que usted definitivamente le da el valor de su aprendizaje al entender sobre el retener. En estos casos se puede pensar que no le conviene confiar en su improvisaci??n sobre temas espec??ficos, pero s?? es un buen camino tomarle el gusto a la erudiciones espont??neas. La comprensi??n ser?? su compa????a y es la que permanecer?? para ser sacada a flote en cualquier momento.</p>' +
            '</div>';
    };
    return answersResult;
}

function checkQ5(optionButton) {
    if (optionButton[24].checked) {
        answersResult = '<div class="pregunta5 respuestaA">' +
            '<h2>Pregunta 5 - Respuesta A</h2>' +
            '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Emotiva es precoz:</h3>' +
            '<p>En definitiva, usted es una persona que sabe lo que quiere y para d??nde va. El no ser dubitativo en sus gustos lo mantiene sin p??rdida de tiempo enfocando acertadamente sus predilecciones. Esas decisiones firmes que pueda tomar, lo llevan por caminos adecuados para encontrar la mayor??a de actividades y tem??ticas apropiadas. Es importante dejarse seducir por su intenci??n natural y as?? educar los talentos propios como la gu??a que lo llevar?? m??s all?? del saber qu?? lo alegra y qu?? lo entristece.</p>' +
            '</div>';
    } else if (optionButton[25].checked) {
        answersResult = '<div class="pregunta5 respuestaB">' +
            '<h2>Pregunta 5 - Respuesta B</h2>' +
            '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Emotiva es participativa:</h3>' +
            '<p>En definitiva, usted tiene una gran idea de cu??les son sus gustos, pero a??n hay opciones que no ha experimentado que le pueden tambi??n ser atractivas. Aunque esta confusi??n sea m??nima, trae dudas al tomar decisiones. Se recomienda seguir auto-examin??ndose emocionalmente para detectar con mayor precisi??n la supremac??a de cada predilecci??n a la hora de escoger un quehacer.</p>' +
            '</div>';
    } else if (optionButton[26].checked) {
        answersResult = '<div class="pregunta5 respuestaC">' +
            '<h2>Pregunta 5 - Respuesta C</h2>' +
            '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Emotiva es media:</h3>' +
            '<p>En definitiva, usted enfrenta dudas al identificar la continuidad en el oficio al que se dedica; esto le trae sin sabores al confiarse en un determinado atractivo hacia algo cotidiano. Lo que podr??a ser llamativo se busca sin creer qu?? es lo que le hace da??o o influye en su calidez habitual. Si pretende ser consecuente, diligente, talentoso y sobresaliente, lo notaremos evaluando si las tareas realizadas fueron terminadas a buen ritmo.</p>' +
            '</div>';
    } else if (optionButton[27].checked) {
        answersResult = '<div class="pregunta5 respuestaD">' +
            '<h2>Pregunta 5 - Respuesta D</h2>' +
            '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Emotiva es adaptativa:</h3>'
        '<p>En definitiva, usted tiene inconvenientes para manejar su emotividad. Lo que decide est?? en el nivel de adaptarse a un ambiente y esto le trae indecisi??n e invitaci??n al arrepentimiento habitual. De alguna manera se desactiva frente a cualquier sin sabor y pone a prueba sus escogencias que encontrar?? ins??pidas. Aunque no descarta renunciar sin importar el grado de avance que lleve en una carrera o proyecto, un reto grande es hacer que se termine lo encomendado y no dejar de estimular el llegar siempre a la meta.</p>'
        '</div>';
    } else if (optionButton[28].checked) {
        answersResult = '<div class="pregunta5 respuestaE">' +
            '<h2>Pregunta 5 - Respuesta E</h2>' +
            '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Emotiva es desconocida:</h3>' +
            '<p>En definitiva, usted no se gu??a por sus gustos, sino por sus cualidades. El triunfo y el tener un resultado alcanzado le es suficiente para retomar diariamente su quehacer planeado. La frialdad al escoger su oficio lo hace emprendedor y h??bil para desempe??arse en multitareas. Posiblemente realice trabajos de manera experimental, y de esta manera va a necesitar enfrentar una a una cada liberaci??n potencial, encontrando el resultado esperado de acuerdo a cada pr??ctica laboral.</p>' +
            '</div>';
    };
    return answersResult;
}