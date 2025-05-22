function saveAndNext(nextPage) {
  const form = document.querySelector('form');
  if (!form.checkValidity()) {
    form.reportValidity();
    return false;
  }

  const data = {};
  const inputs = form.querySelectorAll('input, select, textarea');
  inputs.forEach((input) => {
    const value = input.value;

    // Mapeamento de valores categóricos para numéricos
    if (input.name === 'mc_get_risco_gestacional') {
      if (value === 'Alto') {
        data[input.name] = 1; // Alto risco
      } else if (value === 'Habitual') {
        data[input.name] = 0; // Risco habitual
      } else {
        data[input.name] = -1; // Valor para "Não informado"
      }
    } else if (input.name === 'mc_mul_est_civil') {
      data[input.name] =
        {
          Solteira: 1.0,
          Casada: 2.0,
          Viúva: 3.0,
          'Separada Judicialmente': 4.0,
          Divorciada: 5.0,
          Outra: 6.0,
        }[value] || 0.0;
    } else if (input.name === 'mc_pes_raca_etnia') {
      data[input.name] =
        {
          'Não declarada': 0.0,
          Branca: 1.0,
          Negra: 2.0,
          Parda: 3.0,
          Amarela: 4.0,
          Indígena: 5.0,
        }[value] || 0.0;
    } else if (input.name === 'mc_dae_escolaridade') {
      data[input.name] =
        {
          'Não alfabetizada': 0.0,
          'Fundamental I completo': 1.0,
          'Fundamental I incompleto': 2.0,
          'Fundamental II completo': 3.0,
          'Fundamental II incompleto': 4.0,
          'Médio completo': 5.0,
          'Médio incompleto': 6.0,
          'Superior completo': 7.0,
          'Superior incompleto': 8.0,
        }[value] || 0.0;
    } else if (
      input.name === 'has_arterial_hypertension' ||
      input.name === 'has_diabetes' ||
      input.name === 'has_cirurgia_pelvica' ||
      input.name === 'has_cardiopatia' ||
      input.name === 'has_infeccao_urinaria' ||
      input.name === 'has_malformacao_familiar' ||
      input.name === 'has_gemelaridade_familiar' ||
      input.name === 'mc_dae_diagnostico_desnutricao'
    ) {
      data[input.name] = value === 'true' ? 1 : 0; // Convertendo para 1 ou 0
    } else {
      data[input.name] = isNaN(value) ? value : Number(value); // Convertendo para número
    }
  });

  // Recuperar os dados armazenados no localStorage
  const existingData = JSON.parse(localStorage.getItem('gestanteData')) || {};

  // Combinar os dados do formulário com os dados já existentes
  const updatedData = { ...existingData, ...data };

  // Armazenar os dados combinados no localStorage para a próxima página
  localStorage.setItem('gestanteData', JSON.stringify(updatedData));

  console.log(localStorage.getItem('gestanteData'));

  // Usando setTimeout para garantir que o localStorage seja salvo antes do redirecionamento
  setTimeout(() => {
    window.location.href = nextPage;
  }, 100);

  return false; // Impede o envio do formulário padrão
}
