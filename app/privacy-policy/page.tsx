import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Политика конфиденциальности</h1>
        <p className="mb-4">Алан Абзалханулы / Sande</p>
        <p className="mb-4">Дата вступления в силу: 24.06.24</p>
        <p className="mb-4">
          Мы уважаем вашу конфиденциальность и стремимся защищать вашу личную информацию. Настоящая Политика конфиденциальности объясняет, какие данные мы собираем, как мы их используем и как мы защищаем вашу информацию.
        </p>
        <h2 className="text-xl font-semibold mb-2">1. Сбор данных</h2>
        <p className="mb-4">
          Мы можем собирать следующие типы данных:
          <ul className="list-disc list-inside ml-4">
            <li>Личная информация (например, имя, адрес электронной почты)</li>
            <li>Данные об использовании (например, данные об использовании нашего приложения)</li>
          </ul>
        </p>
        <h2 className="text-xl font-semibold mb-2">2. Использование данных</h2>
        <p className="mb-4">
          Собранные данные могут использоваться для:
          <ul className="list-disc list-inside ml-4">
            <li>Предоставления и улучшения наших услуг</li>
            <li>Связи с вами по вопросам использования нашего приложения</li>
          </ul>
        </p>
        <h2 className="text-xl font-semibold mb-2">3. Защита данных</h2>
        <p className="mb-4">
          Мы принимаем разумные меры для защиты вашей информации от несанкционированного доступа и использования.
        </p>
        <h2 className="text-xl font-semibold mb-2">4. Связь с нами</h2>
        <p>
          Если у вас есть вопросы о нашей Политике конфиденциальности, пожалуйста, свяжитесь с нами по адресу <a href="mailto:alanabzalkhanuly05@gmail.com" className="text-blue-500">alanabzalkhanuly05@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
