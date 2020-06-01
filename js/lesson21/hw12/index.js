  //  <!-- index.html before -->
  //   <div class="one">
  //     <p class="two">
  //       <span class="three"></span>
  //     </p>
  //   </div>


  //   /* index.js */
  //   const spanElem = document.querySelector('.three');
  //   spanElem.closest('.three'); // вернет его же (span)
  //   spanElem.closest('.two'); // вернет параграф
  //   spanElem.closest('.one'); // вернет div
  // const preElem=elementSpan.closest('.box').dataset.section;

  export const getSection = (num) => {
          const elementSpan = document.querySelector(`span[data-number="${num}"]`)
              .closest('.box').dataset.section
          return elementSpan
      }
      // getSection(3)