function rendeClass() {
    var duLieu = [{ id: 1, name: "demo" }, { id: 2, name: "dem2" }];

    var _html = "";

    duLieu.forEach((item, index) => {
        _html += `<tr class="">
                    <td scope="row">${index}</td>
                    <td>${item.name}}</td>
                    <td>R1C3</td>
                    </tr>`
    })

    document.getElementById("hung").innerHTML
        = `<a name="" id="" class="btn btn-primary" href="#" role="button" onclick="renderAdd()">Thêm mới</a>
                    <div class="table-responsive">
                        <table class="table table-primary">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${_html}
                            </tbody>
                        </table>
                    </div>`
}