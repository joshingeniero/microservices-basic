// Copyright (c) 2021 Cisco and/or its affiliates.
//     This software is licensed to you under the terms of the Cisco Sample
// Code License, Version 1.1 (the "License"). You may obtain a copy of the
// License at
// https://developer.cisco.com/docs/licenses
//     All use of the material herein must be in accordance with the terms of
// the License. All rights not expressly granted by the License are
// reserved. Unless required by applicable law or agreed to separately in
// writing, software distributed under the License is distributed on an "AS
// IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
// or implied.

// form validation
function validateSelection() {
    let day;
    let policyId = $('#policyId').val();
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    for (day of days) {
        let count = 0;
        while(1) {
            let startVal = $(`#container_${day}`).find(`input[name^=start_${day}${count}]`).val();
            let endVal = $(`#container_${day}`).find(`input[name^=end_${day}${count}]`).val();
            if (startVal && endVal) {
                let startTime = startVal.split(":");
                let endTime = endVal.split(":");
                let startHour = parseInt(startTime[0]);
                let startMin = parseInt(startTime[1]);
                let endHour = parseInt(endTime[0]);
                let endMin = parseInt(endTime[1]);
                if (startHour > endHour) {
                    alert(`${day} has an invalid time range for entry #${count+1}`);
                    return false;
                }
                else if (startHour == endHour && startMin > endMin) {
                    alert(`${day} has an invalid time range for entry #${count+1}`);
                    return false;
                }
                else {
                    let info = {
                        "day": day,
                        "startTime": startVal,
                        "endTime": endVal,
                        "policyId": policyId
                    };
                    let checker = checkDb(info);
                    if (checker['value']) {
                        console.log("TRUE");
                        count = count + 1;
                    }
                    else {
                        alert(`${day} has a conflict with ${checker['name']} for entry #${count+1}`);
                        return false;
                    }
                }
            }
            else {
                break;
            }

        }
    }
    return true;
}


// function to clone the fields
// function cloner(day) {
//     var clone = $(`#${day}_div0`).clone();
//     var count = +$(`#${day}_count`).val();
//     count = count + 1;
//     var oldcount = count - 1;
//     var newdiv = `#${day}_div` + oldcount;
//     // console.log(newdiv);
//
//     clone.find(`input[name^=start_${day}0]`).attr("name", `start_${day}` + count);
//     clone.find(`input[name^=end_${day}0]`).attr("name", `end_${day}` + count);
//     clone.attr("id", `${day}_div` + count);
//
//     $(`#${day}_count`).val(count);
//
//     if(count === 1){
//         // console.log(`#${day}_div0`);
//         clone.insertAfter(`#${day}_div0`);
//     }
//     else{
//         // console.log("inserted after s");
//         // console.log(`${newdiv}`)
//         clone.insertAfter(newdiv);
//
//     }
// }
//
// //function to remove fields
// function deleter(day){
//     if($(`#container_${day}`).children().length == 1){
//         return;
//     }
//     else {
//         $(`#container_${day}`).children().last().remove();
//     }
// }
//

//
// $(document).ready(function(){
//     $('#checkbox1').change(function(){
//         if(this.checked){
//             $('#container_monday').fadeIn('slow');
//             $('#add_monday').fadeIn('slow');
//             $('#remove_monday').fadeIn('slow');
//         }
//
//         else{
//             $('#container_monday').fadeOut('slow');
//             $('#add_monday').fadeOut('slow');
//             $('#remove_monday').fadeOut('slow');
//         }
//     });
//
//     $('#checkbox2').change(function(){
//         if(this.checked){
//             $('#container_tuesday').fadeIn('slow');
//             $('#add_tuesday').fadeIn('slow');
//             $('#remove_tuesday').fadeIn('slow');
//         }
//
//         else{
//             $('#container_tuesday').fadeOut('slow');
//             $('#add_tuesday').fadeOut('slow');
//             $('#remove_tuesday').fadeOut('slow');
//         }
//     });
//
//
//     $('#checkbox3').change(function(){
//         if(this.checked){
//             $('#container_wednesday').fadeIn('slow');
//             $('#add_wednesday').fadeIn('slow');
//             $('#remove_wednesday').fadeIn('slow');
//         }
//
//         else{
//             $('#container_wednesday').fadeOut('slow');
//             $('#add_wednesday').fadeOut('slow');
//             $('#remove_wednesday').fadeOut('slow');
//         }
//     });
//
//
//     $('#checkbox4').change(function(){
//         if(this.checked){
//             $('#container_thursday').fadeIn('slow');
//             $('#add_thursday').fadeIn('slow');
//             $('#remove_thursday').fadeIn('slow');
//         }
//
//         else{
//             $('#container_thursday').fadeOut('slow');
//             $('#add_thursday').fadeOut('slow');
//             $('#remove_thursday').fadeOut('slow');
//         }
//     });
//
//
//     $('#checkbox5').change(function(){
//         if(this.checked){
//             $('#container_friday').fadeIn('slow');
//             $('#add_friday').fadeIn('slow');
//             $('#remove_friday').fadeIn('slow');
//         }
//
//         else{
//             $('#container_friday').fadeOut('slow');
//             $('#add_friday').fadeOut('slow');
//             $('#remove_friday').fadeOut('slow');
//         }
//     });
//
//
//     $('#checkbox6').change(function(){
//         if(this.checked){
//             $('#container_saturday').fadeIn('slow');
//             $('#add_saturday').fadeIn('slow');
//             $('#remove_saturday').fadeIn('slow');
//         }
//
//         else{
//             $('#container_saturday').fadeOut('slow');
//             $('#add_saturday').fadeOut('slow');
//             $('#remove_saturday').fadeOut('slow');
//         }
//     });
//
//
//     $('#checkbox7').change(function(){
//         if(this.checked){
//             $('#container_sunday').fadeIn('slow');
//             $('#add_sunday').fadeIn('slow');
//             $('#remove_sunday').fadeIn('slow');
//         }
//
//         else{
//             $('#container_sunday').fadeOut('slow');
//             $('#add_sunday').fadeOut('slow');
//             $('#remove_sunday').fadeOut('slow');
//         }
//     });
//
//
// });
