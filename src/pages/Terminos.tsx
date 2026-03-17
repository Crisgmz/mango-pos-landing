import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { legalMeta } from "@/content/legal";

const Terminos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-14 md:py-18 bg-secondary/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-body font-medium text-success uppercase tracking-wider">Términos y Condiciones</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-bold text-foreground leading-tight">Términos y Condiciones de Uso</h1>
            <div className="mt-5 space-y-1 text-sm font-body text-muted-foreground">
              <p><strong>Fecha de entrada en vigor:</strong> {legalMeta.termsEffectiveDate}</p>
              <p><strong>Última actualización:</strong> {legalMeta.termsUpdatedAt}</p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral max-w-none">
            <p><strong>Borrador inicial para revisión interna.</strong> Basado en la estructura general observada en documentos públicos de Toast, pero redactado y adaptado para MangoPOS. Este texto debe ser revisado por asesoría legal antes de publicarse.</p>
            <h2>1. Aceptación de los términos</h2>
            <p>Estos Términos y Condiciones regulan el acceso y uso del sitio web, software, plataforma, módulos, aplicaciones, interfaces, servicios, integraciones y funcionalidades ofrecidos por MangoPOS.</p>
            <p>Al acceder, navegar, registrarse, contratar o usar MangoPOS, usted acepta estos Términos. Si no está de acuerdo, no debe usar la plataforma.</p>
            <h2>2. Quién puede usar MangoPOS</h2>
            <ul>
              <li>Tener capacidad legal suficiente para contratar</li>
              <li>Proporcionar información veraz y actualizada</li>
              <li>Usar la plataforma solo para fines comerciales y operativos legítimos</li>
              <li>Cumplir estos Términos y las leyes aplicables</li>
            </ul>
            <h2>3. Descripción del servicio</h2>
            <p>MangoPOS es una plataforma orientada a restaurantes y negocios de comida que puede incluir, entre otros, módulos de punto de venta, mesas y zonas, cocina y comandas, caja y pagos, productos, menús y combos, usuarios, roles y permisos, configuración fiscal, reportes, inventario y kardex, sucursales, fidelización, ventas a crédito e integraciones.</p>
            <p>La disponibilidad real de cada función dependerá del plan contratado, del alcance comercial acordado y de la configuración activa de cada cliente.</p>
            <h2>4. Registro, cuentas y accesos</h2>
            <p>El cliente es responsable de custodiar usuarios, contraseñas y accesos, definir permisos por rol, asegurar que solo personal autorizado utilice la plataforma, revisar la información cargada por sus usuarios y notificar cualquier uso no autorizado o incidente de seguridad.</p>
            <h2>5. Responsabilidades del cliente</h2>
            <ul>
              <li>La operación diaria de su negocio</li>
              <li>La exactitud de productos, precios, impuestos, recetas, mesas, usuarios y configuraciones</li>
              <li>La validez de la información fiscal o comercial que cargue</li>
              <li>La legalidad de las ventas, promociones, comprobantes y procesos ejecutados a través del sistema</li>
              <li>El uso que sus empleados, contratistas o administradores hagan de MangoPOS</li>
              <li>Revisar su operación antes de salir a producción</li>
            </ul>
            <h2>6. Planes, cotizaciones y pagos</h2>
            <p>Los precios, planes, límites, módulos incluidos, implementación, soporte y cualquier servicio adicional se regirán por la propuesta comercial, el plan publicado por MangoPOS, la orden de servicio o el acuerdo particular con el cliente.</p>
            <h2>7. Uso aceptable</h2>
            <ul>
              <li>Violar leyes, reglamentos o derechos de terceros</li>
              <li>Intentar acceder sin autorización a sistemas, cuentas o datos</li>
              <li>Interferir con la seguridad, integridad o disponibilidad del servicio</li>
              <li>Introducir malware, scripts maliciosos o código dañino</li>
              <li>Realizar fraude, suplantación o manipulación indebida de transacciones</li>
              <li>Copiar, descompilar, replicar, revender o explotar MangoPOS fuera del alcance autorizado</li>
              <li>Usar el sistema de forma que afecte injustificadamente a otros clientes o a la infraestructura</li>
            </ul>
            <h2>8. Datos del cliente y contenido cargado</h2>
            <p>El cliente conserva sus derechos sobre la información que carga o procesa en la plataforma, sujeto a los permisos necesarios para que MangoPOS pueda prestar el servicio.</p>
            <h2>9. Privacidad</h2>
            <p>El uso de información personal se rige adicionalmente por la Política de Privacidad de MangoPOS.</p>
            <h2>10. Servicios de terceros</h2>
            <p>MangoPOS puede integrarse con terceros, incluyendo pasarelas de pago, servicios fiscales, impresoras, mensajería, analítica u otros proveedores. El uso de esos servicios puede estar sujeto a términos propios del tercero.</p>
            <h2>11. Propiedad intelectual</h2>
            <p>MangoPOS y todo su software, diseño, interfaz, documentación, marcas, contenido, logotipos, estructura, mejoras y funcionalidades son propiedad de MangoPOS o de sus licenciantes. Solo se concede un derecho limitado, revocable, no exclusivo e intransferible de uso.</p>
            <h2>12. Feedback</h2>
            <p>Si el cliente propone ideas, observaciones, sugerencias o mejoras sobre MangoPOS, podremos usar ese feedback para mejorar el servicio sin obligación de compensación, salvo acuerdo escrito distinto.</p>
            <h2>13. Disponibilidad, cambios y mantenimiento</h2>
            <p>MangoPOS puede actualizar, modificar, mejorar, reemplazar o descontinuar partes del servicio por razones técnicas, operativas, comerciales, legales o de seguridad. Aunque procuramos continuidad razonable, no garantizamos operación ininterrumpida o libre de errores.</p>
            <h2>14. Suspensión y terminación</h2>
            <p>MangoPOS puede suspender o terminar el acceso total o parcial al servicio si existe incumplimiento material de estos Términos, falta de pago, fraude, uso abusivo, riesgos de seguridad o requerimiento legal.</p>
            <h2>15. Exclusión de garantías</h2>
            <p>En la máxima medida permitida por la ley, MangoPOS se ofrece "tal cual" y "según disponibilidad".</p>
            <h2>16. Limitación de responsabilidad</h2>
            <p>En la máxima medida permitida por la ley, MangoPOS no será responsable por daños indirectos, incidentales, especiales, ejemplares, punitivos o consecuenciales, ni por pérdida de ingresos, utilidades, datos, reputación o continuidad comercial derivada del uso o imposibilidad de uso del servicio.</p>
            <h2>17. Indemnización</h2>
            <p>El cliente acepta defender, indemnizar y mantener indemne a MangoPOS, sus afiliadas, directores, ejecutivos, empleados y proveedores frente a reclamaciones, daños, costos y gastos derivados de uso indebido del servicio o incumplimiento de estos Términos.</p>
            <h2>18. Ley aplicable y jurisdicción</h2>
            <p>Salvo que un contrato específico disponga otra cosa, estos Términos se regirán por las leyes de la República Dominicana. Toda controversia será conocida por los tribunales competentes de la República Dominicana, salvo acuerdo escrito distinto.</p>
            <h2>19. Cambios a estos términos</h2>
            <p>MangoPOS puede actualizar estos Términos para reflejar cambios en el servicio, el negocio o la normativa aplicable.</p>
            <h2>20. Contacto</h2>
            <p><strong>MangoPOS</strong><br />Atención: Área Legal / Comercial<br />Correo: {legalMeta.legalEmail}<br />Teléfono: {legalMeta.phone}<br />Dirección: {legalMeta.address}</p>
            <h2>21. Nota final</h2>
            <p>Antes de publicar este documento recomendamos validar nombre legal exacto de la entidad, política comercial y de facturación real, implementación, soporte, cancelaciones, limitación de responsabilidad adecuada, jurisdicción y obligaciones frente a clientes finales, pagos, fiscalidad y protección al consumidor.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terminos;
