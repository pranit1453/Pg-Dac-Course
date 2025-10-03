import java.util.Date;

public class Vehicle {
	private int v_id;
	private String v_oname;
	private String v_type;
	private Date d_purchase;

	public Vehicle() {
		v_id = 0;
		v_oname = null;
		v_type = null;
		d_purchase = null;
	}

	public Vehicle(int v_id, String v_oname, String v_type, Date d_purchase) {
		this.v_id = v_id;
		this.v_oname = v_oname;
		this.v_type = v_type;
		this.d_purchase = d_purchase;
	}

	public int getId() {
		return v_id;
	}

	public void setId(int v_id) {
		this.v_id = v_id;
	}

	public String getOname() {
		return v_oname;
	}

	public void setOname(String v_oname) {
		this.v_oname = v_oname;
	}

	public String getType() {
		return v_type;
	}

	public void setType(String v_type) {
		this.v_type = v_type;
	}

	public Date getDate() {
		return d_purchase;
	}

	public void setDate(Date d_purchase) {
		this.d_purchase = d_purchase;
	}

	public String toString() {
		return "v-id: " + v_id + " v-Owner Name: " + v_oname + " v-Type: " + v_type + " Date: " + d_purchase;
	}

}
