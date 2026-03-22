import LegalPageLayout from "@/components/LegalPageLayout";
import { legalMeta } from "@/content/legal";

const sections = [
  { id: "aceptacion", label: "1. Aceptación" },
  { id: "quien-puede-usar", label: "2. Quién puede usar MangoPOS" },
  { id: "descripcion", label: "3. Descripción del servicio" },
  { id: "cuentas", label: "4. Cuentas y accesos" },
  { id: "responsabilidades", label: "5. Responsabilidades del cliente" },
  { id: "planes", label: "6. Planes, cotizaciones y pagos" },
  { id: "uso-aceptable", label: "7. Uso aceptable" },
  { id: "datos-del-cliente", label: "8. Datos del cliente" },
  { id: "privacidad", label: "9. Privacidad" },
  { id: "terceros", label: "10. Servicios de terceros" },
  { id: "propiedad", label: "11. Propiedad intelectual" },
  { id: "feedback", label: "12. Feedback" },
  { id: "disponibilidad", label: "13. Disponibilidad y mantenimiento" },
  { id: "terminacion", label: "14. Suspensión y terminación" },
  { id: "garantias", label: "15. Exclusión de garantías" },
  { id: "responsabilidad", label: "16. Limitación de responsabilidad" },
  { id: "indemnizacion", label: "17. Indemnización" },
  { id: "jurisdiccion", label: "18. Ley aplicable y jurisdicción" },
  { id: "cambios", label: "19. Cambios" },
  { id: "contacto", label: "20. Contacto" },
  { id: "nota-final", label: "21. Nota final" },
];

