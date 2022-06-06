setTimeout(() => {
    var URLactual = window.location;
    var answersResult = new Array;
    if (URLactual.href == 'https://haroldmartinezj.com/test/test-de-las-inteligencias/') {
        var optionButton = document.querySelectorAll('input[type="radio"]');
        optionButton.forEach(element => {
            element.addEventListener("click", () => {
                if (optionButton[0].checked) {
                    answersResult[0] = '<div class="pregunta1 respuestaA">' +
                        '<h2>Pregunta 1 - Respuesta A</h2>' +
                        '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Espontánea es precoz:</h3>' +
                        '<p>Usted tiene claro cuáles son sus destrezas innatas; ahora la tarea es mantener cultivadas esas mismas capacidades con base en una optimización constante que conlleve a un pulimiento de su nivel reconocido. Es por esto importante no dejar de actualizarse constantemente y estimular el oficio que lo caracteriza por su buen desempeño.</p>' +
                        '</div>';
                } else if (optionButton[1].checked) {
                    answersResult[0] = '<div class="pregunta1 respuestaB">' +
                        '<h2>Pregunta 1 - Respuesta B</h2>' +
                        '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Espontánea es perceptiva:</h3>' +
                        '<p>Usted tiene una gran idea de cuáles son sus destrezas y conoce muy bien hasta dónde puede llegar en su nivel de trabajo, pero aún hay opciones que no ha experimentado. Se recomienda darle paso a actividades nuevas que le amplíen aún más su portafolio de posibilidades a tratar</p>' +
                        '</div>';
                } else if (optionButton[2].checked) {
                    answersResult[0] = '<div class="pregunta1 respuestaC">' +
                        '<h2>Pregunta 1 - Respuesta C</h2>' +
                        '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Espontánea es media:</h3>' +
                        '<p>Es de reconocer que usted tiene algún conocimiento de sí mismo, pero le falta mucho por investigar sobre la multiplicidad de capacidades que le restan por descubrir. Estos avances se darán de forma acelerada de acuerdo al ritmo que le exija el nivel de su área de trabajo. Ningún esfuerzo debe ser dejado de lado, si se trata de conocer más sobre los resultados de sus insospechadas destrezas.</p>' +
                        '</div>';
                } else if (optionButton[3].checked) {
                    answersResult[0] = '<div class="pregunta1 respuestaD">' +
                        '<h2>Pregunta 1 - Respuesta D</h2>' +
                        '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Espontánea es adaptativa:</h3>' +
                        '<p>Usted está en la etapa de conocimiento sobre sí mismo y no identifica con claridad sus propias capacidades. No es recomendable detenerse ante el mundo de posibilidades que tiene por delante y no debe dejar atrás la visión que lo lleve a seguir experimentando ni dejar de poner a prueba sus resultados en una gran variedad de materias que aún están por venir a su vida.</p>' +
                        '</div>';
                } else if (optionButton[4].checked) {
                    answersResult[0] = '<div class="pregunta1 respuestaE">' +
                        '<h2>Pregunta 1 - Respuesta E</h2>' +
                        '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Espontánea es desconocida:</h3>' +
                        '<p>Usted no conoce sus capacidades reales y posiblemente se pregunte si la tarea que esté realizando es la adecuada para desarrollarlas. Tiene un mundo por delante, para esto necesita enfrentar con gran detenimiento una a una cada experiencia de vida potencializando resultados y descartando posibilidades.</p>' +
                        '</div>';
                }
                /*********************************************************************************** */
                if (optionButton[6].checked) {
                    answersResult[1] = '<div class="pregunta2 respuestaA">' +
                        '<h2>Pregunta 2 - Respuesta A</h2>' +
                        '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Instintiva es precoz:</h3>' +
                        '<p>Usted es una persona ágil y vivaz. No se detiene en detalles, sino que obra de acuerdo a su palpitación. Esa perspicacia lo lleva a dar la impresión de conocer la mayoría de temas. Es importante encontrar trabajos o proyectos que le demanden más capacidad de reacción que de análisis, ya que estará llamado a destacarse en el campo de la practicidad como su fórmula para el éxito.</p>' +
                        '</div>';
                } else if (optionButton[7].checked) {
                    answersResult[1] = '<div class="pregunta2 respuestaB">' +
                        '<h2>Pregunta 2 - Respuesta B</h2>' +
                        '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Instintiva es perceptiva:</h3>' +
                        '<p>Usted es una persona oportuna y sabe manejar los ambientes de acuerdo a la sensación que experimenta en los lugares que visita o donde desarrolle sus actividades diarias. Esto lo lleva a tener que ser precavido, antes de pensar que ya tiene aprendido lo que se le ha encomendado. Se recomienda implementar su preparación teórica antes de afrontar cualquier trabajo que implique tensión y estrés.</p>' +
                        '</div>';
                } else if (optionButton[8].checked) {
                    answersResult[1] = '<div class="pregunta2 respuestaC">' +
                        '<h2>Pregunta 2 - Respuesta C</h2>' +
                        '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Instintiva es media:</h3>' +
                        '<p>Usted tiene algunas acciones improvisadas que le traen positividad y le permiten un conocimiento de sí mismo, pero no como para saber si sus reacciones en momentos difíciles son las más apropiadas. El ejercicio de dar una respuesta rápida y bien dada, tanto en lo deportivo como en lo intelectual u ocasional, está en veremos mientras no haya una pre-concepción. Las improvisaciones no lo deben asustar si de estar preparado se trata.</p>' +
                        '</div>';
                } else if (optionButton[9].checked) {
                    answersResult[1] = '<div class="pregunta2 respuestaD">' +
                        '<h2>Pregunta 2 - Respuesta D</h2>' +
                        '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Instintiva es adaptativa:</h3>' +
                        '<p>Usted está en la etapa de adaptarse a sí mismo y le teme a sus propias reacciones. No debe detenerse en la visión de auto examinarse para conocer si su instinto mesurado debe estar bajo presión en su labor diaria. En este punto, las destrezas podrían convertirse en sus verdaderas enemigas. El enfrentar los cambios súbitos es una tarea que aún está por superar, la cual se logrará basándose con ejercitación intensa, si se quiere volver un aliado para sus metas.</p>' +
                        '</div>';
                } else if (optionButton[10].checked) {
                    answersResult[1] = '<div class="pregunta2 respuestaE">' +
                        '<h2>Pregunta 2 - Respuesta E</h2>' +
                        '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Instintiva es desconocida:</h3>' +
                        '<p>Usted no se tiene confianza cuando se enfrenta a lo desconocido o inesperado. Lo súbito desubica sus planes y prefiere tener la completa organización que lo lleve a enfrentar los imprevistos. Necesita prepararse con dedicación para evitar las sorpresas de los altibajos por venir. Recomenzar es una tarea obligatoria hasta que encuentre el momento cómodo para fundar algo de forma cierta.</p>' +
                        '</div>';
                };
                /*********************************************************************************** */
                if (optionButton[12].checked) {
                    answersResult[2] = '<div class="pregunta3 respuestaA">' +
                        '<h2>Pregunta 3 - Respuesta A</h2>' +
                        '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Coordinada es Precoz:</h3>' +
                        '<p>Esto indica que usted es una persona analítica, lógica y propositiva. Se detiene en caracterizaciones específicas y necesita confirmar sus palpitaciones. Esa actitud metódica que lleva en sí, lo invita a evaluar constantemente sus conocimientos. Es importante encontrar trabajos o proyectos que requieran de exigencia puntual, ya que su posición cerebral lo lleva a enfrentar retos de delicada precisión conceptual.</p>' +
                        '</div>';
                } else if (optionButton[13].checked) {
                    answersResult[2] = '<div class="pregunta3 respuestaB">' +
                        '<h2>Pregunta 3 - Respuesta B</h2>' +
                        '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Coordinada es participativa:</h3>' +
                        '<p>Eso indica que usted cuenta con las suficientes destrezas como para explicar lo aprendido. Puede ser un gran profesor o representar un producto determinado por su capacidad de observación y de llevar lo aprendido a otros. Se recomienda seguir haciendo prácticas aleatorias en nuevas disciplinas sin dejar de auto examinarse constantemente para captar un mayor aprendizaje sobre la evolución que le puede traer lo aprendido.</p>' +
                        '</div>';
                } else if (optionButton[14].checked) {
                    answersResult[2] = '<div class="pregunta3 respuestaC">' +
                        '<h2>Pregunta 3 - Respuesta C</h2>' +
                        '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Coordinada es media:</h3>' +
                        '<p>Eso indica que usted tiene algún conocimiento de sí mismo, pero le falta mucho por investigar sobre sus cualidades natas. Esto va igual para su nivel intelectual, al enfrentar su carrera para detectar si el área en la que se desarrolla ha sido bien escogida. Ningún esfuerzo debe ser dejado de lado, si se trata de conocer más sobre los resultados de sus insospechadas destrezas.</p>' +
                        '</div>';
                } else if (optionButton[15].checked) {
                    answersResult[2] = '    <div class="pregunta3 respuestaD">' +
                        '<h2>Pregunta 3 - Respuesta D</h2>' +
                        '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Coordinada es adaptativa:</h3>' +
                        '<p>Eso indica que usted prefiere trabajar en lo que ya esté previsto y piensa que es más útil organizar algo, que ponerlo a prueba o llevarlo a cabo para no tener que pensar en una planeación previa. Su éxito radica en encontrar la comunicación adecuada, aún sin la responsabilidad de un área en particular.</p>' +
                        '</div>';
                } else if (optionButton[16].checked) {
                    answersResult[2] = '<div class="pregunta3 respuestaE">' +
                        '<h2>Pregunta 3 - Respuesta E</h2>'
                    '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Coordinada es desconocida:</h3>' +
                    '<p>Eso indica que usted está en el plano de ejercer labores operativas y manuales, y de alguna manera lo que tenga que ver con el oficio hacia lo logístico, pues esa destreza en lo experimental es importante si se dedica a estar pendiente del producto final o al área reparativa. Usted es de por sí el personaje útil para solucionar lo que en la vida ocasional siempre se presente.</p>' +
                    '</div>';
                };
                /*********************************************************************************** */
                if (optionButton[18].checked) {
                    answersResult[3] = '<div class="pregunta4 respuestaA">' +
                        '<h2>Pregunta 4 - Respuesta A</h2>' +
                        '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Memorística es precoz:</h3>' +
                        '<p>Aquí vemos que usted mantiene a flor de piel los detalles de lo que vive diariamente. Es hábil para enfrentar retos de aprendizaje veloz, lo que lo hace dar la impresión de ser intelectual. Es importante encontrar trabajos o proyectos que requieran capacidad de retención creativa como la actuación, la historia, el derecho, el script cinematográfico o la medicina, ya que usted está llamado a destacarse por ser constantemente consultado, siendo esta una de las claves de su éxito y lo que lo lleva a destacarse ante los demás.</p>' +
                        '</div>';
                } else if (optionButton[19].checked) {
                    answersResult[3] = '<div class="pregunta4 respuestaB">' +
                        '<h2>Pregunta 4 - Respuesta B</h2>' +
                        '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Memorística es participativa:</h3>' +
                        '<p>Aquí vemos que usted es una persona práctica que se tiene confianza para recordar hechos importantes y logra cometidos cuando se dedica a hacer un análisis juicioso o una crítica mordaz. Sin embargo, se recomienda no atenerse siempre a su retentiva, sino que se puede ayudar con el cultivo de la percepción de la lógica en los criterios sobre los demás, pero sin descartar el auto examen constante que le servirá para captar los resultados deseados.</p>' +
                        '</div>';
                } else if (optionButton[20].checked) {
                    answersResult[3] = '<div class="pregunta4 respuestaC">' +
                        '<h2>Pregunta 4 - Respuesta C</h2>' +
                        '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Memorística es media:</h3>' +
                        '<p>Aquí vemos que usted se ubica en la mitad del rango entre saber y entender. Esta característica estará siempre en la complicación de olvidar o mantener confundida su propia lógica. En este caso lo apetecible es no dejar cabo suelto, pero en ningún momento debe confiar en la memoria totalmente. Lo comprensible ayuda a memorizar y la retención de datos colabora con la recordación. Ningún esfuerzo será en vano si se trata de mejorar lo vivido en el pasado como un ejemplo para el presente.</p>' +
                        '</div>';
                } else if (optionButton[21].checked) {
                    answersResult[3] = '<div class="pregunta4 respuestaD">' +
                        '<h2>Pregunta 4 - Respuesta D</h2>' +
                        '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Memorística es adaptativa:</h3>' +
                        '<p>Aquí vemos que usted reconoce que tiene gran dificultad para emprender oficios que le exijan una adaptabilidad veloz, alejándolo de materias que dependan de conocimientos técnicos en general. Esto le resta seguridad también en ocasiones, cuando se trata de mantener a flor de piel una terminología especializada muy extensa. Se recomienda no dejar que esto avance por inacción, siendo útil acompañarse de ayudas de constantes recordaciones prácticas para que esto no permita que se afecte su motivación profesional.</p>' +
                        '</div>';
                } else if (optionButton[22].checked) {
                    answersResult[3] = '<div class="pregunta4 respuestaE">' +
                        '<h2>Pregunta 4 - Respuesta E</h2>' +
                        '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Memorística es desconocida:</h3>' +
                        '<p>Aquí vemos que usted definitivamente le da el valor de su aprendizaje al entender sobre el retener. En estos casos se puede pensar que no le conviene confiar en su improvisación sobre temas específicos, pero sí es un buen camino tomarle el gusto a la erudiciones espontáneas. La comprensión será su compañía y es la que permanecerá para ser sacada a flote en cualquier momento.</p>' +
                        '</div>';
                };
                /*********************************************************************************** */
                if (optionButton[24].checked) {
                    answersResult[4] = '<div class="pregunta5 respuestaA">' +
                        '<h2>Pregunta 5 - Respuesta A</h2>' +
                        '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Emotiva es precoz:</h3>' +
                        '<p>En definitiva, usted es una persona que sabe lo que quiere y para dónde va. El no ser dubitativo en sus gustos lo mantiene sin pérdida de tiempo enfocando acertadamente sus predilecciones. Esas decisiones firmes que pueda tomar, lo llevan por caminos adecuados para encontrar la mayoría de actividades y temáticas apropiadas. Es importante dejarse seducir por su intención natural y así educar los talentos propios como la guía que lo llevará más allá del saber qué lo alegra y qué lo entristece.</p>' +
                        '</div>';
                } else if (optionButton[25].checked) {
                    answersResult[4] = '<div class="pregunta5 respuestaB">' +
                        '<h2>Pregunta 5 - Respuesta B</h2>' +
                        '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Emotiva es participativa:</h3>' +
                        '<p>En definitiva, usted tiene una gran idea de cuáles son sus gustos, pero aún hay opciones que no ha experimentado que le pueden también ser atractivas. Aunque esta confusión sea mínima, trae dudas al tomar decisiones. Se recomienda seguir auto-examinándose emocionalmente para detectar con mayor precisión la supremacía de cada predilección a la hora de escoger un quehacer.</p>' +
                        '</div>';
                } else if (optionButton[26].checked) {
                    answersResult[4] = '<div class="pregunta5 respuestaC">' +
                        '<h2>Pregunta 5 - Respuesta C</h2>' +
                        '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Emotiva es media:</h3>' +
                        '<p>En definitiva, usted enfrenta dudas al identificar la continuidad en el oficio al que se dedica; esto le trae sin sabores al confiarse en un determinado atractivo hacia algo cotidiano. Lo que podría ser llamativo se busca sin creer qué es lo que le hace daño o influye en su calidez habitual. Si pretende ser consecuente, diligente, talentoso y sobresaliente, lo notaremos evaluando si las tareas realizadas fueron terminadas a buen ritmo.</p>' +
                        '</div>';
                } else if (optionButton[27].checked) {
                    answersResult[4] = '<div class="pregunta5 respuestaD">' +
                        '<h2>Pregunta 5 - Respuesta D</h2>' +
                        '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Emotiva es adaptativa:</h3>'
                    '<p>En definitiva, usted tiene inconvenientes para manejar su emotividad. Lo que decide está en el nivel de adaptarse a un ambiente y esto le trae indecisión e invitación al arrepentimiento habitual. De alguna manera se desactiva frente a cualquier sin sabor y pone a prueba sus escogencias que encontrará insípidas. Aunque no descarta renunciar sin importar el grado de avance que lleve en una carrera o proyecto, un reto grande es hacer que se termine lo encomendado y no dejar de estimular el llegar siempre a la meta.</p>'
                    '</div>';
                } else if (optionButton[28].checked) {
                    answersResult[4] = '<div class="pregunta5 respuestaE">' +
                        '<h2>Pregunta 5 - Respuesta E</h2>' +
                        '<h3 style="text-align: center;font-size: 16px;font-weight: 900;">Su Inteligencia Emotiva es desconocida:</h3>' +
                        '<p>En definitiva, usted no se guía por sus gustos, sino por sus cualidades. El triunfo y el tener un resultado alcanzado le es suficiente para retomar diariamente su quehacer planeado. La frialdad al escoger su oficio lo hace emprendedor y hábil para desempeñarse en multitareas. Posiblemente realice trabajos de manera experimental, y de esta manera va a necesitar enfrentar una a una cada liberación potencial, encontrando el resultado esperado de acuerdo a cada práctica laboral.</p>' +
                        '</div>';
                };

            }, false);
        });
        console.log(answersResult.length);

        var addHTML = '<h2>¡Mira los resultados del Test!</h2>';
        var sendButton = document.getElementsByClassName('qsm-submit-btn');
        sendButton[0].addEventListener("click", () => {
            if (answersResult.length == 5) {
                for (let i = 0; i < answersResult.length; i++) {
                    addHTML = addHTML + answersResult[i];
                }
                resultSection = document.querySelector("article#post-1820");
                resultSection.insertAdjacentHTML("afterend", addHTML);
            }

        }, false);



    }
}, 5000);