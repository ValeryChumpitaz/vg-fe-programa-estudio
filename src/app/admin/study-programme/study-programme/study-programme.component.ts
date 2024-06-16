import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Celebrant } from 'src/app/interfaces/celebrants.interface';
import { CelebrantsService } from 'src/app/services/celebrants.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-celebrants-form',
  templateUrl: './celebrants-form.component.html',
  styleUrls: ['./celebrants-form.component.css']
})
export class CelebrantsFormComponent {
  selectedCelebrantForEdit: Celebrant | null = null;

  @Output() celebrantAdded = new EventEmitter<void>();
  showModal = false;
  celebrant: Celebrant = {
    idCelebrant: '',
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    documentType: '',
    documentNumber: '',
    email: '',
    state: 'A'
  };

  constructor(private celebrantsService: CelebrantsService) { }

  // Método para abrir modal
  openModal(): void {
    console.log('Celebrant in form:', this.celebrant);
    if (!this.selectedCelebrantForEdit) {
      this.resetCelebrant();
    } else {
      this.celebrant = { ...this.selectedCelebrantForEdit };
    }
    this.showModal = true;
  }

  // Método para reiniciar el objeto celebrant
  resetCelebrant(): void {
    this.celebrant = {
      idCelebrant: '',
      firstName: '',
      lastName: '',
      dateOfBirth: new Date(),
      documentType: '',
      documentNumber: '',
      email: '',
      state: 'A'
    };
  }

  // Método para cerrar modal
  closeModal() {
    this.showModal = false;
    this.resetCelebrant();
    this.selectedCelebrantForEdit = null; // Reiniciar el seleccion
  }

  // Método para enviar
  onSubmit(form: NgForm): void {
    if (form.valid) {
      if (this.selectedCelebrantForEdit) {
        this.celebrantsService.updateCelebrant(this.celebrant.idCelebrant, this.celebrant).subscribe(
          () => {
            this.closeModal();
            this.celebrantAdded.emit();
            Swal.fire('¡Éxito!', 'Celebrante actualizado exitosamente', 'success');
          },
          error => {
            console.error('Error updating celebrant:', error);
            Swal.fire('¡Error!', 'Hubo un problema al actualizar el celebrante', 'error');
          }
        );
      } else {
        this.celebrantsService.addCelebrant(this.celebrant).subscribe(
          () => {
            this.closeModal();
            this.celebrantAdded.emit();
            Swal.fire('¡Éxito!', 'Celebrante creado exitosamente', 'success');
          },
          error => {
            console.error('Error adding celebrant:', error);
            Swal.fire('¡Error!', 'Hubo un problema al crear el celebrante', 'error');
          }
        );
      }
    }
  }
}