const Terminos = () => {
  return (
    <LegalPageLayout
      badge="Términos y Condiciones"
      description="Estas condiciones regulan el acceso, contratación y uso de MangoPOS, incluyendo responsabilidades del cliente, límites del servicio y disposiciones legales aplicables."
      effectiveDate={legalMeta.termsEffectiveDate}
      sectionLinks={sections}
      title="Términos y Condiciones de Uso"
      updatedAt={legalMeta.termsUpdatedAt}
    >
      <div className="legal-note">
        <strong>Nota importante:</strong> Este documento sigue siendo un borrador operativo para revisión interna y debe validarse con asesoría legal antes de su publicación final.
      </div>

      <section id="aceptacion">
        <h2>1. Aceptación de los términos</h2>
        <p>Estos Términos y Condiciones regulan el acceso y uso del sitio web, software, plataforma, módulos, aplicaciones, interfaces, servicios, integraciones y funcionalidades ofrecidos por MangoPOS.</p>
        <p>Al acceder, navegar, registrarse, contratar o usar MangoPOS, usted acepta estos Términos. Si no está de acuerdo, no debe usar la plataforma.</p>
      </section>

      <section id="quien-puede-usar">
        <h2>2. Quién puede usar MangoPOS</h2>
        <ul>
          <li>Tener capacidad legal suficiente para contratar.</li>
          <li>Proporcionar información veraz y actualizada.</li>
          <li>Usar la plataforma solo para fines comerciales y operativos legítimos.</li>
          <li>Cumplir estos Términos y las leyes aplicables.</li>
        </ul>
      </section>

      <section id="descripcion">
        <h2>3. Descripción del servicio</h2>
        <p>MangoPOS es una plataforma orientada a restaurantes y negocios de comida que puede incluir, entre otros, módulos de punto de venta, mesas y zonas, cocina y comandas, caja y pagos, productos, menús y combos, usuarios, roles y permisos, configuración fiscal, reportes, inventario y kardex, sucursales, fidelización, ventas a crédito e integraciones.</p>
        <p>La disponibilidad real de cada función dependerá del plan contratado, del alcance comercial acordado y de la configuración activa de cada cliente.</p>
      </section>

      <section id="cuentas">
        <h2>4. Registro, cuentas y accesos</h2>
        <p>El cliente es responsable de custodiar usuarios, contraseñas y accesos, definir permisos por rol, asegurar que solo personal autorizado utilice la plataforma, revisar la información cargada por sus usuarios y notificar cualquier uso no autorizado o incidente de seguridad.</p>
      </section>

      <section id="responsabilidades">
        <h2>5. Responsabilidades del cliente</h2>
        <ul>
          <li>La operación diaria de su negocio.</li>
          <li>La exactitud de productos, precios, impuestos, recetas, mesas, usuarios y configuraciones.</li>
          <li>La validez de la información fiscal o comercial que cargue.</li>
          <li>La legalidad de las ventas, promociones, comprobantes y procesos ejecutados a través del sistema.</li>
          <li>El uso que sus empleados, contratistas o administradores hagan de MangoPOS.</li>
          <li>Revisar su operación antes de salir a producción.</li>
        </ul>
      </section>

      <section id="planes">
        <h2>6. Planes, cotizaciones y pagos</h2>
        <p>Los precios, planes, límites, módulos incluidos, implementación, soporte y cualquier servicio adicional se regirán por la propuesta comercial, el plan publicado por MangoPOS, la orden de servicio o el acuerdo particular con el cliente.</p>
      </section>

      <section id="uso-aceptable">
        <h2>7. Uso aceptable</h2>
        <ul>
          <li>Violar leyes, reglamentos o derechos de terceros.</li>
          <li>Intentar acceder sin autorización a sistemas, cuentas o datos.</li>
          <li>Interferir con la seguridad, integridad o disponibilidad del servicio.</li>
          <li>Introducir malware, scripts maliciosos o código dañino.</li>
          <li>Realizar fraude, suplantación o manipulación indebida de transacciones.</li>
          <li>Copiar, descompilar, replicar, revender o explotar MangoPOS fuera del alcance autorizado.</li>
          <li>Usar el sistema de forma que afecte injustificadamente a otros clientes o a la infraestructura.</li>
        </ul>
      </section>

      <section id="datos-del-cliente">
        <h2>8. Datos del cliente y contenido cargado</h2>
        <p>El cliente conserva sus derechos sobre la información que carga o procesa en la plataforma, sujeto a los permisos necesarios para que MangoPOS pueda prestar el servicio.</p>
      </section>

      <section id="privacidad">
        <h2>9. Privacidad</h2>
        <p>El uso de información personal se rige adicionalmente por la Política de Privacidad de MangoPOS.</p>
      </section>

      <section id="terceros">
        <h2>10. Servicios de terceros</h2>
        <p>MangoPOS puede integrarse con terceros, incluyendo pasarelas de pago, servicios fiscales, impresoras, mensajería, analítica u otros proveedores. El uso de esos servicios puede estar sujeto a términos propios del tercero.</p>
      </section>

      <section id="propiedad">
        <h2>11. Propiedad intelectual</h2>
        <p>MangoPOS y todo su software, diseño, interfaz, documentación, marcas, contenido, logotipos, estructura, mejoras y funcionalidades son propiedad de MangoPOS o de sus licenciantes. Solo se concede un derecho limitado, revocable, no exclusivo e intransferible de uso.</p>
      </section>

      <section id="feedback">
        <h2>12. Feedback</h2>
        <p>Si el cliente propone ideas, observaciones, sugerencias o mejoras sobre MangoPOS, podremos usar ese feedback para mejorar el servicio sin obligación de compensación, salvo acuerdo escrito distinto.</p>
      </section>

      <section id="disponibilidad">
        <h2>13. Disponibilidad, cambios y mantenimiento</h2>
        <p>MangoPOS puede actualizar, modificar, mejorar, reemplazar o descontinuar partes del servicio por razones técnicas, operativas, comerciales, legales o de seguridad. Aunque procuramos continuidad razonable, no garantizamos operación ininterrumpida o libre de errores.</p>
      </section>

      <section id="terminacion">
        <h2>14. Suspensión y terminación</h2>
        <p>MangoPOS puede suspender o terminar el acceso total o parcial al servicio si existe incumplimiento material de estos Términos, falta de pago, fraude, uso abusivo, riesgos de seguridad o requerimiento legal.</p>
      </section>

      <section id="garantias">
        <h2>15. Exclusión de garantías</h2>
        <p>En la máxima medida permitida por la ley, MangoPOS se ofrece "tal cual" y "según disponibilidad".</p>
      </section>

      <section id="responsabilidad">
        <h2>16. Limitación de responsabilidad</h2>
        <p>En la máxima medida permitida por la ley, MangoPOS no será responsable por daños indirectos, incidentales, especiales, ejemplares, punitivos o consecuenciales, ni por pérdida de ingresos, utilidades, datos, reputación o continuidad comercial derivada del uso o imposibilidad de uso del servicio.</p>
      </section>

      <section id="indemnizacion">
        <h2>17. Indemnización</h2>
        <p>El cliente acepta defender, indemnizar y mantener indemne a MangoPOS, sus afiliadas, directores, ejecutivos, empleados y proveedores frente a reclamaciones, daños, costos y gastos derivados de uso indebido del servicio o incumplimiento de estos Términos.</p>
      </section>

      <section id="jurisdiccion">
        <h2>18. Ley aplicable y jurisdicción</h2>
        <p>Salvo que un contrato específico disponga otra cosa, estos Términos se regirán por las leyes de la República Dominicana. Toda controversia será conocida por los tribunales competentes de la República Dominicana, salvo acuerdo escrito distinto.</p>
      </section>

      <section id="cambios">
        <h2>19. Cambios a estos términos</h2>
        <p>MangoPOS puede actualizar estos Términos para reflejar cambios en el servicio, el negocio o la normativa aplicable.</p>
      </section>

      <section id="contacto">
        <h2>20. Contacto</h2>
        <p><strong>MangoPOS</strong><br />Atención: Área Legal / Comercial<br />Correo: {legalMeta.legalEmail}<br />Teléfono: {legalMeta.phone}<br />Dirección: {legalMeta.address}</p>
      </section>

      <section id="nota-final">
        <h2>21. Nota final</h2>
        <p>Antes de publicar este documento recomendamos validar nombre legal exacto de la entidad, política comercial y de facturación real, implementación, soporte, cancelaciones, limitación de responsabilidad adecuada, jurisdicción y obligaciones frente a clientes finales, pagos, fiscalidad y protección al consumidor.</p>
      </section>
    </LegalPageLayout>
  );
};

export default Terminos;
