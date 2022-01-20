import './manager-settings.scss';

export default function ManagerSettings () {
    return (
        <div className='manager-settings'>
            <h1>Управленческие настройки</h1><br></br>
            <form 
                className =""
                // onSubmit={this.onSubmit}
                >
                <div className='min_profit'>
                    <label htmlFor='min_profit'>Eсли товар дешевле пороговой суммы, хочу зарабатывать дополнительно, рублей, на вложенный 1 рубль</label>
                    <input
                        type='text'
                        placeholder='0.6'
                        id='min_profit'
                        className=''
                    />
                </div>
                <div className='max_profit'>
                    <label htmlFor='max_profit'>Eсли товар дороже пороговой суммы, хочу зарабатывать дополнительно, рублей, на вложенный 1 рубль</label>
                    <input
                        type='text'
                        placeholder='0.2'
                        id='max_profit'
                        className=''
                    />
                </div>
                <div className='limit_sum'>
                    <label htmlFor='limit_sum'>Пороговая сумма, руб</label>
                    <input
                        type='text'
                        placeholder='1000'
                        id='limit_sum'
                        className=''
                    />
                </div>
                <div className='min_clear_profit'>
                    <label htmlFor='min_clear_profi'>с минимальной чистой прибылью, руб</label>
                    <input
                        type='text'
                        placeholder='300'
                        id='min_clear_profi'
                        className=''
                    />
                </div>
              
            </form>
        </div>

    )
}