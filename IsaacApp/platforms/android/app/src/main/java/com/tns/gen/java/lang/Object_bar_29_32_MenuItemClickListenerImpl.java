package com.tns.gen.java.lang;

public class Object_bar_29_32_MenuItemClickListenerImpl extends java.lang.Object implements com.tns.NativeScriptHashCodeProvider, android.support.v7.widget.Toolbar.OnMenuItemClickListener {
	public Object_bar_29_32_MenuItemClickListenerImpl(){
		super();
		com.tns.Runtime.initInstance(this);
	}

	public boolean onMenuItemClick(android.view.MenuItem param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		return (boolean)com.tns.Runtime.callJSMethod(this, "onMenuItemClick", boolean.class, args);
	}

	public boolean equals__super(java.lang.Object other) {
		return super.equals(other);
	}

	public int hashCode__super() {
		return super.hashCode();
	}

}
