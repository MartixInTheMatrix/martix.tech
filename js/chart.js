const ctx = document.getElementById('stats').getContext('2d');
const labels = [
    'JS',
    'HTML',
    'CSS',
    'TS',
    'DATABASES',
    'NODEJS',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My skills',
      backgroundColor: [
        '#F7E018',
        '#FF5722',
        '#039BE5',
        '#007ACC',
        '#00515E',
        '#8CC84B',
      ],
      borderColor: false,
      data: [90, 80, 65, 100, 70, 100],
    }]
  };

  const config = {
    type: 'polarArea',
    data: data,
    options: {
        plugins:{
            legend:{
                display: false
            },
            scale:{
              display: false,
              grid:{
                display: false
              }
            }
        }
    }
  };
  const myChart = new Chart(
    ctx,
    config
  );