export default function DataTable(props) {
    return (
        <div class="container">
            <div className="row">
                <div class="col-1 is-vertical-align">
                    <select class="inline">
                        <option value="5" selected>
                            5
                        </option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                    </select>
                </div>
                <div class="col-2 is-vertical-align">
                    <label>entries per page</label>
                </div>
                <div class="col-9 is-right">
                    <input class="col-3" placeholder="Search ..." />
                </div>
            </div>
            <table id="usertable" class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <For each={props.data}>
                        {(item) => {
                            return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address}</td>
                                </tr>
                            );
                        }}
                    </For>
                </tbody>
            </table>
        </div>
    );
}
