
// Chart Js chartWeek

const ctx_week = document.getElementById('chartWeek');

  new Chart(ctx_week, {
    type: 'bar',
    data: {
      labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [{
        label: 'Organic',
        data: [40, 19, 34, 56, 40, 13, 20],
        backgroundColor: [
            'rgba(233, 13, 108, 0.8)'
        ],
        borderWidth: 1,
        barThickness: 10,
        borderRadius: 10
      },
      {
        label: 'By Ads',
        data: [14, 24, 60, 45, 54, 35, 75],
        backgroundColor: [
          'rgba(171, 0, 165, 0.8)'
      ],
        borderWidth: 1,
        barThickness: 10,
        borderRadius: 10
      }
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            offset: false
          }
        },
        x: {
            grid: {
              offset: false
            }
        }
      },
      plugins: {
        legend: {
            display: true,
            labels: {
                color: 'rgb(255, 99, 132)',
                boxWidth: 15
            },
            position: 'bottom',
           

        }
      }
    }
  
  });

  // Chart Js chartMonth

const ctx_month = document.getElementById('chartMonth');

new Chart(ctx_month, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Organic',
      data: [79, 56, 30, 102, 114, 121, 140, 80, 70, 185, 34, 90],
      backgroundColor: [
          'rgba(233, 13, 108, 0.8)'
      ],
      borderWidth: 1,
      barThickness: 6,
      borderRadius: 3
    },
    {
      label: 'By Ads',
      data: [35, 170, 65, 90, 132, 160, 120, 120, 100, 111, 40, 80],
      backgroundColor: [
        'rgba(171, 0, 165, 0.8)'
    ],
      borderWidth: 1,
      barThickness: 6,
      borderRadius: 3
    }
  ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          offset: false
        }
      },
      x: {
          grid: {
            offset: false
          }
      }
    },
    plugins: {
      legend: {
          display: true,
          labels: {
              color: 'rgb(255, 99, 132)',
              boxWidth: 15
          },
          position: 'bottom',
         

      }
    }
  }

});




  // Chart Js chartYear

  const ctx_year = document.getElementById('chartYear');

  new Chart(ctx_year, {
    type: 'bar',
    data: {
      labels: ['15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
      datasets: [{
        label: 'Organic',
        data: [678, 354, 489, 900, 1500, 1300, 800, 1368, 1555, 2010],
        backgroundColor: [
            'rgba(233, 13, 108, 0.8)'
        ],
        borderWidth: 1,
        barThickness: 6,
        borderRadius: 3
      },
      {
        label: 'By Ads',
        data: [600, 300, 550, 800, 1300, 1400, 700, 1100, 1455, 1810],
        backgroundColor: [
          'rgba(171, 0, 165, 0.8)'
      ],
        borderWidth: 1,
        barThickness: 6,
        borderRadius: 3
      }
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            offset: false
          }
        },
        x: {
            grid: {
              offset: false
            }
        }
      },
      plugins: {
        legend: {
            display: true,
            labels: {
                color: 'rgb(255, 99, 132)',
                boxWidth: 15
            },
            position: 'bottom',

        }
      }
    }
  
  });

  //Pie Chart For traffic

  const ctx_traffic = document.getElementById('traffic');

  new Chart(ctx_traffic, {
    type: 'doughnut',
    data: {
        labels: [
          'Referal',
          'Google',
          'Others'
        ],
        datasets: [{
          label: 'Vistor',
          data: [3000, 6000, 2000],
          backgroundColor: [
            'rgba(233, 13, 108)',
            'rgb(172, 18, 167)',
            'rgb(179, 0, 0)'
          ],
          barThickness: 6,
          hoverOffset: 4
        }]
    },
    options:{
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: 'rgb(255, 99, 132)',
                    boxWidth: 15,
                    useBorderRadius: true,
                    borderWidth: 1,
                    borderRadius: 10,
                },
                position: 'bottom',
                align: 'center'
            }
          }
    }
    
  });



// Sm Chart For Follower

const ctx_hybrid_followers = document.getElementById('hybrid_followers');


new Chart(ctx_hybrid_followers, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      label: 'Sales',
      data: [10, 59, 36, 60, 30, 50, 40],
      fill: {
        target: 'origin',
        above: 'rgba(0, 121, 110, 0.2)'
      },
      borderColor: 'rgba(75, 192, 192, 0.5)',
      tension: 0.4
    }]
  },
  options:{
    scales: {
        x: {
            // ticks:{
            //     display: false
            // }  
            display: false
        },
        y: {
            beginAtZero: true,
            display: false
        }
    },
      plugins: {
          legend: {
              display: false,

          }
        },
  }
  
});


// Sm Chart For Page View

const ctx_hybrid_page = document.getElementById('hybrid_page');


new Chart(ctx_hybrid_page, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      label: "Page view",
      data: [1, 14, 8, 3, 8, 6, 15],
      fill: {
        target: 'origin',
        above: 'rgba(171, 0, 165, 0.3)',   
      },
      borderColor: 'rgba(75, 192, 192, 0.5)',
      tension: 0.4
    }]
  },
  options:{
    scales: {
        x: {
            // ticks:{
            //     display: false
            // }  
            display: false
        },
        y: {
            beginAtZero: true,
            display: false
        }
    },
      plugins: {
          legend: {
              display: false,

          }
        },
  }
  
});

// Sm Chart For Bonous

const ctx_hybrid_bonous = document.getElementById('hybrid_bonous');


new Chart(ctx_hybrid_bonous, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      label: 'Sales',
      data: [10, 59, 36, 60, 30, 50, 40],
      fill: {
        target: 'start',
        above: 'rgba(93, 26, 195, 0.4)',   
      },
      borderColor: 'rgba(75, 192, 192, 0.5)',
      tension: 0.4
    }]
  },
  options:{
    scales: {
        x: {
            // ticks:{
            //     display: false
            // }  
            display: false
        },
        y: {
            beginAtZero: true,
            display: false
        }
    },
      plugins: {
          legend: {
              display: false,

          }
        },
  }
  
});



// Sm Chart For Bonous

const ctx_hybrid_custom = document.getElementById('hybrid_custom');


new Chart(ctx_hybrid_custom, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      label: 'Sales',
      data: [30, 15, 40, 55, 30, 50, 40],
      fill: {
        target: 'start',
        above: 'rgba(0, 121, 110, 0.3)',   
      },
      borderColor: 'rgba(75, 192, 192, 0.5)',
      tension: 0.4
    }]
  },
  options:{
    scales: {
        x: {
            // ticks:{
            //     display: false
            // }  
            display: false
        },
        y: {
            beginAtZero: true,
            display: false
        }
    },
      plugins: {
          legend: {
              display: false,

          }
        },
  }
  
});
