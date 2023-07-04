    // Đối tượng Date
    var date = new Date();
    console.log(date)
    
    // cách khác
    var date = Date();
    console.log(date)
    
    // nếu muốn lấy ra đối tượng khác làm cách 1 vd
    var date = new Date();
    console.log(date.getFullYear()) //lấy ra năm
    // có thể tự viết ra như sau 
    
    //năm
    var year = date.getFullYear()
    
    //tháng
    var month = date.getMonth() + 1
    //getmonth sẽ hơi khác vì nó sẽ trả về từ 0-11
    console.log(month); // 0-11 nên cọng thêm 1

    //ngày
    var day = date.getDate();

    // các phương thức khác 
    //lấy ra giờ
    var hour = date.getHours()
    //lấy ra phút
    var minutes = date.getMinutes()
    //lấy ra giây
    var seconds = date.getSeconds()

    // in ra ngày tháng năm
    console.log(`${day}/${month}/${year}`)
