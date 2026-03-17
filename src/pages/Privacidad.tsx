import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { legalMeta } from "@/content/legal";

const Privacidad = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-14 md:py-18 bg-secondary/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-body font-medium text-success uppercase tracking-wider">Política de Privacidad</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-bold text-foreground leading-tight">Política de Privacidad de MangoPOS</h1>
            <div className="mt-5 space-y-1 text-sm font-body text-muted-foreground">
              <p><strong>Fecha de entrada en vigor:</strong> {legalMeta.privacyEffectiveDate}</p>
              <p><strong>Última actualización:</strong> {legalMeta.privacyUpdatedAt}</p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral max-w-none">
            <p><strong>Borrador inicial para revisión interna.</strong> Basado en la estructura general observada en documentos públicos de Toast, pero redactado y adaptado para MangoPOS. Este texto debe ser revisado por asesoría legal antes de publicarse.</p>
            <h2>1. Introducción</h2>
            <p>En MangoPOS respetamos la privacidad de nuestros usuarios, clientes comerciales, empleados de nuestros clientes, visitantes del sitio web y demás personas cuyos datos tratamos en relación con nuestros servicios.</p>
            <p>Esta Política de Privacidad explica cómo MangoPOS, sus afiliadas y proveedores autorizados recopilan, usan, almacenan, comparten y protegen información personal cuando una persona visita nuestro sitio web, solicita información comercial, contrata o usa MangoPOS, interactúa con nuestro sistema POS, recibe soporte, implementación o capacitación, o realiza pedidos, pagos o interacciones a través de negocios que operan con MangoPOS.</p>
            <p>Cuando usamos el término <strong>"MangoPOS"</strong>, <strong>"nosotros"</strong>, <strong>"nuestro"</strong> o <strong>"la Plataforma"</strong>, nos referimos a <strong>{legalMeta.companyName}</strong>.</p>
            <h2>2. Alcance</h2>
            <ul>
              <li>Clientes comerciales.</li>
              <li>Usuarios operativos.</li>
              <li>Clientes finales o consumidores.</li>
              <li>Visitantes del sitio web.</li>
              <li>Contactos comerciales y aliados.</li>
            </ul>
            <p>Los negocios que usan MangoPOS son entidades independientes y pueden tener sus propias políticas de privacidad. En determinados casos, MangoPOS actúa como proveedor de tecnología y el negocio cliente sigue siendo responsable principal frente a sus propios consumidores y empleados.</p>
            <h2>3. Información que podemos recopilar</h2>
            <h3>3.1 Información proporcionada directamente</h3>
            <ul>
              <li>Nombre y apellidos</li>
              <li>Nombre comercial y razón social</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Dirección fiscal o comercial</li>
              <li>RNC o información tributaria del negocio</li>
              <li>Cargo o rol dentro del negocio</li>
              <li>Credenciales de acceso</li>
              <li>Datos de facturación y cobro</li>
              <li>Datos entregados en formularios, reuniones, soporte o implementación</li>
            </ul>
            <h3>3.2 Información operativa del negocio</h3>
            <ul>
              <li>Sucursales, cajas, zonas y mesas</li>
              <li>Catálogo de productos, menús, combos y modificadores</li>
              <li>Usuarios, roles, permisos y actividad operativa</li>
              <li>Ventas, devoluciones, pagos, cierres y movimientos de caja</li>
              <li>Datos de cocina, comandas, tiempos y estados de orden</li>
              <li>Configuración fiscal, comprobantes, series NCF o datos equivalentes</li>
              <li>Reportes, inventario, kardex, metas y módulos activados</li>
            </ul>
            <h3>3.3 Información de clientes finales procesada a través de los negocios usuarios</h3>
            <p>Según las funciones activadas por cada comercio, MangoPOS puede procesar datos como nombre del cliente, teléfono o correo, historial de pedidos o compras, información de fidelización, ventas a crédito y datos de facturación necesarios para emitir comprobantes.</p>
            <h3>3.4 Información recopilada automáticamente</h3>
            <ul>
              <li>Dirección IP</li>
              <li>Tipo de navegador y dispositivo</li>
              <li>Sistema operativo</li>
              <li>Identificadores de sesión</li>
              <li>Páginas visitadas</li>
              <li>Fechas y horas de acceso</li>
              <li>Cookies y tecnologías similares</li>
              <li>Registros técnicos, eventos de seguridad y telemetría de uso</li>
            </ul>
            <h3>3.5 Información obtenida de terceros</h3>
            <p>Podemos recibir información de proveedores de pagos, integradores o servicios conectados, herramientas de analítica, proveedores de infraestructura y soporte, referidores o socios comerciales, y fuentes públicas o validaciones regulatorias cuando sea necesario para cumplimiento.</p>
            <h2>4. Cómo usamos la información</h2>
            <ul>
              <li>Prestar, mantener y mejorar MangoPOS</li>
              <li>Configurar cuentas, sucursales, usuarios, permisos y módulos</li>
              <li>Procesar ventas, pagos, reportes y funciones del sistema</li>
              <li>Brindar implementación, soporte, capacitación y seguimiento comercial</li>
              <li>Responder consultas, solicitudes y tickets</li>
              <li>Enviar comunicaciones operativas, técnicas, administrativas o comerciales, cuando la ley lo permita</li>
              <li>Prevenir fraude, abuso, accesos no autorizados o incidentes de seguridad</li>
              <li>Cumplir obligaciones legales, fiscales, regulatorias y contractuales</li>
              <li>Realizar análisis internos, estadísticas, auditorías y mejoras del servicio</li>
            </ul>
            <h2>5. Bases para el tratamiento</h2>
            <ul>
              <li>Ejecución de un contrato o de medidas precontractuales</li>
              <li>Cumplimiento de obligaciones legales</li>
              <li>Interés legítimo de MangoPOS para operar, asegurar y mejorar el servicio</li>
              <li>Consentimiento del titular cuando corresponda</li>
              <li>Protección frente a fraude, abuso o riesgos de seguridad</li>
            </ul>
            <h2>6. Cómo compartimos la información</h2>
            <p>Podemos compartir información con afiliadas, proveedores de infraestructura, hosting, almacenamiento, soporte, analítica, mensajería, correo, seguridad, pasarelas de pago, servicios fiscales, asesores legales o auditores, autoridades competentes y potenciales compradores o sucesores corporativos, cuando corresponda.</p>
            <p>No vendemos información personal en el sentido tradicional de comercializar bases de datos personales como producto.</p>
            <h2>7. Cookies y tecnologías similares</h2>
            <p>MangoPOS puede usar cookies, pixels, almacenamiento local y tecnologías similares para mantener sesiones activas, recordar preferencias, medir tráfico y rendimiento, detectar errores o incidentes, analizar el uso del sitio y del producto, y mejorar navegación, seguridad y experiencia de usuario.</p>
            <h2>8. Retención de la información</h2>
            <p>Conservamos la información durante el tiempo necesario para prestar los servicios contratados, mantener continuidad operativa, cumplir obligaciones fiscales, contables, regulatorias o contractuales, resolver disputas o reclamaciones y proteger nuestros derechos.</p>
            <h2>9. Derechos y opciones del titular</h2>
            <ul>
              <li>Acceder a sus datos personales</li>
              <li>Corregir información inexacta o desactualizada</li>
              <li>Solicitar eliminación cuando proceda</li>
              <li>Oponerse a ciertos tratamientos</li>
              <li>Retirar consentimiento cuando esa sea la base legal</li>
              <li>Solicitar limitación del tratamiento</li>
              <li>Pedir copia de cierta información, cuando aplique</li>
              <li>Gestionar preferencias de comunicaciones comerciales</li>
            </ul>
            <h2>10. Seguridad</h2>
            <p>MangoPOS aplica medidas técnicas, administrativas y organizativas razonables para proteger la información contra acceso no autorizado, alteración, pérdida, destrucción o divulgación indebida.</p>
            <h2>11. Datos de menores</h2>
            <p>MangoPOS no está dirigido a menores de edad y no busca recopilar deliberadamente información personal de menores, salvo que una ley aplicable lo permita y exista una base válida para ello.</p>
            <h2>12. Servicios de terceros</h2>
            <p>La Plataforma puede integrarse con servicios de terceros o contener enlaces a sitios externos. Recomendamos revisar las políticas de privacidad y términos de cualquier servicio externo utilizado junto con MangoPOS.</p>
            <h2>13. Transferencias internacionales</h2>
            <p>Si MangoPOS utiliza proveedores o infraestructura ubicados fuera del país del usuario o del cliente comercial, la información puede ser transferida o alojada en otras jurisdicciones. En esos casos procuraremos implementar medidas razonables para proteger la información conforme a la ley aplicable.</p>
            <h2>14. Cambios a esta política</h2>
            <p>Podemos actualizar esta Política de Privacidad cuando cambien nuestros servicios, nuestras prácticas o la normativa aplicable.</p>
            <h2>15. Contacto</h2>
            <p><strong>MangoPOS</strong><br />Atención: Responsable de Privacidad<br />Correo: {legalMeta.legalEmail}<br />Teléfono: {legalMeta.phone}<br />Dirección: {legalMeta.address}</p>
            <h2>16. Nota final</h2>
            <p>Este documento es un borrador operativo para MangoPOS. Antes de publicarlo recomendamos revisar nombre legal correcto, jurisdicción aplicable, correo y dirección oficiales, uso real de cookies y analítica, flujos de pagos, fidelización y ventas a crédito, roles entre MangoPOS y los comercios clientes, y obligaciones regulatorias locales.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacidad;
