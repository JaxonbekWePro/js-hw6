function fibonacci(num) {
    let fibonacci = [0, 1]; 
    
    for (i = 2; i <= num; i ++) {
      
      fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    
    return fibonacci[num]
    }

    fibonacci(9)