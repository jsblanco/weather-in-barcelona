import React, { useEffect } from 'react'
import { EuiComboBox } from '@elastic/eui';
import { useSelector, useDispatch } from "react-redux";


export default function SearchBox() {
    return (
        <EuiComboBox
        placeholder="Select or create options"
        options={"options"}
        selectedOptions={"selectedOptions"}
        onChange={"onChange"}
      />
    )
}
