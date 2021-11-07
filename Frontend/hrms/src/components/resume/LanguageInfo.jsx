import React from 'react'
import { Icon } from 'semantic-ui-react'
import MessageBox from '../MessageBox'

export default function LanguageInfo() {
    return (
        <div className="py-4">
            <MessageBox>
                <div>
                    Yabancı Dil
                    <span className="px-2">
                        <button className="btn-added">
                            <Icon name="add"/> Yeni dil ekle
                        </button>
                    </span>
                </div>
                <div>
                        
                </div>
            </MessageBox>
        </div>
    )
}
