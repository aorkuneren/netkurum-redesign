import SimplePage from "@/components/SimplePage";

export default function PrivacyPolicy() {
  return (
    <SimplePage title="Gizlilik Politikası">
      <h2>1. Veri Sorumlusu</h2>
      <p>Netkurum (“Platform”), Karatsoft Teknoloji tarafından işletilmektedir. Kişisel verilerinizin güvenliği bizim için önceliklidir.</p>
      
      <h2>2. Toplanan Veriler</h2>
      <p>Hizmetlerimizi sunabilmek adına aşağıdaki verileri toplamaktayız:</p>
      <ul>
        <li>Ad, soyad ve iletişim bilgileri</li>
        <li>Şirket bilgileri</li>
        <li>Kullanım istatistikleri ve log verileri</li>
      </ul>

      <h2>3. Verilerin İşlenme Amacı</h2>
      <p>Toplanan veriler, platformun işleyişini sağlamak, yasal yükümlülükleri yerine getirmek ve size daha iyi hizmet sunmak amacıyla işlenmektedir.</p>

      <h2>4. KVKK Haklarınız</h2>
      <p>6698 sayılı KVKK uyarınca verilerinizin düzeltilmesini, silinmesini veya işlenip işlenmediğini öğrenme hakkına sahipsiniz.</p>
    </SimplePage>
  );
}
