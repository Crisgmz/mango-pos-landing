import LegalPageLayout from "@/components/LegalPageLayout";
import { legalMeta } from "@/content/legal";

const sections = [
  { id: "introduccion", label: "1. Introducción" },
  { id: "moneda", label: "2. Moneda de cobro" },
  { id: "metodos", label: "3. Métodos de pago aceptados" },
  { id: "facturacion", label: "4. Facturación y recibos" },
  { id: "devoluciones", label: "5. Devoluciones, reembolsos y cancelaciones" },
  { id: "seguridad", label: "6. Políticas de seguridad" },
  { id: "pagos", label: "7. Procesamiento de pagos" },
  { id: "3d-secure", label: "8. Autenticación 3D Secure" },
  { id: "contacto", label: "9. Servicio al Cliente" },
];

const PoliticasDePago = () => {
  return (
    <LegalPageLayout
      badge="Políticas de Pago"
      description="Información sobre la moneda de cobro, métodos de pago aceptados, facturación, devoluciones, reembolsos, cancelaciones y las medidas de seguridad aplicadas a la transmisión de datos de tarjetas."
      effectiveDate={legalMeta.paymentPolicyEffectiveDate}
      sectionLinks={sections}
      title="Políticas de Pago y Seguridad de MangoPOS"
      updatedAt={legalMeta.paymentPolicyUpdatedAt}
    >
      <div className="legal-note">
        <strong>Nota importante:</strong> Este documento describe las políticas comerciales y de seguridad aplicables al cobro de la suscripción a MangoPOS. Antes de su publicación final debe validarse con asesoría legal.
      </div>

      <section id="introduccion">
        <h2>1. Introducción</h2>
        <p>Estas Políticas de Pago aplican a todas las suscripciones y servicios contratados con <strong>{legalMeta.companyName}</strong> a través del sitio web o de los canales comerciales autorizados. Al contratar un plan de MangoPOS, el cliente acepta las condiciones aquí descritas.</p>
        <p>El comercio responsable de la operación es <strong>{legalMeta.companyName}</strong>, con dirección permanente en <strong>{legalMeta.address}</strong>.</p>
      </section>

      <section id="moneda">
        <h2>2. Moneda de cobro</h2>
        <p>Todos los precios publicados en el sitio web de MangoPOS y los cargos efectuados a las tarjetas de los clientes se realizan en <strong>{legalMeta.currency}</strong>.</p>
        <p>Cuando un precio se muestre referenciado en otra moneda (por ejemplo, dólares estadounidenses) con fines comparativos, el cobro final se procesará igualmente en pesos dominicanos al tipo de cambio vigente al momento de la transacción según el procesador de pagos.</p>
      </section>

      <section id="metodos">
        <h2>3. Métodos de pago aceptados</h2>
        <p>MangoPOS acepta las siguientes marcas de tarjetas de crédito y débito:</p>
        <ul>
          <li>Visa</li>
          <li>MasterCard</li>
          <li>American Express</li>
          <li>Discover</li>
        </ul>
        <p>Los pagos son procesados a través de <strong>{legalMeta.paymentProcessor}</strong>, pasarela de pagos autorizada y certificada para operar en la República Dominicana.</p>
      </section>

      <section id="facturacion">
        <h2>4. Facturación y recibos</h2>
        <p>Por cada cobro exitoso, MangoPOS emite un recibo claro y completo en pesos dominicanos (RD$) que incluye, como mínimo:</p>
        <ul>
          <li>Razón social del comercio: {legalMeta.companyName}.</li>
          <li>RNC del comercio.</li>
          <li>Plan contratado y período de facturación.</li>
          <li>Subtotal, ITBIS aplicable y total en RD$.</li>
          <li>Fecha y hora de la transacción.</li>
          <li>Últimos cuatro dígitos de la tarjeta utilizada.</li>
          <li>Número de comprobante fiscal (NCF) cuando corresponda.</li>
        </ul>
        <p>El recibo se envía al correo registrado por el cliente y queda disponible en el panel administrativo de su cuenta.</p>
      </section>

      <section id="devoluciones">
        <h2>5. Devoluciones, reembolsos y cancelaciones</h2>
        <h3>5.1 Cancelación de la suscripción</h3>
        <p>El cliente puede cancelar su suscripción en cualquier momento desde el panel de configuración de su cuenta o solicitándolo al equipo de Servicio al Cliente. La cancelación detiene la renovación automática del siguiente período.</p>
        <h3>5.2 Política de reembolsos</h3>
        <p>Las mensualidades ya cobradas <strong>no son reembolsables ni prorrateadas</strong>. Al cancelar, el servicio permanece activo hasta el último día del período pagado y no se cobrará el siguiente ciclo.</p>
        <h3>5.3 Cobros erróneos o duplicados</h3>
        <p>Si se identifica un cobro duplicado, un cobro posterior a una cancelación válidamente notificada o un error atribuible a MangoPOS, el cliente puede solicitar la devolución escribiendo a <strong>{legalMeta.supportEmail}</strong>. La solicitud debe presentarse dentro de los <strong>treinta (30) días</strong> siguientes al cargo. Una vez aprobada, el reembolso se acreditará a la misma tarjeta utilizada para el pago en un plazo de hasta <strong>quince (15) días hábiles</strong>, sujeto a los tiempos del banco emisor.</p>
        <h3>5.4 Devoluciones</h3>
        <p>Al tratarse de un servicio digital de suscripción, MangoPOS no maneja devoluciones de productos físicos. Cualquier servicio adicional contratado por separado (capacitación, implementación, hardware) se regirá por las condiciones específicas pactadas en su propuesta comercial.</p>
      </section>

      <section id="seguridad">
        <h2>6. Políticas de seguridad para la transmisión de datos</h2>
        <h3>6.1 Sitio web</h3>
        <p>Tomamos todas las medidas y precauciones razonables para proteger la información personal de nuestros clientes y seguimos las mejores prácticas de la industria para asegurar que la información no sea utilizada de manera inapropiada, alterada o destruida.</p>
        <p>La información de tarjetas de crédito se cifra utilizando la tecnología <strong>Secure Sockets Layer (SSL/TLS)</strong> durante la transmisión, y cuando se requiere almacenar información sensible se hace con cifrado <strong>AES-256</strong>. Adicionalmente, MangoPOS y sus proveedores siguen los requerimientos del estándar <strong>PCI-DSS</strong> para el manejo de datos de tarjetas.</p>
        <h3>6.2 Datos de tarjeta</h3>
        <p>MangoPOS <strong>no almacena</strong> en sus servidores el número completo de la tarjeta, el CVV ni la fecha de expiración. Estos datos son enviados directamente al procesador de pagos a través de canales cifrados.</p>
      </section>

      <section id="pagos">
        <h2>7. Procesamiento de pagos</h2>
        <p>Los métodos de pago utilizados por MangoPOS son servicios de terceros. Estos servicios de terceros (<strong>{legalMeta.paymentProcessor}</strong>) cumplen con todos los estándares de seguridad y cifrado para mantener tu información segura, y solo utilizarán la información necesaria para completar el proceso requerido.</p>
        <p>Recomendamos leer las Políticas de Privacidad y Seguridad de estos proveedores para entender mejor cómo manejan la información suministrada.</p>
      </section>

      <section id="3d-secure">
        <h2>8. Autenticación 3D Secure</h2>
        <p>Las transacciones realizadas en MangoPOS pueden requerir autenticación adicional bajo el protocolo <strong>3D Secure</strong>, lo que añade una capa extra de seguridad antes de autorizar el cobro.</p>
        <p>Esta autenticación es gestionada directamente por el banco emisor de la tarjeta a través de los programas:</p>
        <ul>
          <li><strong>Verified by Visa</strong> para tarjetas Visa.</li>
          <li><strong>MasterCard ID Check</strong> para tarjetas MasterCard.</li>
        </ul>
        <p>Cuando el banco lo solicite, el cliente deberá completar el paso de verificación (clave dinámica, OTP, app bancaria o biometría) para que la transacción se procese correctamente.</p>
      </section>

      <section id="contacto">
        <h2>9. Servicio al Cliente</h2>
        <p>Para consultas, solicitudes de reembolso, cancelaciones o cualquier asunto relacionado con pagos puedes contactarnos a través de:</p>
        <p>
          <strong>Servicio al Cliente — MangoPOS</strong><br />
          Correo: {legalMeta.supportEmail}<br />
          Teléfono: {legalMeta.phone}<br />
          Dirección: {legalMeta.address}<br />
          País: {legalMeta.country}
        </p>
      </section>
    </LegalPageLayout>
  );
};

export default PoliticasDePago;
