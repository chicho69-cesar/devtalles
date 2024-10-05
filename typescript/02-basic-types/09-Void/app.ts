(() => {
  // return void
  function callBatman(): void {
    // 
  }

  const callSuperman = (): void => {
    // 
  }

  const a = callBatman(); // tipo void
  console.log(a); // undefined

  const b = callSuperman();
  console.log(b);
})();