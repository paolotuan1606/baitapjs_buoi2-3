// bài tập 1
document.getElementById("tinhLuongTheoNgay").onclick=function(){
    let soNgayCong = document.getElementById("ngayCong").value*1;
    console.log(soNgayCong);
    let luong = soNgayCong *100000;
    luong = luong.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
console.log(luong);
document.getElementById("luongCong").innerHTML = `tiền lương là : ${luong}`
}

// bài tập 2
document.getElementById("tinhTrungBinh").onclick=function(){
    let so1 = document.getElementById("so1").value*1;
    let so2 = document.getElementById("so2").value*1;
    let so3 = document.getElementById("so3").value*1;
    let so4 = document.getElementById("so4").value*1;
    let so5 = document.getElementById("so5").value*1;
    console.log(so1,so2,so3,so4,so5);
    
    let giaTriTrungBinh = (so1 + so2 + so3 + so4 + so5)/5;
    

document.getElementById("trungBinh").innerHTML = `giá trị trung bình của 5 số là : ${giaTriTrungBinh}`
}

// bài tập 3
document.getElementById("tinhQuyDoi").onclick=function(){
    const GIA_USD = 23500;
    let soTien = document.getElementById("soTien").value*1;
    console.log(soTien);
    let quyDoi = soTien *GIA_USD;
    quyDoi = quyDoi.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
console.log(quyDoi);
document.getElementById("quyDoi").innerHTML = `số tiền sau khi quy đổi từ ${soTien}$ là : ${quyDoi}`
}

// bài tập 4
document.getElementById("tinhDTCV").onclick=function(){
    let chieuDai = document.getElementById("chieuDai").value*1;
    let chieuRong = document.getElementById("chieuRong").value*1;
    let dienTich = chieuDai *chieuRong;
    let chuVi = (chieuDai +chieuRong)*2;
document.getElementById("DTCV").innerHTML = `chu vi hình chữ nhật là : ${chuVi}, diện tích hình chữ nhật là ${dienTich}`
}

// bài tập 5
document.getElementById("tinhTong").onclick=function(){
    let kySo = document.getElementById("kySo").value*1;
    let kySo1 = kySo%10;
    let kySo2 = Math.floor(kySo/10);
    let tong = kySo1 + kySo2;
document.getElementById("tongKySo").innerHTML = `tổng 2 ký số là: ${tong}`
}