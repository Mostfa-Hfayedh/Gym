import React from 'react'
import "./Profile.css"

const Profile = () => {
  return (
    <div className='profile' >
        <div className='profile-right'>
            <p className='profile-right-title' >Informations Personnelles</p>
            <div className='profile-right-content'>
                <div className='profile-right-section-item' >
                    <p className='profile-content-title' >Nom :</p>
                    <p className='profile-content-values'>Flen Fouleni</p>
                </div>
                <div className='profile-right-section-item' >
                    <p className='profile-content-title' >Age :</p>
                    <p className='profile-content-values'>45</p>
                </div>
                <div className='profile-right-section-item' >
                    <p className='profile-content-title' >Sexe :</p>
                    <p className='profile-content-values'>Femme</p>
                </div>
                <div className='profile-right-section-item' >
                    <p className='profile-content-title' >Adresse mail :</p>
                    <p className='profile-content-values'>flenfouleni@gmail.com</p>
                </div>
                <div className='profile-right-section-item' >
                    <p className='profile-content-title' >Téléphone :</p>
                    <p className='profile-content-values'>12345678</p>
                </div>
            </div>
                <div className='profile-right-section-item-photo' >
                    <p className='profile-content-title'>Photo</p>
                    <img src='https://cdn0.iconfinder.com/data/icons/communication-456/24/account_profile_user_contact_person_avatar_placeholder-512.png' alt='' />
                </div>
            <p className='profile-right-title' >Informations Adhesion</p>
            <div className='profile-right-content'>
                <div className='profile-right-section-item' >
                    <p className='profile-content-title' >Type Abonnement :</p>
                    <p className='profile-content-values'>Flen Fouleni</p>
                </div>
                <div className='profile-right-section-item' >
                    <p className='profile-content-title' >Date début et fin :</p>
                    <p className='profile-content-values'>45</p>
                </div>
                <div className='profile-right-section-item' >
                    <p className='profile-content-title' >Sexe :</p>
                    <p className='profile-content-values'>Femme</p>
                </div>
                
            </div>
        </div>
        <div className='profile-left' >
                <p className='profile-left-title'>Objectif et preference</p>
            <div className='profile-left-content' >
                <div className='profile-left-content-top'>
                    <p className='profile-left-content-top-title'>Objectif :</p>
                    <div className='profile-left-content-top-first'>
                        <div className='checkboxContainer'>
                            <input type="checkbox" class="ui-checkbox"/>
                            <p>Perte</p>
                        </div>
                        <div className='checkboxContainer'>
                            <input type="checkbox" class="ui-checkbox"/>
                            <p>Gain</p>
                        </div>
                    </div>
                </div>
                <div className='profile-left-content-top'>
                    <p className='profile-left-content-top-title'>Preference :</p>
                    <div className='profile-left-content-top-first'>
                        <div className='checkboxContainer'>
                            <input type="checkbox" class="ui-checkbox"/>
                            <p>Cardio</p>
                        </div>
                        <div className='checkboxContainer'>
                            <input type="checkbox" class="ui-checkbox"/>
                            <p>Musculation</p>
                        </div>
                        <div className='checkboxContainer'>
                            <input type="checkbox" class="ui-checkbox"/>
                            <p>Cours collectifs</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <p className='profile-left-title'>Mesures corporelle et progrés</p>
            <div className='profile-right-content'>
                <div className='profile-right-section-item' >
                    <p className='profile-content-title' >Poids :</p>
                    <p className='profile-content-values'>Flen Fouleni</p>
                </div>
                <div className='profile-right-section-item' >
                    <p className='profile-content-title' >Taille :</p>
                    <p className='profile-content-values'>45</p>
                </div>
                <div className='profile-right-section-item' >
                    <p className='profile-content-title' >Pourcentage de graisse :</p>
                    <p className='profile-content-values'>Femme</p>
                </div>
                <div className='profile-right-section-item' >
                    <p className='profile-content-title' >Tour de taille :</p>
                    <p className='profile-content-values'>12345678</p>
                </div>
            </div>
            <p className='profile-left-title'>Chart</p>
            <p className='profile-left-title'>Programme d'entrainement</p>
        </div>
    </div>
  )
}

export default Profile